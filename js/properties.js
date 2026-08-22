"use strict";

/* =========================================================
   i18n — general UI strings
   ========================================================= */
const I18N = {
  ja: {
    "brand.tagline": "server.propertiesエディター",
    "nav.home": "ホーム",
    "nav.craft": "クラフト計算機",
    "nav.motd": "MOTDジェネレーター",
    "nav.pack": "リソースパック情報ジェネレーター",
    "nav.properties": "server.propertiesエディター",
    "nav.emptyHint": "準備中の機能はまだありません。",
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
    "nav.home": "Home",
    "nav.craft": "Recipe Calculator",
    "nav.motd": "MOTD Generator",
    "nav.pack": "Resource Pack Metadata Generator",
    "nav.properties": "server.properties Editor",
    "nav.emptyHint": "No features are ready yet.",
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
  },
  "zh-CN": {
    "brand.tagline": "server.properties 编辑器",
    "nav.home": "首页",
    "nav.craft": "合成计算器",
    "nav.motd": "MOTD 生成器",
    "nav.pack": "资源包信息生成器",
    "nav.properties": "server.properties 编辑器",
    "nav.emptyHint": "暂时还没有可用的功能。",
    "eyebrow.platform": "STEP 01 — 平台",
    "heading.platform": "选择适配平台",
    "hint.platform": "请选择要设置的服务器类型。Java 版和 Bedrock 版（基岩版）的 server.properties 配置项有所不同。",
    "platform.je.title": "Java 版",
    "platform.je.desc": "生成 server.properties",
    "platform.be.title": "基岩版（Bedrock）",
    "platform.be.desc": "生成 server.properties",
    "eyebrow.jeInput": "STEP 02 — 输入（Java 版）",
    "heading.jeInput": "server.properties 的内容（Java 版）",
    "hint.jeInput": "这里汇总了常用的设置项。如果不确定，保持默认值即可。点击项目名称可以展开或折叠。",
    "eyebrow.beInput": "STEP 02 — 输入（基岩版）",
    "heading.beInput": "server.properties 的内容（基岩版）",
    "hint.beInput": "这里汇总了常用的设置项。如果不确定，保持默认值即可。点击项目名称可以展开或折叠。",
    "btn.generate": "生成",
    "eyebrow.propOutput": "STEP 03 — 输出",
    "heading.propOutput": "输出",
    "btn.copy": "复制",
    "btn.copied": "已复制",
    "btn.download": "保存为文件",
    "note.output": "请将生成的内容保存为名为 server.properties 的文本文件，并放置在服务器文件夹的根目录下（与 server.jar / bedrock_server 同级）。修改后需要重启服务器才能生效。",
    "footer.disclaimer": "本网站为非官方同人制作工具，与 Minecraft 及 Mojang 无关。\n部分内容借助 AI 助手生成。\n© 2026 MineLab. All rights reserved.",
    "layer.title": "构建地面图层（从下往上堆叠）",
    "layer.help": "点击方块即可在最上方添加一层。连续相同的方块会自动合并。",
    "layer.empty": "还没有任何图层。点击下方的方块即可添加。",
    "layer.clear": "全部清除",
    "layer.undo": "撤销一步",
    "layer.previewLabel": "generator-settings 预览：",
    "block.dirt": "泥土",
    "block.grass_block": "草方块",
    "block.glass": "玻璃",
    "block.sandstone": "砂岩",
    "block.stone": "石头",
    "block.bedrock": "基岩",
    "port.random": "生成一个随机值（从 49152～65535 范围内选择，不易与其他常用端口冲突）",
  },
  "zh-TW": {
    "brand.tagline": "server.properties 編輯器",
    "nav.home": "首頁",
    "nav.craft": "合成計算器",
    "nav.motd": "MOTD 生成器",
    "nav.pack": "資源包資訊生成器",
    "nav.properties": "server.properties 編輯器",
    "nav.emptyHint": "暫時還沒有可用的功能。",
    "eyebrow.platform": "STEP 01 — 平臺",
    "heading.platform": "選擇適配平臺",
    "hint.platform": "請選擇要設定的伺服器型別。Java 版和 Bedrock 版（基岩版）的 server.properties 配置項有所不同。",
    "platform.je.title": "Java 版",
    "platform.je.desc": "生成 server.properties",
    "platform.be.title": "基岩版（Bedrock）",
    "platform.be.desc": "生成 server.properties",
    "eyebrow.jeInput": "STEP 02 — 輸入（Java 版）",
    "heading.jeInput": "server.properties 的內容（Java 版）",
    "hint.jeInput": "這裡彙總了常用的設定項。如果不確定，保持預設值即可。點選專案名稱可以展開或摺疊。",
    "eyebrow.beInput": "STEP 02 — 輸入（基岩版）",
    "heading.beInput": "server.properties 的內容（基岩版）",
    "hint.beInput": "這裡彙總了常用的設定項。如果不確定，保持預設值即可。點選專案名稱可以展開或摺疊。",
    "btn.generate": "生成",
    "eyebrow.propOutput": "STEP 03 — 輸出",
    "heading.propOutput": "輸出",
    "btn.copy": "複製",
    "btn.copied": "已複製",
    "btn.download": "儲存為檔案",
    "note.output": "請將生成的內容儲存為名為 server.properties 的文字檔案，並放置在伺服器資料夾的根目錄下（與 server.jar / bedrock_server 同級）。修改後需要重啟伺服器才能生效。",
    "footer.disclaimer": "本網站為非官方同人製作工具，與 Minecraft 及 Mojang 無關。\n部分內容藉助 AI 助手生成。\n© 2026 MineLab. All rights reserved.",
    "layer.title": "構建地面圖層（從下往上堆疊）",
    "layer.help": "點選方塊即可在最上方新增一層。連續相同的方塊會自動合併。",
    "layer.empty": "還沒有任何圖層。點選下方的方塊即可新增。",
    "layer.clear": "全部清除",
    "layer.undo": "撤銷一步",
    "layer.previewLabel": "generator-settings 預覽：",
    "block.dirt": "泥土",
    "block.grass_block": "草方塊",
    "block.glass": "玻璃",
    "block.sandstone": "砂岩",
    "block.stone": "石頭",
    "block.bedrock": "基岩",
    "port.random": "生成一個隨機值（從 49152～65535 範圍內選擇，不易與其他常用埠衝突）",
  }
};

