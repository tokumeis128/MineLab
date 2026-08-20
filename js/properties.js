"use strict";

/* =========================================================
   i18n — general UI strings
   ========================================================= */
const I18N = {
  ja: {
    "brand.tagline": "server.propertiesエディター",
    "eyebrow.platform": "STEP 01 — プラットフォーム",
    "heading.platform": "対応プラットフォームを選択",
    "hint.platform": "設定したいサーバーの種類を選んでください。Java版とBedrock版（統合版）では、server.propertiesの項目が異なります。",
    "platform.je.title": "Java Edition",
    "platform.je.desc": "server.properties を生成",
    "platform.be.title": "Bedrock Edition（統合版）",
    "platform.be.desc": "server.properties を生成",
    "eyebrow.jeInput": "STEP 02 — 入力（Java Edition）",
    "heading.jeInput": "server.properties の内容（Java Edition）",
    "hint.jeInput": "よく使う設定項目をまとめています。迷ったら初期値のままで問題ありません。項目名をタップすると開閉できます。",
    "eyebrow.beInput": "STEP 02 — 入力（Bedrock Edition）",
    "heading.beInput": "server.properties の内容（Bedrock Edition）",
    "hint.beInput": "よく使う設定項目をまとめています。迷ったら初期値のままで問題ありません。項目名をタップすると開閉できます。",
    "btn.generate": "生成する",
    "eyebrow.propOutput": "STEP 03 — 出力",
    "heading.propOutput": "出力",
    "btn.copy": "コピー",
    "btn.copied": "コピーしました",
    "btn.download": "ファイルとして保存",
    "note.output": "生成された内容を server.properties という名前のテキストファイルとして保存し、サーバーのフォルダ直下（server.jar / bedrock_server と同じ階層）に置いてください。反映にはサーバーの再起動が必要です。",
    "footer.disclaimer": "本サイトは非公式のファンメイドツールです。Minecraft および Mojang とは関係ありません。\n一部コンテンツの生成にAIアシスタントを利用しています。\n© 2026 MineLab. All rights reserved.",
    "layer.title": "地面のレイヤーを作る（下から積み上げ）",
    "layer.help": "ブロックをタップすると一番上に1層追加されます。連続する同じブロックは自動でまとめられます。",
    "layer.empty": "まだレイヤーがありません。下のブロックをタップして追加してください。",
    "layer.clear": "全て削除",
    "layer.undo": "1つ戻す",
    "layer.previewLabel": "generator-settings プレビュー：",
    "block.dirt": "土",
    "block.grass_block": "草ブロック",
    "block.glass": "ガラス",
    "block.sandstone": "砂岩",
    "block.stone": "石",
    "block.bedrock": "岩盤",
    "port.random": "ランダムな値を生成（49152〜65535の範囲から、他のよく使うポートと被りにくい値を選びます）",
  },
  en: {
    "brand.tagline": "server.properties Editor",
    "eyebrow.platform": "STEP 01 — PLATFORM",
    "heading.platform": "Choose your platform",
    "hint.platform": "Pick the kind of server you're configuring. Java Edition and Bedrock Edition (Bedrock Dedicated Server) use different server.properties keys.",
    "platform.je.title": "Java Edition",
    "platform.je.desc": "Generates server.properties",
    "platform.be.title": "Bedrock Edition",
    "platform.be.desc": "Generates server.properties",
    "eyebrow.jeInput": "STEP 02 — INPUT (Java Edition)",
    "heading.jeInput": "server.properties contents (Java Edition)",
    "hint.jeInput": "The most commonly used settings are grouped below. Defaults are fine if you're not sure. Tap a section title to expand or collapse it.",
    "eyebrow.beInput": "STEP 02 — INPUT (Bedrock Edition)",
    "heading.beInput": "server.properties contents (Bedrock Edition)",
    "hint.beInput": "The most commonly used settings are grouped below. Defaults are fine if you're not sure. Tap a section title to expand or collapse it.",
    "btn.generate": "Generate",
    "eyebrow.propOutput": "STEP 03 — OUTPUT",
    "heading.propOutput": "Output",
    "btn.copy": "Copy",
    "btn.copied": "Copied!",
    "btn.download": "Save as file",
    "note.output": "Save the generated text as a file named server.properties and place it at the root of your server folder (next to server.jar / bedrock_server). The server must be restarted for changes to take effect.",
    "footer.disclaimer": "This is an unofficial fan-made tool. Not affiliated with Minecraft or Mojang.\nSome content on this site was generated with the help of an AI assistant.\n© 2026 MineLab. All rights reserved.",
    "layer.title": "Build the ground layers (stacked from the bottom up)",
    "layer.help": "Tap a block to add one layer on top. Consecutive identical blocks are merged automatically.",
    "layer.empty": "No layers yet. Tap a block below to add one.",
    "layer.clear": "Clear all",
    "layer.undo": "Undo last",
    "layer.previewLabel": "generator-settings preview:",
    "block.dirt": "Dirt",
    "block.grass_block": "Grass Block",
    "block.glass": "Glass",
    "block.sandstone": "Sandstone",
    "block.stone": "Stone",
    "block.bedrock": "Bedrock",
    "port.random": "Generate a random value (picked from the 49152–65535 range, which is unlikely to collide with other common ports)",
  }
};

