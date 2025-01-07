interface Point {
    x: number;
    y: number;
}

interface StrokeResult {
    score: number;
    sampleResampled: Point[];
    userResampled: Point[];
}

/**
 * SVG要素からストロークデータを抽出します。
 * @param {SVGSVGElement} element
 * @returns {Array<Array<Point>>}
 */
export function getSVGStrokes(element: SVGSVGElement): Point[][] {
    return Array.from(
        element.querySelectorAll('path'),
        (path) =>
            segmentsToPoints(parseSVGPath(path.getAttribute('d') || ''))
    );
}

/**
 * SVGパス文字列を解析してセグメントを返します。
 * @param {string} pathData
 * @returns {Array<{type: string, points: Point[]}>}
 */
function parseSVGPath(pathData: string): Array<{ type: string; points: Point[] }> {
    // コマンド+残りの文字列に分割
    const commandTokens = pathData.match(/([MmLlCcZz])([^MmLlCcZz]*)/g) || [];
    if (!commandTokens.length) return [];

    const segments = [];
    let currentPoint = { x: 0, y: 0 };

    // 浮動小数＋指数表記（例: 1.23e-2）にも対応したいなら、もう少し複雑な正規表現にする
    const floatRegExp = /[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g;

    for (const cmd of commandTokens) {
        // cmd[0] = 'M', 'c'など。小文字なら相対、大文字なら絶対
        const type = cmd[0];
        const isRelative = (type === type.toLowerCase());
        const absType = type.toUpperCase();
        const floatMatches = cmd.slice(1).trim().match(floatRegExp) || [];
        const args = floatMatches.map(Number);

        switch (absType) {
            case 'M':
                // ...（以下、M,L,C,Z の処理はこれまで通り）
                // 省略例:
                if (args.length < 2) break;
                {
                    let x = isRelative ? currentPoint.x + args[0] : args[0];
                    let y = isRelative ? currentPoint.y + args[1] : args[1];
                    currentPoint = { x, y };
                    segments.push({ type: 'M', points: [{ x, y }] });

                    // Mコマンドにさらに座標が続く場合は L 扱い
                    for (let i = 2; i < args.length; i += 2) {
                        if (i + 1 >= args.length) break;
                        x = isRelative ? currentPoint.x + args[i] : args[i];
                        y = isRelative ? currentPoint.y + args[i + 1] : args[i + 1];
                        segments.push({
                            type: 'L',
                            points: [
                                { x: currentPoint.x, y: currentPoint.y },
                                { x, y }
                            ]
                        });
                        currentPoint = { x, y };
                    }
                }
                break;

            case 'C':
                // 6 個単位で cp1,cp2, end
                for (let i = 0; i < args.length; i += 6) {
                    if (i + 5 >= args.length) break;
                    const cp1x = isRelative ? currentPoint.x + args[i] : args[i];
                    const cp1y = isRelative ? currentPoint.y + args[i + 1] : args[i + 1];
                    const cp2x = isRelative ? currentPoint.x + args[i + 2] : args[i + 2];
                    const cp2y = isRelative ? currentPoint.y + args[i + 3] : args[i + 3];
                    const endx = isRelative ? currentPoint.x + args[i + 4] : args[i + 4];
                    const endy = isRelative ? currentPoint.y + args[i + 5] : args[i + 5];
                    segments.push({
                        type: 'C',
                        points: [
                            { x: currentPoint.x, y: currentPoint.y },
                            { x: cp1x, y: cp1y },
                            { x: cp2x, y: cp2y },
                            { x: endx, y: endy }
                        ]
                    });
                    currentPoint = { x: endx, y: endy };
                }
                break;

            case 'L':
                // ... 2個単位
                break;

            case 'Z':
                // ... 閉じる
                break;

            default:
                console.warn("Unsupported:", type);
                break;
        }
    }

    return segments;
}

/**
 * セグメント配列を点列に変換します。
 * @param {Array<{type: string, points: Point[]}>} segments
 * @param {number} [bezierSamples=20]
 * @returns {Point[]}
 */
function segmentsToPoints(segments: Array<{ type: string; points: Point[] }>, bezierSamples = 20): Point[] {
    const points = [];
    let started = false;

    for (const seg of segments) {
        switch (seg.type) {
            case 'M': {
                // MoveTo した点をひとまず加える
                points.push(seg.points[0]);
                started = true;
                break;
            }
            case 'L': {
                // L: [start, end] で2点ある
                if (!started) {
                    // まだ始点がないなら start(0)も加える
                    points.push(seg.points[0]);
                    started = true;
                }
                points.push(seg.points[1]);
                break;
            }
            case 'C': {
                // C: [start, cp1, cp2, end]
                const p0 = seg.points[0];
                const p1 = seg.points[1];
                const p2 = seg.points[2];
                const p3 = seg.points[3];
                if (!started) {
                    points.push(p0);
                    started = true;
                }
                // 三次ベジェをサンプリングして点列化
                const sampled = sampleCubicBezier(p0, p1, p2, p3, bezierSamples);
                // 先頭が p0 と被るので slice(1)
                points.push(...sampled.slice(1));
                break;
            }
            case 'Z': {
                // Z: 終点→始点
                points.push(seg.points[1]);
                break;
            }
            default:
                // それ以外は無視 or 適宜実装
                break;
        }
    }

    return points;
}

/**
 * 三次ベジェ曲線を分割して点列を返します。
 * @param {Point} p0
 * @param {Point} p1
 * @param {Point} p2
 * @param {Point} p3
 * @param {number} numSamples
 * @returns {Point[]}
 */
function sampleCubicBezier(p0: Point, p1: Point, p2: Point, p3: Point, numSamples: number): Point[] {
    const result = [];
    for (let i = 0; i <= numSamples; i++) {
        const t = i / numSamples;
        const x = cubicBezier(p0.x, p1.x, p2.x, p3.x, t);
        const y = cubicBezier(p0.y, p1.y, p2.y, p3.y, t);
        result.push({ x, y });
    }
    return result;
}

/**
 * 三次ベジェ曲線の単一軸の値を返します。
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @param {number} t
 * @returns {number}
 */
function cubicBezier(a: number, b: number, c: number, d: number, t: number): number {
    const mt = 1 - t;
    return mt * mt * mt * a
        + 3 * mt * mt * t * b
        + 3 * mt * t * t * c
        + t * t * t * d;
}

/**
 * 座標配列から正規化用の中心座標やスケールを計算します。
 * @param {Point[]} points
 * @returns {{centerX: number, centerY: number, scale: number}}
 */
function computeNormalizationParameters(points: Point[]): { centerX: number, centerY: number, scale: number } {
    // バウンディングボックスから中心とスケールを求める
    const xs = points.map(p => p.x);
    const ys = points.map(p => p.y);
    const minX = Math.min(...xs), maxX = Math.max(...xs);
    const minY = Math.min(...ys), maxY = Math.max(...ys);
    const centerX = (minX + maxX) / 2;
    const centerY = (minY + maxY) / 2;
    const scale = Math.max(maxX - minX, maxY - minY) || 1;
    return { centerX, centerY, scale };
}

/**
 * 点列を正規化します。
 * @param {Point[]} points
 * @param {{centerX: number, centerY: number, scale: number}} params
 * @returns {Point[]}
 */
function normalizePoints(points: Point[], params: { centerX: number, centerY: number, scale: number }): Point[] {
    return points.map(p => ({
        x: (p.x - params.centerX) / params.scale,
        y: (p.y - params.centerY) / params.scale
    }));
}

/**
 * 点列を指定数にリサンプリングします。
 * @param {Point[]} points
 * @param {number} targetCount
 * @returns {Point[]}
 */
function adaptiveResamplePoints(points: Point[], targetCount: number): Point[] {
    if (points.length < 2) return [...points];

    const res = [];
    res.push(points[0]);

    let totalLen = 0;
    for (let i = 1; i < points.length; i++) {
        totalLen += dist(points[i - 1], points[i]);
    }

    const interval = totalLen / (targetCount - 1);
    let accumulated = 0;

    for (let i = 1; i < points.length; i++) {
        const d = dist(points[i - 1], points[i]);
        accumulated += d;
        if (accumulated >= interval) {
            res.push(points[i]);
            accumulated = 0;
        }
    }

    // 足りない場合は末尾を水増し
    while (res.length < targetCount) {
        res.push(points[points.length - 1]);
    }
    return res.slice(0, targetCount);
}

/**
 * 2点間の距離を返します。
 * @param {Point} a
 * @param {Point} b
 * @returns {number}
 */
function dist(a: Point, b: Point): number {
    return Math.hypot(b.x - a.x, b.y - a.y);
}

/**
 * 評価用のオーバーレイを描画します。
 * @param {CanvasRenderingContext2D} canvasContext
 * @param {StrokeResult[]} strokeResults
 * @param {{centerX: number, centerY: number, scale: number}} normParams
 * @returns {void}
 */
export function showEvaluationOverlay(canvasContext: CanvasRenderingContext2D, strokeResults: StrokeResult[], normParams: { centerX: number, centerY: number, scale: number }): void {
    const origAlpha = canvasContext.globalAlpha;
    const origStyle = canvasContext.strokeStyle;

    // キャンバスを一度クリアし、ユーザストロークを描画のみ
    canvasContext.clearRect(0, 0, canvasContext.canvas.width, canvasContext.canvas.height);
    canvasContext.globalAlpha = 0.4;
    canvasContext.font = '16px sans-serif';

    strokeResults.forEach((res, i) => {
        canvasContext.lineWidth = (res.score < 0.7) ? 4 : 1;
        canvasContext.strokeStyle = 'blue';
        canvasContext.beginPath();
        res.userResampled.forEach((p, idx) => {
            const { cx, cy } = normalizedPointToCanvasUserScale(p, normParams);
            if (idx === 0) canvasContext.moveTo(cx, cy);
            else canvasContext.lineTo(cx, cy);
        });
        canvasContext.stroke();

        const userStart = res.userResampled[0];
        const { cx: uX, cy: uY } = normalizedPointToCanvasUserScale(userStart, normParams);
        canvasContext.fillStyle = 'blue';
        canvasContext.fillText(`${i + 1}`, uX + 5, uY - 5);
    });

    canvasContext.globalAlpha = origAlpha;
    canvasContext.strokeStyle = origStyle;
}

/**
 * 正規化済みの点をキャンバス座標に変換します。
 * @param {Point} p
 * @param {{centerX: number, centerY: number, scale: number}} normParams
 * @returns {{cx: number, cy: number}}
 */
function normalizedPointToCanvasUserScale(p: Point, normParams: { centerX: number, centerY: number, scale: number }): { cx: number, cy: number } {
    const ratio = normParams.scale;
    const cx = p.x * ratio + normParams.centerX;
    const cy = p.y * ratio + normParams.centerY;
    return { cx, cy };
}

/**
 * 動的時間伸縮法（DTW）による距離を計算します。
 * @param {Point[]} s
 * @param {Point[]} t
 * @returns {number}
*/
function computeDTWDistance(s: Point[], t: Point[]): number {
    const n = s.length;
    const m = t.length;
    const dtw = Array.from({ length: n + 1 }, () => Array(m + 1).fill(Infinity));
    dtw[0][0] = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            const cost = Math.hypot(s[i - 1].x - t[j - 1].x, s[i - 1].y - t[j - 1].y);
            dtw[i][j] = cost + Math.min(dtw[i - 1][j], dtw[i][j - 1], dtw[i - 1][j - 1]);
        }
    }

    return dtw[n][m];
}

