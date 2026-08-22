"use strict";

/* =========================================================
   i18n
   ========================================================= */
const I18N = {
  ja: {
    "brand.tagline": "リソースパック情報ジェネレーター",
    "nav.home": "ホーム",
    "nav.craft": "クラフト計算機",
    "nav.motd": "MOTDジェネレーター",
    "nav.pack": "リソースパック情報ジェネレーター",
    "nav.properties": "server.propertiesエディター",
    "nav.emptyHint": "準備中の機能はまだありません。",
    "eyebrow.platform": "STEP 01 — プラットフォーム",
    "heading.platform": "対応プラットフォームを選択",
    "hint.platform": "作りたいリソースパックの種類を選んでください。Java版は pack.mcmeta、統合版（Bedrock）は manifest.json を生成します。",
    "platform.je.title": "Java Edition",
    "platform.je.desc": "pack.mcmeta を生成",
    "platform.be.title": "Bedrock Edition（統合版）",
    "platform.be.desc": "manifest.json を生成",
    "eyebrow.jeInput": "STEP 02 — 入力（Java Edition）",
    "heading.jeInput": "pack.mcmeta の内容",
    "label.jeVersion": "対応するMinecraftのバージョン",
    "label.description": "説明文（description）",
    "placeholder.description": "My Resource Pack",
    "btn.generate": "生成する",
    "eyebrow.beInput": "STEP 02 — 入力（Bedrock Edition）",
    "heading.beInput": "manifest.json の内容",
    "label.packName": "パック名（name）",
    "label.beEngineVersion": "対象とする最小のゲームバージョン（min_engine_version）",
    "label.packVersion": "パック自体のバージョン（Minecraftのバージョンとは別・自由に変更可）",
    "label.headerUuid": "ヘッダーUUID（header.uuid）",
    "label.moduleUuid": "モジュールUUID（modules[].uuid）",
    "btn.generateUuid": "自動生成",
    "hint.uuid": "2つのUUIDは別々の値にしてください。他のパックと被らないよう、公開する際は自動生成した値をそのまま使うことをおすすめします。",
    "eyebrow.packOutput": "STEP 03 — 出力",
    "heading.packOutput": "出力",
    "btn.copy": "コピー",
    "btn.copied": "コピーしました",
    "btn.download": "ファイルとして保存",
    "footer.disclaimer": "本サイトは非公式のファンメイドツールです。Minecraft および Mojang とは関係ありません。\n一部コンテンツの生成にAIアシスタントを利用しています。\n© 2026 MineLab. All rights reserved.",
    "note.je.old": "生成された内容を pack.mcmeta という名前のテキストファイルとして保存し、リソースパックのフォルダ直下（assets フォルダと同じ階層）に置いてください。",
    "note.je.range": "このバージョンでは min_format / max_format 形式で出力されます。生成された内容を pack.mcmeta という名前のテキストファイルとして保存し、リソースパックのフォルダ直下（assets フォルダと同じ階層）に置いてください。",
    "note.be": "生成された内容を manifest.json という名前のテキストファイルとして保存し、リソースパックのフォルダ直下（textures フォルダなどと同じ階層）に置いてください。",
    "alert.uuidMissing": "先にUUIDを入力または自動生成してください。",
  },
  en: {
    "brand.tagline": "Resource Pack Metadata Generator",
    "nav.home": "Home",
    "nav.craft": "Recipe Calculator",
    "nav.motd": "MOTD Generator",
    "nav.pack": "Resource Pack Metadata Generator",
    "nav.properties": "server.properties Editor",
    "nav.emptyHint": "No features are ready yet.",
    "eyebrow.platform": "STEP 01 — PLATFORM",
    "heading.platform": "Choose your platform",
    "hint.platform": "Pick the kind of resource pack you're making. Java Edition generates pack.mcmeta, Bedrock Edition generates manifest.json.",
    "platform.je.title": "Java Edition",
    "platform.je.desc": "Generates pack.mcmeta",
    "platform.be.title": "Bedrock Edition",
    "platform.be.desc": "Generates manifest.json",
    "eyebrow.jeInput": "STEP 02 — INPUT (Java Edition)",
    "heading.jeInput": "pack.mcmeta contents",
    "label.jeVersion": "Minecraft version to support",
    "label.description": "Description",
    "placeholder.description": "My Resource Pack",
    "btn.generate": "Generate",
    "eyebrow.beInput": "STEP 02 — INPUT (Bedrock Edition)",
    "heading.beInput": "manifest.json contents",
    "label.packName": "Pack name",
    "label.beEngineVersion": "Minimum game version to support (min_engine_version)",
    "label.packVersion": "Pack's own version (independent from the Minecraft version — freely editable)",
    "label.headerUuid": "Header UUID (header.uuid)",
    "label.moduleUuid": "Module UUID (modules[].uuid)",
    "btn.generateUuid": "Generate",
    "hint.uuid": "These two UUIDs must be different from each other. When publishing your pack, it's best to keep the auto-generated values so they don't collide with anyone else's.",
    "eyebrow.packOutput": "STEP 03 — OUTPUT",
    "heading.packOutput": "Output",
    "btn.copy": "Copy",
    "btn.copied": "Copied!",
    "btn.download": "Save as file",
    "footer.disclaimer": "This is an unofficial fan-made tool. Not affiliated with Minecraft or Mojang.\nSome content on this site was generated with the help of an AI assistant.\n© 2026 MineLab. All rights reserved.",
    "note.je.old": "Save the generated text as a file named pack.mcmeta and place it at the root of your resource pack folder (next to the assets folder).",
    "note.je.range": "This version is output using the min_format / max_format style. Save the generated text as a file named pack.mcmeta and place it at the root of your resource pack folder (next to the assets folder).",
    "note.be": "Save the generated text as a file named manifest.json and place it at the root of your resource pack folder (next to the textures folder, etc.).",
    "alert.uuidMissing": "Please enter or generate a UUID first.",
  },
  "zh-CN": {
    "brand.tagline": "资源包信息生成器",
    "nav.home": "首页",
    "nav.craft": "合成计算器",
    "nav.motd": "MOTD 生成器",
    "nav.pack": "资源包信息生成器",
    "nav.properties": "server.properties 编辑器",
    "nav.emptyHint": "暂时还没有可用的功能。",
    "eyebrow.platform": "STEP 01 — 平台",
    "heading.platform": "选择适配平台",
    "hint.platform": "请选择要制作的资源包类型。Java 版生成 pack.mcmeta，基岩版（Bedrock）生成 manifest.json。",
    "platform.je.title": "Java 版",
    "platform.je.desc": "生成 pack.mcmeta",
    "platform.be.title": "基岩版（Bedrock）",
    "platform.be.desc": "生成 manifest.json",
    "eyebrow.jeInput": "STEP 02 — 输入（Java 版）",
    "heading.jeInput": "pack.mcmeta 的内容",
    "label.jeVersion": "适配的 Minecraft 版本",
    "label.description": "说明文（description）",
    "placeholder.description": "My Resource Pack",
    "btn.generate": "生成",
    "eyebrow.beInput": "STEP 02 — 输入（基岩版）",
    "heading.beInput": "manifest.json 的内容",
    "label.packName": "资源包名称（name）",
    "label.beEngineVersion": "适配的最低游戏版本（min_engine_version）",
    "label.packVersion": "资源包自身的版本号（与 Minecraft 版本无关，可自由修改）",
    "label.headerUuid": "头部 UUID（header.uuid）",
    "label.moduleUuid": "模块 UUID（modules[].uuid）",
    "btn.generateUuid": "自动生成",
    "hint.uuid": "这两个 UUID 必须互不相同。发布资源包时，建议直接使用自动生成的值，以避免与其他资源包冲突。",
    "eyebrow.packOutput": "STEP 03 — 输出",
    "heading.packOutput": "输出",
    "btn.copy": "复制",
    "btn.copied": "已复制",
    "btn.download": "保存为文件",
    "footer.disclaimer": "本网站为非官方同人制作工具，与 Minecraft 及 Mojang 无关。\n部分内容借助 AI 助手生成。\n© 2026 MineLab. All rights reserved.",
    "note.je.old": "请将生成的内容保存为名为 pack.mcmeta 的文本文件，并放置在资源包文件夹的根目录下（与 assets 文件夹同级）。",
    "note.je.range": "此版本将以 min_format / max_format 格式输出。请将生成的内容保存为名为 pack.mcmeta 的文本文件，并放置在资源包文件夹的根目录下（与 assets 文件夹同级）。",
    "note.be": "请将生成的内容保存为名为 manifest.json 的文本文件，并放置在资源包文件夹的根目录下（与 textures 文件夹等同级）。",
    "alert.uuidMissing": "请先输入或自动生成 UUID。",
  },
  "zh-TW": {
    "brand.tagline": "資源包資訊生成器",
    "nav.home": "首頁",
    "nav.craft": "合成計算器",
    "nav.motd": "MOTD 生成器",
    "nav.pack": "資源包資訊生成器",
    "nav.properties": "server.properties 編輯器",
    "nav.emptyHint": "暫時還沒有可用的功能。",
    "eyebrow.platform": "STEP 01 — 平臺",
    "heading.platform": "選擇適配平臺",
    "hint.platform": "請選擇要製作的資源包型別。Java 版生成 pack.mcmeta，基岩版（Bedrock）生成 manifest.json。",
    "platform.je.title": "Java 版",
    "platform.je.desc": "生成 pack.mcmeta",
    "platform.be.title": "基岩版（Bedrock）",
    "platform.be.desc": "生成 manifest.json",
    "eyebrow.jeInput": "STEP 02 — 輸入（Java 版）",
    "heading.jeInput": "pack.mcmeta 的內容",
    "label.jeVersion": "適配的 Minecraft 版本",
    "label.description": "說明文（description）",
    "placeholder.description": "My Resource Pack",
    "btn.generate": "生成",
    "eyebrow.beInput": "STEP 02 — 輸入（基岩版）",
    "heading.beInput": "manifest.json 的內容",
    "label.packName": "資源包名稱（name）",
    "label.beEngineVersion": "適配的最低遊戲版本（min_engine_version）",
    "label.packVersion": "資源包自身的版本號（與 Minecraft 版本無關，可自由修改）",
    "label.headerUuid": "頭部 UUID（header.uuid）",
    "label.moduleUuid": "模組 UUID（modules[].uuid）",
    "btn.generateUuid": "自動生成",
    "hint.uuid": "這兩個 UUID 必須互不相同。釋出資源包時，建議直接使用自動生成的值，以避免與其他資源包衝突。",
    "eyebrow.packOutput": "STEP 03 — 輸出",
    "heading.packOutput": "輸出",
    "btn.copy": "複製",
    "btn.copied": "已複製",
    "btn.download": "儲存為檔案",
    "footer.disclaimer": "本網站為非官方同人製作工具，與 Minecraft 及 Mojang 無關。\n部分內容藉助 AI 助手生成。\n© 2026 MineLab. All rights reserved.",
    "note.je.old": "請將生成的內容儲存為名為 pack.mcmeta 的文字檔案，並放置在資源包資料夾的根目錄下（與 assets 資料夾同級）。",
    "note.je.range": "此版本將以 min_format / max_format 格式輸出。請將生成的內容儲存為名為 pack.mcmeta 的文字檔案，並放置在資源包資料夾的根目錄下（與 assets 資料夾同級）。",
    "note.be": "請將生成的內容儲存為名為 manifest.json 的文字檔案，並放置在資源包資料夾的根目錄下（與 textures 資料夾等同級）。",
    "alert.uuidMissing": "請先輸入或自動生成 UUID。",
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
  { id: "pack", icon: "🧩", nameKey: "nav.pack", tagline: "pack.mcmeta / manifest.json Generator", active: true, href: null },
  { id: "properties", icon: "🖥", nameKey: "nav.properties", tagline: "Server Properties Editor", active: false, href: "properties.html" },
];

/* =========================================================
   Version data
   ========================================================= */
// Java Edition — resource pack format numbers.
// isRange: true → 1.21.9+ uses the newer min_format / max_format pair instead
// of a single pack_format value.
const JE_VERSIONS = [
  { label: "26.2", format: 88, isRange: true },
  { label: "26.1 – 26.1.2", format: 84, isRange: true },
  { label: "1.21.11", format: 75, isRange: true },
  { label: "1.21.9 – 1.21.10", format: 69, isRange: true },
  { label: "1.21.7 – 1.21.8", format: 64, isRange: false },
  { label: "1.21.6", format: 63, isRange: false },
  { label: "1.21.5", format: 55, isRange: false },
  { label: "1.21.4", format: 46, isRange: false },
  { label: "1.21.2 – 1.21.3", format: 42, isRange: false },
  { label: "1.21 – 1.21.1", format: 34, isRange: false },
  { label: "1.20.5 – 1.20.6", format: 32, isRange: false },
  { label: "1.20.3 – 1.20.4", format: 22, isRange: false },
  { label: "1.20.2", format: 18, isRange: false },
  { label: "1.20 – 1.20.1", format: 15, isRange: false },
  { label: "1.19.4", format: 13, isRange: false },
  { label: "1.19.3", format: 12, isRange: false },
  { label: "1.19 – 1.19.2", format: 9, isRange: false },
  { label: "1.18 – 1.18.2", format: 8, isRange: false },
  { label: "1.17 – 1.17.1", format: 7, isRange: false },
  { label: "1.16.2 – 1.16.5", format: 6, isRange: false },
  { label: "1.15 – 1.16.1", format: 5, isRange: false },
  { label: "1.13 – 1.14.4", format: 4, isRange: false },
  { label: "1.11 – 1.12.2", format: 3, isRange: false },
  { label: "1.9 – 1.10.2", format: 2, isRange: false },
  { label: "1.6.1 – 1.8.9", format: 1, isRange: false },
];

// Bedrock Edition — used for manifest.json's min_engine_version.
const BE_VERSIONS = [
  [1, 26, 40], [1, 26, 32], [1, 26, 20], [1, 26, 0],
  [1, 21, 0], [1, 20, 0], [1, 19, 0], [1, 18, 0], [1, 17, 0], [1, 16, 0],
  [1, 14, 0], [1, 13, 0], [1, 12, 0], [1, 11, 0], [1, 10, 0],
  [1, 9, 0], [1, 8, 0], [1, 7, 0], [1, 6, 0],
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
  populateJeVersions();
  populateBeVersions();
  bindStaticEvents();

  // Pre-fill both UUID fields so the panel isn't empty the first time
  // someone reaches STEP 02 for Bedrock.
  document.getElementById("be-header-uuid").value = uuidv4();
  document.getElementById("be-module-uuid").value = uuidv4();
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
  applyLang();

  const select = document.getElementById("lang-select");
  select.value = currentLang;

  select.addEventListener("change", () => {
    currentLang = SUPPORTED_LANGS.includes(select.value) ? select.value : "ja";
    safeSetStorage("mc-craft-lang", currentLang);
    applyLang();
    renderNavMenu();
    populateJeVersions();
    populateBeVersions();
    updateJeVersionHint();
    // Re-render the output (if any) so its note text follows the new language.
    if (selectedPlatform === "je" && !document.getElementById("panel-pack-output").hidden) generateJe();
    if (selectedPlatform === "be" && !document.getElementById("panel-pack-output").hidden) generateBe();
  });
}

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || I18N.ja[key] || key;
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
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
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
   Version selects
   ========================================================= */
function populateJeVersions() {
  const select = document.getElementById("je-version");
  const prevValue = select.value;
  select.innerHTML = JE_VERSIONS.map((v, i) => `<option value="${i}">${escapeHtml(v.label)} (format ${v.format})</option>`).join("");
  select.value = prevValue && Number(prevValue) < JE_VERSIONS.length ? prevValue : "0";
  if (!select.dataset.bound) {
    select.addEventListener("change", updateJeVersionHint);
    select.dataset.bound = "1";
  }
  updateJeVersionHint();
}

function updateJeVersionHint() {
  const select = document.getElementById("je-version");
  const v = JE_VERSIONS[Number(select.value)];
  const hint = document.getElementById("je-version-hint");
  if (!v || !hint) return;
  hint.textContent = t(v.isRange ? "note.je.range" : "note.je.old");
}

function populateBeVersions() {
  const select = document.getElementById("be-engine-version");
  const prevValue = select.value;
  select.innerHTML = BE_VERSIONS.map((v, i) => `<option value="${i}">${v.join(".")}</option>`).join("");
  select.value = prevValue && Number(prevValue) < BE_VERSIONS.length ? prevValue : "0";
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

  document.querySelectorAll(".uuid-gen-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.target);
      if (target) target.value = uuidv4();
    });
  });

  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => handleCopy(btn));
  });

  document.getElementById("pack-download-btn").addEventListener("click", handleDownload);
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
  document.getElementById("panel-pack-output").hidden = true;
}