let currentLang = "ja";

/* =========================================================
   Feature / tool switcher (hamburger menu)
   ========================================================= */
const FEATURES = [
  { id: "home", icon: "🏠", name: "ホーム", tagline: "MineLab Home", active: false, href: "index.html" },
  { id: "craft", icon: "⛏", name: "クラフト計算機", tagline: "Recipe Stack Resolver", active: false, href: "craft.html" },
  { id: "motd", icon: "📜", name: "MOTDジェネレーター", tagline: "Server List Message Editor", active: false, href: "motd.html" },
  { id: "pack", icon: "🧩", name: "リソースパック情報ジェネレーター", tagline: "pack.mcmeta / manifest.json Generator", active: false, href: "pack.html" },
  { id: "properties", icon: "🖥", name: "server.propertiesエディター", tagline: "Server Properties Editor", active: true, href: null },
];

/* =========================================================
   Block palette for the superflat layer builder
   ========================================================= */
const BLOCKS = [
  { id: "dirt",        mcId: "minecraft:dirt",        color: "#7a5732", labelKey: "block.dirt" },
  { id: "grass_block",  mcId: "minecraft:grass_block", color: "#5b8a3c", labelKey: "block.grass_block" },
  { id: "glass",        mcId: "minecraft:glass",       color: "#bfe3e8", labelKey: "block.glass" },
  { id: "sandstone",    mcId: "minecraft:sandstone",   color: "#d9c98a", labelKey: "block.sandstone" },
  { id: "stone",        mcId: "minecraft:stone",       color: "#8a8a8a", labelKey: "block.stone" },
  { id: "bedrock",      mcId: "minecraft:bedrock",     color: "#3a3a3e", labelKey: "block.bedrock" },
];
let layerStack = []; // array of block ids, index 0 = bottom

/* =========================================================
   Schema — Java Edition
   Each section groups related fields. Field types:
   "text" | "number" | "port" | "select" | "toggle" | "layers"
   ========================================================= */