/**
 * ユーザーのストロークとサンプルを比較します。
 * @param {Array<Array<Point>>} sampleStrokes
 * @param {Array<Array<Point>>} userStrokes
 * @returns {{error?: string, avgScore?: number, percent?: string, strokeResults?: StrokeResult[], scores?: number[], normParamsUser?: {centerX: number, centerY: number, scale: number}}}
 */
export function compareStrokes(
    sampleStrokes: Point[][],
    userStrokes: Point[][]
): {
    avgScore: number;
    percent: string;
    strokeResults: StrokeResult[];
    scores: number[];
    normParamsUser: { centerX: number; centerY: number; scale: number };
} {
    if (userStrokes.length !== sampleStrokes.length) {
        throw new Error('The number of strokes does not match');
    }
    const sampleAllPoints: Point[] = [];
    sampleStrokes.forEach(stroke => sampleAllPoints.push(...stroke));
    const normParamsSample = computeNormalizationParameters(sampleAllPoints);

    const userAllPoints: Point[] = [];
    userStrokes.forEach(stroke => userAllPoints.push(...stroke));
    const normParamsUser = computeNormalizationParameters(userAllPoints);

    let totalScore = 0;
    const strokeResults = [];
    const scores = [];

    // 各ストロークを評価
    for (let i = 0; i < sampleStrokes.length; i++) {
        const normSample = normalizePoints(sampleStrokes[i], normParamsSample);
        const normUser = normalizePoints(userStrokes[i], normParamsUser);
        const sampRes = adaptiveResamplePoints(normSample, 200);
        const userRes = adaptiveResamplePoints(normUser, 200);

        // DTW を使用してストローク間の距離を計算
        const distance = computeDTWDistance(sampRes, userRes);

        // 距離をスコアに変換
        const maxDist = Math.max(sampRes.length, userRes.length);
        const score = Math.max(0, 1 - distance / maxDist);

        totalScore += score;
        scores.push(score);
        strokeResults.push({ score, sampleResampled: sampRes, userResampled: userRes });
    }

    const avgScore = totalScore / sampleStrokes.length;
    const percent = (avgScore * 100).toFixed(2);
    return { scores, avgScore, percent, strokeResults, normParamsUser };
}

