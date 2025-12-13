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
  { k: "愛", s: "家族への<ruby>愛<rt>あい</rt></ruby>。" },
  { k: "案", s: "良い<ruby>案<rt>あん</rt></ruby>を考える。" },
  { k: "以", s: "十<ruby>以<rt>い</rt></ruby>上。" },
  { k: "衣", s: "<ruby>衣<rt>い</rt></ruby>服を着る。" },
  { k: "位", s: "一<ruby>位<rt>い</rt></ruby>になる。" },
  { k: "茨", s: "<ruby>茨<rt>いばら</rt></ruby>城県。" },
  { k: "印", s: "<ruby>印<rt>いん</rt></ruby>を押す。" },
  { k: "英", s: "<ruby>英<rt>えい</rt></ruby>語を勉強する。" },
  { k: "栄", s: "<ruby>栄<rt>えい</rt></ruby>養がある。" },
  { k: "媛", s: "愛<ruby>媛<rt>ひめ</rt></ruby>県。" },
  { k: "塩", s: "<ruby>塩<rt>しお</rt></ruby>を入れる。" },
  { k: "岡", s: "福<ruby>岡<rt>おか</rt></ruby>県。" },
  { k: "億", s: "一<ruby>億<rt>おく</rt></ruby>円。" },
  { k: "加", s: "参<ruby>加<rt>か</rt></ruby>する。" },
  { k: "果", s: "<ruby>果<rt>くだ</rt></ruby>物を食べる。" },
  { k: "貨", s: "<ruby>貨<rt>か</rt></ruby>物を運ぶ。" },
  { k: "課", s: "国語<ruby>課<rt>か</rt></ruby>の勉強。" },
  { k: "芽", s: "<ruby>芽<rt>め</rt></ruby>が出る。" },
  { k: "賀", s: "年<ruby>賀<rt>が</rt></ruby>状を書く。" },
  { k: "改", s: "<ruby>改<rt>あらた</rt></ruby>める。" },
  { k: "械", s: "機<ruby>械<rt>かい</rt></ruby>を使う。" },
  { k: "害", s: "災<ruby>害<rt>がい</rt></ruby>が起きる。" },
  { k: "街", s: "<ruby>街<rt>まち</rt></ruby>を歩く。" },
  { k: "各", s: "<ruby>各<rt>かく</rt></ruby>自で考える。" },
  { k: "覚", s: "漢字を<ruby>覚<rt>おぼ</rt></ruby>える。" },
  { k: "潟", s: "新<ruby>潟<rt>がた</rt></ruby>県。" },
  { k: "完", s: "<ruby>完<rt>かん</rt></ruby>成する。" },
  { k: "官", s: "<ruby>官<rt>かん</rt></ruby>公庁。" },
  { k: "管", s: "<ruby>管<rt>かん</rt></ruby>理する。" },
  { k: "関", s: "<ruby>関<rt>かん</rt></ruby>係がある。" },
  { k: "観", s: "<ruby>観<rt>かん</rt></ruby>察する。" },
  { k: "願", s: "<ruby>願<rt>ねが</rt></ruby>いをかける。" },
  { k: "岐", s: "岐<ruby>阜<rt>ふ</rt></ruby>県。" },
  { k: "希", s: "<ruby>希<rt>き</rt></ruby>望を持つ。" },
  { k: "季", s: "四<ruby>季<rt>き</rt></ruby>。" },
  { k: "旗", s: "<ruby>旗<rt>はた</rt></ruby>を立てる。" },
  { k: "器", s: "食<ruby>器<rt>き</rt></ruby>を洗う。" },
  { k: "機", s: "飛行<ruby>機<rt>き</rt></ruby>に乗る。" },
  { k: "議", s: "会<ruby>議<rt>ぎ</rt></ruby>をする。" },
  { k: "求", s: "<ruby>求<rt>もと</rt></ruby>める。" },
  { k: "泣", s: "悲しくて<ruby>泣<rt>な</rt></ruby>く。" },
  { k: "給", s: "<ruby>給<rt>きゅう</rt></ruby>食を食べる。" },
  { k: "挙", s: "手を<ruby>挙<rt>あ</rt></ruby>げる。" },
  { k: "漁", s: "<ruby>漁<rt>りょう</rt></ruby>業をする。" },
  { k: "共", s: "<ruby>共<rt>とも</rt></ruby>に頑張る。" },
  { k: "協", s: "<ruby>協<rt>きょう</rt></ruby>力する。" },
  { k: "鏡", s: "<ruby>鏡<rt>かがみ</rt></ruby>を見る。" },
  { k: "競", s: "<ruby>競<rt>きそ</rt></ruby>い合う。" },
  { k: "極", s: "<ruby>極<rt>きわ</rt></ruby>める。" },
  { k: "熊", s: "<ruby>熊<rt>くま</rt></ruby>本県。" },
  { k: "訓", s: "<ruby>訓<rt>くん</rt></ruby>読み。" },
  { k: "軍", s: "<ruby>軍<rt>ぐん</rt></ruby>隊。" },
  { k: "郡", s: "<ruby>郡<rt>ぐん</rt></ruby>に住む。" },
  { k: "群", s: "<ruby>群<rt>ぐん</rt></ruby>馬県。" },
  { k: "径", s: "半<ruby>径<rt>けい</rt></ruby>を測る。" },
  { k: "景", s: "風<ruby>景<rt>けい</rt></ruby>が美しい。" },
  { k: "芸", s: "<ruby>芸<rt>げい</rt></ruby>術。" },
  { k: "欠", s: "<ruby>欠<rt>か</rt></ruby>席する。" },
  { k: "結", s: "<ruby>結<rt>むす</rt></ruby>ぶ。" },
  { k: "建", s: "家を<ruby>建<rt>た</rt></ruby>てる。" },
  { k: "健", s: "<ruby>健<rt>けん</rt></ruby>康でいる。" },
  { k: "験", s: "実<ruby>験<rt>けん</rt></ruby>をする。" },
  { k: "固", s: "<ruby>固<rt>かた</rt></ruby>い石。" },
  { k: "功", s: "<ruby>功<rt>こう</rt></ruby>績をあげる。" },
  { k: "好", s: "音楽が<ruby>好<rt>す</rt></ruby>き。" },
  { k: "香", s: "良い<ruby>香<rt>かお</rt></ruby>り。" },
  { k: "候", s: "天<ruby>候<rt>こう</rt></ruby>が良い。" },
  { k: "康", s: "健<ruby>康<rt>こう</rt></ruby>に注意する。" },
  { k: "佐", s: "<ruby>佐<rt>さ</rt></ruby>賀県。" },
  { k: "差", s: "<ruby>差<rt>さ</rt></ruby>をつける。" },
  { k: "菜", s: "野<ruby>菜<rt>さい</rt></ruby>を食べる。" },
  { k: "最", s: "<ruby>最<rt>さい</rt></ruby>高。" },
  { k: "埼", s: "<ruby>埼<rt>さい</rt></ruby>玉県。" },
  { k: "材", s: "<ruby>材<rt>ざい</rt></ruby>料を集める。" },
  { k: "崎", s: "長<ruby>崎<rt>さき</rt></ruby>県。" },
  { k: "昨", s: "<ruby>昨<rt>さく</rt></ruby>日のこと。" },
  { k: "札", s: "お<ruby>札<rt>ふだ</rt></ruby>を買う。" },
  { k: "刷", s: "印<ruby>刷<rt>さつ</rt></ruby>する。" },
  { k: "察", s: "観<ruby>察<rt>さつ</rt></ruby>する。" },
  { k: "参", s: "<ruby>参<rt>さん</rt></ruby>加する。" },
  { k: "産", s: "<ruby>産<rt>さん</rt></ruby>業。" },
  { k: "散", s: "<ruby>散<rt>さん</rt></ruby>歩する。" },
  { k: "残", s: "<ruby>残<rt>のこ</rt></ruby>る。" },
  { k: "氏", s: "田中<ruby>氏<rt>し</rt></ruby>。" },
  { k: "司", s: "司<ruby>会<rt>かい</rt></ruby>をする。" },
  { k: "試", s: "<ruby>試<rt>し</rt></ruby>合をする。" },
  { k: "児", s: "幼<ruby>児<rt>じ</rt></ruby>。" },
  { k: "治", s: "<ruby>治<rt>なお</rt></ruby>す。" },
  { k: "滋", s: "<ruby>滋<rt>し</rt></ruby>賀県。" },
  { k: "辞", s: "<ruby>辞<rt>じ</rt></ruby>書を引く。" },
  { k: "鹿", s: "<ruby>鹿<rt>しか</rt></ruby>児島県。" },
  { k: "失", s: "<ruby>失<rt>しっ</rt></ruby>敗する。" },
  { k: "借", s: "本を<ruby>借<rt>か</rt></ruby>りる。" },
  { k: "種", s: "<ruby>種<rt>たね</rt></ruby>をまく。" },
  { k: "周", s: "<ruby>周<rt>まわ</rt></ruby>りを見る。" },
  { k: "祝", s: "<ruby>祝<rt>いわ</rt></ruby>う。" },
  { k: "順", s: "<ruby>順<rt>じゅん</rt></ruby>番を待つ。" },
  { k: "初", s: "<ruby>初<rt>はじ</rt></ruby>めて会う。" },
  { k: "松", s: "<ruby>松<rt>まつ</rt></ruby>の木。" },
  { k: "笑", s: "<ruby>笑<rt>わら</rt></ruby>う。" },
  { k: "唱", s: "<ruby>唱<rt>とな</rt></ruby>える。" },
  { k: "焼", s: "パンを<ruby>焼<rt>や</rt></ruby>く。" },
  { k: "照", s: "太陽が<ruby>照<rt>て</rt></ruby>る。" },
  { k: "城", s: "お<ruby>城<rt>しろ</rt></ruby>を見る。" },
  { k: "縄", s: "<ruby>縄<rt>なわ</rt></ruby>を使う。" },
  { k: "臣", s: "家<ruby>臣<rt>しん</rt></ruby>。" },
  { k: "信", s: "<ruby>信<rt>しん</rt></ruby>じる。" },
  { k: "井", s: "福<ruby>井<rt>い</rt></ruby>県。" },
  { k: "成", s: "<ruby>成<rt>せい</rt></ruby>功する。" },
  { k: "省", s: "文部科学<ruby>省<rt>しょう</rt></ruby>。" },
  { k: "清", s: "<ruby>清<rt>きよ</rt></ruby>い水。" },
  { k: "静", s: "<ruby>静<rt>しず</rt></ruby>かにする。" },
  { k: "席", s: "<ruby>席<rt>せき</rt></ruby>に座る。" },
  { k: "積", s: "荷物を<ruby>積<rt>つ</rt></ruby>む。" },
  { k: "折", s: "紙を<ruby>折<rt>お</rt></ruby>る。" },
  { k: "節", s: "季<ruby>節<rt>せつ</rt></ruby>が変わる。" },
  { k: "説", s: "<ruby>説<rt>せつ</rt></ruby>明する。" },
  { k: "浅", s: "<ruby>浅<rt>あさ</rt></ruby>い川。" },
  { k: "戦", s: "<ruby>戦<rt>たたか</rt></ruby>う。" },
  { k: "選", s: "<ruby>選<rt>えら</rt></ruby>ぶ。" },
  { k: "然", s: "自<ruby>然<rt>ぜん</rt></ruby>が豊か。" },
  { k: "争", s: "<ruby>争<rt>あらそ</rt></ruby>う。" },
  { k: "倉", s: "<ruby>倉<rt>くら</rt></ruby>に入れる。" },
  { k: "巣", s: "鳥の<ruby>巣<rt>す</rt></ruby>。" },
  { k: "束", s: "花<ruby>束<rt>たば</rt></ruby>を作る。" },
  { k: "側", s: "<ruby>側<rt>がわ</rt></ruby>に立つ。" },
  { k: "続", s: "話を<ruby>続<rt>つづ</rt></ruby>ける。" },
  { k: "卒", s: "<ruby>卒<rt>そつ</rt></ruby>業する。" },
  { k: "孫", s: "<ruby>孫<rt>まご</rt></ruby>が来る。" },
  { k: "帯", s: "<ruby>帯<rt>おび</rt></ruby>を締める。" },
  { k: "隊", s: "消防<ruby>隊<rt>たい</rt></ruby>。" },
  { k: "達", s: "友<ruby>達<rt>だち</rt></ruby>と遊ぶ。" },
  { k: "単", s: "<ruby>単<rt>たん</rt></ruby>語を覚える。" },
  { k: "置", s: "机を<ruby>置<rt>お</rt></ruby>く。" },
  { k: "仲", s: "<ruby>仲<rt>なか</rt></ruby>良くする。" },
  { k: "沖", s: "<ruby>沖<rt>おき</rt></ruby>縄県。" },
  { k: "兆", s: "一<ruby>兆<rt>ちょう</rt></ruby>円。" },
  { k: "低", s: "<ruby>低<rt>ひく</rt></ruby>い山。" },
  { k: "底", s: "川<ruby>底<rt>ぞこ</rt></ruby>を見る。" },
  { k: "的", s: "目<ruby>的<rt>てき</rt></ruby>を持つ。" },
  { k: "典", s: "辞<ruby>典<rt>てん</rt></ruby>を引く。" },
  { k: "伝", s: "伝言を<ruby>伝<rt>つた</rt></ruby>える。" },
  { k: "徒", s: "生<ruby>徒<rt>と</rt></ruby>。" },
  { k: "努", s: "<ruby>努<rt>ど</rt></ruby>力する。" },
  { k: "灯", s: "<ruby>灯<rt>あか</rt></ruby>りをつける。" },
  { k: "働", s: "<ruby>働<rt>はたら</rt></ruby>く。" },
  { k: "特", s: "<ruby>特<rt>とく</rt></ruby>別な日。" },
  { k: "徳", s: "<ruby>徳<rt>とく</rt></ruby>島県。" },
  { k: "栃", s: "<ruby>栃<rt>とち</rt></ruby>木県。" },
  { k: "奈", s: "<ruby>奈<rt>な</rt></ruby>良県。" },
  { k: "梨", s: "山<ruby>梨<rt>なし</rt></ruby>県。" },
  { k: "熱", s: "<ruby>熱<rt>あつ</rt></ruby>い日。" },
  { k: "念", s: "<ruby>念<rt>ねん</rt></ruby>のため。" },
  { k: "敗", s: "試合に<ruby>敗<rt>やぶ</rt></ruby>れる。" },
  { k: "梅", s: "<ruby>梅<rt>うめ</rt></ruby>の花。" },
  { k: "博", s: "<ruby>博<rt>はく</rt></ruby>物館。" },
  { k: "阪", s: "大<ruby>阪<rt>さか</rt></ruby>府。" },
  { k: "飯", s: "ご<ruby>飯<rt>はん</rt></ruby>を食べる。" },
  { k: "飛", s: "鳥が<ruby>飛<rt>と</rt></ruby>ぶ。" },
  { k: "必", s: "<ruby>必<rt>かなら</rt></ruby>ず来る。" },
  { k: "票", s: "投<ruby>票<rt>ひょう</rt></ruby>する。" },
  { k: "標", s: "目<ruby>標<rt>ひょう</rt></ruby>を立てる。" },
  { k: "不", s: "<ruby>不<rt>ふ</rt></ruby>安な気持ち。" },
  { k: "夫", s: "<ruby>夫<rt>おっと</rt></ruby>と妻。" },
  { k: "付", s: "<ruby>付<rt>つ</rt></ruby>ける。" },
  { k: "府", s: "大阪<ruby>府<rt>ふ</rt></ruby>。" },
  { k: "阜", s: "岐<ruby>阜<rt>ふ</rt></ruby>県。" },
  { k: "富", s: "<ruby>富<rt>ふ</rt></ruby>士山。" },
  { k: "副", s: "<ruby>副<rt>ふく</rt></ruby>会長。" },
  { k: "兵", s: "<ruby>兵<rt>へい</rt></ruby>庫県。" },
  { k: "別", s: "<ruby>別<rt>べつ</rt></ruby>の人。" },
  { k: "辺", s: "<ruby>辺<rt>へん</rt></ruby>りを歩く。" },
  { k: "変", s: "<ruby>変<rt>か</rt></ruby>わる。" },
  { k: "便", s: "<ruby>便<rt>べん</rt></ruby>利。" },
  { k: "包", s: "紙で<ruby>包<rt>つつ</rt></ruby>む。" },
  { k: "法", s: "<ruby>法<rt>ほう</rt></ruby>律。" },
  { k: "望", s: "<ruby>望<rt>のぞ</rt></ruby>む。" },
  { k: "牧", s: "<ruby>牧<rt>まき</rt></ruby>場。" },
  { k: "末", s: "月<ruby>末<rt>まつ</rt></ruby>。" },
  { k: "満", s: "<ruby>満<rt>まん</rt></ruby>足する。" },
  { k: "未", s: "<ruby>未<rt>み</rt></ruby>来。" },
  { k: "民", s: "国<ruby>民<rt>みん</rt></ruby>。" },
  { k: "無", s: "<ruby>無<rt>む</rt></ruby>理をしない。" },
  { k: "約", s: "約<ruby>束<rt>そく</rt></ruby>する。" },
  { k: "勇", s: "<ruby>勇<rt>ゆう</rt></ruby>気を出す。" },
  { k: "要", s: "<ruby>要<rt>よう</rt></ruby>求する。" },
  { k: "養", s: "<ruby>養<rt>よう</rt></ruby>う。" },
  { k: "浴", s: "お<ruby>浴<rt>ふ</rt></ruby>に入る。" },
  { k: "利", s: "<ruby>利<rt>り</rt></ruby>益を得る。" },
  { k: "陸", s: "<ruby>陸<rt>りく</rt></ruby>上。" },
  { k: "良", s: "<ruby>良<rt>よ</rt></ruby>い天気。" },
  { k: "料", s: "料<ruby>理<rt>り</rt></ruby>を作る。" },
  { k: "量", s: "<ruby>量<rt>りょう</rt></ruby>を測る。" },
  { k: "輪", s: "<ruby>輪<rt>わ</rt></ruby>を作る。" },
  { k: "類", s: "種<ruby>類<rt>るい</rt></ruby>。" },
  { k: "令", s: "命<ruby>令<rt>れい</rt></ruby>する。" },
  { k: "冷", s: "<ruby>冷<rt>つめ</rt></ruby>たい水。" },
  { k: "例", s: "<ruby>例<rt>れい</rt></ruby>を挙げる。" },
  { k: "連", s: "<ruby>連<rt>れん</rt></ruby>絡する。" },
  { k: "老", s: "<ruby>老<rt>ろう</rt></ruby>人。" },
  { k: "労", s: "<ruby>労<rt>ろう</rt></ruby>働する。" },
  { k: "録", s: "記<ruby>録<rt>ろく</rt></ruby>する。" },
];

const kanjiVgBase =
  "https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji";
const outFile = path.join(__dirname, "../src/data/grade4.ts");

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
    results.push({ id: `g4-${hex}`, sentence: s, target: k, svg });
  }

  const fileHeader = "// Auto-generated by scripts/generate-grade4.cjs\n";
  const exportCode = `export const grade4 = ${JSON.stringify(results, null, 2)} as const;\n`;
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, fileHeader + exportCode, "utf8");
  console.log(`Written ${results.length} items to ${outFile}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
