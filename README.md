# ⛏ MineLab

**Minecraft を遊ぶ・作る人のための、ちょっと便利なツール集。ブラウザだけで完結する非公式ファンメイドサイトです。**

A small collection of browser-only tools for Minecraft players and creators — a recipe calculator, MOTD generator, resource pack metadata generator, and server.properties editor. No install, no backend, just open it and use it.

> 🇯🇵 本 README は日本語がメインです。/ This README is primarily in Japanese; an English quick-start is at the bottom.

---

## 目次

- [できること](#できること)
- [クラフト計算機のハイライト](#クラフト計算機のハイライト)
- [使い方](#使い方)
- [対応言語](#対応言語)
- [技術構成](#技術構成)
- [ディレクトリ構成](#ディレクトリ構成)
- [ローカルで動かす](#ローカルで動かす)
- [データの自動生成について](#データの自動生成について)
- [Contributing](#contributing)
- [免責事項・ライセンス](#免責事項ライセンス)
- [English Quick Start](#english-quick-start)

---

## できること

MineLab には現在4つのツールがあります。すべて静的なHTML/CSS/JSのみで動作し、サーバーサイド処理は一切ありません。

| ツール | できること |
|---|---|
| ⛏ **[クラフト計算機](./craft.html)** | 作りたいアイテムと個数を指定すると、最終的に必要な素材とクラフト手順を自動で計算します。バニラの全アイテム・全レシピに対応。 |
| 📜 **[MOTDジェネレーター](./motd.html)** | 色や太字などの書式を付けながら、サーバー一覧に表示されるMOTD（説明文）をプレビュー付きで作成できます。 |
| 🧩 **[リソースパック情報ジェネレーター](./pack.html)** | 対応バージョンや説明文を選ぶだけで、Java版の `pack.mcmeta` や統合版の `manifest.json` を作成できます。 |
| 🖥 **[server.propertiesエディター](./properties.html)** | difficulty や gamemode などをフォームで選ぶだけで、Java版・統合版のサーバー設定ファイルを作成できます。ポートのランダム生成にも対応。 |

## クラフト計算機のハイライト

- **バニラの全アイテム・全レシピに対応**（1500種類以上のアイテム、900種類近いレシピ）。データは手作業で追加したものではなく、[misode/mcmeta](https://github.com/misode/mcmeta) の公式データから自動生成しています（詳細は [`tools/README.md`](./tools/README.md)）。
- **日本語・英語・簡体字・繁体字で検索可能**。「ピストン」「Piston」「piston」「minecraft:piston」のどれで検索しても同じ結果にたどり着きます。
- **中間素材も再帰的に分解**。作りたいアイテムから、原木・鉱石・レッドストーンなどの最終素材まで自動でさかのぼって計算し、クラフト内訳をツリー表示します。
- **タグ材料（例:「任意の板材」）にも対応**。板材・原木などの代替候補を保持したデータ構造になっており、今後の材料選択UIにも拡張可能です。
- **Litematica の資材リストを読み込み可能**。Litematica でエクスポートした `.csv` / `.txt`（CSV形式・ASCII表形式のどちらも）をそのまま読み込んで、必要な材料をワンクリックで計算機に反映できます。

## 使い方

1. サイトを開く（GitHub Pages で公開している場合はそのURLへ、ローカルなら [ローカルで動かす](#ローカルで動かす) を参照）。
2. ハンバーガーメニューから使いたいツールを選択。
3. クラフト計算機の場合:
   - 検索欄からアイテムを選んで個数を指定する、または
   - 「📥 資材リストを読み込む」から Litematica の資材リスト（CSV/ASCII）を読み込む。
   - 「必要な材料」と「クラフト内訳」が自動で表示されます。

## 対応言語

日本語 / English / 简体中文 / 繁體中文 の4言語に対応しています。右上の言語セレクターでいつでも切り替え可能です。

## 技術構成

- **フロントエンドのみの静的サイト**（HTML / CSS / Vanilla JavaScript）。ビルドツール・フレームワーク・バックエンドは一切使用していません。
- データは事前生成された JSON（`data/items.json`, `data/recipes.json`）を `fetch()` で読み込むだけ。GitHub Pages にそのまま置けます。
- アイテムアイコンは実際の Minecraft テクスチャ（`assets/textures/`）を使用し、読み込みに失敗した場合は絵文字にフォールバックします。

## Contributing

Issue・Pull Request 歓迎です。特に以下は助かります。

- バグ報告（再現手順つきだと助かります）
- 翻訳の誤り・不自然な表現の指摘（ja / en / zh-CN / zh-TW）
- 新しいツールのアイデア

このプロジェクトにビルドステップはありません。HTML/CSS/JSを直接編集し、上記の[ローカルで動かす](#ローカルで動かす)手順で確認してから Pull Request を送ってください。

## 免責事項・ライセンス

- 本サイトは非公式のファンメイドツールです。**Minecraft および Mojang Studios / Microsoft とは一切関係ありません。**
- Minecraft のアイテムデータ・アイコンテクスチャは Mojang Studios の著作物です。本リポジトリではゲームデータの再配布ではなく、公開されている [misode/mcmeta](https://github.com/misode/mcmeta) を参照して必要なデータを生成する仕組みのみを提供しています。
- 一部コンテンツ・コードの生成にAIアシスタントを利用しています。

---

## English Quick Start

MineLab is a fan-made, browser-only toolkit for Minecraft: a **recipe/crafting calculator** (with full vanilla item & recipe coverage, auto-generated from [misode/mcmeta](https://github.com/misode/mcmeta), plus Litematica material-list import for both CSV and ASCII-table exports), an **MOTD generator**, a **resource pack metadata generator** (`pack.mcmeta` / `manifest.json`), and a **server.properties editor**. It's pure static HTML/CSS/JS — no build step, no backend — so you can run it locally with `python3 -m http.server` or host it directly on GitHub Pages. See [`tools/README.md`](./tools/README.md) for how the item/recipe data pipeline works. Not affiliated with Mojang Studios or Microsoft.
