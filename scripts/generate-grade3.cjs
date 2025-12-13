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
  { k: "悪", s: "<ruby>悪<rt>わる</rt></ruby>いことをしてはいけない。" },
  { k: "安", s: "<ruby>安<rt>やす</rt></ruby>い品物を買った。" },
  { k: "暗", s: "部屋が<ruby>暗<rt>くら</rt></ruby>くなってきた。" },
  { k: "医", s: "<ruby>医<rt>い</rt></ruby>者さんに診てもらう。" },
  { k: "委", s: "<ruby>委<rt>い</rt></ruby>員に選ばれた。" },
  { k: "意", s: "<ruby>意<rt>い</rt></ruby>見を言う。" },
  { k: "育", s: "植物を<ruby>育<rt>そだ</rt></ruby>てる。" },
  { k: "員", s: "係<ruby>員<rt>いん</rt></ruby>の人に聞く。" },
  { k: "院", s: "病<ruby>院<rt>いん</rt></ruby>に行く。" },
  { k: "飲", s: "水を<ruby>飲<rt>の</rt></ruby>む。" },
  { k: "運", s: "荷物を<ruby>運<rt>はこ</rt></ruby>ぶ。" },
  { k: "泳", s: "プールで<ruby>泳<rt>およ</rt></ruby>ぐ。" },
  { k: "駅", s: "<ruby>駅<rt>えき</rt></ruby>で待ち合わせる。" },
  { k: "央", s: "中<ruby>央<rt>おう</rt></ruby>に立つ。" },
  { k: "横", s: "<ruby>横<rt>よこ</rt></ruby>に並ぶ。" },
  { k: "屋", s: "<ruby>屋<rt>や</rt></ruby>根の上にのぼる。" },
  { k: "温", s: "<ruby>温<rt>あたた</rt></ruby>かい日だ。" },
  { k: "化", s: "変<ruby>化<rt>か</rt></ruby>する。" },
  { k: "荷", s: "<ruby>荷<rt>に</rt></ruby>物を持つ。" },
  { k: "界", s: "世<ruby>界<rt>かい</rt></ruby>中を旅する。" },
  { k: "開", s: "ドアを<ruby>開<rt>ひら</rt></ruby>ける。" },
  { k: "階", s: "二<ruby>階<rt>かい</rt></ruby>に上がる。" },
  { k: "寒", s: "今日は<ruby>寒<rt>さむ</rt></ruby>い。" },
  { k: "感", s: "<ruby>感<rt>かん</rt></ruby>じたことを書く。" },
  { k: "漢", s: "<ruby>漢<rt>かん</rt></ruby>字を覚える。" },
  { k: "館", s: "図書<ruby>館<rt>かん</rt></ruby>で本を借りる。" },
  { k: "岸", s: "川<ruby>岸<rt>がん</rt></ruby>を歩く。" },
  { k: "起", s: "朝早く<ruby>起<rt>お</rt></ruby>きる。" },
  { k: "期", s: "夏<ruby>期<rt>き</rt></ruby>休みが始まる。" },
  { k: "客", s: "お<ruby>客<rt>きゃく</rt></ruby>さんが来る。" },
  { k: "究", s: "研<ruby>究<rt>きゅう</rt></ruby>する。" },
  { k: "急", s: "<ruby>急<rt>いそ</rt></ruby>いで走る。" },
  { k: "級", s: "三<ruby>級<rt>きゅう</rt></ruby>に合格する。" },
  { k: "宮", s: "神<ruby>宮<rt>ぐう</rt></ruby>に参拝する。" },
  { k: "球", s: "<ruby>球<rt>たま</rt></ruby>を投げる。" },
  { k: "去", s: "過<ruby>去<rt>こ</rt></ruby>のことを思い出す。" },
  { k: "橋", s: "<ruby>橋<rt>はし</rt></ruby>を渡る。" },
  { k: "業", s: "仕<ruby>業<rt>ごと</rt></ruby>を終える。" },
  { k: "曲", s: "好きな<ruby>曲<rt>きょく</rt></ruby>を聴く。" },
  { k: "局", s: "郵便<ruby>局<rt>きょく</rt></ruby>に行く。" },
  { k: "銀", s: "<ruby>銀<rt>ぎん</rt></ruby>色に光る。" },
  { k: "区", s: "この<ruby>区<rt>く</rt></ruby>に住む。" },
  { k: "苦", s: "<ruby>苦<rt>くる</rt></ruby>しい気持ち。" },
  { k: "具", s: "道<ruby>具<rt>ぐ</rt></ruby>を使う。" },
  { k: "君", s: "<ruby>君<rt>きみ</rt></ruby>の名前は？" },
  { k: "係", s: "日直<ruby>係<rt>がかり</rt></ruby>になる。" },
  { k: "軽", s: "荷物が<ruby>軽<rt>かる</rt></ruby>い。" },
  { k: "血", s: "<ruby>血<rt>ち</rt></ruby>が出る。" },
  { k: "決", s: "<ruby>決<rt>き</rt></ruby>まりを守る。" },
  { k: "研", s: "<ruby>研<rt>けん</rt></ruby>究する。" },
  { k: "県", s: "この<ruby>県<rt>けん</rt></ruby>に住む。" },
  { k: "庫", s: "車<ruby>庫<rt>こ</rt></ruby>に入れる。" },
  { k: "湖", s: "<ruby>湖<rt>みずうみ</rt></ruby>で遊ぶ。" },
  { k: "向", s: "前を<ruby>向<rt>む</rt></ruby>く。" },
  { k: "幸", s: "<ruby>幸<rt>しあわ</rt></ruby>せな気持ち。" },
  { k: "港", s: "<ruby>港<rt>みなと</rt></ruby>に船が着く。" },
  { k: "号", s: "一<ruby>号<rt>ごう</rt></ruby>車。" },
  { k: "根", s: "木の<ruby>根<rt>ね</rt></ruby>を見る。" },
  { k: "祭", s: "お<ruby>祭<rt>まつ</rt></ruby>りに行く。" },
  { k: "皿", s: "<ruby>皿<rt>さら</rt></ruby>を洗う。" },
  { k: "仕", s: "<ruby>仕<rt>し</rt></ruby>事をする。" },
  { k: "死", s: "<ruby>死<rt>し</rt></ruby>んでしまう。" },
  { k: "使", s: "道具を<ruby>使<rt>つか</rt></ruby>う。" },
  { k: "始", s: "勉強を<ruby>始<rt>はじ</rt></ruby>める。" },
  { k: "指", s: "<ruby>指<rt>ゆび</rt></ruby>を立てる。" },
  { k: "歯", s: "<ruby>歯<rt>は</rt></ruby>を磨く。" },
  { k: "詩", s: "<ruby>詩<rt>し</rt></ruby>を読む。" },
  { k: "次", s: "<ruby>次<rt>つぎ</rt></ruby>の人。" },
  { k: "事", s: "大きな<ruby>事<rt>こと</rt></ruby>が起きる。" },
  { k: "持", s: "かばんを<ruby>持<rt>も</rt></ruby>つ。" },
  { k: "式", s: "入学<ruby>式<rt>しき</rt></ruby>に出る。" },
  { k: "実", s: "<ruby>実<rt>み</rt></ruby>がなる。" },
  { k: "写", s: "写真を<ruby>写<rt>うつ</rt></ruby>す。" },
  { k: "者", s: "研究<ruby>者<rt>しゃ</rt></ruby>になる。" },
  { k: "主", s: "<ruby>主<rt>しゅ</rt></ruby>人公が出る。" },
  { k: "守", s: "約束を<ruby>守<rt>まも</rt></ruby>る。" },
  { k: "取", s: "本を<ruby>取<rt>と</rt></ruby>る。" },
  { k: "酒", s: "お<ruby>酒<rt>さけ</rt></ruby>を飲む。" },
  { k: "受", s: "プレゼントを<ruby>受<rt>う</rt></ruby>け取る。" },
  { k: "州", s: "大<ruby>州<rt>しゅう</rt></ruby>。" },
  { k: "拾", s: "お金を<ruby>拾<rt>ひろ</rt></ruby>う。" },
  { k: "終", s: "仕事が<ruby>終<rt>お</rt></ruby>わる。" },
  { k: "習", s: "勉強を<ruby>習<rt>なら</rt></ruby>う。" },
  { k: "集", s: "友達が<ruby>集<rt>あつ</rt></ruby>まる。" },
  { k: "住", s: "ここに<ruby>住<rt>す</rt></ruby>む。" },
  { k: "重", s: "荷物が<ruby>重<rt>おも</rt></ruby>い。" },
  { k: "宿", s: "<ruby>宿<rt>やど</rt></ruby>に泊まる。" },
  { k: "所", s: "場<ruby>所<rt>しょ</rt></ruby>を決める。" },
  { k: "暑", s: "今日は<ruby>暑<rt>あつ</rt></ruby>い。" },
  { k: "助", s: "友達を<ruby>助<rt>たす</rt></ruby>ける。" },
  { k: "昭", s: "<ruby>昭<rt>しょう</rt></ruby>和時代。" },
  { k: "消", s: "火を<ruby>消<rt>け</rt></ruby>す。" },
  { k: "商", s: "<ruby>商<rt>しょう</rt></ruby>店街に行く。" },
  { k: "章", s: "第一<ruby>章<rt>しょう</rt></ruby>を読む。" },
  { k: "勝", s: "試合に<ruby>勝<rt>か</rt></ruby>つ。" },
  { k: "乗", s: "電車に<ruby>乗<rt>の</rt></ruby>る。" },
  { k: "植", s: "木を<ruby>植<rt>う</rt></ruby>える。" },
  { k: "申", s: "<ruby>申<rt>もう</rt></ruby>し込む。" },
  { k: "身", s: "<ruby>身<rt>み</rt></ruby>体を大切にする。" },
  { k: "神", s: "<ruby>神<rt>かみ</rt></ruby>様にお願いする。" },
  { k: "真", s: "<ruby>真<rt>ま</rt></ruby>っすぐ立つ。" },
  { k: "深", s: "池が<ruby>深<rt>ふか</rt></ruby>い。" },
  { k: "進", s: "前に<ruby>進<rt>すす</rt></ruby>む。" },
  { k: "世", s: "<ruby>世<rt>よ</rt></ruby>の中。" },
  { k: "整", s: "部屋を<ruby>整<rt>ととの</rt></ruby>える。" },
  { k: "昔", s: "<ruby>昔<rt>むかし</rt></ruby>のことを思い出す。" },
  { k: "全", s: "<ruby>全<rt>ぜん</rt></ruby>部食べる。" },
  { k: "相", s: "<ruby>相<rt>あい</rt></ruby>手をする。" },
  { k: "送", s: "手紙を<ruby>送<rt>おく</rt></ruby>る。" },
  { k: "想", s: "<ruby>想<rt>そう</rt></ruby>像する。" },
  { k: "息", s: "<ruby>息<rt>いき</rt></ruby>をする。" },
  { k: "速", s: "<ruby>速<rt>はや</rt></ruby>く走る。" },
  { k: "族", s: "家<ruby>族<rt>ぞく</rt></ruby>と出かける。" },
  { k: "他", s: "<ruby>他<rt>ほか</rt></ruby>の人。" },
  { k: "打", s: "ボールを<ruby>打<rt>う</rt></ruby>つ。" },
  { k: "対", s: "<ruby>対<rt>たい</rt></ruby>戦する。" },
  { k: "待", s: "友達を<ruby>待<rt>ま</rt></ruby>つ。" },
  { k: "代", s: "時<ruby>代<rt>だい</rt></ruby>が変わる。" },
  { k: "第", s: "<ruby>第<rt>だい</rt></ruby>一回。" },
  { k: "題", s: "問<ruby>題<rt>だい</rt></ruby>を解く。" },
  { k: "炭", s: "<ruby>炭<rt>すみ</rt></ruby>を使う。" },
  { k: "短", s: "時間が<ruby>短<rt>みじか</rt></ruby>い。" },
  { k: "談", s: "<ruby>談<rt>だん</rt></ruby>話する。" },
  { k: "着", s: "服を<ruby>着<rt>き</rt></ruby>る。" },
  { k: "注", s: "<ruby>注<rt>ちゅう</rt></ruby>意する。" },
  { k: "柱", s: "<ruby>柱<rt>はしら</rt></ruby>が立つ。" },
  { k: "丁", s: "<ruby>丁<rt>てい</rt></ruby>寧にする。" },
  { k: "帳", s: "ノート<ruby>帳<rt>ちょう</rt></ruby>を買う。" },
  { k: "調", s: "<ruby>調<rt>しら</rt></ruby>べる。" },
  { k: "追", s: "犬を<ruby>追<rt>お</rt></ruby>いかける。" },
  { k: "定", s: "予<ruby>定<rt>てい</rt></ruby>を決める。" },
  { k: "庭", s: "<ruby>庭<rt>にわ</rt></ruby>で遊ぶ。" },
  { k: "笛", s: "<ruby>笛<rt>ふえ</rt></ruby>を吹く。" },
  { k: "鉄", s: "<ruby>鉄<rt>てつ</rt></ruby>の棒。" },
  { k: "転", s: "石で<ruby>転<rt>ころ</rt></ruby>ぶ。" },
  { k: "都", s: "東京<ruby>都<rt>と</rt></ruby>。" },
  { k: "度", s: "温<ruby>度<rt>ど</rt></ruby>を測る。" },
  { k: "投", s: "ボールを<ruby>投<rt>な</rt></ruby>げる。" },
  { k: "豆", s: "<ruby>豆<rt>まめ</rt></ruby>を食べる。" },
  { k: "島", s: "<ruby>島<rt>しま</rt></ruby>に行く。" },
  { k: "湯", s: "お<ruby>湯<rt>ゆ</rt></ruby>を沸かす。" },
  { k: "登", s: "山に<ruby>登<rt>のぼ</rt></ruby>る。" },
  { k: "等", s: "<ruby>等<rt>とう</rt></ruby>しい。" },
  { k: "動", s: "体を<ruby>動<rt>うご</rt></ruby>かす。" },
  { k: "童", s: "児<ruby>童<rt>どう</rt></ruby>。" },
  { k: "農", s: "<ruby>農<rt>のう</rt></ruby>業をする。" },
  { k: "波", s: "<ruby>波<rt>なみ</rt></ruby>が来る。" },
  { k: "配", s: "新聞を<ruby>配<rt>くば</rt></ruby>る。" },
  { k: "倍", s: "二<ruby>倍<rt>ばい</rt></ruby>になる。" },
  { k: "箱", s: "<ruby>箱<rt>はこ</rt></ruby>に入れる。" },
  { k: "畑", s: "<ruby>畑<rt>はたけ</rt></ruby>で野菜を育てる。" },
  { k: "発", s: "電車が<ruby>発<rt>はっ</rt></ruby>車する。" },
  { k: "反", s: "<ruby>反<rt>はん</rt></ruby>対する。" },
  { k: "坂", s: "<ruby>坂<rt>さか</rt></ruby>を上る。" },
  { k: "板", s: "<ruby>板<rt>いた</rt></ruby>を使う。" },
  { k: "皮", s: "りんごの<ruby>皮<rt>かわ</rt></ruby>をむく。" },
  { k: "悲", s: "<ruby>悲<rt>かな</rt></ruby>しい気持ち。" },
  { k: "美", s: "<ruby>美<rt>うつく</rt></ruby>しい花。" },
  { k: "鼻", s: "<ruby>鼻<rt>はな</rt></ruby>が高い。" },
  { k: "筆", s: "<ruby>筆<rt>ふで</rt></ruby>で書く。" },
  { k: "氷", s: "<ruby>氷<rt>こおり</rt></ruby>が溶ける。" },
  { k: "表", s: "<ruby>表<rt>ひょう</rt></ruby>を見る。" },
  { k: "秒", s: "十<ruby>秒<rt>びょう</rt></ruby>待つ。" },
  { k: "病", s: "<ruby>病<rt>びょう</rt></ruby>気になる。" },
  { k: "品", s: "商<ruby>品<rt>ひん</rt></ruby>を買う。" },
  { k: "負", s: "試合に<ruby>負<rt>ま</rt></ruby>ける。" },
  { k: "部", s: "野球<ruby>部<rt>ぶ</rt></ruby>に入る。" },
  { k: "服", s: "新しい<ruby>服<rt>ふく</rt></ruby>を着る。" },
  { k: "福", s: "<ruby>福<rt>ふく</rt></ruby>が来る。" },
  { k: "物", s: "<ruby>物<rt>もの</rt></ruby>を大切にする。" },
  { k: "平", s: "<ruby>平<rt>たい</rt></ruby>らな道。" },
  { k: "返", s: "本を<ruby>返<rt>かえ</rt></ruby>す。" },
  { k: "勉", s: "<ruby>勉<rt>べん</rt></ruby>強する。" },
  { k: "放", s: "ボールを<ruby>放<rt>はな</rt></ruby>す。" },
  { k: "味", s: "いい<ruby>味<rt>あじ</rt></ruby>がする。" },
  { k: "命", s: "<ruby>命<rt>いのち</rt></ruby>を大切にする。" },
  { k: "面", s: "<ruby>面<rt>めん</rt></ruby>白い話。" },
  { k: "問", s: "<ruby>問<rt>もん</rt></ruby>題を解く。" },
  { k: "役", s: "<ruby>役<rt>やく</rt></ruby>に立つ。" },
  { k: "薬", s: "<ruby>薬<rt>くすり</rt></ruby>を飲む。" },
  { k: "由", s: "理<ruby>由<rt>ゆう</rt></ruby>を言う。" },
  { k: "油", s: "<ruby>油<rt>あぶら</rt></ruby>を使う。" },
  { k: "有", s: "<ruby>有<rt>ゆう</rt></ruby>名人。" },
  { k: "遊", s: "公園で<ruby>遊<rt>あそ</rt></ruby>ぶ。" },
  { k: "予", s: "<ruby>予<rt>よ</rt></ruby>定を立てる。" },
  { k: "羊", s: "<ruby>羊<rt>ひつじ</rt></ruby>を見る。" },
  { k: "洋", s: "西<ruby>洋<rt>よう</rt></ruby>風。" },
  { k: "葉", s: "木の<ruby>葉<rt>は</rt></ruby>が落ちる。" },
  { k: "陽", s: "太<ruby>陽<rt>よう</rt></ruby>が出る。" },
  { k: "様", s: "こんな<ruby>様<rt>よう</rt></ruby>子。" },
  { k: "落", s: "葉が<ruby>落<rt>お</rt></ruby>ちる。" },
  { k: "流", s: "川が<ruby>流<rt>なが</rt></ruby>れる。" },
  { k: "旅", s: "<ruby>旅<rt>たび</rt></ruby>に出る。" },
  { k: "両", s: "<ruby>両<rt>りょう</rt></ruby>手を上げる。" },
  { k: "緑", s: "<ruby>緑<rt>みどり</rt></ruby>の葉。" },
  { k: "礼", s: "<ruby>礼<rt>れい</rt></ruby>をする。" },
  { k: "列", s: "一<ruby>列<rt>れつ</rt></ruby>に並ぶ。" },
  { k: "練", s: "<ruby>練<rt>れん</rt></ruby>習する。" },
  { k: "路", s: "道<ruby>路<rt>ろ</rt></ruby>を歩く。" },
  { k: "和", s: "<ruby>和<rt>わ</rt></ruby>やかな気持ち。" },
];

const kanjiVgBase =
  "https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji";
const outFile = path.join(__dirname, "../src/data/grade3.ts");

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
    results.push({ id: `g3-${hex}`, sentence: s, target: k, svg });
  }

  const fileHeader = "// Auto-generated by scripts/generate-grade3.cjs\n";
  const exportCode = `export const grade3 = ${JSON.stringify(results, null, 2)} as const;\n`;
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, fileHeader + exportCode, "utf8");
  console.log(`Written ${results.length} items to ${outFile}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