const JE_SCHEMA = [
  {
    title: { ja: "基本設定", en: "General" },
    icon: "⚙",
    fields: [
      { key: "motd", type: "text", default: "A Minecraft Server",
        label: { ja: "MOTD（サーバー一覧の説明文）", en: "MOTD (server list description)" },
        hint: { ja: "サーバー一覧でサーバー名の下に表示される文章です。", en: "The text shown below the server name in the multiplayer server list." } },
      { key: "level-name", type: "text", default: "world",
        label: { ja: "ワールド名（level-name）", en: "World name (level-name)" },
        hint: { ja: "ワールドの保存フォルダ名にもなります。", en: "Also used as the save folder name for the world." } },
      { key: "level-seed", type: "text", default: "",
        label: { ja: "ワールドシード（level-seed）", en: "World seed (level-seed)" },
        hint: { ja: "空欄だとランダムなシードになります。", en: "Leave blank for a random seed." } },
      { key: "max-players", type: "number", default: 20, min: 0, max: 2000000000,
        label: { ja: "最大プレイヤー数", en: "Max players" } },
      { key: "gamemode", type: "select", default: "survival",
        label: { ja: "ゲームモード", en: "Game mode" },
        options: [
          { value: "survival", label: { ja: "サバイバル", en: "Survival" } },
          { value: "creative", label: { ja: "クリエイティブ", en: "Creative" } },
          { value: "adventure", label: { ja: "アドベンチャー", en: "Adventure" } },
          { value: "spectator", label: { ja: "スペクテイター", en: "Spectator" } },
        ] },
      { key: "difficulty", type: "select", default: "easy",
        label: { ja: "難易度", en: "Difficulty" },
        options: [
          { value: "peaceful", label: { ja: "ピースフル", en: "Peaceful" } },
          { value: "easy", label: { ja: "イージー", en: "Easy" } },
          { value: "normal", label: { ja: "ノーマル", en: "Normal" } },
          { value: "hard", label: { ja: "ハード", en: "Hard" } },
        ] },
      { key: "hardcore", type: "toggle", default: false,
        label: { ja: "ハードコアモード", en: "Hardcore mode" },
        hint: { ja: "有効にすると、死亡時にワールドがスペクテイターモードになります。", en: "When enabled, dying switches the world to spectator mode permanently." } },
      { key: "force-gamemode", type: "toggle", default: false,
        label: { ja: "参加時に強制的にデフォルトのゲームモードにする", en: "Force default game mode on join" } },
    ]
  },
  {
    title: { ja: "ワールド生成", en: "World generation" },
    icon: "🗺",
    fields: [
      { key: "level-type", type: "select", default: "minecraft:normal",
        label: { ja: "ワールドタイプ（level-type）", en: "World type (level-type)" },
        options: [
          { value: "minecraft:normal", label: { ja: "通常（default）", en: "Default" } },
          { value: "minecraft:flat", label: { ja: "スーパーフラット（flat）", en: "Superflat" } },
          { value: "minecraft:large_biomes", label: { ja: "広大なバイオーム（largeBiomes）", en: "Large biomes" } },
          { value: "minecraft:amplified", label: { ja: "増幅（amplified）", en: "Amplified" } },
          { value: "minecraft:single_biome_surface", label: { ja: "ビュッフェ（buffet）", en: "Buffet (single biome)" } },
        ] },
      { key: "__layers__", type: "layers" },
      { key: "generate-structures", type: "toggle", default: true,
        label: { ja: "村や遺跡などの構造物を生成する", en: "Generate structures (villages, ruins, etc.)" } },
      { key: "spawn-protection", type: "number", default: 16, min: 0, max: 100000,
        label: { ja: "スポーン保護範囲（spawn-protection）", en: "Spawn protection radius" } },
      { key: "max-world-size", type: "number", default: 29999984, min: 1, max: 29999984,
        label: { ja: "ワールドの最大サイズ（ブロック数）", en: "Max world size (blocks)" } },
      { key: "view-distance", type: "number", default: 10, min: 3, max: 32,
        label: { ja: "視野距離（view-distance / チャンク数）", en: "View distance (chunks)" } },
      { key: "simulation-distance", type: "number", default: 10, min: 3, max: 32,
        label: { ja: "シミュレーション距離（simulation-distance / チャンク数）", en: "Simulation distance (chunks)" } },
    ]
  },
  {
    title: { ja: "ネットワーク", en: "Network" },
    icon: "🌐",
    fields: [
      { key: "server-port", type: "port", default: 25565, min: 1, max: 65535,
        label: { ja: "サーバーポート（server-port）", en: "Server port" } },
      { key: "server-ip", type: "text", default: "",
        label: { ja: "バインドするIPアドレス（server-ip）", en: "IP address to bind (server-ip)" },
        hint: { ja: "空欄のままで通常は問題ありません。", en: "Usually fine left blank." } },
      { key: "online-mode", type: "toggle", default: true,
        label: { ja: "オンラインモード（Mojangアカウント認証）", en: "Online mode (Mojang account authentication)" } },
      { key: "white-list", type: "toggle", default: false,
        label: { ja: "ホワイトリストを使う", en: "Enable whitelist" } },
      { key: "enforce-whitelist", type: "toggle", default: false,
        label: { ja: "ホワイトリストを強制する", en: "Enforce whitelist" } },
      { key: "max-tick-time", type: "number", default: 60000, min: -1, max: 9000000000000000,
        label: { ja: "1ティックの最大許容時間（ms）", en: "Max tick time (ms)" } },
      { key: "network-compression-threshold", type: "number", default: 256, min: -1, max: 1000000,
        label: { ja: "パケット圧縮のしきい値（バイト）", en: "Network compression threshold (bytes)" } },
      { key: "rate-limit", type: "number", default: 0, min: 0, max: 1000000,
        label: { ja: "パケットレート制限（0で無効）", en: "Packet rate limit (0 to disable)" } },
    ]
  },
  {
    title: { ja: "RCON / Query", en: "RCON / Query" },
    icon: "🔌",
    fields: [
      { key: "enable-rcon", type: "toggle", default: false,
        label: { ja: "RCONを有効にする", en: "Enable RCON" } },
      { key: "rcon.port", type: "port", default: 25575, min: 1, max: 65535,
        label: { ja: "RCONポート", en: "RCON port" } },
      { key: "rcon.password", type: "text", default: "",
        label: { ja: "RCONパスワード", en: "RCON password" } },
      { key: "enable-query", type: "toggle", default: false,
        label: { ja: "Queryを有効にする", en: "Enable query" } },
      { key: "query.port", type: "port", default: 25565, min: 1, max: 65535,
        label: { ja: "Queryポート", en: "Query port" } },
    ]
  },
  {
    title: { ja: "リソースパック", en: "Resource pack" },
    icon: "🧩",
    fields: [
      { key: "require-resource-pack", type: "toggle", default: false,
        label: { ja: "リソースパックの使用を必須にする", en: "Require resource pack" } },
      { key: "resource-pack", type: "text", default: "",
        label: { ja: "リソースパックのダウンロードURL", en: "Resource pack download URL" } },
      { key: "resource-pack-sha1", type: "text", default: "",
        label: { ja: "リソースパックのSHA-1（任意）", en: "Resource pack SHA-1 (optional)" } },
    ]
  },
  {
    title: { ja: "その他", en: "Other" },
    icon: "🔧",
    fields: [
      { key: "allow-flight", type: "toggle", default: false,
        label: { ja: "サバイバルでの飛行を許可する", en: "Allow flight in survival" } },
      { key: "op-permission-level", type: "number", default: 4, min: 0, max: 4,
        label: { ja: "OPの権限レベル（0〜4）", en: "OP permission level (0–4)" } },
      { key: "function-permission-level", type: "number", default: 2, min: 1, max: 4,
        label: { ja: "ファンクションの権限レベル（1〜4）", en: "Function permission level (1–4)" } },
      { key: "entity-broadcast-range-percentage", type: "number", default: 100, min: 10, max: 1000,
        label: { ja: "エンティティ描画範囲（%）", en: "Entity broadcast range (%)" } },
    ]
  },
];

