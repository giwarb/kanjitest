#!/usr/bin/env node
const fs = require("node:fs");
const path = require("node:path");

let fetchFn = global.fetch;
if (!fetchFn) {
  try {
    fetchFn = require("node-fetch");
  } catch (err) {
    console.error("fetch is not available and node-fetch is not installed.");
    process.exit(1);
  }
}

const entries = [
  { k: "圧", s: "<ruby>圧<rt>あつ</rt></ruby>力をかける。" },
  { k: "囲", s: "<ruby>囲<rt>かこ</rt></ruby>む。" },
  { k: "移", s: "場所を<ruby>移<rt>うつ</rt></ruby>す。" },
  { k: "因", s: "原<ruby>因<rt>いん</rt></ruby>を調べる。" },
  { k: "永", s: "<ruby>永<rt>えい</rt></ruby>遠に続く。" },
  { k: "営", s: "<ruby>営<rt>えい</rt></ruby>業する。" },
  { k: "衛", s: "<ruby>衛<rt>えい</rt></ruby>生に注意する。" },
  { k: "易", s: "<ruby>易<rt>やさ</rt></ruby>しい問題。" },
  { k: "益", s: "<ruby>益<rt>えき</rt></ruby>がある。" },
  { k: "液", s: "<ruby>液<rt>えき</rt></ruby>体。" },
  { k: "演", s: "<ruby>演<rt>えん</rt></ruby>じる。" },
  { k: "応", s: "<ruby>応<rt>おう</rt></ruby>援する。" },
  { k: "往", s: "<ruby>往<rt>おう</rt></ruby>復する。" },
  { k: "桜", s: "<ruby>桜<rt>さくら</rt></ruby>が咲く。" },
  { k: "可", s: "<ruby>可<rt>か</rt></ruby>能性がある。" },
  { k: "仮", s: "<ruby>仮<rt>かり</rt></ruby>の姿。" },
  { k: "価", s: "<ruby>価<rt>か</rt></ruby>値がある。" },
  { k: "河", s: "<ruby>河<rt>かわ</rt></ruby>が流れる。" },
  { k: "過", s: "<ruby>過<rt>す</rt></ruby>ごす。" },
  { k: "快", s: "<ruby>快<rt>かい</rt></ruby>適な部屋。" },
  { k: "解", s: "問題を<ruby>解<rt>と</rt></ruby>く。" },
  { k: "格", s: "<ruby>格<rt>かく</rt></ruby>好いい。" },
  { k: "確", s: "<ruby>確<rt>たし</rt></ruby>かめる。" },
  { k: "額", s: "<ruby>額<rt>がく</rt></ruby>を飾る。" },
  { k: "刊", s: "発<ruby>刊<rt>かん</rt></ruby>する。" },
  { k: "幹", s: "木の<ruby>幹<rt>みき</rt></ruby>。" },
  { k: "慣", s: "<ruby>慣<rt>な</rt></ruby>れる。" },
  { k: "眼", s: "<ruby>眼<rt>め</rt></ruby>を開ける。" },
  { k: "紀", s: "世<ruby>紀<rt>き</rt></ruby>。" },
  { k: "基", s: "<ruby>基<rt>もと</rt></ruby>づく。" },
  { k: "寄", s: "<ruby>寄<rt>よ</rt></ruby>り道する。" },
  { k: "規", s: "<ruby>規<rt>き</rt></ruby>則を守る。" },
  { k: "喜", s: "<ruby>喜<rt>よろこ</rt></ruby>ぶ。" },
  { k: "技", s: "<ruby>技<rt>わざ</rt></ruby>を磨く。" },
  { k: "義", s: "<ruby>義<rt>ぎ</rt></ruby>理を感じる。" },
  { k: "逆", s: "<ruby>逆<rt>ぎゃく</rt></ruby>になる。" },
  { k: "久", s: "<ruby>久<rt>ひさ</rt></ruby>しぶり。" },
  { k: "旧", s: "<ruby>旧<rt>きゅう</rt></ruby>友。" },
  { k: "救", s: "<ruby>救<rt>すく</rt></ruby>う。" },
  { k: "居", s: "<ruby>居<rt>い</rt></ruby>場所。" },
  { k: "許", s: "<ruby>許<rt>ゆる</rt></ruby>す。" },
  { k: "境", s: "国<ruby>境<rt>きょう</rt></ruby>。" },
  { k: "均", s: "<ruby>均<rt>きん</rt></ruby>等。" },
  { k: "禁", s: "<ruby>禁<rt>きん</rt></ruby>止する。" },
  { k: "句", s: "<ruby>句<rt>く</rt></ruby>読点。" },
  { k: "型", s: "<ruby>型<rt>かた</rt></ruby>を作る。" },
  { k: "経", s: "<ruby>経<rt>けい</rt></ruby>験する。" },
  { k: "潔", s: "<ruby>潔<rt>いさぎよ</rt></ruby>い。" },
  { k: "件", s: "<ruby>件<rt>けん</rt></ruby>数を数える。" },
  { k: "険", s: "危<ruby>険<rt>けん</rt></ruby>な場所。" },
  { k: "検", s: "<ruby>検<rt>けん</rt></ruby>査する。" },
  { k: "限", s: "<ruby>限<rt>かぎ</rt></ruby>りがある。" },
  { k: "現", s: "<ruby>現<rt>げん</rt></ruby>れる。" },
  { k: "減", s: "<ruby>減<rt>へ</rt></ruby>る。" },
  { k: "故", s: "<ruby>故<rt>こ</rt></ruby>郷。" },
  { k: "個", s: "<ruby>個<rt>こ</rt></ruby>人。" },
  { k: "護", s: "保<ruby>護<rt>ご</rt></ruby>する。" },
  { k: "効", s: "<ruby>効<rt>こう</rt></ruby>果がある。" },
  { k: "厚", s: "<ruby>厚<rt>あつ</rt></ruby>い本。" },
  { k: "耕", s: "田を<ruby>耕<rt>たがや</rt></ruby>す。" },
  { k: "航", s: "<ruby>航<rt>こう</rt></ruby>空機。" },
  { k: "鉱", s: "<ruby>鉱<rt>こう</rt></ruby>山。" },
  { k: "構", s: "<ruby>構<rt>こう</rt></ruby>造。" },
  { k: "興", s: "<ruby>興<rt>きょう</rt></ruby>味を持つ。" },
  { k: "講", s: "<ruby>講<rt>こう</rt></ruby>義を聞く。" },
  { k: "告", s: "報<ruby>告<rt>こく</rt></ruby>する。" },
  { k: "混", s: "<ruby>混<rt>ま</rt></ruby>ざる。" },
  { k: "査", s: "調<ruby>査<rt>さ</rt></ruby>する。" },
  { k: "再", s: "<ruby>再<rt>さい</rt></ruby>び会う。" },
  { k: "災", s: "<ruby>災<rt>さい</rt></ruby>害が起きる。" },
  { k: "妻", s: "<ruby>妻<rt>つま</rt></ruby>と暮らす。" },
  { k: "採", s: "<ruby>採<rt>と</rt></ruby>る。" },
  { k: "際", s: "国<ruby>際<rt>さい</rt></ruby>的。" },
  { k: "在", s: "<ruby>在<rt>ざい</rt></ruby>学中。" },
  { k: "財", s: "<ruby>財<rt>ざい</rt></ruby>産。" },
  { k: "罪", s: "<ruby>罪<rt>つみ</rt></ruby>を犯す。" },
  { k: "殺", s: "<ruby>殺<rt>ころ</rt></ruby>す。" },
  { k: "雑", s: "<ruby>雑<rt>ざつ</rt></ruby>な仕事。" },
  { k: "酸", s: "<ruby>酸<rt>さん</rt></ruby>素。" },
  { k: "賛", s: "<ruby>賛<rt>さん</rt></ruby>成する。" },
  { k: "士", s: "弁護<ruby>士<rt>し</rt></ruby>。" },
  { k: "支", s: "<ruby>支<rt>ささ</rt></ruby>える。" },
  { k: "史", s: "歴<ruby>史<rt>し</rt></ruby>を学ぶ。" },
  { k: "志", s: "<ruby>志<rt>こころざ</rt></ruby>す。" },
  { k: "枝", s: "木の<ruby>枝<rt>えだ</rt></ruby>。" },
  { k: "師", s: "教<ruby>師<rt>し</rt></ruby>。" },
  { k: "資", s: "<ruby>資<rt>し</rt></ruby>料を集める。" },
  { k: "飼", s: "犬を<ruby>飼<rt>か</rt></ruby>う。" },
  { k: "示", s: "<ruby>示<rt>しめ</rt></ruby>す。" },
  { k: "似", s: "<ruby>似<rt>に</rt></ruby>ている。" },
  { k: "識", s: "知<ruby>識<rt>しき</rt></ruby>を得る。" },
  { k: "質", s: "<ruby>質<rt>しつ</rt></ruby>問する。" },
  { k: "舎", s: "校<ruby>舎<rt>しゃ</rt></ruby>。" },
  { k: "謝", s: "<ruby>謝<rt>あやま</rt></ruby>る。" },
  { k: "授", s: "<ruby>授<rt>じゅ</rt></ruby>業を受ける。" },
  { k: "修", s: "<ruby>修<rt>しゅう</rt></ruby>理する。" },
  { k: "述", s: "<ruby>述<rt>の</rt></ruby>べる。" },
  { k: "術", s: "技<ruby>術<rt>じゅつ</rt></ruby>。" },
  { k: "準", s: "<ruby>準<rt>じゅん</rt></ruby>備する。" },
  { k: "序", s: "<ruby>序<rt>じょ</rt></ruby>章。" },
  { k: "招", s: "<ruby>招<rt>まね</rt></ruby>く。" },
  { k: "証", s: "証<ruby>明<rt>めい</rt></ruby>する。" },
  { k: "象", s: "<ruby>象<rt>ぞう</rt></ruby>を見る。" },
  { k: "賞", s: "<ruby>賞<rt>しょう</rt></ruby>を取る。" },
  { k: "条", s: "<ruby>条<rt>じょう</rt></ruby>件。" },
  { k: "状", s: "現<ruby>状<rt>じょう</rt></ruby>。" },
  { k: "常", s: "<ruby>常<rt>つね</rt></ruby>に努力する。" },
  { k: "情", s: "<ruby>情<rt>じょう</rt></ruby>報を集める。" },
  { k: "織", s: "<ruby>織<rt>お</rt></ruby>物。" },
  { k: "職", s: "<ruby>職<rt>しょく</rt></ruby>業。" },
  { k: "制", s: "<ruby>制<rt>せい</rt></ruby>度。" },
  { k: "性", s: "<ruby>性<rt>せい</rt></ruby>格。" },
  { k: "政", s: "<ruby>政<rt>せい</rt></ruby>治。" },
  { k: "勢", s: "<ruby>勢<rt>いきお</rt></ruby>いがある。" },
  { k: "精", s: "<ruby>精<rt>せい</rt></ruby>神。" },
  { k: "製", s: "<ruby>製<rt>せい</rt></ruby>品。" },
  { k: "税", s: "<ruby>税<rt>ぜい</rt></ruby>金を払う。" },
  { k: "責", s: "<ruby>責<rt>せき</rt></ruby>任を持つ。" },
  { k: "績", s: "成<ruby>績<rt>せき</rt></ruby>。" },
  { k: "接", s: "<ruby>接<rt>せっ</rt></ruby>する。" },
  { k: "設", s: "<ruby>設<rt>もう</rt></ruby>ける。" },
  { k: "絶", s: "<ruby>絶<rt>た</rt></ruby>える。" },
  { k: "祖", s: "<ruby>祖<rt>そ</rt></ruby>父。" },
  { k: "素", s: "<ruby>素<rt>そ</rt></ruby>材。" },
  { k: "総", s: "<ruby>総<rt>そう</rt></ruby>計。" },
  { k: "造", s: "<ruby>造<rt>つく</rt></ruby>る。" },
  { k: "像", s: "<ruby>像<rt>ぞう</rt></ruby>を見る。" },
  { k: "増", s: "<ruby>増<rt>ふ</rt></ruby>える。" },
  { k: "則", s: "規<ruby>則<rt>そく</rt></ruby>。" },
  { k: "測", s: "<ruby>測<rt>はか</rt></ruby>る。" },
  { k: "属", s: "<ruby>属<rt>ぞく</rt></ruby>する。" },
  { k: "率", s: "確<ruby>率<rt>りつ</rt></ruby>。" },
  { k: "損", s: "<ruby>損<rt>そん</rt></ruby>をする。" },
  { k: "貸", s: "本を<ruby>貸<rt>か</rt></ruby>す。" },
  { k: "態", s: "状<ruby>態<rt>たい</rt></ruby>。" },
  { k: "団", s: "集<ruby>団<rt>だん</rt></ruby>。" },
  { k: "断", s: "<ruby>断<rt>ことわ</rt></ruby>る。" },
  { k: "築", s: "<ruby>築<rt>きず</rt></ruby>く。" },
  { k: "貯", s: "<ruby>貯<rt>ちょ</rt></ruby>金する。" },
  { k: "張", s: "<ruby>張<rt>は</rt></ruby>る。" },
  { k: "停", s: "<ruby>停<rt>てい</rt></ruby>止する。" },
  { k: "提", s: "<ruby>提<rt>てい</rt></ruby>案する。" },
  { k: "程", s: "<ruby>程<rt>てい</rt></ruby>度。" },
  { k: "適", s: "<ruby>適<rt>てき</rt></ruby>切な言葉。" },
  { k: "統", s: "<ruby>統<rt>とう</rt></ruby>一する。" },
  { k: "堂", s: "講<ruby>堂<rt>どう</rt></ruby>。" },
  { k: "銅", s: "<ruby>銅<rt>どう</rt></ruby>像。" },
  { k: "導", s: "<ruby>導<rt>みちび</rt></ruby>く。" },
  { k: "得", s: "<ruby>得<rt>え</rt></ruby>る。" },
  { k: "毒", s: "<ruby>毒<rt>どく</rt></ruby>がある。" },
  { k: "独", s: "<ruby>独<rt>ひと</rt></ruby>りで行く。" },
  { k: "任", s: "<ruby>任<rt>にん</rt></ruby>せる。" },
  { k: "燃", s: "<ruby>燃<rt>も</rt></ruby>える。" },
  { k: "能", s: "<ruby>能<rt>のう</rt></ruby>力がある。" },
  { k: "破", s: "<ruby>破<rt>やぶ</rt></ruby>る。" },
  { k: "犯", s: "<ruby>犯<rt>おか</rt></ruby>す。" },
  { k: "判", s: "<ruby>判<rt>はん</rt></ruby>断する。" },
  { k: "版", s: "<ruby>版<rt>はん</rt></ruby>画。" },
  { k: "比", s: "<ruby>比<rt>くら</rt></ruby>べる。" },
  { k: "肥", s: "<ruby>肥<rt>こ</rt></ruby>える。" },
  { k: "非", s: "<ruby>非<rt>ひ</rt></ruby>常に良い。" },
  { k: "費", s: "経<ruby>費<rt>ひ</rt></ruby>を使う。" },
  { k: "備", s: "準<ruby>備<rt>び</rt></ruby>する。" },
  { k: "評", s: "<ruby>評<rt>ひょう</rt></ruby>価する。" },
  { k: "貧", s: "<ruby>貧<rt>まず</rt></ruby>しい。" },
  { k: "布", s: "<ruby>布<rt>ぬの</rt></ruby>を使う。" },
  { k: "婦", s: "夫<ruby>婦<rt>ふ</rt></ruby>。" },
  { k: "武", s: "<ruby>武<rt>ぶ</rt></ruby>器。" },
  { k: "復", s: "<ruby>復<rt>ふっ</rt></ruby>習する。" },
  { k: "複", s: "<ruby>複<rt>ふく</rt></ruby>雑。" },
  { k: "仏", s: "<ruby>仏<rt>ほとけ</rt></ruby>様。" },
  { k: "粉", s: "<ruby>粉<rt>こな</rt></ruby>を使う。" },
  { k: "編", s: "<ruby>編<rt>へん</rt></ruby>集する。" },
  { k: "弁", s: "<ruby>弁<rt>べん</rt></ruby>当を食べる。" },
  { k: "保", s: "保<ruby>護<rt>ご</rt></ruby>する。" },
  { k: "墓", s: "<ruby>墓<rt>はか</rt></ruby>参り。" },
  { k: "報", s: "<ruby>報<rt>ほう</rt></ruby>告する。" },
  { k: "豊", s: "<ruby>豊<rt>ゆた</rt></ruby>か。" },
  { k: "防", s: "<ruby>防<rt>ふせ</rt></ruby>ぐ。" },
  { k: "貿", s: "<ruby>貿<rt>ぼう</rt></ruby>易。" },
  { k: "暴", s: "<ruby>暴<rt>ぼう</rt></ruby>力。" },
  { k: "脈", s: "血<ruby>脈<rt>みゃく</rt></ruby>。" },
  { k: "務", s: "義<ruby>務<rt>む</rt></ruby>。" },
  { k: "夢", s: "<ruby>夢<rt>ゆめ</rt></ruby>を見る。" },
  { k: "迷", s: "<ruby>迷<rt>まよ</rt></ruby>う。" },
  { k: "綿", s: "<ruby>綿<rt>めん</rt></ruby>の服。" },
  { k: "輸", s: "<ruby>輸<rt>ゆ</rt></ruby>出する。" },
  { k: "余", s: "<ruby>余<rt>よ</rt></ruby>る。" },
  { k: "容", s: "<ruby>容<rt>よう</rt></ruby>器。" },
  { k: "略", s: "<ruby>略<rt>りゃく</rt></ruby>す。" },
  { k: "留", s: "<ruby>留<rt>りゅう</rt></ruby>学する。" },
  { k: "領", s: "<ruby>領<rt>りょう</rt></ruby>土。" },
  { k: "歴", s: "歴<ruby>史<rt>し</rt></ruby>を学ぶ。" },
];

const kanjiVgBase =
  "https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji";
const outFile = path.join(__dirname, "../src/data/grade5.ts");

const toCodepointHex = (char) =>
  char.codePointAt(0).toString(16).padStart(5, "0");

async function fetchSvg(kanji) {
  const hex = toCodepointHex(kanji);
  const url = `${kanjiVgBase}/${hex}.svg`;
  const res = await fetchFn(url);
  if (!res.ok) {
    throw new Error(
      `Failed to fetch ${kanji} (${url}): ${res.status} ${res.statusText}`
    );
  }
  return { hex, svg: await res.text() };
}

async function main() {
  const results = [];
  for (const entry of entries) {
    const { k, s } = entry;
    const { hex, svg } = await fetchSvg(k);
    results.push({ id: `g5-${hex}`, sentence: s, target: k, svg });
  }

  const fileHeader = "// Auto-generated by scripts/generate-grade5.cjs\n";
  const exportCode = `export const grade5 = ${JSON.stringify(results, null, 2)} as const;\n`;
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, fileHeader + exportCode, "utf8");
  console.log(`Written ${results.length} items to ${outFile}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
