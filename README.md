# MineLab

Minecraftを遊ぶ・作る人のための、ちょっと便利なツールをまとめたファンメイドサイトです。
ビルド不要の静的サイトで、GitHub Pagesでの公開を想定しています。

**本サイトは非公式のファンメイドツールです。Minecraft および Mojang とは関係ありません。**

## 機能一覧

| ページ | 内容 |
|---|---|
| `home.html` | トップページ・各ツールへの導線 |
| `index.html` | クラフト計算機（作りたいアイテムと個数から、最終的に必要な素材とクラフト手順を自動計算） |
| `motd.html` | MOTDジェネレーター（色・書式付きでサーバー一覧の説明文をプレビューしながら作成） |
| `pack.html` | リソースパック情報ジェネレーター（Java版 `pack.mcmeta` / 統合版 `manifest.json` を生成） |
| `properties.html` | server.propertiesエディター（Java版・統合版のサーバー設定ファイルをフォームから生成） |

## 技術構成

- 素のHTML / CSS / JavaScript（フレームワーク・ビルドツール不使用）
- 日本語 / 英語の切り替え（各ページのJS内 `I18N` オブジェクトで管理、`localStorage` に保存）
- ライト / ダークテーマ切り替え（`localStorage` に保存）
- フォントは Google Fonts（JetBrains Mono / Zen Kaku Gothic New）をCDN経由で読み込み

## ディレクトリ構成

```
.
├── index.html / home.html / motd.html / pack.html / properties.html
├── favicon.ico
├── css/
│   ├── style.css        # 全ページ共通の基礎スタイル・デザイントークン
│   ├── home.css
│   ├── motd.css
│   ├── pack.css
│   └── properties.css
├── js/
│   ├── home.js
│   ├── script.js        # クラフト計算機
│   ├── motd.js
│   ├── pack.js
│   └── properties.js
├── data/
│   ├── items.json       # アイテムのマスターデータ（名前・アイコン・テクスチャパス等）
│   └── recipes.json     # クラフトレシピデータ
├── assets/
│   └── textures/         # アイテムアイコン画像（download_textures.py で用意、下記参照）
└── download_textures.py  # data/items.json を元にアイコン画像を一括取得するスクリプト
```

## ローカルでの動作確認

`fetch` でJSONを読み込む都合上、`file://` で直接開くと動かないページがあります。プロジェクトルートで簡易サーバーを立てて確認してください。

```bash
python3 -m http.server
```

その後 `http://localhost:8000/home.html` などにアクセスします。

## アイテムアイコンの準備

クラフト計算機のアイコン画像は、`data/items.json` に書かれた `texture` パス（`block/xxx.png` など、[misode/mcmeta](https://github.com/misode/mcmeta) と同じフォルダ構成）を元に `assets/textures/` から読み込みます。

初回セットアップ、または `items.json` にアイテムを追加した際は、以下を実行してアイコン画像を取得してください（標準ライブラリのみで動作、追加インストール不要）。

```bash
python3 download_textures.py --items data/items.json --out assets/textures
```

すでにダウンロード済みのファイルはスキップされるので、差分だけ追加取得したい場合もそのまま再実行してOKです。画像が見つからない・読み込みに失敗したアイテムは絵文字アイコンに自動でフォールバックします。

## GitHub Pagesへの公開

1. `assets/textures/` にアイコン画像を用意した状態で、リポジトリのルートにこの構成一式をpush
2. リポジトリの Settings → Pages で公開ブランチ／フォルダを設定
3. 反映まで数分かかることがあります。表示が変わらない場合はブラウザのキャッシュ（特にfavicon）を疑ってシークレットウィンドウ等で確認してください

## 免責事項

- 本サイトは非公式のファンメイドツールです。Minecraft および Mojang とは関係ありません。
- 一部コンテンツの生成にAIアシスタントを利用しています。
- アイテムアイコンは Minecraft のゲームファイルから抽出されたテクスチャ（[misode/mcmeta](https://github.com/misode/mcmeta) 経由）を使用しています。