/* =========================================================
   Schema — Bedrock Edition
   ========================================================= */
const BE_SCHEMA = [
  {
    title: { ja: "基本設定", en: "General" },
    icon: "⚙",
    fields: [
      { key: "server-name", type: "text", default: "Dedicated Server",
        label: { ja: "サーバー名（server-name）", en: "Server name" } },
      { key: "gamemode", type: "select", default: "survival",
        label: { ja: "ゲームモード", en: "Game mode" },
        options: [
          { value: "survival", label: { ja: "サバイバル", en: "Survival" } },
          { value: "creative", label: { ja: "クリエイティブ", en: "Creative" } },
          { value: "adventure", label: { ja: "アドベンチャー", en: "Adventure" } },
        ] },
      { key: "force-gamemode", type: "toggle", default: false,
        label: { ja: "参加時に強制的にデフォルトのゲームモードにする", en: "Force default game mode on join" } },
      { key: "difficulty", type: "select", default: "easy",
        label: { ja: "難易度", en: "Difficulty" },
        options: [
          { value: "peaceful", label: { ja: "ピースフル", en: "Peaceful" } },
          { value: "easy", label: { ja: "イージー", en: "Easy" } },
          { value: "normal", label: { ja: "ノーマル", en: "Normal" } },
          { value: "hard", label: { ja: "ハード", en: "Hard" } },
        ] },
      { key: "allow-cheats", type: "toggle", default: false,
        label: { ja: "チート（コマンド）を許可する", en: "Allow cheats (commands)" } },
      { key: "max-players", type: "number", default: 10, min: 1, max: 1000,
        label: { ja: "最大プレイヤー数", en: "Max players" } },
      { key: "default-player-permission-level", type: "select", default: "member",
        label: { ja: "初参加プレイヤーの権限レベル", en: "Default permission level for new players" },
        options: [
          { value: "visitor", label: { ja: "ビジター", en: "Visitor" } },
          { value: "member", label: { ja: "メンバー", en: "Member" } },
          { value: "operator", label: { ja: "オペレーター", en: "Operator" } },
        ] },
    ]
  },
  {
    title: { ja: "ネットワーク", en: "Network" },
    icon: "🌐",
    fields: [
      { key: "server-port", type: "port", default: 19132, min: 1, max: 65535,
        label: { ja: "サーバーポート（IPv4）", en: "Server port (IPv4)" } },
      { key: "server-portv6", type: "port", default: 19133, min: 1, max: 65535,
        label: { ja: "サーバーポート（IPv6）", en: "Server port (IPv6)" } },
      { key: "online-mode", type: "toggle", default: true,
        label: { ja: "オンラインモード（Xbox Live認証）", en: "Online mode (Xbox Live authentication)" } },
      { key: "allow-list", type: "toggle", default: true,
        label: { ja: "許可リスト（ホワイトリスト）を使う", en: "Enable allowlist" } },
      { key: "player-idle-timeout", type: "number", default: 30, min: 0, max: 100000,
        label: { ja: "アイドルタイムアウト（分・0で無効）", en: "Idle timeout (minutes, 0 to disable)" } },
      { key: "max-threads", type: "number", default: 8, min: 0, max: 256,
        label: { ja: "使用する最大スレッド数", en: "Max threads to use" } },
    ]
  },
  {
    title: { ja: "ワールド", en: "World" },
    icon: "🗺",
    fields: [
      { key: "level-name", type: "text", default: "Bedrock level",
        label: { ja: "ワールド名（level-name）", en: "World name (level-name)" } },
      { key: "level-seed", type: "text", default: "",
        label: { ja: "ワールドシード（level-seed）", en: "World seed" },
        hint: { ja: "空欄だとランダムなシードになります。", en: "Leave blank for a random seed." } },
      { key: "view-distance", type: "number", default: 32, min: 5, max: 96,
        label: { ja: "視野距離（view-distance / チャンク数）", en: "View distance (chunks)" } },
      { key: "tick-distance", type: "number", default: 4, min: 4, max: 12,
        label: { ja: "ティック距離（tick-distance / チャンク数）", en: "Tick distance (chunks)" } },
    ]
  },
  {
    title: { ja: "その他", en: "Other" },
    icon: "🔧",
    fields: [
      { key: "texturepack-required", type: "toggle", default: false,
        label: { ja: "テクスチャパックの使用を必須にする", en: "Require texture pack" } },
      { key: "content-log-file-enabled", type: "toggle", default: false,
        label: { ja: "コンテンツエラーをログファイルに記録する", en: "Log content errors to a file" } },
      { key: "compression-threshold", type: "number", default: 1, min: 0, max: 65535,
        label: { ja: "圧縮のしきい値（バイト）", en: "Compression threshold (bytes)" } },
      { key: "compression-algorithm", type: "select", default: "zlib",
        label: { ja: "圧縮アルゴリズム", en: "Compression algorithm" },
        options: [
          { value: "zlib", label: { ja: "zlib", en: "zlib" } },
          { value: "snappy", label: { ja: "snappy", en: "snappy" } },
        ] },
      { key: "chat-restriction", type: "select", default: "None",
        label: { ja: "チャットの制限レベル", en: "Chat restriction level" },
        options: [
          { value: "None", label: { ja: "制限なし（None）", en: "None" } },
          { value: "Dropped", label: { ja: "送信のみ無効（Dropped）", en: "Dropped" } },
          { value: "Disabled", label: { ja: "チャットUI自体を無効（Disabled）", en: "Disabled" } },
        ] },
      { key: "disable-player-interaction", type: "toggle", default: false,
        label: { ja: "プレイヤー同士の干渉を無効にする", en: "Disable player-to-player interaction" } },
      { key: "client-side-chunk-generation-enabled", type: "toggle", default: true,
        label: { ja: "クライアント側チャンク生成を許可する", en: "Allow client-side chunk generation" } },
    ]
  },
];

