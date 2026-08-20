"use strict";

/* =========================================================
   i18n
   ========================================================= */
const I18N = {
  ja: {
    "brand.tagline": "ホーム",
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
  }
};

let currentLang = "ja";

/* =========================================================
   Feature / tool switcher (hamburger menu)
   ========================================================= */
const FEATURES = [
  { id: "home", icon: "🏠", name: "ホーム", tagline: "MineLab Home", active: true, href: null },
  { id: "craft", icon: "⛏", name: "クラフト計算機", tagline: "Recipe Stack Resolver", active: false, href: "index.html" },
  { id: "motd", icon: "📜", name: "MOTDジェネレーター", tagline: "Server List Message Editor", active: false, href: "motd.html" },
  { id: "pack", icon: "🧩", name: "リソースパック情報ジェネレーター", tagline: "pack.mcmeta / manifest.json Generator", active: false, href: "pack.html" },
  { id: "properties", icon: "🖥", name: "server.propertiesエディター", tagline: "Server Properties Editor", active: false, href: "properties.html" },
];

// Cards shown on the home page itself. Kept separate from FEATURES (the nav
// menu list) since each card carries a longer descriptive blurb.
const HOME_CARDS = [
  { id: "craft", icon: "⛏", titleKey: "card.craft.title", descKey: "card.craft.desc", href: "index.html" },
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
  currentLang = saved === "en" ? "en" : "ja";
  applyLang();

  const select = document.getElementById("lang-select");
  select.value = currentLang;

  select.addEventListener("change", () => {
    currentLang = select.value === "en" ? "en" : "ja";
    safeSetStorage("mc-craft-lang", currentLang);
    applyLang();
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