const SUPPORTED_LANGS = ["ja", "en", "zh-CN", "zh-TW"];
let currentLang = "ja";

/* =========================================================
   Feature / tool switcher (hamburger menu)
   ========================================================= */
const FEATURES = [
  { id: "home", icon: "🏠", nameKey: "nav.home", tagline: "MineLab Home", active: false, href: "index.html" },
  { id: "craft", icon: "⛏", nameKey: "nav.craft", tagline: "Recipe Stack Resolver", active: false, href: "craft.html" },
  { id: "motd", icon: "📜", nameKey: "nav.motd", tagline: "Server List Message Editor", active: false, href: "motd.html" },
  { id: "pack", icon: "🧩", nameKey: "nav.pack", tagline: "pack.mcmeta / manifest.json Generator", active: false, href: "pack.html" },
  { id: "properties", icon: "🖥", nameKey: "nav.properties", tagline: "Server Properties Editor", active: true, href: null },
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
    title: { ja: "基本設定", en: "General", "zh-CN": "基本设置", "zh-TW": "基本設定" },
    icon: "⚙",
    fields: [
      { key: "motd", type: "text", default: "A Minecraft Server",
        label: { ja: "MOTD（サーバー一覧の説明文）", en: "MOTD (server list description)", "zh-CN": "MOTD（服务器列表说明文）", "zh-TW": "MOTD（伺服器列表說明文）" },
        hint: { ja: "サーバー一覧でサーバー名の下に表示される文章です。", en: "The text shown below the server name in the multiplayer server list.", "zh-CN": "在多人游戏服务器列表中，显示于服务器名称下方的文字。", "zh-TW": "在多人遊戲伺服器列表中，顯示於伺服器名稱下方的文字。" } },
      { key: "level-name", type: "text", default: "world",
        label: { ja: "ワールド名（level-name）", en: "World name (level-name)", "zh-CN": "世界名称（level-name）", "zh-TW": "世界名稱（level-name）" },
        hint: { ja: "ワールドの保存フォルダ名にもなります。", en: "Also used as the save folder name for the world.", "zh-CN": "同时也会作为世界存档的文件夹名称。", "zh-TW": "同時也會作為世界存檔的資料夾名稱。" } },
      { key: "level-seed", type: "text", default: "",
        label: { ja: "ワールドシード（level-seed）", en: "World seed (level-seed)", "zh-CN": "世界种子（level-seed）", "zh-TW": "世界種子（level-seed）" },
        hint: { ja: "空欄だとランダムなシードになります。", en: "Leave blank for a random seed.", "zh-CN": "留空则使用随机种子。", "zh-TW": "留空則使用隨機種子。" } },
      { key: "max-players", type: "number", default: 20, min: 0, max: 2000000000,
        label: { ja: "最大プレイヤー数", en: "Max players", "zh-CN": "最大玩家数", "zh-TW": "最大玩家數" } },
      { key: "gamemode", type: "select", default: "survival",
        label: { ja: "ゲームモード", en: "Game mode", "zh-CN": "游戏模式", "zh-TW": "遊戲模式" },
        options: [
          { value: "survival", label: { ja: "サバイバル", en: "Survival", "zh-CN": "生存模式", "zh-TW": "生存模式" } },
          { value: "creative", label: { ja: "クリエイティブ", en: "Creative", "zh-CN": "创造模式", "zh-TW": "創造模式" } },
          { value: "adventure", label: { ja: "アドベンチャー", en: "Adventure", "zh-CN": "冒险模式", "zh-TW": "冒險模式" } },
          { value: "spectator", label: { ja: "スペクテイター", en: "Spectator", "zh-CN": "旁观模式", "zh-TW": "旁觀模式" } },
        ] },
      { key: "difficulty", type: "select", default: "easy",
        label: { ja: "難易度", en: "Difficulty", "zh-CN": "难度", "zh-TW": "難度" },
        options: [
          { value: "peaceful", label: { ja: "ピースフル", en: "Peaceful", "zh-CN": "和平", "zh-TW": "和平" } },
          { value: "easy", label: { ja: "イージー", en: "Easy", "zh-CN": "简单", "zh-TW": "簡單" } },
          { value: "normal", label: { ja: "ノーマル", en: "Normal", "zh-CN": "普通", "zh-TW": "普通" } },
          { value: "hard", label: { ja: "ハード", en: "Hard", "zh-CN": "困难", "zh-TW": "困難" } },
        ] },
      { key: "hardcore", type: "toggle", default: false,
        label: { ja: "ハードコアモード", en: "Hardcore mode", "zh-CN": "极限模式", "zh-TW": "極限模式" },
        hint: { ja: "有効にすると、死亡時にワールドがスペクテイターモードになります。", en: "When enabled, dying switches the world to spectator mode permanently.", "zh-CN": "启用后，死亡将永久把世界切换为旁观模式。", "zh-TW": "啟用後，死亡將永久把世界切換為旁觀模式。" } },
      { key: "force-gamemode", type: "toggle", default: false,
        label: { ja: "参加時に強制的にデフォルトのゲームモードにする", en: "Force default game mode on join", "zh-CN": "加入时强制使用默认游戏模式", "zh-TW": "加入時強制使用預設遊戲模式" } },
    ]
  },
  {
    title: { ja: "ワールド生成", en: "World generation", "zh-CN": "世界生成", "zh-TW": "世界生成" },
    icon: "🗺",
    fields: [
      { key: "level-type", type: "select", default: "minecraft:normal",
        label: { ja: "ワールドタイプ（level-type）", en: "World type (level-type)", "zh-CN": "世界类型（level-type）", "zh-TW": "世界型別（level-type）" },
        options: [
          { value: "minecraft:normal", label: { ja: "通常（default）", en: "Default", "zh-CN": "默认（default）", "zh-TW": "預設（default）" } },
          { value: "minecraft:flat", label: { ja: "スーパーフラット（flat）", en: "Superflat", "zh-CN": "超平坦（flat）", "zh-TW": "超平坦（flat）" } },
          { value: "minecraft:large_biomes", label: { ja: "広大なバイオーム（largeBiomes）", en: "Large biomes", "zh-CN": "大型生物群系（largeBiomes）", "zh-TW": "大型生物群系（largeBiomes）" } },
          { value: "minecraft:amplified", label: { ja: "増幅（amplified）", en: "Amplified", "zh-CN": "放大化（amplified）", "zh-TW": "放大化（amplified）" } },
          { value: "minecraft:single_biome_surface", label: { ja: "ビュッフェ（buffet）", en: "Buffet (single biome)", "zh-CN": "自定义（buffet）", "zh-TW": "自定義（buffet）" } },
        ] },
      { key: "__layers__", type: "layers" },
      { key: "generate-structures", type: "toggle", default: true,
        label: { ja: "村や遺跡などの構造物を生成する", en: "Generate structures (villages, ruins, etc.)", "zh-CN": "生成村庄、遗迹等结构", "zh-TW": "生成村莊、遺蹟等結構" } },
      { key: "spawn-protection", type: "number", default: 16, min: 0, max: 100000,
        label: { ja: "スポーン保護範囲（spawn-protection）", en: "Spawn protection radius", "zh-CN": "出生点保护范围（spawn-protection）", "zh-TW": "出生點保護範圍（spawn-protection）" } },
      { key: "max-world-size", type: "number", default: 29999984, min: 1, max: 29999984,
        label: { ja: "ワールドの最大サイズ（ブロック数）", en: "Max world size (blocks)", "zh-CN": "世界最大尺寸（方块数）", "zh-TW": "世界最大尺寸（方塊數）" } },
      { key: "view-distance", type: "number", default: 10, min: 3, max: 32,
        label: { ja: "視野距離（view-distance / チャンク数）", en: "View distance (chunks)", "zh-CN": "视距（view-distance / 区块数）", "zh-TW": "視距（view-distance / 區塊數）" } },
      { key: "simulation-distance", type: "number", default: 10, min: 3, max: 32,
        label: { ja: "シミュレーション距離（simulation-distance / チャンク数）", en: "Simulation distance (chunks)", "zh-CN": "模拟距离（simulation-distance / 区块数）", "zh-TW": "模擬距離（simulation-distance / 區塊數）" } },
    ]
  },
  {
    title: { ja: "ネットワーク", en: "Network", "zh-CN": "网络", "zh-TW": "網路" },
    icon: "🌐",
    fields: [
      { key: "server-port", type: "port", default: 25565, min: 1, max: 65535,
        label: { ja: "サーバーポート（server-port）", en: "Server port", "zh-CN": "服务器端口（server-port）", "zh-TW": "伺服器埠（server-port）" } },
      { key: "server-ip", type: "text", default: "",
        label: { ja: "バインドするIPアドレス（server-ip）", en: "IP address to bind (server-ip)", "zh-CN": "绑定的 IP 地址（server-ip）", "zh-TW": "繫結的 IP 地址（server-ip）" },
        hint: { ja: "空欄のままで通常は問題ありません。", en: "Usually fine left blank.", "zh-CN": "通常留空即可。", "zh-TW": "通常留空即可。" } },
      { key: "online-mode", type: "toggle", default: true,
        label: { ja: "オンラインモード（Mojangアカウント認証）", en: "Online mode (Mojang account authentication)", "zh-CN": "在线模式（Mojang 账号验证）", "zh-TW": "線上模式（Mojang 賬號驗證）" } },
      { key: "white-list", type: "toggle", default: false,
        label: { ja: "ホワイトリストを使う", en: "Enable whitelist", "zh-CN": "启用白名单", "zh-TW": "啟用白名單" } },
      { key: "enforce-whitelist", type: "toggle", default: false,
        label: { ja: "ホワイトリストを強制する", en: "Enforce whitelist", "zh-CN": "强制使用白名单", "zh-TW": "強制使用白名單" } },
      { key: "max-tick-time", type: "number", default: 60000, min: -1, max: 9000000000000000,
        label: { ja: "1ティックの最大許容時間（ms）", en: "Max tick time (ms)", "zh-CN": "单个 tick 最大允许时间（毫秒）", "zh-TW": "單個 tick 最大允許時間（毫秒）" } },
      { key: "network-compression-threshold", type: "number", default: 256, min: -1, max: 1000000,
        label: { ja: "パケット圧縮のしきい値（バイト）", en: "Network compression threshold (bytes)", "zh-CN": "网络压缩阈值（字节）", "zh-TW": "網路壓縮閾值（位元組）" } },
      { key: "rate-limit", type: "number", default: 0, min: 0, max: 1000000,
        label: { ja: "パケットレート制限（0で無効）", en: "Packet rate limit (0 to disable)", "zh-CN": "数据包速率限制（0 为禁用）", "zh-TW": "資料包速率限制（0 為禁用）" } },
    ]
  },
  {
    title: { ja: "RCON / Query", en: "RCON / Query", "zh-CN": "RCON / Query", "zh-TW": "RCON / Query" },
    icon: "🔌",
    fields: [
      { key: "enable-rcon", type: "toggle", default: false,
        label: { ja: "RCONを有効にする", en: "Enable RCON", "zh-CN": "启用 RCON", "zh-TW": "啟用 RCON" } },
      { key: "rcon.port", type: "port", default: 25575, min: 1, max: 65535,
        label: { ja: "RCONポート", en: "RCON port", "zh-CN": "RCON 端口", "zh-TW": "RCON 埠" } },
      { key: "rcon.password", type: "text", default: "",
        label: { ja: "RCONパスワード", en: "RCON password", "zh-CN": "RCON 密码", "zh-TW": "RCON 密碼" } },
      { key: "enable-query", type: "toggle", default: false,
        label: { ja: "Queryを有効にする", en: "Enable query", "zh-CN": "启用 Query", "zh-TW": "啟用 Query" } },
      { key: "query.port", type: "port", default: 25565, min: 1, max: 65535,
        label: { ja: "Queryポート", en: "Query port", "zh-CN": "Query 端口", "zh-TW": "Query 埠" } },
    ]
  },
  {
    title: { ja: "リソースパック", en: "Resource pack", "zh-CN": "资源包", "zh-TW": "資源包" },
    icon: "🧩",
    fields: [
      { key: "require-resource-pack", type: "toggle", default: false,
        label: { ja: "リソースパックの使用を必須にする", en: "Require resource pack", "zh-CN": "强制要求使用资源包", "zh-TW": "強制要求使用資源包" } },
      { key: "resource-pack", type: "text", default: "",
        label: { ja: "リソースパックのダウンロードURL", en: "Resource pack download URL", "zh-CN": "资源包下载地址", "zh-TW": "資源包下載地址" } },
      { key: "resource-pack-sha1", type: "text", default: "",
        label: { ja: "リソースパックのSHA-1（任意）", en: "Resource pack SHA-1 (optional)", "zh-CN": "资源包 SHA-1（可选）", "zh-TW": "資源包 SHA-1（可選）" } },
    ]
  },
  {
    title: { ja: "その他", en: "Other", "zh-CN": "其他", "zh-TW": "其他" },
    icon: "🔧",
    fields: [
      { key: "allow-flight", type: "toggle", default: false,
        label: { ja: "サバイバルでの飛行を許可する", en: "Allow flight in survival", "zh-CN": "允许生存模式下飞行", "zh-TW": "允許生存模式下飛行" } },
      { key: "op-permission-level", type: "number", default: 4, min: 0, max: 4,
        label: { ja: "OPの権限レベル（0〜4）", en: "OP permission level (0–4)", "zh-CN": "OP 权限等级（0～4）", "zh-TW": "OP 許可權等級（0～4）" } },
      { key: "function-permission-level", type: "number", default: 2, min: 1, max: 4,
        label: { ja: "ファンクションの権限レベル（1〜4）", en: "Function permission level (1–4)", "zh-CN": "函数权限等级（1～4）", "zh-TW": "函式許可權等級（1～4）" } },
      { key: "entity-broadcast-range-percentage", type: "number", default: 100, min: 10, max: 1000,
        label: { ja: "エンティティ描画範囲（%）", en: "Entity broadcast range (%)", "zh-CN": "实体广播范围（%）", "zh-TW": "實體廣播範圍（%）" } },
    ]
  },
];