let selectedPlatform = null; // "je" | "be"

/* =========================================================
   Init
   ========================================================= */
document.addEventListener("DOMContentLoaded", init);

function init() {
  initTheme();
  initLang();
  renderNavMenu();
  renderSections("je", JE_SCHEMA, document.getElementById("je-sections"));
  renderSections("be", BE_SCHEMA, document.getElementById("be-sections"));
  bindStaticEvents();
  applyLang(); // fill in field labels now that they exist in the DOM
}

/* =========================================================
   Theme
   ========================================================= */
function initTheme() {
  const saved = safeGetStorage("mc-craft-theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = saved || (prefersDark ? "dark" : "light");
  applyTheme(theme);

  const switchInput = document.getElementById("theme-switch");
  switchInput.checked = theme === "dark";

  switchInput.addEventListener("change", () => {
    const next = switchInput.checked ? "dark" : "light";
    applyTheme(next);
    safeSetStorage("mc-craft-theme", next);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const label = document.querySelector(".theme-switch");
  if (label) label.classList.toggle("is-dark", theme === "dark");
}

function safeGetStorage(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}
function safeSetStorage(key, val) {
  try { localStorage.setItem(key, val); } catch (e) { /* ignore */ }
}

/* =========================================================
   Language
   ========================================================= */
function initLang() {
  const saved = safeGetStorage("mc-craft-lang");
  currentLang = saved === "en" ? "en" : "ja";

  const select = document.getElementById("lang-select");
  select.value = currentLang;

  select.addEventListener("change", () => {
    currentLang = select.value === "en" ? "en" : "ja";
    safeSetStorage("mc-craft-lang", currentLang);
    applyLang();
    renderLayerBuilder();
    // Re-render the output (if any) so it follows the new language.
    if (selectedPlatform === "je" && !document.getElementById("panel-prop-output").hidden) generateJe();
    if (selectedPlatform === "be" && !document.getElementById("panel-prop-output").hidden) generateBe();
  });
}

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || I18N.ja[key] || key;
}

function tField(obj) {
  if (!obj) return "";
  return obj[currentLang] || obj.ja || "";
}

function applyLang() {
  document.documentElement.lang = currentLang;
  const select = document.getElementById("lang-select");
  if (select) select.value = currentLang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const val = t(el.getAttribute("data-i18n"));
    if (val.includes("\n")) {
      el.innerHTML = val.split("\n").map(escapeHtml).join("<br>");
    } else {
      el.textContent = val;
    }
  });
  document.querySelectorAll("[data-field-label]").forEach(el => {
    el.textContent = tField(JSON.parse(el.dataset.fieldLabel));
  });
  document.querySelectorAll("[data-field-hint]").forEach(el => {
    el.textContent = tField(JSON.parse(el.dataset.fieldHint));
  });
  document.querySelectorAll("[data-field-options]").forEach(sel => {
    const options = JSON.parse(sel.dataset.fieldOptions);
    const prev = sel.value;
    sel.innerHTML = options.map(o => `<option value="${escapeHtml(o.value)}">${escapeHtml(tField(o.label))}</option>`).join("");
    if (options.some(o => o.value === prev)) sel.value = prev;
  });
  document.querySelectorAll("[data-section-title]").forEach(el => {
    el.textContent = tField(JSON.parse(el.dataset.sectionTitle));
  });
  document.querySelectorAll("[data-port-random-tip]").forEach(el => {
    el.title = t("port.random");
    el.setAttribute("aria-label", t("port.random"));
  });
}

/* =========================================================
   Nav menu (hamburger)
   ========================================================= */
