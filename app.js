
const liveral_art_courses = [
  "微分積分学Ⅰ",
  "微分積分学Ⅱ",
  "線形代数学Ⅰ",
  "線形代数学Ⅱ",
  "物理学基礎Ⅰ",
  "物理学基礎Ⅱ",
  "物理学実験",
];

const required_major_base_courses = [
  "インフォマティックス１",
  "インフォマティックス２",
  "インフォマティックス３",
  "インフォマティックス４",
  "情報の挑戦者・開拓者たち",
  "情報セキュリティとリテラシー１",
  "情報セキュリティとリテラシー２",
  "プログラミング１",
  "プログラミング２",
  "情報理論",
  "確率統計及び演習",
  "アルゴリズム１",
  "アルゴリズム２",
  "システム数学及び演習１",
  "システム数学及び演習２",
  "論理学１",
  "論理学２ｃ",
  "データマイニング入門",
];

const common_required_major_courses = [
  "離散数学及び演習",
  "論理設計及び演習１",
  "論理設計及び演習２",
  "情報倫理と法",
  "ソフトウエア開発法及び演習",
  "オブジェクト指向言語及び演習",
  "代数的構造",
  "オートマトン・形式言語及び演習",
  "符号理論",
  "数値解析及び演習",
  "計算機アーキテクチャ基礎及び演習１",
  "計算機アーキテクチャ基礎及び演習２",
  "[遠隔]数理統計学",
  "コンパイラ",
  "最適化１",
  "最適化２",
  "[遠隔]人工知能基礎１",
  "[遠隔]人工知能基礎２",
  "オペレーティング・システム基礎及び演習",
  "情報ネットワーク",
  "コンピュータ科学実験ａ",
  "コンピュータ科学実験ｂ",
  "コンピュータ科学実験ｃ",
];

const recuquired_courses = liveral_art_courses.concat(required_major_base_courses).concat(common_required_major_courses);

const required_courses_information_system = [
  "非手続型言語及び演習",
  "オペレーティング・システム実現及び演習",
  "ソフトウェア工学基礎",
  "ネットワークセキュリティ"
].concat(recuquired_courses);

const required_courses_intelligence_system = [
  "機械学習",
  "信号処理",
  "自然言語処理１",
  "自然言語処理２",
  "生体情報基礎",
  "画像処理",
].concat(recuquired_courses);


const evaluation2gradepoint = {
  "A+": 4.3,
  A: 4.0,
  B: 3.0,
  C: 2.0,
  "C-": 1.0,
};

function remove_nbsp(str) {
  // http://blog.livedoor.jp/taka_saku2000/archives/52003914.html
  let nbsp = String.fromCharCode(160);
  return str.replace(/\s/g, "");
}

function main() {
  let navigation_tab = document.getElementById("tabnavigation_list");
  let navigation_items = navigation_tab.childNodes;

  // 科目一覧のページにいるか判定
  let is_gpa_page = false;
  for (let i = 0; i < navigation_items.length; i++) {
    if (navigation_items[i].tagName == "UL") {
      for (let j = 0; j < navigation_items[i].childNodes.length; j++) {
        console.log(navigation_items[i].childNodes[j].innerText);
        if (
          navigation_items[i].childNodes[j].className == "active" &&
          navigation_items[i].childNodes[j].innerText == "科目一覧を見る"
        ) {
          is_gpa_page = true;
        }
      }
    }
  }

  // 科目一覧でないページにいる場合は終了
  if (!is_gpa_page) {
    return;
  }

  var tables = document.getElementsByTagName("table");
  let table_rows = null;
  for (let i = 0; i < tables.length; i++) {
    if (tables[i].className == "list") {
      for (let j = 0; j < tables[i].childNodes.length; j++) {
        if (tables[i].childNodes[j].tagName == "TBODY") {
          table_rows = tables[i].childNodes[j]; // tableからtbodyを取り出す
        }
      }
    }
  }

  // 科目一覧の取得に失敗した時
  if (table_rows == null) {
    return;
  }

  let grade_points_information_system = 0;
  let credits_information_system = 0;
  let grade_points_intelligence_system = 0;
  let credits_intelligence_system = 0;

  console.log(table_rows);
  for (let i = 0; i < table_rows.childNodes.length; i++) {
    if (
      table_rows.childNodes[i].childNodes.length == 13 &&
      remove_nbsp(table_rows.childNodes[i].childNodes[5].innerText) != "F" &&
      remove_nbsp(table_rows.childNodes[i].childNodes[5].innerText) != "W"
    ) {
      // 情報システム系必修
      if (
        required_courses_information_system.includes(
          remove_nbsp(table_rows.childNodes[i].childNodes[1].innerText)
        )
      ) {
        let credit = Number(
          remove_nbsp(table_rows.childNodes[i].childNodes[3].innerText)
        );
        grade_points_information_system +=
          evaluation2gradepoint[
          remove_nbsp(table_rows.childNodes[i].childNodes[5].innerText)
          ] * credit;
        credits_information_system += credit;
        console.log(
          `information system:  ${remove_nbsp(
            table_rows.childNodes[i].childNodes[1].innerText
          )}`
        );
      }

      // 知能システム系必修
      if (
        required_courses_intelligence_system.includes(
          remove_nbsp(table_rows.childNodes[i].childNodes[1].innerText)
        )
      ) {
        let credit = Number(
          remove_nbsp(table_rows.childNodes[i].childNodes[3].innerText)
        );
        grade_points_intelligence_system +=
          evaluation2gradepoint[
          remove_nbsp(table_rows.childNodes[i].childNodes[5].innerText)
          ] * credit;
        credits_intelligence_system += credit;
        console.log(
          `intelligence system: ${remove_nbsp(
            table_rows.childNodes[i].childNodes[1].innerText
          )}`
        );
      }
    }
  }

  console.log(
    `information: ${grade_points_information_system / credits_information_system
    }`
  );
  console.log(
    `intelligence: ${grade_points_intelligence_system / credits_intelligence_system
    }`
  );

  // htmlに表示を追加
  let insert_target = document.getElementById("listTop");
  let result = document.createElement("div");
  result.style = "text-align:left;margin-left: 20px;";
  result.className = "h4";

  let information_result = document.createElement("p");
  information_result.innerText = `情報システム系GPA: ${(
    grade_points_information_system / credits_information_system
  ).toFixed(3)}`;

  let intelligence_result = document.createElement("p");
  intelligence_result.innerText = `知能システム系GPA: ${(
    grade_points_intelligence_system / credits_intelligence_system
  ).toFixed(3)}`;

  result.appendChild(information_result);
  result.appendChild(intelligence_result);

  insert_target.parentElement.insertBefore(result, insert_target);
}

main();