/**
 * 描画マネージャクラス
 * @class
 */
export class CanvasDrawingManager {
    private ctx: CanvasRenderingContext2D;
    private isDrawing: boolean;
    private currentStroke: Point[];
    private userStrokes: Point[][];

    /**
     * コンストラクタ
     * @param {HTMLCanvasElement} canvas
     */
    constructor(private canvas: HTMLCanvasElement) {
        const context = canvas.getContext('2d');
        if (!context) {
            throw new Error('Failed to get 2D context');
        }
        this.ctx = context;
        this.isDrawing = false;
        this.currentStroke = [];
        this.userStrokes = [];
        this.setupEventListeners();
    }

    /**
     * イベントリスナーをセットアップします。
     * @returns {void}
     */
    setupEventListeners(): void {
        this.canvas.addEventListener('mousedown', (e) => {
            this.isDrawing = true;
            this.currentStroke = [];
            this.beginStroke(e);
        });
        this.canvas.addEventListener('mousemove', (e) => {
            if (this.isDrawing) this.drawStroke(e);
        });
        this.canvas.addEventListener('mouseup', () => this.endStroke());
        this.canvas.addEventListener('mouseleave', () => this.endStroke());
        // タッチ対応
        this.canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.isDrawing = true;
            this.currentStroke = [];
            const t = e.touches[0];
            const mouseEvent = new MouseEvent('mousedown', {
                clientX: t.clientX,
                clientY: t.clientY,
                altKey: false,
                ctrlKey: false,
                metaKey: false,
                shiftKey: false,
                bubbles: true,
                cancelable: true,
                view: window
            });
            this.beginStroke(mouseEvent);
        });
        this.canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            if (this.isDrawing) {
                const t = e.touches[0];
                const mouseEvent = new MouseEvent('mousemove', {
                    clientX: t.clientX,
                    clientY: t.clientY,
                    altKey: false,
                    ctrlKey: false,
                    metaKey: false,
                    shiftKey: false,
                    bubbles: true,
                    cancelable: true,
                    view: window
                });
                this.drawStroke(mouseEvent);
            }
        });
        this.canvas.addEventListener('touchend', () => this.endStroke());
    }

    /**
     * ストロークを開始します。
     * @param {MouseEvent|TouchEvent} evt
     * @returns {void}
     */
    beginStroke(evt: MouseEvent | TouchEvent): void {
        const { x, y } = this.getCanvasCoord(evt);
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.currentStroke.push({ x, y });
    }

    /**
     * ストロークを描画します。
     * @param {MouseEvent|TouchEvent} evt
     * @returns {void}
     */
    drawStroke(evt: MouseEvent | TouchEvent): void {
        const { x, y } = this.getCanvasCoord(evt);
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
        this.currentStroke.push({ x, y });
    }

    /**
     * ストロークを終了します。
     * @returns {void}
     */
    endStroke(): void {
        if (!this.isDrawing) return;
        this.isDrawing = false;
        this.ctx.closePath();
        if (this.currentStroke.length > 2)
            this.userStrokes.push(this.currentStroke);
    }

    /**
     * イベント座標をキャンバス内座標に変換します。
     * @param {MouseEvent|TouchEvent} evt
     * @returns {{x: number, y: number}}
     */
    getCanvasCoord(evt: MouseEvent | TouchEvent): { x: number, y: number } {
        const rect = this.canvas.getBoundingClientRect();
        return {
            x: (evt instanceof MouseEvent ? evt.clientX : evt.touches[0].clientX) - rect.left,
            y: (evt instanceof MouseEvent ? evt.clientY : evt.touches[0].clientY) - rect.top
        };
    }

    /**
     * 全ストロークをクリアします。
     * @returns {void}
     */
    clearStrokes(): void {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.userStrokes = [];
        this.currentStroke = [];
        this.isDrawing = false;
    }

    /**
     * ユーザーが描いたストロークを取得します。
     * @returns {Array<Array<Point>>}
     */
    getStrokes(): Point[][] {
        return this.userStrokes;
    }

    /**
     * キャンバスのコンテキストを取得します。
     * @returns {CanvasRenderingContext2D}
     */
    getCanvasContext(): CanvasRenderingContext2D {
        return this.ctx;
    }
}