function renderNavMenu() {
  const list = document.getElementById("nav-menu-list");
  list.innerHTML = FEATURES.map(f => `
    <li>
      <button type="button" class="nav-menu-item${f.active ? " active" : ""}" data-feature-id="${f.id}">
        <span class="nav-menu-icon" aria-hidden="true">${f.icon}</span>
        <span class="nav-menu-text">
          <span class="nav-menu-name">${escapeHtml(f.name)}</span>
          <span class="nav-menu-tagline">${escapeHtml(f.tagline)}</span>
        </span>
        ${f.active ? `<span class="nav-menu-check" aria-hidden="true">✓</span>` : ""}
      </button>
    </li>
  `).join("");

  list.querySelectorAll(".nav-menu-item").forEach(btn => {
    btn.addEventListener("click", () => {
      const feature = FEATURES.find(f => f.id === btn.dataset.featureId);
      if (feature && !feature.active && feature.href) {
        window.location.href = feature.href;
        return;
      }
      closeNavMenu();
    });
  });
}

function openNavMenu() {
  document.getElementById("nav-menu").hidden = false;
  document.getElementById("nav-toggle").setAttribute("aria-expanded", "true");
}
function closeNavMenu() {
  document.getElementById("nav-menu").hidden = true;
  document.getElementById("nav-toggle").setAttribute("aria-expanded", "false");
}

/* =========================================================
   Static event bindings
   ========================================================= */
function bindStaticEvents() {
  const navToggle = document.getElementById("nav-toggle");
  navToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    if (document.getElementById("nav-menu").hidden) openNavMenu();
    else closeNavMenu();
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-menu") && !e.target.closest("#nav-toggle")) closeNavMenu();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNavMenu();
  });

  document.getElementById("platform-card-je").addEventListener("click", () => selectPlatform("je"));
  document.getElementById("platform-card-be").addEventListener("click", () => selectPlatform("be"));

  document.getElementById("je-generate").addEventListener("click", generateJe);
  document.getElementById("be-generate").addEventListener("click", generateBe);

  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => handleCopy(btn));
  });

  document.getElementById("prop-download-btn").addEventListener("click", handleDownload);
}

/* =========================================================
   Platform selection
   ========================================================= */
function selectPlatform(platform) {
  selectedPlatform = platform;

  document.getElementById("platform-card-je").classList.toggle("selected", platform === "je");
  document.getElementById("platform-card-je").setAttribute("aria-checked", String(platform === "je"));
  document.getElementById("platform-card-be").classList.toggle("selected", platform === "be");
  document.getElementById("platform-card-be").setAttribute("aria-checked", String(platform === "be"));

  document.getElementById("panel-je").hidden = platform !== "je";
  document.getElementById("panel-be").hidden = platform !== "be";

  // Switching platform invalidates whatever was previously generated.
  document.getElementById("panel-prop-output").hidden = true;
}

/* =========================================================
   Field rendering (data-driven form builder)
   ========================================================= */
function renderSections(prefix, schema, container) {
  container.innerHTML = schema.map((section, sIdx) => `
    <div class="prop-section${sIdx === 0 ? " expanded" : ""}" data-section-index="${sIdx}">
      <button type="button" class="prop-section-head">
        <span class="prop-section-icon" aria-hidden="true">${section.icon || "⚙"}</span>
        <span class="prop-section-title" data-section-title='${escapeHtml(JSON.stringify(section.title))}'>${escapeHtml(tField(section.title))}</span>
        <span class="prop-section-toggle" aria-hidden="true">▸</span>
      </button>
      <div class="prop-section-body">
        ${section.fields.map(f => renderField(prefix, f)).join("")}
      </div>
    </div>
  `).join("");

  container.querySelectorAll(".prop-section-head").forEach(head => {
    head.addEventListener("click", () => {
      head.closest(".prop-section").classList.toggle("expanded");
    });
  });

  if (container.id === "je-sections") {
    renderLayerBuilder();
    bindLayerBuilderEvents();
    const levelTypeSelect = document.getElementById("je-level-type");
    if (levelTypeSelect) {
      levelTypeSelect.addEventListener("change", updateLayerBuilderVisibility);
      updateLayerBuilderVisibility();
    }
  }

  attachRandomPortButtons(container);
}

