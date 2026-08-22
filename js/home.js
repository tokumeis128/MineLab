"use strict";

/* =========================================================
   i18n
   ========================================================= */
const I18N = {
  ja: {
    "brand.tagline": "ホーム",
    "nav.home": "ホーム",
    "nav.craft": "クラフト計算機",
    "nav.motd": "MOTDジェネレーター",
    "nav.pack": "リソースパック情報ジェネレーター",
    "nav.properties": "server.propertiesエディター",
    "nav.emptyHint": "準備中の機能はまだありません。",
    "hero.eyebrow": "FAN-MADE TOOLKIT",
    "hero.title": "MineLabへようこそ",
    "hero.body": "Minecraftを遊ぶ・作る人のための、ちょっと便利なツールを集めたサイトです。素材の計算や、サーバー説明文（MOTD）の作成、リソースパックのメタデータ生成などを、ブラウザだけで手軽に行えます。下から使いたい機能を選んでください。",
    "hero.featuresHeading": "機能一覧",
    "card.craft.title": "クラフト計算機",
    "card.craft.desc": "作りたいアイテムと個数を指定すると、最終的に必要な素材とクラフト手順を自動で計算します。",
    "card.motd.title": "MOTDジェネレーター",
    "card.motd.desc": "色や太字などの書式を付けながら、サーバー一覧に表示されるMOTD（説明文）をプレビュー付きで作成できます。",
    "card.pack.title": "リソースパック情報ジェネレーター",
    "card.pack.desc": "対応バージョンや説明文を選ぶだけで、Java版のpack.mcmetaや統合版のmanifest.jsonを作成できます。",
    "card.properties.title": "server.propertiesエディター",
    "card.properties.desc": "difficultyやgamemodeなどをフォームで選ぶだけで、Java版・統合版のサーバー設定ファイルを作成できます。ポートのランダム生成にも対応。",
    "card.cta": "開く",
    "footer.disclaimer": "本サイトは非公式のファンメイドツールです。Minecraft および Mojang とは関係ありません。\n一部コンテンツの生成にAIアシスタントを利用しています。\n© 2026 MineLab. All rights reserved.",
  },
  en: {
    "brand.tagline": "Home",
    "nav.home": "Home",
    "nav.craft": "Recipe Calculator",
    "nav.motd": "MOTD Generator",
    "nav.pack": "Resource Pack Metadata Generator",
    "nav.properties": "server.properties Editor",
    "nav.emptyHint": "No features are ready yet.",
    "hero.eyebrow": "FAN-MADE TOOLKIT",
    "hero.title": "Welcome to MineLab",
    "hero.body": "A small collection of handy tools for Minecraft players and creators. Calculate crafting materials, build a server MOTD, or generate resource pack metadata — all right in your browser. Pick a tool below to get started.",
    "hero.featuresHeading": "Tools",
    "card.craft.title": "Recipe Calculator",
    "card.craft.desc": "Enter the items and quantities you want to craft, and it automatically works out the raw materials and crafting steps you'll need.",
    "card.motd.title": "MOTD Generator",
    "card.motd.desc": "Style your server list MOTD with colors and formatting, with a live preview of how it will actually look.",
    "card.pack.title": "Resource Pack Metadata Generator",
    "card.pack.desc": "Pick a target version and description to generate a pack.mcmeta (Java Edition) or manifest.json (Bedrock Edition).",
    "card.properties.title": "server.properties Editor",
    "card.properties.desc": "Build a Java or Bedrock server.properties file with simple form fields — toggles, dropdowns, and a random port generator included.",
    "card.cta": "Open",
    "footer.disclaimer": "This is an unofficial fan-made tool. Not affiliated with Minecraft or Mojang.\nSome content on this site was generated with the help of an AI assistant.\n© 2026 MineLab. All rights reserved.",
  },
  "zh-CN": {
    "brand.tagline": "首页",
    "nav.home": "首页",
    "nav.craft": "合成计算器",
    "nav.motd": "MOTD 生成器",
    "nav.pack": "资源包信息生成器",
    "nav.properties": "server.properties 编辑器",
    "nav.emptyHint": "暂时还没有可用的功能。",
    "hero.eyebrow": "同人工具集",
    "hero.title": "欢迎来到 MineLab",
    "hero.body": "这是一个为 Minecraft 玩家和创作者准备的实用小工具合集。素材计算、服务器说明文（MOTD）制作、资源包元数据生成等功能，全部可以直接在浏览器里完成。请从下方选择想使用的功能。",
    "hero.featuresHeading": "功能一览",
    "card.craft.title": "合成计算器",
    "card.craft.desc": "只需指定想制作的物品和数量，就能自动计算出最终所需的素材和合成步骤。",
    "card.motd.title": "MOTD 生成器",
    "card.motd.desc": "为服务器列表中显示的 MOTD（说明文）添加颜色、加粗等格式，并可实时预览效果。",
    "card.pack.title": "资源包信息生成器",
    "card.pack.desc": "只需选择适配版本和说明文，即可生成 Java 版的 pack.mcmeta 或基岩版的 manifest.json。",
    "card.properties.title": "server.properties 编辑器",
    "card.properties.desc": "只需在表单中选择难度、游戏模式等选项，即可生成 Java 版、基岩版的服务器配置文件。还支持端口号随机生成。",
    "card.cta": "打开",
    "footer.disclaimer": "本网站为非官方同人制作工具，与 Minecraft 及 Mojang 无关。\n部分内容借助 AI 助手生成。\n© 2026 MineLab. All rights reserved.",
  },
  "zh-TW": {
    "brand.tagline": "首頁",
    "nav.home": "首頁",
    "nav.craft": "合成計算器",
    "nav.motd": "MOTD 生成器",
    "nav.pack": "資源包資訊生成器",
    "nav.properties": "server.properties 編輯器",
    "nav.emptyHint": "暫時還沒有可用的功能。",
    "hero.eyebrow": "同人工具集",
    "hero.title": "歡迎來到 MineLab",
    "hero.body": "這是一個為 Minecraft 玩家和創作者準備的實用小工具合集。素材計算、伺服器說明文（MOTD）製作、資源包後設資料生成等功能，全部可以直接在瀏覽器裡完成。請從下方選擇想使用的功能。",
    "hero.featuresHeading": "功能一覽",
    "card.craft.title": "合成計算器",
    "card.craft.desc": "只需指定想製作的物品和數量，就能自動計算出最終所需的素材和合成步驟。",
    "card.motd.title": "MOTD 生成器",
    "card.motd.desc": "為伺服器列表中顯示的 MOTD（說明文）新增顏色、加粗等格式，並可實時預覽效果。",
    "card.pack.title": "資源包資訊生成器",
    "card.pack.desc": "只需選擇適配版本和說明文，即可生成 Java 版的 pack.mcmeta 或基岩版的 manifest.json。",
    "card.properties.title": "server.properties 編輯器",
    "card.properties.desc": "只需在表單中選擇難度、遊戲模式等選項，即可生成 Java 版、基岩版的伺服器配置檔案。還支援埠號隨機生成。",
    "card.cta": "開啟",
    "footer.disclaimer": "本網站為非官方同人製作工具，與 Minecraft 及 Mojang 無關。\n部分內容藉助 AI 助手生成。\n© 2026 MineLab. All rights reserved.",
  }
};

