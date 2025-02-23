# 系配属GPA計算機 (chrome拡張)
名古屋大学情報学部コンピュータ科学科の, 必修科目のGPAを計算して表示してくれるchrome拡張です.
[習得科目確認ページ](https://app4.srv.nagoya-u.ac.jp/camweb/wssrlstr.do)の, 成績の表の上あたりに出てくるようになります.
2022年度以降入学生用. 

## 使い方

1. このリポジトリをダウンロード
1. chromeで 拡張機能の設定ページ chrome://extensions/ を開く
2. 右上の「デベロッパーモード」を有効化
3. 「パッケージ化されていない拡張機能を読み込む」で, ダウンロードしたディレクトリを選択
4. [習得科目確認ページ](https://app4.srv.nagoya-u.ac.jp/camweb/wssrlstr.do)を開く
5. もし表示されていなかったら一度「単位習得状況を見る」などのタブを開いてからもう一度「科目一覧を見る」に戻ってください

### **※2022年度入学の方はapp.js内の科目名を修正してください**

- 13行目 "[遠隔]インフォマティックス１" → "インフォマティックス１"
- 15行目 "[遠隔]インフォマティックス３" → "インフォマティックス３"

## アップデート方法
1. このリポジトリをダウンロード
1. chromeで 拡張機能の設定ページ chrome://extensions/ を開く
1. この拡張機能の再読込ボタンを推す

# License
The source code is licensed MIT. The website content is licensed CC BY 4.0,see LICENSE.