function renderField(prefix, field) {
  if (field.type === "layers") {
    return `
      <div class="field-group" id="${prefix}-layer-field-group">
        <div class="layer-builder-wrap" id="${prefix}-layer-builder">
          <!-- populated by renderLayerBuilder() -->
        </div>
      </div>
    `;
  }

  const id = `${prefix}-${field.key.replace(/[.]/g, "-")}`;
  const labelAttr = `data-field-label='${escapeHtml(JSON.stringify(field.label))}'`;
  const hintHtml = field.hint
    ? `<p class="field-hint" data-field-hint='${escapeHtml(JSON.stringify(field.hint))}'>${escapeHtml(tField(field.hint))}</p>`
    : "";

  if (field.type === "toggle") {
    return `
      <div class="toggle-field">
        <span class="toggle-field-text">
          <span class="toggle-field-label" ${labelAttr}>${escapeHtml(tField(field.label))}</span>
          ${field.hint ? `<span class="toggle-field-hint" data-field-hint='${escapeHtml(JSON.stringify(field.hint))}'>${escapeHtml(tField(field.hint))}</span>` : ""}
        </span>
        <label class="prop-toggle">
          <input type="checkbox" id="${id}" data-key="${field.key}" ${field.default ? "checked" : ""}>
          <span class="prop-toggle-thumb"></span>
        </label>
      </div>
    `;
  }

  if (field.type === "select") {
    const optionsJson = escapeHtml(JSON.stringify(field.options));
    const optionsHtml = field.options.map(o => `<option value="${escapeHtml(o.value)}">${escapeHtml(tField(o.label))}</option>`).join("");
    return `
      <div class="field-group">
        <label class="field-label" for="${id}" ${labelAttr}>${escapeHtml(tField(field.label))}</label>
        <select id="${id}" class="pack-select" data-key="${field.key}" data-field-options='${optionsJson}'>${optionsHtml}</select>
        ${hintHtml}
      </div>
    `;
  }

  if (field.type === "number") {
    return `
      <div class="field-group">
        <label class="field-label" for="${id}" ${labelAttr}>${escapeHtml(tField(field.label))}</label>
        <input type="number" id="${id}" class="pack-input num-input" data-key="${field.key}"
          value="${field.default}" ${field.min !== undefined ? `min="${field.min}"` : ""} ${field.max !== undefined ? `max="${field.max}"` : ""} step="1" inputmode="numeric">
        ${hintHtml}
      </div>
    `;
  }

  if (field.type === "port") {
    return `
      <div class="field-group">
        <label class="field-label" for="${id}" ${labelAttr}>${escapeHtml(tField(field.label))}</label>
        <div class="port-row">
          <input type="number" id="${id}" class="pack-input num-input" data-key="${field.key}"
            value="${field.default}" min="${field.min}" max="${field.max}" step="1" inputmode="numeric">
          <button type="button" class="ghost-btn port-random-btn" data-target="${id}" data-port-random-tip title="${escapeHtml(t("port.random"))}" aria-label="${escapeHtml(t("port.random"))}">🎲</button>
        </div>
        ${hintHtml}
      </div>
    `;
  }

  // default: text
  return `
    <div class="field-group">
      <label class="field-label" for="${id}" ${labelAttr}>${escapeHtml(tField(field.label))}</label>
      <input type="text" id="${id}" class="pack-input" data-key="${field.key}" value="${escapeHtml(String(field.default))}" spellcheck="false" autocomplete="off">
      ${hintHtml}
    </div>
  `;
}

function attachRandomPortButtons(container) {
  container.querySelectorAll(".port-random-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.target);
      if (target) target.value = randomPort();
    });
  });
}

// Ports in the dynamic/private range (49152-65535) are the least likely to
// collide with other well-known or registered services.
function randomPort() {
  return Math.floor(Math.random() * (65535 - 49152 + 1)) + 49152;
}

/* =========================================================
   Superflat layer builder
   ========================================================= */
function updateLayerBuilderVisibility() {
  const select = document.getElementById("je-level-type");
  const group = document.getElementById("je-layer-field-group");
  if (!select || !group) return;
  group.hidden = select.value !== "minecraft:flat";
}

function renderLayerBuilder() {
  const wrap = document.getElementById("je-layer-builder");
  if (!wrap) return;

  wrap.innerHTML = `
    <p class="field-label">${escapeHtml(t("layer.title"))}</p>
    <p class="field-hint" style="margin-top:-2px;">${escapeHtml(t("layer.help"))}</p>
    <div class="block-palette" id="block-palette">
      ${BLOCKS.map(b => `
        <button type="button" class="block-swatch" data-block-id="${b.id}">
          <span class="block-swatch-color" style="background:${b.color}"></span>
          <span class="block-swatch-label">${escapeHtml(t(b.labelKey))}</span>
        </button>
      `).join("")}
    </div>
    <div class="layer-stack-wrap">
      <div class="layer-stack" id="layer-stack"></div>
      <div class="layer-stack-actions">
        <button type="button" class="ghost-btn" id="layer-undo">${escapeHtml(t("layer.undo"))}</button>
        <button type="button" class="ghost-btn ghost-btn-danger" id="layer-clear">${escapeHtml(t("layer.clear"))}</button>
      </div>
    </div>
    <div class="layer-preview"><strong>${escapeHtml(t("layer.previewLabel"))}</strong> <span id="layer-preview-text"></span></div>
  `;

  renderLayerStack();
  bindLayerBuilderEvents();
}

function bindLayerBuilderEvents() {
  const palette = document.getElementById("block-palette");
  if (palette && !palette.dataset.bound) {
    palette.addEventListener("click", (e) => {
      const btn = e.target.closest(".block-swatch");
      if (!btn) return;
      layerStack.push(btn.dataset.blockId);
      renderLayerStack();
    });
    palette.dataset.bound = "1";
  }

  const undoBtn = document.getElementById("layer-undo");
  if (undoBtn && !undoBtn.dataset.bound) {
    undoBtn.addEventListener("click", () => {
      layerStack.pop();
      renderLayerStack();
    });
    undoBtn.dataset.bound = "1";
  }

  const clearBtn = document.getElementById("layer-clear");
  if (clearBtn && !clearBtn.dataset.bound) {
    clearBtn.addEventListener("click", () => {
      layerStack = [];
      renderLayerStack();
    });
    clearBtn.dataset.bound = "1";
  }
}

