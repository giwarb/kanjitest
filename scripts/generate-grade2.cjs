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
  { k: "引", s: "<ruby>引<rt>ひ</rt></ruby>きだしを そっと しめた。" },
  { k: "羽", s: "小さな <ruby>羽<rt>はね</rt></ruby>が ひらひら おちた。" },
  { k: "雲", s: "白い <ruby>雲<rt>くも</rt></ruby>が ゆっくり うごく。" },
  { k: "園", s: "ちいさな <ruby>園<rt>えん</rt></ruby>で ブランコを こいだ。" },
  { k: "遠", s: "<ruby>遠<rt>とお</rt></ruby>くに やまが みえる。" },
  { k: "何", s: "<ruby>何<rt>なに</rt></ruby>を たべたい？" },
  { k: "科", s: "<ruby>科<rt>か</rt></ruby>の ノートを ひらく。" },
  { k: "夏", s: "<ruby>夏<rt>なつ</rt></ruby>の よるに ほしを みた。" },
  { k: "家", s: "<ruby>家<rt>いえ</rt></ruby>で ゆっくり すごす。" },
  { k: "歌", s: "みんなで <ruby>歌<rt>うた</rt></ruby>を うたう。" },
  { k: "画", s: "<ruby>画<rt>え</rt></ruby>を じょうずに かけた。" },
  { k: "回", s: "コマが くるくる <ruby>回<rt>まわ</rt></ruby>る。" },
  { k: "会", s: "友だちに <ruby>会<rt>あ</rt></ruby>えて うれしい。" },
  { k: "海", s: "<ruby>海<rt>うみ</rt></ruby>の なみが きらきら する。" },
  { k: "絵", s: "<ruby>絵<rt>え</rt></ruby>のぐで かわを ぬった。" },
  { k: "外", s: "<ruby>外<rt>そと</rt></ruby>で シャボンだまを とばす。" },
  { k: "角", s: "<ruby>角<rt>かど</rt></ruby>で ともだちに あう。" },
  { k: "楽", s: "ピアノが とても <ruby>楽<rt>たの</rt></ruby>しい。" },
  { k: "活", s: "あさから げんきに <ruby>活<rt>かつ</rt></ruby>どう する。" },
  { k: "間", s: "ほんの <ruby>間<rt>あいだ</rt></ruby> に かぜが ふいた。" },
  { k: "丸", s: "きれいな <ruby>丸<rt>まる</rt></ruby>を ノートに かく。" },
  { k: "岩", s: "おおきな <ruby>岩<rt>いわ</rt></ruby>に こしかける。" },
  { k: "顔", s: "えがおの <ruby>顔<rt>かお</rt></ruby>が すてき。" },
  { k: "汽", s: "<ruby>汽<rt>き</rt></ruby>しゃの ふえが ひびく。" },
  { k: "記", s: "きょうを <ruby>記<rt>しる</rt></ruby>して にっきを かく。" },
  {
    k: "帰",
    s: "がっこうから <ruby>帰<rt>かえ</rt></ruby>って おやつを たべる。",
  },
  { k: "弓", s: "<ruby>弓<rt>ゆみ</rt></ruby>を ひく まねを する。" },
  { k: "牛", s: "まきばで <ruby>牛<rt>うし</rt></ruby>が のんびり している。" },
  { k: "魚", s: "ちいさな <ruby>魚<rt>さかな</rt></ruby>が およいでいる。" },
  { k: "京", s: "<ruby>京<rt>きょう</rt></ruby>の まちを テレビで みた。" },
  { k: "強", s: "<ruby>強<rt>つよ</rt></ruby>い かぜが ふく。" },
  { k: "教", s: "せんせいが やさしく <ruby>教<rt>おし</rt></ruby>える。" },
  { k: "近", s: "<ruby>近<rt>ちか</rt></ruby>くの こうえんへ あるく。" },
  { k: "兄", s: "<ruby>兄<rt>あに</rt></ruby>と ボールを なげる。" },
  { k: "形", s: "ねんどで まるい <ruby>形<rt>かたち</rt></ruby>を つくる。" },
  { k: "計", s: "じかんを <ruby>計<rt>はか</rt></ruby>って あそぶ。" },
  { k: "元", s: "<ruby>元<rt>げん</rt></ruby>きに あいさつ する。" },
  { k: "言", s: "やさしい <ruby>言<rt>こと</rt></ruby>ばで つたえる。" },
  { k: "原", s: "ひろい <ruby>原<rt>はら</rt></ruby>っぱで はしる。" },
  { k: "戸", s: "そっと <ruby>戸<rt>と</rt></ruby>を しめる。" },
  { k: "古", s: "<ruby>古<rt>ふる</rt></ruby>い ほんを たいせつに する。" },
  { k: "午", s: "<ruby>午<rt>ご</rt></ruby>ぜんに そうじを おわらせる。" },
  { k: "後", s: "ごはんの <ruby>後<rt>あと</rt></ruby>で さんぽする。" },
  { k: "語", s: "あたらしい <ruby>語<rt>ことば</rt></ruby>を おぼえる。" },
  { k: "工", s: "<ruby>工<rt>こう</rt></ruby>ぞうを みにいく。" },
  { k: "公", s: "<ruby>公<rt>こう</rt></ruby>えんで すべりだいを する。" },
  { k: "広", s: "<ruby>広<rt>ひろ</rt></ruby>い そらを みあげる。" },
  { k: "交", s: "みちが <ruby>交<rt>ま</rt></ruby>じわる ばしょを わたる。" },
  { k: "光", s: "あさの <ruby>光<rt>ひかり</rt></ruby>が まぶしい。" },
  { k: "考", s: "よく <ruby>考<rt>かんが</rt></ruby>えて こたえを書く。" },
  { k: "行", s: "ともだちと いっしょに <ruby>行<rt>い</rt></ruby>く。" },
  { k: "高", s: "<ruby>高<rt>たか</rt></ruby>い ところから みおろす。" },
  { k: "黄", s: "<ruby>黄<rt>き</rt></ruby>いろの はなが さいた。" },
  { k: "合", s: "リズムを <ruby>合<rt>あ</rt></ruby>わせて てを たたく。" },
  { k: "谷", s: "<ruby>谷<rt>たに</rt></ruby>に ひびく かわの おと。" },
  { k: "国", s: "にほんという <ruby>国<rt>くに</rt></ruby>に すんでいる。" },
  { k: "黒", s: "<ruby>黒<rt>くろ</rt></ruby>い ぺんで じを かく。" },
  { k: "今", s: "<ruby>今<rt>いま</rt></ruby> すぐ てを あらう。" },
  { k: "才", s: "はち<ruby>才<rt>さい</rt></ruby>の たんじょうび。" },
  { k: "細", s: "<ruby>細<rt>ほそ</rt></ruby>い みちを あるく。" },
  { k: "作", s: "おりがみで ボートを <ruby>作<rt>つく</rt></ruby>る。" },
  { k: "算", s: "<ruby>算<rt>さん</rt></ruby>すうの もんだいを とく。" },
  { k: "止", s: "しんごうで <ruby>止<rt>と</rt></ruby>まる。" },
  { k: "市", s: "わたしの すむ <ruby>市<rt>し</rt></ruby>の まち。" },
  { k: "矢", s: "<ruby>矢<rt>や</rt></ruby>の ように はしる。" },
  { k: "姉", s: "<ruby>姉<rt>あね</rt></ruby>と いっしょに りょうりする。" },
  { k: "思", s: "ともだちを <ruby>思<rt>おも</rt></ruby>う きもち。" },
  { k: "紙", s: "<ruby>紙<rt>かみ</rt></ruby>ひこうきを とばす。" },
  { k: "寺", s: "<ruby>寺<rt>てら</rt></ruby>の かねが なる。" },
  { k: "自", s: "<ruby>自<rt>じ</rt></ruby>分の なまえを かく。" },
  { k: "時", s: "<ruby>時<rt>とき</rt></ruby>の ながれを かんじる。" },
  {
    k: "室",
    s: "おんがく<ruby>室<rt>しつ</rt></ruby>から ピアノが きこえる。",
  },
  { k: "社", s: "じん<ruby>社<rt>じゃ</rt></ruby>で てを あわせた。" },
  { k: "弱", s: "<ruby>弱<rt>よわ</rt></ruby>い かぜが ふく。" },
  { k: "首", s: "<ruby>首<rt>くび</rt></ruby>を ゆっくり まわす。" },
  { k: "秋", s: "<ruby>秋<rt>あき</rt></ruby>に はっぱが いろづく。" },
  { k: "週", s: "こん<ruby>週<rt>しゅう</rt></ruby>の よていを かく。" },
  { k: "春", s: "<ruby>春<rt>はる</rt></ruby>の かぜが あたたかい。" },
  { k: "書", s: "てがみを <ruby>書<rt>か</rt></ruby>いて だす。" },
  { k: "少", s: "<ruby>少<rt>すこ</rt></ruby>しだけ たべる。" },
  { k: "場", s: "うんどう<ruby>場<rt>じょう</rt></ruby>で はしる。" },
  { k: "色", s: "<ruby>色<rt>いろ</rt></ruby>えんぴつで ぬる。" },
  { k: "食", s: "カレーを おいしく <ruby>食<rt>た</rt></ruby>べた。" },
  { k: "心", s: "<ruby>心<rt>こころ</rt></ruby>が ぽかぽか する。" },
  { k: "新", s: "<ruby>新<rt>あたら</rt></ruby>しい ノートを ひらく。" },
  { k: "親", s: "<ruby>親<rt>おや</rt></ruby>に ありがとうと いう。" },
  { k: "図", s: "ち<ruby>図<rt>ず</rt></ruby>を みて みちを さがす。" },
  { k: "数", s: "<ruby>数<rt>かず</rt></ruby>を かぞえる。" },
  { k: "西", s: "<ruby>西<rt>にし</rt></ruby>の そらが あかい。" },
  { k: "声", s: "げんきな <ruby>声<rt>こえ</rt></ruby>で あいさつ。" },
  { k: "星", s: "よぞらに <ruby>星<rt>ほし</rt></ruby>が かがやく。" },
  { k: "晴", s: "きょうは そらが よく <ruby>晴<rt>は</rt></ruby>れている。" },
  { k: "切", s: "はさみで まっすぐ <ruby>切<rt>き</rt></ruby>る。" },
  { k: "雪", s: "<ruby>雪<rt>ゆき</rt></ruby>だるまを つくった。" },
  { k: "船", s: "<ruby>船<rt>ふね</rt></ruby>が ゆっくり すすむ。" },
  { k: "線", s: "えんぴつで まっすぐな <ruby>線<rt>せん</rt></ruby>を ひく。" },
  { k: "前", s: "<ruby>前<rt>まえ</rt></ruby>を むいて あるく。" },
  { k: "組", s: "ともだちと ちからを <ruby>組<rt>く</rt></ruby>む。" },
  { k: "走", s: "ぜんりょくで <ruby>走<rt>はし</rt></ruby>る。" },
  { k: "多", s: "<ruby>多<rt>おお</rt></ruby>くの さかなが およぐ。" },
  { k: "太", s: "<ruby>太<rt>ふと</rt></ruby>い クレヨンで かく。" },
  { k: "体", s: "<ruby>体<rt>からだ</rt></ruby>を のばして しんこきゅう。" },
  { k: "台", s: "テーブル<ruby>台<rt>だい</rt></ruby>に みかんを のせる。" },
  { k: "地", s: "<ruby>地<rt>ち</rt></ruby>めんに しゃがんで あそぶ。" },
  { k: "池", s: "<ruby>池<rt>いけ</rt></ruby>の こいに えさを あげる。" },
  { k: "知", s: "しっていることを <ruby>知<rt>し</rt></ruby>らせる。" },
  { k: "茶", s: "お<ruby>茶<rt>ちゃ</rt></ruby>を のんで ひといき。" },
  { k: "昼", s: "<ruby>昼<rt>ひる</rt></ruby>ごはんに おにぎりを たべる。" },
  { k: "長", s: "<ruby>長<rt>なが</rt></ruby>い かみを むすぶ。" },
  { k: "鳥", s: "<ruby>鳥<rt>とり</rt></ruby>が そらを とぶ。" },
  { k: "朝", s: "<ruby>朝<rt>あさ</rt></ruby>に らじおたいそうを する。" },
  { k: "直", s: "ならびを まっすぐ <ruby>直<rt>なお</rt></ruby>す。" },
  { k: "通", s: "<ruby>通<rt>とお</rt></ruby>りみちを あるく。" },
  { k: "弟", s: "<ruby>弟<rt>おとうと</rt></ruby>と ブロックで あそぶ。" },
  { k: "店", s: "お<ruby>店<rt>みせ</rt></ruby>で ジュースを かう。" },
  { k: "点", s: "テストに <ruby>点<rt>てん</rt></ruby>を つける。" },
  { k: "電", s: "<ruby>電<rt>でん</rt></ruby>きが ぱっと ついた。" },
  { k: "刀", s: "かみで <ruby>刀<rt>かたな</rt></ruby>を つくる。" },
  { k: "冬", s: "<ruby>冬<rt>ふゆ</rt></ruby>は こたつが あたたかい。" },
  { k: "当", s: "<ruby>当<rt>あ</rt></ruby>たりくじが でて うれしい。" },
  { k: "東", s: "<ruby>東<rt>ひがし</rt></ruby>から たいようが のぼる。" },
  { k: "答", s: "しつもんに <ruby>答<rt>こた</rt></ruby>えを かく。" },
  { k: "頭", s: "<ruby>頭<rt>あたま</rt></ruby>に リボンを つける。" },
  { k: "同", s: "<ruby>同<rt>おな</rt></ruby>じ ものを えらぶ。" },
  { k: "道", s: "まっすぐな <ruby>道<rt>みち</rt></ruby>を あるく。" },
  { k: "読", s: "えほんを <ruby>読<rt>よ</rt></ruby>んで やすむ。" },
  { k: "内", s: "いえの <ruby>内<rt>うち</rt></ruby>で スリッパを はく。" },
  { k: "南", s: "<ruby>南<rt>みなみ</rt></ruby>の かぜが あたたかい。" },
  { k: "肉", s: "やいた <ruby>肉<rt>にく</rt></ruby>を おいしく たべる。" },
  { k: "馬", s: "<ruby>馬<rt>うま</rt></ruby>が のんびり あるく。" },
  { k: "売", s: "パンを <ruby>売<rt>う</rt></ruby>っている。" },
  { k: "買", s: "ノートを <ruby>買<rt>か</rt></ruby>いに いく。" },
  { k: "麦", s: "<ruby>麦<rt>むぎ</rt></ruby>の ほが ゆれる。" },
  { k: "半", s: "リンゴを <ruby>半<rt>はん</rt></ruby>ぶんに きる。" },
  { k: "番", s: "つぎは わたしの <ruby>番<rt>ばん</rt></ruby>。" },
  { k: "父", s: "<ruby>父<rt>ちち</rt></ruby>と キャッチボール。" },
  { k: "風", s: "<ruby>風<rt>かぜ</rt></ruby>が そよそよ ふく。" },
  { k: "分", s: "なかよく <ruby>分<rt>わ</rt></ruby>ける。" },
  { k: "聞", s: "ラジオを <ruby>聞<rt>き</rt></ruby>きながら べんきょう。" },
  { k: "米", s: "たきたての <ruby>米<rt>こめ</rt></ruby>が おいしい。" },
  { k: "歩", s: "かわべりを ゆっくり <ruby>歩<rt>ある</rt></ruby>く。" },
  { k: "母", s: "<ruby>母<rt>はは</rt></ruby>の りょうりは おいしい。" },
  { k: "方", s: "どちらの <ruby>方<rt>ほう</rt></ruby>へ いきますか。" },
  { k: "北", s: "<ruby>北<rt>きた</rt></ruby>の やまに ゆきが つもる。" },
  { k: "毎", s: "<ruby>毎<rt>まい</rt></ruby>にち てを あらう。" },
  { k: "妹", s: "<ruby>妹<rt>いもうと</rt></ruby>に えほんを よんで あげる。" },
  { k: "万", s: "<ruby>万<rt>まん</rt></ruby>ぽけいで あるく かずを みる。" },
  { k: "明", s: "<ruby>明<rt>あか</rt></ruby>るい ひかりが さす。" },
  { k: "鳴", s: "すずめが にわで <ruby>鳴<rt>な</rt></ruby>く。" },
  { k: "毛", s: "いぬの <ruby>毛<rt>け</rt></ruby>を ブラシで とかす。" },
  { k: "門", s: "がっこうの <ruby>門<rt>もん</rt></ruby>を くぐる。" },
  { k: "夜", s: "<ruby>夜<rt>よる</rt></ruby>に ほしを みる。" },
  { k: "野", s: "<ruby>野<rt>の</rt></ruby>はらで かけっこ。" },
  { k: "友", s: "<ruby>友<rt>とも</rt></ruby>だちと わらいあう。" },
  { k: "用", s: "ノートを かう <ruby>用<rt>よう</rt></ruby>が ある。" },
  { k: "曜", s: "きょうは なん<ruby>曜<rt>よう</rt></ruby>び？" },
  { k: "来", s: "ともだちが いえに <ruby>来<rt>き</rt></ruby>る。" },
  { k: "里", s: "ちいさな <ruby>里<rt>さと</rt></ruby>に あそびに いく。" },
  { k: "理", s: "<ruby>理<rt>り</rt></ruby>かの じっけんで あかりを つけた。" },
  { k: "話", s: "おもしろい <ruby>話<rt>はなし</rt></ruby>を きかせて。" },
];

const kanjiVgBase =
  "https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji";
const outFile = path.join(__dirname, "../src/data/grade2.ts");

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
    results.push({ id: `g2-${hex}`, sentence: s, target: k, svg });
  }

  const fileHeader = "// Auto-generated by scripts/generate-grade2.cjs\n";
  const exportCode = `export const grade2 = ${JSON.stringify(results, null, 2)} as const;\n`;
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, fileHeader + exportCode, "utf8");
  console.log(`Written ${results.length} items to ${outFile}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