const SUPPORTED_LANGS = ["ja", "en", "zh-CN", "zh-TW"];
let currentLang = "ja";

/* =========================================================
   Feature / tool switcher (hamburger menu)
   ========================================================= */
const FEATURES = [
  { id: "home", icon: "🏠", nameKey: "nav.home", tagline: "MineLab Home", active: true, href: null },
  { id: "craft", icon: "⛏", nameKey: "nav.craft", tagline: "Recipe Stack Resolver", active: false, href: "craft.html" },
  { id: "motd", icon: "📜", nameKey: "nav.motd", tagline: "Server List Message Editor", active: false, href: "motd.html" },
  { id: "pack", icon: "🧩", nameKey: "nav.pack", tagline: "pack.mcmeta / manifest.json Generator", active: false, href: "pack.html" },
  { id: "properties", icon: "🖥", nameKey: "nav.properties", tagline: "Server Properties Editor", active: false, href: "properties.html" },
];

// Cards shown on the home page itself. Kept separate from FEATURES (the nav
// menu list) since each card carries a longer descriptive blurb.
const HOME_CARDS = [
  { id: "craft", icon: "⛏", titleKey: "card.craft.title", descKey: "card.craft.desc", href: "craft.html" },
  { id: "motd", icon: "📜", titleKey: "card.motd.title", descKey: "card.motd.desc", href: "motd.html" },
  { id: "pack", icon: "🧩", titleKey: "card.pack.title", descKey: "card.pack.desc", href: "pack.html" },
  { id: "properties", icon: "🖥", titleKey: "card.properties.title", descKey: "card.properties.desc", href: "properties.html" },
];

/* =========================================================
   Init
   ========================================================= */
document.addEventListener("DOMContentLoaded", init);

function init() {
  initTheme();
  initLang();
  renderNavMenu();
  renderFeatureGrid();
  bindStaticEvents();
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
    renderFeatureGrid();
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
   Feature card grid
   ========================================================= */
function renderFeatureGrid() {
  const grid = document.getElementById("feature-grid");
  grid.innerHTML = HOME_CARDS.map(c => `
    <a class="feature-card" href="${c.href}">
      <span class="feature-card-icon" aria-hidden="true">${c.icon}</span>
      <span class="feature-card-body">
        <span class="feature-card-title">${escapeHtml(t(c.titleKey))}</span>
        <span class="feature-card-desc">${escapeHtml(t(c.descKey))}</span>
        <span class="feature-card-cta">${escapeHtml(t("card.cta"))} <span class="feature-card-cta-arrow" aria-hidden="true">→</span></span>
      </span>
    </a>
  `).join("");
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