function renderLayerStack() {
  const stackEl = document.getElementById("layer-stack");
  const previewEl = document.getElementById("layer-preview-text");
  if (!stackEl) return;

  if (layerStack.length === 0) {
    stackEl.innerHTML = `<div class="layer-stack-empty">${escapeHtml(t("layer.empty"))}</div>`;
  } else {
    stackEl.innerHTML = layerStack.map((blockId, idx) => {
      const b = BLOCKS.find(x => x.id === blockId);
      return `
        <div class="layer-row">
          <span class="layer-row-color" style="background:${b.color}"></span>
          <span class="layer-row-label">${escapeHtml(t(b.labelKey))}</span>
          <button type="button" class="layer-row-remove" data-index="${idx}" aria-label="remove">✕</button>
        </div>
      `;
    }).join("");

    stackEl.querySelectorAll(".layer-row-remove").forEach(btn => {
      btn.addEventListener("click", () => {
        layerStack.splice(Number(btn.dataset.index), 1);
        renderLayerStack();
      });
    });
  }

  if (previewEl) previewEl.textContent = JSON.stringify(buildGeneratorSettings());
}

function buildGeneratorSettings() {
  if (layerStack.length === 0) return {};
  const layers = [];
  layerStack.forEach(blockId => {
    const last = layers[layers.length - 1];
    if (last && last.block === `minecraft:${blockId}`) {
      last.height += 1;
    } else {
      layers.push({ block: `minecraft:${blockId}`, height: 1 });
    }
  });
  return { layers, biome: "minecraft:plains" };
}

/* =========================================================
   Value collection
   ========================================================= */
function collectValues(prefix, schema) {
  const lines = [];
  schema.forEach(section => {
    section.fields.forEach(field => {
      if (field.type === "layers") return; // handled separately
      const id = `${prefix}-${field.key.replace(/[.]/g, "-")}`;
      const el = document.getElementById(id);
      if (!el) return;
      let value;
      if (field.type === "toggle") {
        value = el.checked;
      } else if (field.type === "number" || field.type === "port") {
        const n = parseInt(el.value, 10);
        value = isNaN(n) ? field.default : clamp(n, field.min, field.max);
      } else {
        value = el.value;
      }
      lines.push({ key: field.key, value });
    });
  });
  return lines;
}

function clamp(n, min, max) {
  let v = n;
  if (min !== undefined) v = Math.max(min, v);
  if (max !== undefined) v = Math.min(max, v);
  return v;
}

/* =========================================================
   Generation — Java Edition
   ========================================================= */
function generateJe() {
  const lines = collectValues("je", JE_SCHEMA);
  const levelType = document.getElementById("je-level-type");
  const generatorSettings = (levelType && levelType.value === "minecraft:flat")
    ? JSON.stringify(buildGeneratorSettings())
    : "{}";

  const text = buildPropertiesText(lines, [
    { key: "generator-settings", value: generatorSettings },
  ]);
  showOutput(text);
}

/* =========================================================
   Generation — Bedrock Edition
   ========================================================= */
function generateBe() {
  const lines = collectValues("be", BE_SCHEMA);
  const text = buildPropertiesText(lines, []);
  showOutput(text);
}

function buildPropertiesText(lines, extraLines) {
  const all = lines.concat(extraLines);
  const body = all.map(l => `${l.key}=${formatValue(l.value)}`).join("\n");
  return `#Minecraft server properties\n#Generated by MineLab\n${body}\n`;
}

function formatValue(value) {
  if (typeof value === "boolean") return value ? "true" : "false";
  return String(value);
}

/* =========================================================
   Output panel
   ========================================================= */
function showOutput(text) {
  document.getElementById("prop-output-text").textContent = text;

  const panel = document.getElementById("panel-prop-output");
  panel.hidden = false;
  panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* =========================================================
   Copy to clipboard / download
   ========================================================= */
function handleCopy(btn) {
  const targetId = btn.dataset.copyTarget;
  const targetEl = document.getElementById(targetId);
  if (!targetEl || !targetEl.textContent) return;
  const text = targetEl.textContent;

  const markCopied = () => {
    btn.textContent = t("btn.copied");
    btn.classList.add("is-copied");
    setTimeout(() => {
      btn.textContent = t("btn.copy");
      btn.classList.remove("is-copied");
    }, 1200);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(markCopied).catch(() => fallbackCopy(text, markCopied));
  } else {
    fallbackCopy(text, markCopied);
  }
}

function fallbackCopy(text, onDone) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try { document.execCommand("copy"); } catch (e) { /* ignore */ }
  document.body.removeChild(ta);
  if (onDone) onDone();
}

function handleDownload() {
  const outputEl = document.getElementById("prop-output-text");
  const text = outputEl.textContent;
  if (!text) return;

  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "server.properties";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* =========================================================
   Utils
   ========================================================= */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