/* =========================================================
   Schema — Bedrock Edition
   ========================================================= */
const BE_SCHEMA = [
  {
    title: { ja: "基本設定", en: "General", "zh-CN": "基本设置", "zh-TW": "基本設定" },
    icon: "⚙",
    fields: [
      { key: "server-name", type: "text", default: "Dedicated Server",
        label: { ja: "サーバー名（server-name）", en: "Server name", "zh-CN": "服务器名称（server-name）", "zh-TW": "伺服器名稱（server-name）" } },
      { key: "gamemode", type: "select", default: "survival",
        label: { ja: "ゲームモード", en: "Game mode", "zh-CN": "游戏模式", "zh-TW": "遊戲模式" },
        options: [
          { value: "survival", label: { ja: "サバイバル", en: "Survival", "zh-CN": "生存模式", "zh-TW": "生存模式" } },
          { value: "creative", label: { ja: "クリエイティブ", en: "Creative", "zh-CN": "创造模式", "zh-TW": "創造模式" } },
          { value: "adventure", label: { ja: "アドベンチャー", en: "Adventure", "zh-CN": "冒险模式", "zh-TW": "冒險模式" } },
        ] },
      { key: "force-gamemode", type: "toggle", default: false,
        label: { ja: "参加時に強制的にデフォルトのゲームモードにする", en: "Force default game mode on join", "zh-CN": "加入时强制使用默认游戏模式", "zh-TW": "加入時強制使用預設遊戲模式" } },
      { key: "difficulty", type: "select", default: "easy",
        label: { ja: "難易度", en: "Difficulty", "zh-CN": "难度", "zh-TW": "難度" },
        options: [
          { value: "peaceful", label: { ja: "ピースフル", en: "Peaceful", "zh-CN": "和平", "zh-TW": "和平" } },
          { value: "easy", label: { ja: "イージー", en: "Easy", "zh-CN": "简单", "zh-TW": "簡單" } },
          { value: "normal", label: { ja: "ノーマル", en: "Normal", "zh-CN": "普通", "zh-TW": "普通" } },
          { value: "hard", label: { ja: "ハード", en: "Hard", "zh-CN": "困难", "zh-TW": "困難" } },
        ] },
      { key: "allow-cheats", type: "toggle", default: false,
        label: { ja: "チート（コマンド）を許可する", en: "Allow cheats (commands)", "zh-CN": "允许作弊（指令）", "zh-TW": "允許作弊（指令）" } },
      { key: "max-players", type: "number", default: 10, min: 1, max: 1000,
        label: { ja: "最大プレイヤー数", en: "Max players", "zh-CN": "最大玩家数", "zh-TW": "最大玩家數" } },
      { key: "default-player-permission-level", type: "select", default: "member",
        label: { ja: "初参加プレイヤーの権限レベル", en: "Default permission level for new players", "zh-CN": "新玩家的默认权限等级", "zh-TW": "新玩家的預設許可權等級" },
        options: [
          { value: "visitor", label: { ja: "ビジター", en: "Visitor", "zh-CN": "访客", "zh-TW": "訪客" } },
          { value: "member", label: { ja: "メンバー", en: "Member", "zh-CN": "成员", "zh-TW": "成員" } },
          { value: "operator", label: { ja: "オペレーター", en: "Operator", "zh-CN": "操作员", "zh-TW": "操作員" } },
        ] },
    ]
  },
  {
    title: { ja: "ネットワーク", en: "Network", "zh-CN": "网络", "zh-TW": "網路" },
    icon: "🌐",
    fields: [
      { key: "server-port", type: "port", default: 19132, min: 1, max: 65535,
        label: { ja: "サーバーポート（IPv4）", en: "Server port (IPv4)", "zh-CN": "服务器端口（IPv4）", "zh-TW": "伺服器埠（IPv4）" } },
      { key: "server-portv6", type: "port", default: 19133, min: 1, max: 65535,
        label: { ja: "サーバーポート（IPv6）", en: "Server port (IPv6)", "zh-CN": "服务器端口（IPv6）", "zh-TW": "伺服器埠（IPv6）" } },
      { key: "online-mode", type: "toggle", default: true,
        label: { ja: "オンラインモード（Xbox Live認証）", en: "Online mode (Xbox Live authentication)", "zh-CN": "在线模式（Xbox Live 验证）", "zh-TW": "線上模式（Xbox Live 驗證）" } },
      { key: "allow-list", type: "toggle", default: true,
        label: { ja: "許可リスト（ホワイトリスト）を使う", en: "Enable allowlist", "zh-CN": "启用许可名单（白名单）", "zh-TW": "啟用許可名單（白名單）" } },
      { key: "player-idle-timeout", type: "number", default: 30, min: 0, max: 100000,
        label: { ja: "アイドルタイムアウト（分・0で無効）", en: "Idle timeout (minutes, 0 to disable)", "zh-CN": "闲置超时（分钟，0 为禁用）", "zh-TW": "閒置超時（分鐘，0 為禁用）" } },
      { key: "max-threads", type: "number", default: 8, min: 0, max: 256,
        label: { ja: "使用する最大スレッド数", en: "Max threads to use", "zh-CN": "使用的最大线程数", "zh-TW": "使用的最大執行緒數" } },
    ]
  },
  {
    title: { ja: "ワールド", en: "World", "zh-CN": "世界", "zh-TW": "世界" },
    icon: "🗺",
    fields: [
      { key: "level-name", type: "text", default: "Bedrock level",
        label: { ja: "ワールド名（level-name）", en: "World name (level-name)", "zh-CN": "世界名称（level-name）", "zh-TW": "世界名稱（level-name）" } },
      { key: "level-seed", type: "text", default: "",
        label: { ja: "ワールドシード（level-seed）", en: "World seed", "zh-CN": "世界种子（level-seed）", "zh-TW": "世界種子（level-seed）" },
        hint: { ja: "空欄だとランダムなシードになります。", en: "Leave blank for a random seed.", "zh-CN": "留空则使用随机种子。", "zh-TW": "留空則使用隨機種子。" } },
      { key: "view-distance", type: "number", default: 32, min: 5, max: 96,
        label: { ja: "視野距離（view-distance / チャンク数）", en: "View distance (chunks)", "zh-CN": "视距（view-distance / 区块数）", "zh-TW": "視距（view-distance / 區塊數）" } },
      { key: "tick-distance", type: "number", default: 4, min: 4, max: 12,
        label: { ja: "ティック距離（tick-distance / チャンク数）", en: "Tick distance (chunks)", "zh-CN": "Tick 距离（tick-distance / 区块数）", "zh-TW": "Tick 距離（tick-distance / 區塊數）" } },
    ]
  },
  {
    title: { ja: "その他", en: "Other", "zh-CN": "其他", "zh-TW": "其他" },
    icon: "🔧",
    fields: [
      { key: "texturepack-required", type: "toggle", default: false,
        label: { ja: "テクスチャパックの使用を必須にする", en: "Require texture pack", "zh-CN": "强制要求使用材质包", "zh-TW": "強制要求使用材質包" } },
      { key: "content-log-file-enabled", type: "toggle", default: false,
        label: { ja: "コンテンツエラーをログファイルに記録する", en: "Log content errors to a file", "zh-CN": "将内容错误记录到日志文件", "zh-TW": "將內容錯誤記錄到日誌檔案" } },
      { key: "compression-threshold", type: "number", default: 1, min: 0, max: 65535,
        label: { ja: "圧縮のしきい値（バイト）", en: "Compression threshold (bytes)", "zh-CN": "压缩阈值（字节）", "zh-TW": "壓縮閾值（位元組）" } },
      { key: "compression-algorithm", type: "select", default: "zlib",
        label: { ja: "圧縮アルゴリズム", en: "Compression algorithm", "zh-CN": "压缩算法", "zh-TW": "壓縮演算法" },
        options: [
          { value: "zlib", label: { ja: "zlib", en: "zlib", "zh-CN": "zlib", "zh-TW": "zlib" } },
          { value: "snappy", label: { ja: "snappy", en: "snappy", "zh-CN": "snappy", "zh-TW": "snappy" } },
        ] },
      { key: "chat-restriction", type: "select", default: "None",
        label: { ja: "チャットの制限レベル", en: "Chat restriction level", "zh-CN": "聊天限制等级", "zh-TW": "聊天限制等級" },
        options: [
          { value: "None", label: { ja: "制限なし（None）", en: "None", "zh-CN": "无限制（None）", "zh-TW": "無限制（None）" } },
          { value: "Dropped", label: { ja: "送信のみ無効（Dropped）", en: "Dropped", "zh-CN": "仅禁止发送（Dropped）", "zh-TW": "僅禁止傳送（Dropped）" } },
          { value: "Disabled", label: { ja: "チャットUI自体を無効（Disabled）", en: "Disabled", "zh-CN": "禁用聊天界面（Disabled）", "zh-TW": "禁用聊天介面（Disabled）" } },
        ] },
      { key: "disable-player-interaction", type: "toggle", default: false,
        label: { ja: "プレイヤー同士の干渉を無効にする", en: "Disable player-to-player interaction", "zh-CN": "禁用玩家间互动", "zh-TW": "禁用玩家間互動" } },
      { key: "client-side-chunk-generation-enabled", type: "toggle", default: true,
        label: { ja: "クライアント側チャンク生成を許可する", en: "Allow client-side chunk generation", "zh-CN": "允许客户端区块生成", "zh-TW": "允許客戶端區塊生成" } },
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
  currentLang = SUPPORTED_LANGS.includes(saved) ? saved : "ja";

  const select = document.getElementById("lang-select");
  select.value = currentLang;

  select.addEventListener("change", () => {
    currentLang = SUPPORTED_LANGS.includes(select.value) ? select.value : "ja";
    safeSetStorage("mc-craft-lang", currentLang);
    applyLang();
    renderNavMenu();
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
          ${currentLang !== "en" ? `<span class="nav-menu-name">${escapeHtml(t(f.nameKey))}</span>` : ""}
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
