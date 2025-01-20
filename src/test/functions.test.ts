import { describe, it, expect } from 'vitest';
import { getSVGStrokes, compareStrokes } from '../functions';

describe('SVG Path関連のテスト', () => {
  it('getSVGStrokesが空のSVG要素から空の配列を返すこと', () => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const result = getSVGStrokes(svg);
    expect(result).toEqual([]);
  });

  it('getSVGStrokesが単一のパスから正しく点列を抽出すること', () => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    // 簡単な直線パス
    path.setAttribute('d', 'M0,0 L100,100');
    svg.appendChild(path);

    const result = getSVGStrokes(svg);
    expect(result).toHaveLength(1);
    expect(result[0]).toHaveLength(2);
    expect(result[0][0]).toEqual({ x: 0, y: 0 });
    expect(result[0][1]).toEqual({ x: 100, y: 100 });
  });

  it('複数のパスを含むSVGから正しくストロークを抽出すること', () => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    const path1 = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    );
    path1.setAttribute('d', 'M0,0 L50,50');
    svg.appendChild(path1);

    const path2 = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    );
    path2.setAttribute('d', 'M100,100 L150,150');
    svg.appendChild(path2);

    const result = getSVGStrokes(svg);
    expect(result).toHaveLength(2);
    expect(result[0]).toHaveLength(2);
    expect(result[1]).toHaveLength(2);
    expect(result[0][0]).toEqual({ x: 0, y: 0 });
    expect(result[0][1]).toEqual({ x: 50, y: 50 });
    expect(result[1][0]).toEqual({ x: 100, y: 100 });
    expect(result[1][1]).toEqual({ x: 150, y: 150 });
  });
});

describe('ストローク比較のテスト', () => {
  it('異なる数のストロークを比較するとエラーを投げること', () => {
    const sampleStrokes = [
      [
        { x: 0, y: 0 },
        { x: 100, y: 100 },
      ],
    ];
    const userStrokes = [
      [
        { x: 0, y: 0 },
        { x: 100, y: 100 },
      ],
      [
        { x: 200, y: 200 },
        { x: 300, y: 300 },
      ],
    ];

    expect(() => compareStrokes(sampleStrokes, userStrokes)).toThrow(
      'The number of strokes does not match'
    );
  });

  it('完全に一致するストロークの場合は高いスコアを返すこと', () => {
    const sampleStrokes = [
      [
        { x: 0, y: 0 },
        { x: 100, y: 100 },
      ],
    ];
    const userStrokes = [
      [
        { x: 0, y: 0 },
        { x: 100, y: 100 },
      ],
    ];

    const result = compareStrokes(sampleStrokes, userStrokes);
    expect(result.strokeResults[0].score).toBeGreaterThan(0.9);
  });

  it('大きく異なるストロークの場合は低いスコアを返すこと', () => {
    const sampleStrokes = [
      [
        { x: 0, y: 0 },
        { x: 100, y: 100 },
      ],
    ];
    const userStrokes = [
      [
        { x: 0, y: 0 },
        { x: 100, y: 0 },
      ], // 異なる方向のストローク
    ];

    const result = compareStrokes(sampleStrokes, userStrokes);
    expect(result.strokeResults[0].score).toBeLessThan(0.7);
  });

  it('異なるスケールと位置でも類似したストロークは高いスコアを返すこと', () => {
    const sampleStrokes = [
      [
        { x: 0, y: 0 },
        { x: 100, y: 100 },
      ],
    ];
    const userStrokes = [
      [
        { x: 200, y: 200 },
        { x: 400, y: 400 },
      ], // 2倍のスケールで移動
    ];

    const result = compareStrokes(sampleStrokes, userStrokes);
    expect(result.strokeResults[0].score).toBeGreaterThan(0.9);
  });

  it('複数ストロークの比較が正しく機能すること', () => {
    const sampleStrokes = [
      [
        { x: 0, y: 0 },
        { x: 100, y: 100 },
      ],
      [
        { x: 100, y: 0 },
        { x: 0, y: 100 },
      ],
    ];
    const userStrokes = [
      [
        { x: 0, y: 0 },
        { x: 100, y: 100 },
      ],
      [
        { x: 100, y: 0 },
        { x: 0, y: 100 },
      ],
    ];

    const result = compareStrokes(sampleStrokes, userStrokes);
    expect(result.strokeResults).toHaveLength(2);
    for (const strokeResult of result.strokeResults) {
      expect(strokeResult.score).toBeGreaterThan(0.9);
    }
  });
});
