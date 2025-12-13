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
  { k: "胃", s: "<ruby>胃<rt>い</rt></ruby>が痛い。" },
  { k: "異", s: "<ruby>異<rt>こと</rt></ruby>なる意見。" },
  { k: "遺", s: "<ruby>遺<rt>い</rt></ruby>産。" },
  { k: "域", s: "地<ruby>域<rt>いき</rt></ruby>。" },
  { k: "宇", s: "<ruby>宇<rt>う</rt></ruby>宙。" },
  { k: "映", s: "映<ruby>画<rt>が</rt></ruby>を見る。" },
  { k: "延", s: "<ruby>延<rt>の</rt></ruby>びる。" },
  { k: "沿", s: "川に<ruby>沿<rt>そ</rt></ruby>って歩く。" },
  { k: "恩", s: "<ruby>恩<rt>おん</rt></ruby>を感じる。" },
  { k: "我", s: "<ruby>我<rt>われ</rt></ruby>。" },
  { k: "灰", s: "<ruby>灰<rt>はい</rt></ruby>色。" },
  { k: "拡", s: "<ruby>拡<rt>かく</rt></ruby>大する。" },
  { k: "革", s: "<ruby>革<rt>かわ</rt></ruby>製品。" },
  { k: "閣", s: "内<ruby>閣<rt>かく</rt></ruby>。" },
  { k: "割", s: "<ruby>割<rt>わ</rt></ruby>る。" },
  { k: "株", s: "<ruby>株<rt>かぶ</rt></ruby>を買う。" },
  { k: "干", s: "洗濯物を<ruby>干<rt>ほ</rt></ruby>す。" },
  { k: "巻", s: "本を<ruby>巻<rt>ま</rt></ruby>く。" },
  { k: "看", s: "看<ruby>護<rt>ご</rt></ruby>する。" },
  { k: "簡", s: "<ruby>簡<rt>かん</rt></ruby>単。" },
  { k: "危", s: "<ruby>危<rt>あぶ</rt></ruby>ない。" },
  { k: "机", s: "<ruby>机<rt>つくえ</rt></ruby>に座る。" },
  { k: "揮", s: "指<ruby>揮<rt>き</rt></ruby>する。" },
  { k: "貴", s: "<ruby>貴<rt>とうと</rt></ruby>い。" },
  { k: "疑", s: "<ruby>疑<rt>うたが</rt></ruby>う。" },
  { k: "吸", s: "<ruby>吸<rt>す</rt></ruby>う。" },
  { k: "供", s: "提<ruby>供<rt>きょう</rt></ruby>する。" },
  { k: "胸", s: "<ruby>胸<rt>むね</rt></ruby>が痛い。" },
  { k: "郷", s: "故<ruby>郷<rt>きょう</rt></ruby>。" },
  { k: "勤", s: "<ruby>勤<rt>きん</rt></ruby>務する。" },
  { k: "筋", s: "<ruby>筋<rt>すじ</rt></ruby>が痛い。" },
  { k: "系", s: "<ruby>系<rt>けい</rt></ruby>統。" },
  { k: "敬", s: "<ruby>敬<rt>けい</rt></ruby>う。" },
  { k: "警", s: "<ruby>警<rt>けい</rt></ruby>察。" },
  { k: "劇", s: "<ruby>劇<rt>げき</rt></ruby>を見る。" },
  { k: "激", s: "<ruby>激<rt>はげ</rt></ruby>しい雨。" },
  { k: "穴", s: "<ruby>穴<rt>あな</rt></ruby>を掘る。" },
  { k: "券", s: "<ruby>券<rt>けん</rt></ruby>を買う。" },
  { k: "絹", s: "<ruby>絹<rt>きぬ</rt></ruby>の服。" },
  { k: "権", s: "<ruby>権<rt>けん</rt></ruby>利。" },
  { k: "憲", s: "憲<ruby>法<rt>ぽう</rt></ruby>。" },
  { k: "源", s: "水<ruby>源<rt>げん</rt></ruby>。" },
  { k: "厳", s: "<ruby>厳<rt>きび</rt></ruby>しい。" },
  { k: "己", s: "自<ruby>己<rt>こ</rt></ruby>。" },
  { k: "呼", s: "<ruby>呼<rt>よ</rt></ruby>ぶ。" },
  { k: "誤", s: "<ruby>誤<rt>あやま</rt></ruby>る。" },
  { k: "后", s: "皇<ruby>后<rt>こう</rt></ruby>。" },
  { k: "孝", s: "<ruby>孝<rt>こう</rt></ruby>行。" },
  { k: "皇", s: "<ruby>皇<rt>こう</rt></ruby>帝。" },
  { k: "紅", s: "<ruby>紅<rt>くれない</rt></ruby>色。" },
  { k: "降", s: "雨が<ruby>降<rt>ふ</rt></ruby>る。" },
  { k: "鋼", s: "<ruby>鋼<rt>はがね</rt></ruby>。" },
  { k: "刻", s: "時を<ruby>刻<rt>きざ</rt></ruby>む。" },
  { k: "穀", s: "<ruby>穀<rt>こく</rt></ruby>物。" },
  { k: "骨", s: "<ruby>骨<rt>ほね</rt></ruby>を折る。" },
  { k: "困", s: "<ruby>困<rt>こま</rt></ruby>る。" },
  { k: "砂", s: "<ruby>砂<rt>すな</rt></ruby>浜。" },
  { k: "座", s: "<ruby>座<rt>すわ</rt></ruby>る。" },
  { k: "済", s: "終<ruby>済<rt>りょう</rt></ruby>する。" },
  { k: "裁", s: "<ruby>裁<rt>さい</rt></ruby>判。" },
  { k: "策", s: "対<ruby>策<rt>さく</rt></ruby>。" },
  { k: "冊", s: "一<ruby>冊<rt>さつ</rt></ruby>の本。" },
  { k: "蚕", s: "<ruby>蚕<rt>かいこ</rt></ruby>を育てる。" },
  { k: "至", s: "<ruby>至<rt>いた</rt></ruby>る。" },
  { k: "私", s: "<ruby>私<rt>わたし</rt></ruby>。" },
  { k: "姿", s: "<ruby>姿<rt>すがた</rt></ruby>を見る。" },
  { k: "視", s: "<ruby>視<rt>し</rt></ruby>線。" },
  { k: "詞", s: "品<ruby>詞<rt>し</rt></ruby>。" },
  { k: "誌", s: "雑<ruby>誌<rt>し</rt></ruby>を読む。" },
  { k: "磁", s: "<ruby>磁<rt>じ</rt></ruby>石。" },
  { k: "射", s: "<ruby>射<rt>しゃ</rt></ruby>撃する。" },
  { k: "捨", s: "<ruby>捨<rt>す</rt></ruby>てる。" },
  { k: "尺", s: "一<ruby>尺<rt>しゃく</rt></ruby>。" },
  { k: "若", s: "<ruby>若<rt>わか</rt></ruby>い。" },
  { k: "樹", s: "<ruby>樹<rt>じゅ</rt></ruby>木。" },
  { k: "収", s: "<ruby>収<rt>しゅう</rt></ruby>入。" },
  { k: "宗", s: "<ruby>宗<rt>しゅう</rt></ruby>教。" },
  { k: "就", s: "<ruby>就<rt>しゅう</rt></ruby>職する。" },
  { k: "衆", s: "大<ruby>衆<rt>しゅう</rt></ruby>。" },
  { k: "従", s: "<ruby>従<rt>したが</rt></ruby>う。" },
  { k: "縦", s: "<ruby>縦<rt>たて</rt></ruby>に並ぶ。" },
  { k: "縮", s: "<ruby>縮<rt>ちぢ</rt></ruby>む。" },
  { k: "熟", s: "<ruby>熟<rt>じゅく</rt></ruby>す。" },
  { k: "純", s: "<ruby>純<rt>じゅん</rt></ruby>粋。" },
  { k: "処", s: "<ruby>処<rt>しょ</rt></ruby>分する。" },
  { k: "署", s: "警察<ruby>署<rt>しょ</rt></ruby>。" },
  { k: "諸", s: "<ruby>諸<rt>しょ</rt></ruby>君。" },
  { k: "除", s: "<ruby>除<rt>のぞ</rt></ruby>く。" },
  { k: "承", s: "<ruby>承<rt>しょう</rt></ruby>知する。" },
  { k: "将", s: "<ruby>将<rt>しょう</rt></ruby>来。" },
  { k: "傷", s: "<ruby>傷<rt>きず</rt></ruby>を負う。" },
  { k: "障", s: "<ruby>障<rt>しょう</rt></ruby>害。" },
  { k: "蒸", s: "<ruby>蒸<rt>む</rt></ruby>す。" },
  { k: "針", s: "<ruby>針<rt>はり</rt></ruby>を使う。" },
  { k: "仁", s: "<ruby>仁<rt>じん</rt></ruby>。" },
  { k: "垂", s: "<ruby>垂<rt>た</rt></ruby>れる。" },
  { k: "推", s: "<ruby>推<rt>すい</rt></ruby>測する。" },
  { k: "寸", s: "一<ruby>寸<rt>すん</rt></ruby>。" },
  { k: "盛", s: "<ruby>盛<rt>さか</rt></ruby>ん。" },
  { k: "聖", s: "<ruby>聖<rt>せい</rt></ruby>人。" },
  { k: "誠", s: "<ruby>誠<rt>まこと</rt></ruby>。" },
  { k: "舌", s: "<ruby>舌<rt>した</rt></ruby>を出す。" },
  { k: "宣", s: "<ruby>宣<rt>せん</rt></ruby>言する。" },
  { k: "専", s: "<ruby>専<rt>せん</rt></ruby>門。" },
  { k: "泉", s: "<ruby>泉<rt>いずみ</rt></ruby>が湧く。" },
  { k: "洗", s: "<ruby>洗<rt>あら</rt></ruby>う。" },
  { k: "染", s: "<ruby>染<rt>そ</rt></ruby>める。" },
  { k: "銭", s: "お<ruby>銭<rt>せん</rt></ruby>。" },
  { k: "善", s: "<ruby>善<rt>ぜん</rt></ruby>悪。" },
  { k: "奏", s: "<ruby>奏<rt>そう</rt></ruby>でる。" },
  { k: "窓", s: "<ruby>窓<rt>まど</rt></ruby>を開ける。" },
  { k: "創", s: "<ruby>創<rt>そう</rt></ruby>造する。" },
  { k: "装", s: "<ruby>装<rt>そう</rt></ruby>飾する。" },
  { k: "層", s: "<ruby>層<rt>そう</rt></ruby>。" },
  { k: "操", s: "<ruby>操<rt>そう</rt></ruby>作する。" },
  { k: "蔵", s: "<ruby>蔵<rt>くら</rt></ruby>に入れる。" },
  { k: "臓", s: "内<ruby>臓<rt>ぞう</rt></ruby>。" },
  { k: "存", s: "<ruby>存<rt>そん</rt></ruby>在する。" },
  { k: "尊", s: "<ruby>尊<rt>そん</rt></ruby>敬する。" },
  { k: "退", s: "<ruby>退<rt>たい</rt></ruby>く。" },
  { k: "宅", s: "自<ruby>宅<rt>たく</rt></ruby>。" },
  { k: "担", s: "<ruby>担<rt>にな</rt></ruby>う。" },
  { k: "探", s: "<ruby>探<rt>さが</rt></ruby>す。" },
  { k: "誕", s: "<ruby>誕<rt>たん</rt></ruby>生日。" },
  { k: "段", s: "<ruby>段<rt>だん</rt></ruby>階。" },
  { k: "暖", s: "<ruby>暖<rt>あたた</rt></ruby>かい。" },
  { k: "値", s: "<ruby>値<rt>ね</rt></ruby>段。" },
  { k: "宙", s: "宇<ruby>宙<rt>ちゅう</rt></ruby>。" },
  { k: "忠", s: "<ruby>忠<rt>ちゅう</rt></ruby>実。" },
  { k: "著", s: "<ruby>著<rt>ちょ</rt></ruby>者。" },
  { k: "庁", s: "市役<ruby>庁<rt>ちょう</rt></ruby>。" },
  { k: "頂", s: "山<ruby>頂<rt>ちょう</rt></ruby>。" },
  { k: "腸", s: "<ruby>腸<rt>ちょう</rt></ruby>が痛い。" },
  { k: "潮", s: "<ruby>潮<rt>しお</rt></ruby>。" },
  { k: "賃", s: "家<ruby>賃<rt>ちん</rt></ruby>を払う。" },
  { k: "痛", s: "<ruby>痛<rt>いた</rt></ruby>い。" },
  { k: "敵", s: "<ruby>敵<rt>てき</rt></ruby>と戦う。" },
  { k: "展", s: "<ruby>展<rt>てん</rt></ruby>開する。" },
  { k: "討", s: "<ruby>討<rt>う</rt></ruby>つ。" },
  { k: "党", s: "政<ruby>党<rt>とう</rt></ruby>。" },
  { k: "糖", s: "<ruby>糖<rt>とう</rt></ruby>分。" },
  { k: "届", s: "<ruby>届<rt>とど</rt></ruby>ける。" },
  { k: "難", s: "<ruby>難<rt>むずか</rt></ruby>しい。" },
  { k: "乳", s: "<ruby>乳<rt>にゅう</rt></ruby>製品。" },
  { k: "認", s: "<ruby>認<rt>みと</rt></ruby>める。" },
  { k: "納", s: "<ruby>納<rt>のう</rt></ruby>める。" },
  { k: "脳", s: "<ruby>脳<rt>のう</rt></ruby>を使う。" },
  { k: "派", s: "<ruby>派<rt>は</rt></ruby>閥。" },
  { k: "拝", s: "<ruby>拝<rt>おが</rt></ruby>む。" },
  { k: "背", s: "<ruby>背<rt>せ</rt></ruby>が高い。" },
  { k: "肺", s: "<ruby>肺<rt>はい</rt></ruby>。" },
  { k: "俳", s: "<ruby>俳<rt>はい</rt></ruby>句。" },
  { k: "班", s: "<ruby>班<rt>はん</rt></ruby>に分かれる。" },
  { k: "晩", s: "<ruby>晩<rt>ばん</rt></ruby>ご飯。" },
  { k: "否", s: "<ruby>否<rt>いな</rt></ruby>定する。" },
  { k: "批", s: "<ruby>批<rt>ひ</rt></ruby>判する。" },
  { k: "秘", s: "<ruby>秘<rt>ひ</rt></ruby>密。" },
  { k: "俵", s: "米<ruby>俵<rt>だわら</rt></ruby>。" },
  { k: "腹", s: "<ruby>腹<rt>はら</rt></ruby>が痛い。" },
  { k: "奮", s: "<ruby>奮<rt>ふん</rt></ruby>闘する。" },
  { k: "並", s: "<ruby>並<rt>なら</rt></ruby>ぶ。" },
  { k: "陛", s: "天皇<ruby>陛<rt>へい</rt></ruby>下。" },
  { k: "閉", s: "<ruby>閉<rt>し</rt></ruby>める。" },
  { k: "片", s: "<ruby>片<rt>かた</rt></ruby>方。" },
  { k: "補", s: "<ruby>補<rt>おぎな</rt></ruby>う。" },
  { k: "暮", s: "<ruby>暮<rt>く</rt></ruby>らす。" },
  { k: "宝", s: "<ruby>宝<rt>たから</rt></ruby>物。" },
  { k: "訪", s: "<ruby>訪<rt>おとず</rt></ruby>れる。" },
  { k: "亡", s: "死<ruby>亡<rt>ぼう</rt></ruby>する。" },
  { k: "忘", s: "<ruby>忘<rt>わす</rt></ruby>れる。" },
  { k: "棒", s: "<ruby>棒<rt>ぼう</rt></ruby>を持つ。" },
  { k: "枚", s: "一<ruby>枚<rt>まい</rt></ruby>。" },
  { k: "幕", s: "開<ruby>幕<rt>まく</rt></ruby>する。" },
  { k: "密", s: "<ruby>密<rt>みつ</rt></ruby>。" },
  { k: "盟", s: "同<ruby>盟<rt>めい</rt></ruby>。" },
  { k: "模", s: "<ruby>模<rt>も</rt></ruby>様。" },
  { k: "訳", s: "<ruby>訳<rt>やく</rt></ruby>す。" },
  { k: "郵", s: "<ruby>郵<rt>ゆう</rt></ruby>便。" },
  { k: "優", s: "<ruby>優<rt>ゆう</rt></ruby>しい。" },
  { k: "預", s: "<ruby>預<rt>あず</rt></ruby>ける。" },
  { k: "幼", s: "<ruby>幼<rt>おさな</rt></ruby>い。" },
  { k: "欲", s: "<ruby>欲<rt>ほっ</rt></ruby>する。" },
  { k: "翌", s: "<ruby>翌<rt>よく</rt></ruby>日。" },
  { k: "乱", s: "<ruby>乱<rt>らん</rt></ruby>れる。" },
  { k: "卵", s: "<ruby>卵<rt>たまご</rt></ruby>を食べる。" },
  { k: "覧", s: "<ruby>覧<rt>らん</rt></ruby>。" },
  { k: "裏", s: "<ruby>裏<rt>うら</rt></ruby>側。" },
  { k: "律", s: "法<ruby>律<rt>りつ</rt></ruby>。" },
  { k: "臨", s: "<ruby>臨<rt>りん</rt></ruby>む。" },
  { k: "朗", s: "<ruby>朗<rt>ほが</rt></ruby>らか。" },
  { k: "論", s: "<ruby>論<rt>ろん</rt></ruby>じる。" },
];

const kanjiVgBase =
  "https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji";
const outFile = path.join(__dirname, "../src/data/grade6.ts");

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
    results.push({ id: `g6-${hex}`, sentence: s, target: k, svg });
  }

  const fileHeader = "// Auto-generated by scripts/generate-grade6.cjs\n";
  const exportCode = `export const grade6 = ${JSON.stringify(results, null, 2)} as const;\n`;
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, fileHeader + exportCode, "utf8");
  console.log(`Written ${results.length} items to ${outFile}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