/* =========================================================
   Generation — Java Edition
   ========================================================= */
function generateJe() {
  const select = document.getElementById("je-version");
  const v = JE_VERSIONS[Number(select.value)];
  const description = document.getElementById("je-description").value || t("placeholder.description");

  let pack;
  if (v.isRange) {
    pack = { description, min_format: v.format, max_format: v.format };
  } else {
    pack = { description, pack_format: v.format };
  }

  const json = JSON.stringify({ pack }, null, 2);
  showOutput("pack.mcmeta", json, t(v.isRange ? "note.je.range" : "note.je.old"));
}

/* =========================================================
   Generation — Bedrock Edition
   ========================================================= */
function generateBe() {
  const headerUuidEl = document.getElementById("be-header-uuid");
  const moduleUuidEl = document.getElementById("be-module-uuid");

  if (!headerUuidEl.value.trim()) headerUuidEl.value = uuidv4();
  if (!moduleUuidEl.value.trim()) moduleUuidEl.value = uuidv4();

  const name = document.getElementById("be-name").value || t("placeholder.description");
  const description = document.getElementById("be-description").value || t("placeholder.description");
  const engineVersion = BE_VERSIONS[Number(document.getElementById("be-engine-version").value)];

  const packVersion = [
    clampVersionPart(document.getElementById("be-ver-major").value, 1),
    clampVersionPart(document.getElementById("be-ver-minor").value, 0),
    clampVersionPart(document.getElementById("be-ver-patch").value, 0),
  ];

  const manifest = {
    format_version: 2,
    header: {
      name,
      description,
      uuid: headerUuidEl.value.trim(),
      version: packVersion,
      min_engine_version: engineVersion,
    },
    modules: [
      {
        type: "resources",
        uuid: moduleUuidEl.value.trim(),
        version: packVersion,
      },
    ],
  };

  const json = JSON.stringify(manifest, null, 2);
  showOutput("manifest.json", json, t("note.be"));
}

function clampVersionPart(raw, fallback) {
  const n = parseInt(raw, 10);
  if (isNaN(n) || n < 0) return fallback;
  return Math.min(n, 999);
}

/* =========================================================
   Output panel
   ========================================================= */
function showOutput(filename, json, note) {
  document.getElementById("pack-output-filename").textContent = filename;
  document.getElementById("pack-output-json").textContent = json;
  document.getElementById("pack-output-note").textContent = note;
  document.getElementById("pack-output-json").dataset.filename = filename;

  const panel = document.getElementById("panel-pack-output");
  panel.hidden = false;
  panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* =========================================================
   UUID generation
   ========================================================= */
function uuidv4() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }
  // Fallback RFC 4122 v4 generator for environments without crypto.randomUUID.
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
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
  const outputEl = document.getElementById("pack-output-json");
  const text = outputEl.textContent;
  const filename = outputEl.dataset.filename || "pack.mcmeta";
  if (!text) return;

  const blob = new Blob([text], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
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