/**
 * サンプルストロークを描画します。
 * @param {CanvasRenderingContext2D} canvasContext
 * @param {StrokeResult[]} strokeResults
 * @param {{centerX: number, centerY: number, scale: number}} normParams
 * @returns {void}
 */
export function drawSampleStrokes(canvasContext: CanvasRenderingContext2D, strokeResults: StrokeResult[], normParams: { centerX: number, centerY: number, scale: number }): void {
    canvasContext.clearRect(0, 0, canvasContext.canvas.width, canvasContext.canvas.height);
    canvasContext.globalAlpha = 0.4;
    canvasContext.font = '16px sans-serif';

    strokeResults.forEach((res, i) => {
        canvasContext.lineWidth = (res.score < 0.7) ? 4 : 1;
        canvasContext.beginPath();
        canvasContext.strokeStyle = 'red';
        res.sampleResampled.forEach((p, idx) => {
            const { cx, cy } = normalizedPointToCanvasUserScale(p, normParams);
            if (idx === 0) canvasContext.moveTo(cx, cy);
            else canvasContext.lineTo(cx, cy);
        });
        canvasContext.stroke();

        const start = res.sampleResampled[0];
        const { cx, cy } = normalizedPointToCanvasUserScale(start, normParams);
        canvasContext.fillStyle = 'red';
        canvasContext.fillText(`${i + 1}`, cx + 5, cy - 5);
    });
    canvasContext.globalAlpha = 1;
}