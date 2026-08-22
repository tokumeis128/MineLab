"use strict";

/* =========================================================
   i18n
   ========================================================= */
const I18N = {
  ja: {
    "eyebrow.select": "STEP 01 — 入力",
    "heading.select": "作りたいアイテム",
    "search.placeholder": "アイテムを検索... (例: ピストン / piston / minecraft:piston)",
    "hint.emptySelect": "上の検索欄からアイテムを選ぶと、ここに追加されます。",
    "eyebrow.summary": "STEP 02 — 結果",
    "heading.summary": "必要な材料（最終素材）",
    "table.item": "材料",
    "table.count": "必要数",
    "table.stack": "スタック換算",
    "summary.footnote": "レシピが存在しないアイテムは、そのまま採集・入手が必要な素材として扱われます。",
    "eyebrow.detail": "STEP 03 — 内訳",
    "heading.detail": "クラフト内訳",
    "btn.expandAll": "全て展開",
    "btn.collapseAll": "全て閉じる",
    "btn.clearAll": "全て削除",
    "confirm.clearAll": "選択中のアイテムをすべて削除しますか？",
    "footer.disclaimer": "本サイトは非公式のファンメイドツールです。Minecraft および Mojang とは関係ありません。\n一部コンテンツの生成にAIアシスタントを利用しています。\n© 2026 MineLab. All rights reserved.",
    "badge.base": "採集",
    "badge.cycle": "循環エラー",
    "recipe.title": "レシピ",
    "recipe.shapeless": "組み合わせ（形状指定なし）",
    "recipe.variant": "レシピ",
    "meta.perCraft": "1回のクラフト",
    "meta.craftCount": "必要クラフト回数",
    "meta.produced": "完成数",
    "meta.times": "回",
    "meta.pieces": "個",
    "required": "必要素材",
    "cycleMsg": "循環参照が検出されたため、これ以上展開できません。",
    "noRecipeMsg": "このアイテムには対応するレシピがありません。採集・入手が必要な材料として扱います。",
    "stackUnit": "スタック",
    "plusUnit": "+",
    "brand.tagline": "クラフト計算機",
    "nav.home": "ホーム",
    "nav.craft": "クラフト計算機",
    "nav.motd": "MOTDジェネレーター",
    "nav.pack": "リソースパック情報ジェネレーター",
    "nav.properties": "server.propertiesエディター",
    "nav.emptyHint": "準備中の機能はまだありません。",
    "search.noResults": "該当するアイテムが見つかりません。",
  },
  en: {
    "eyebrow.select": "STEP 01 — INPUT",
    "heading.select": "Items to craft",
    "search.placeholder": "Search items... (e.g. piston / ピストン / minecraft:piston)",
    "hint.emptySelect": "Search above and pick an item to add it here.",
    "eyebrow.summary": "STEP 02 — RESULT",
    "heading.summary": "Required raw materials",
    "table.item": "Material",
    "table.count": "Needed",
    "table.stack": "Stacks",
    "summary.footnote": "Items with no known recipe are treated as raw materials you gather directly.",
    "eyebrow.detail": "STEP 03 — BREAKDOWN",
    "heading.detail": "Crafting breakdown",
    "btn.expandAll": "Expand all",
    "btn.collapseAll": "Collapse all",
    "btn.clearAll": "Clear all",
    "confirm.clearAll": "Remove all selected items?",
    "footer.disclaimer": "This is an unofficial fan-made tool. Not affiliated with Minecraft or Mojang.\nSome content on this site was generated with the help of an AI assistant.\n© 2026 MineLab. All rights reserved.",
    "badge.base": "raw",
    "badge.cycle": "cycle error",
    "recipe.title": "Recipe",
    "recipe.shapeless": "Shapeless combination",
    "recipe.variant": "Recipe",
    "meta.perCraft": "Per craft",
    "meta.craftCount": "Crafts needed",
    "meta.produced": "Total produced",
    "meta.times": "×",
    "meta.pieces": "",
    "required": "Requires",
    "cycleMsg": "A circular recipe reference was detected — cannot expand further.",
    "noRecipeMsg": "No recipe found for this item. It is treated as a raw material.",
    "stackUnit": "stacks",
    "plusUnit": "+",
    "brand.tagline": "Recipe Calculator",
    "nav.home": "Home",
    "nav.craft": "Recipe Calculator",
    "nav.motd": "MOTD Generator",
    "nav.pack": "Resource Pack Metadata Generator",
    "nav.properties": "server.properties Editor",
    "nav.emptyHint": "No features are ready yet.",
    "search.noResults": "No matching items found.",
  },
  "zh-CN": {
    "eyebrow.select": "STEP 01 — 输入",
    "heading.select": "想要制作的物品",
    "search.placeholder": "搜索物品...（例：活塞 / piston / minecraft:piston）",
    "hint.emptySelect": "从上方搜索栏选择物品后，会添加到这里。",
    "eyebrow.summary": "STEP 02 — 结果",
    "heading.summary": "所需材料（最终素材）",
    "table.item": "材料",
    "table.count": "所需数量",
    "table.stack": "换算为组数",
    "summary.footnote": "没有对应合成表的物品，将被视为需要直接采集或获取的素材。",
    "eyebrow.detail": "STEP 03 — 明细",
    "heading.detail": "合成明细",
    "btn.expandAll": "全部展开",
    "btn.collapseAll": "全部折叠",
    "btn.clearAll": "全部删除",
    "confirm.clearAll": "确定要删除所有已选择的物品吗？",
    "footer.disclaimer": "本网站为非官方同人制作工具，与 Minecraft 及 Mojang 无关。\n部分内容借助 AI 助手生成。\n© 2026 MineLab. All rights reserved.",
    "badge.base": "采集",
    "badge.cycle": "循环错误",
    "recipe.title": "合成表",
    "recipe.shapeless": "无序合成（不限定形状）",
    "recipe.variant": "合成表",
    "meta.perCraft": "单次合成",
    "meta.craftCount": "所需合成次数",
    "meta.produced": "完成数量",
    "meta.times": "次",
    "meta.pieces": "个",
    "required": "所需材料",
    "cycleMsg": "检测到循环引用，无法继续展开。",
    "noRecipeMsg": "该物品没有对应的合成表，将被视为需要采集或获取的材料。",
    "stackUnit": "组",
    "plusUnit": "+",
    "brand.tagline": "合成计算器",
    "nav.home": "首页",
    "nav.craft": "合成计算器",
    "nav.motd": "MOTD 生成器",
    "nav.pack": "资源包信息生成器",
    "nav.properties": "server.properties 编辑器",
    "nav.emptyHint": "暂时还没有可用的功能。",
    "search.noResults": "未找到匹配的物品。",
  },
  "zh-TW": {
    "eyebrow.select": "STEP 01 — 輸入",
    "heading.select": "想要製作的物品",
    "search.placeholder": "搜尋物品...（例：活塞 / piston / minecraft:piston）",
    "hint.emptySelect": "從上方搜尋欄選擇物品後，會新增到這裡。",
    "eyebrow.summary": "STEP 02 — 結果",
    "heading.summary": "所需材料（最終素材）",
    "table.item": "材料",
    "table.count": "所需數量",
    "table.stack": "換算為組數",
    "summary.footnote": "沒有對應合成表的物品，將被視為需要直接採集或獲取的素材。",
    "eyebrow.detail": "STEP 03 — 明細",
    "heading.detail": "合成明細",
    "btn.expandAll": "全部展開",
    "btn.collapseAll": "全部摺疊",
    "btn.clearAll": "全部刪除",
    "confirm.clearAll": "確定要刪除所有已選擇的物品嗎？",
    "footer.disclaimer": "本網站為非官方同人製作工具，與 Minecraft 及 Mojang 無關。\n部分內容藉助 AI 助手生成。\n© 2026 MineLab. All rights reserved.",
    "badge.base": "採集",
    "badge.cycle": "迴圈錯誤",
    "recipe.title": "合成表",
    "recipe.shapeless": "無序合成（不限定形狀）",
    "recipe.variant": "合成表",
    "meta.perCraft": "單次合成",
    "meta.craftCount": "所需合成次數",
    "meta.produced": "完成數量",
    "meta.times": "次",
    "meta.pieces": "個",
    "required": "所需材料",
    "cycleMsg": "檢測到迴圈引用，無法繼續展開。",
    "noRecipeMsg": "該物品沒有對應的合成表，將被視為需要採集或獲取的材料。",
    "stackUnit": "組",
    "plusUnit": "+",
    "brand.tagline": "合成計算器",
    "nav.home": "首頁",
    "nav.craft": "合成計算器",
    "nav.motd": "MOTD 生成器",
    "nav.pack": "資源包資訊生成器",
    "nav.properties": "server.properties 編輯器",
    "nav.emptyHint": "暫時還沒有可用的功能。",
    "search.noResults": "未找到相符的物品。",
  }
};

const SUPPORTED_LANGS = ["ja", "en", "zh-CN", "zh-TW"];
let currentLang = "ja";

/* =========================================================
   Texture / icon helpers
   ========================================================= */
// ダウンロード済みテクスチャの置き場所（download_textures.py で assets/textures/
// 以下に mcmeta と同じフォルダ構成で保存する想定のローカルパス）。
const TEXTURE_BASE = "assets/textures/";

// Returns an <img> tag for the item's real Minecraft texture, with an
// emoji fallback (via onerror) in case the image fails to load (e.g. offline).
function iconImgHtml(id, cls) {
  const item = itemsData[id];
  const emoji = (item && item.icon) || "❔";
  if (!item || !item.texture) {
    return `<span class="emoji-fallback">${emoji}</span>`;
  }
  // texture is a path relative to assets/textures/ (mirrors the mcmeta
  // folder layout, e.g. "block/chest.png", "item/stick.png"). A texture
  // starting with "assets/" would be treated as a full path and used as-is
  // instead — currently unused, but kept in case a future item needs a
  // one-off asset outside the normal block/item layout.
  const src = item.texture.startsWith("assets/") ? item.texture : TEXTURE_BASE + item.texture;
  const alt = escapeHtml(itemName(id) || id);
  return `<img class="${cls}" src="${src}" alt="${alt}" loading="lazy" onerror="window.__iconFallback(this,'${emoji}')">`;
}

// Global helper referenced from inline onerror handlers above.
window.__iconFallback = function (imgEl, emoji) {
  const span = document.createElement("span");
  span.className = "emoji-fallback";
  span.textContent = emoji;
  if (imgEl.parentNode) imgEl.parentNode.replaceChild(span, imgEl);
};

/* =========================================================
   State
   ========================================================= */
let itemsData = {};
let recipesData = {};
let searchIndex = [];
let selectedItems = new Map(); // id -> count, insertion order preserved
let totals = {};               // id -> count (base materials only)
let activeResultIndex = -1;
let currentResults = [];
let recipeChoice = {};         // id -> chosen index, for items with multiple alternative recipes

/* =========================================================
   Feature / tool switcher (hamburger menu)
   ========================================================= */
// Data-driven list of tools available from the nav menu. This site currently
// ships one tool; add more entries here as new features are built, e.g.:
// { id: "smelting", icon: "\u2668\ufe0f", name: "製錬計算機", tagline: "Smelting Calculator", active: false, href: "smelting.html" }
const FEATURES = [
  { id: "home", icon: "🏠", nameKey: "nav.home", tagline: "MineLab Home", active: false, href: "index.html" },
  { id: "craft", icon: "⛏", nameKey: "nav.craft", tagline: "Recipe Stack Resolver", active: true, href: null },
  { id: "motd", icon: "📜", nameKey: "nav.motd", tagline: "Server List Message Editor", active: false, href: "motd.html" },
  { id: "pack", icon: "🧩", nameKey: "nav.pack", tagline: "pack.mcmeta / manifest.json Generator", active: false, href: "pack.html" },
  { id: "properties", icon: "🖥", nameKey: "nav.properties", tagline: "Server Properties Editor", active: false, href: "properties.html" },
];

/* =========================================================
   Init
   ========================================================= */
document.addEventListener("DOMContentLoaded", init);

async function init() {
  initTheme();
  initLang();
  bindStaticEvents();
  renderNavMenu();

  try {
    const base = getBasePath();
    const [items, recipes] = await Promise.all([
      fetch(base + "data/items.json", { cache: "no-store" }).then(r => r.json()),
      fetch(base + "data/recipes.json", { cache: "no-store" }).then(r => r.json()),
    ]);
    itemsData = items;
    recipesData = recipes;
    buildSearchIndex();
    renderSelected();
  } catch (err) {
    console.error(err);
    const results = document.getElementById("search-results");
    results.hidden = false;
    results.innerHTML = `<div class="search-no-results">データの読み込みに失敗しました。ローカルサーバー経由（例: python -m http.server）で開いているか確認してください。</div>`;
  }
}

// Works whether this page is at the site root or in a GitHub Pages subpath
// (this file is loaded from craft.html, but the logic doesn't care about the filename).
function getBasePath() {
  const path = window.location.pathname;
  const dir = path.endsWith("/") ? path : path.substring(0, path.lastIndexOf("/") + 1);
  return dir;
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
    renderSelected();
    recalcAndRender();
  });
}

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || I18N.ja[key] || key;
}

// Maps the current UI language to the matching field name(s) on an item
// record from items.json, in preference order (falls back through the list).
const ITEM_NAME_FIELD_FALLBACK = {
  ja: ["name_ja", "name_en"],
  en: ["name_en", "name_ja"],
  "zh-CN": ["name_zh_cn", "name_en", "name_ja"],
  "zh-TW": ["name_zh_tw", "name_en", "name_ja"],
};
const ITEM_SUBNAME_FIELD_FALLBACK = {
  ja: ["name_en"],
  en: ["name_ja"],
  "zh-CN": ["name_en"],
  "zh-TW": ["name_en"],
};
function pickItemField(item, fields) {
  for (const f of fields) {
    if (item[f]) return item[f];
  }
  return "";
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

function itemName(id) {
  const item = itemsData[id];
  if (!item) return id;
  const fields = ITEM_NAME_FIELD_FALLBACK[currentLang] || ITEM_NAME_FIELD_FALLBACK.ja;
  return pickItemField(item, fields) || id;
}
function itemSubName(id) {
  const item = itemsData[id];
  if (!item) return id;
  const fields = ITEM_SUBNAME_FIELD_FALLBACK[currentLang] || ITEM_SUBNAME_FIELD_FALLBACK.ja;
  return pickItemField(item, fields) || "";
}

/* =========================================================
   Search index & autocomplete
   ========================================================= */
function buildSearchIndex() {
  searchIndex = Object.entries(itemsData).map(([id, item]) => ({
    id,
    item,
    idShort: id.replace(/^minecraft:/, "").toLowerCase(),
    idFull: id.toLowerCase(),
    nameJa: (item.name_ja || "").toLowerCase(),
    nameEn: (item.name_en || "").toLowerCase(),
    nameZhCn: (item.name_zh_cn || "").toLowerCase(),
    nameZhTw: (item.name_zh_tw || "").toLowerCase(),
  }));
}

function searchItems(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return searchIndex
    .filter(entry =>
      entry.idShort.includes(q) ||
      entry.idFull.includes(q) ||
      entry.nameJa.includes(q) ||
      entry.nameEn.includes(q) ||
      entry.nameZhCn.includes(q) ||
      entry.nameZhTw.includes(q)
    )
    .slice(0, 30);
}

function renderNavMenu() {
  const list = document.getElementById("nav-menu-list");
  if (FEATURES.length === 0) {
    list.innerHTML = `<li class="nav-menu-empty-hint">${escapeHtml(t("nav.emptyHint"))}</li>`;
    return;
  }

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
      // Already on this tool (or it's a placeholder with no destination yet) — just close the menu.
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

  const input = document.getElementById("item-search");
  const results = document.getElementById("search-results");

  input.addEventListener("input", () => {
    currentResults = searchItems(input.value);
    activeResultIndex = -1;
    renderSearchResults(currentResults, input.value);
  });

  input.addEventListener("keydown", (e) => {
    if (results.hidden) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      activeResultIndex = Math.min(activeResultIndex + 1, currentResults.length - 1);
      highlightResult();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      activeResultIndex = Math.max(activeResultIndex - 1, 0);
      highlightResult();
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeResultIndex >= 0 && currentResults[activeResultIndex]) {
        selectSearchResult(currentResults[activeResultIndex].id);
      } else if (currentResults.length > 0) {
        selectSearchResult(currentResults[0].id);
      }
    } else if (e.key === "Escape") {
      closeSearchResults();
    }
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrap")) closeSearchResults();
  });

  document.getElementById("clear-selected").addEventListener("click", () => {
    if (selectedItems.size === 0) return;
    if (!window.confirm(t("confirm.clearAll"))) return;
    clearAllItems();
  });

  document.getElementById("expand-all").addEventListener("click", () => {
    document.querySelectorAll("#detail-tree .tree-node").forEach(n => n.classList.add("expanded"));
  });
  document.getElementById("collapse-all").addEventListener("click", () => {
    document.querySelectorAll("#detail-tree .tree-node").forEach(n => n.classList.remove("expanded"));
  });
}

function renderSearchResults(matches, rawQuery) {
  const results = document.getElementById("search-results");
  const input = document.getElementById("item-search");

  if (!rawQuery.trim()) {
    closeSearchResults();
    return;
  }

  if (matches.length === 0) {
    results.innerHTML = `<div class="search-no-results">${escapeHtml(t("search.noResults"))}</div>`;
    results.hidden = false;
    input.setAttribute("aria-expanded", "true");
    return;
  }

  results.innerHTML = matches.map((m, i) => `
    <div class="search-result-item" role="option" data-id="${m.id}" data-index="${i}">
      <span class="result-icon">${iconImgHtml(m.id, "pixel-icon")}</span>
      <span class="result-text">
        <span class="result-name-en">${escapeHtml(itemName(m.id))}</span>
        <span class="result-name-ja">${escapeHtml(itemSubName(m.id))}</span>
      </span>
      <span class="result-id">${m.id}</span>
    </div>
  `).join("");

  results.hidden = false;
  input.setAttribute("aria-expanded", "true");

  results.querySelectorAll(".search-result-item").forEach(el => {
    el.addEventListener("click", () => selectSearchResult(el.dataset.id));
  });
}

function highlightResult() {
  const results = document.getElementById("search-results");
  results.querySelectorAll(".search-result-item").forEach((el, i) => {
    el.classList.toggle("active", i === activeResultIndex);
    if (i === activeResultIndex) el.scrollIntoView({ block: "nearest" });
  });
}

function closeSearchResults() {
  const results = document.getElementById("search-results");
  results.hidden = true;
  results.innerHTML = "";
  document.getElementById("item-search").setAttribute("aria-expanded", "false");
  currentResults = [];
  activeResultIndex = -1;
}

function selectSearchResult(id) {
  addItem(id, 1);
  const input = document.getElementById("item-search");
  input.value = "";
  input.focus();
  closeSearchResults();
}

/* =========================================================
   Selected items management
   ========================================================= */
function addItem(id, qty) {
  const current = selectedItems.get(id) || 0;
  selectedItems.set(id, current + qty);
  renderSelected();
  recalcAndRender();
}

function removeItem(id) {
  selectedItems.delete(id);
  renderSelected();
  recalcAndRender();
}

function clearAllItems() {
  selectedItems.clear();
  renderSelected();
  recalcAndRender();
}

function setItemQty(id, qty) {
  qty = Math.max(1, Math.floor(Number(qty) || 1));
  selectedItems.set(id, qty);
  recalcAndRender();
}

function renderSelected() {
  const list = document.getElementById("selected-list");
  const hint = document.getElementById("empty-select-hint");
  list.innerHTML = "";

  for (const [id, count] of selectedItems.entries()) {
    const li = document.createElement("li");
    li.className = "selected-item";
    li.innerHTML = `
      <span class="result-icon">${iconImgHtml(id, "pixel-icon")}</span>
      <span class="selected-name">
        <span class="selected-name-main">${escapeHtml(itemName(id))}</span>
        <span class="selected-name-sub">${escapeHtml(itemSubName(id))}</span>
      </span>
      <span class="qty-control">
        <button type="button" class="qty-btn" data-action="dec" aria-label="-1">−</button>
        <input type="text" inputmode="numeric" class="qty-input" value="${count}" aria-label="${escapeHtml(itemName(id))} count">
        <button type="button" class="qty-btn" data-action="inc" aria-label="+1">+</button>
      </span>
      <button type="button" class="remove-btn" aria-label="remove">🗑</button>
    `;

    const qtyInput = li.querySelector(".qty-input");
    li.querySelector('[data-action="dec"]').addEventListener("click", () => {
      setItemQty(id, (selectedItems.get(id) || 1) - 1);
      qtyInput.value = selectedItems.get(id);
    });
    li.querySelector('[data-action="inc"]').addEventListener("click", () => {
      setItemQty(id, (selectedItems.get(id) || 0) + 1);
      qtyInput.value = selectedItems.get(id);
    });
    qtyInput.addEventListener("input", () => {
      qtyInput.value = qtyInput.value.replace(/[^0-9]/g, "");
    });
    qtyInput.addEventListener("change", () => {
      setItemQty(id, qtyInput.value);
      qtyInput.value = selectedItems.get(id);
    });
    li.querySelector(".remove-btn").addEventListener("click", () => removeItem(id));

    list.appendChild(li);
  }

  hint.hidden = selectedItems.size > 0;
  document.getElementById("selected-list-head").hidden = selectedItems.size === 0;
}

/* =========================================================
   Recipe resolution engine
   ========================================================= */
function getIngredientCounts(recipe) {
  if (recipe.type === "shaped") {
    const counts = {};
    const order = [];
    for (const row of recipe.pattern) {
      for (const ch of row) {
        if (ch === " " || ch === "_") continue;
        const itemId = recipe.key[ch];
        if (!itemId) continue;
        if (!(itemId in counts)) order.push(itemId);
        counts[itemId] = (counts[itemId] || 0) + 1;
      }
    }
    return order.map(id => [id, counts[id]]);
  }
  if (recipe.type === "shapeless") {
    return recipe.ingredients.map(ing => [ing.item, ing.count]);
  }
  return [];
}

function craft(itemId, count, ancestors) {
  const node = {
    id: itemId,
    count,
    children: [],
    recipe: null,
    recipeList: null,
    recipeIndex: 0,
    craftCount: null,
    producedCount: null,
    isBase: false,
    isError: false,
  };

  if (ancestors.includes(itemId)) {
    node.isError = true;
    return node;
  }

  const rawRecipe = recipesData[itemId];
  if (!rawRecipe) {
    node.isBase = true;
    totals[itemId] = (totals[itemId] || 0) + count;
    return node;
  }

  const recipeList = Array.isArray(rawRecipe) ? rawRecipe : [rawRecipe];
  let idx = recipeChoice[itemId] || 0;
  if (idx >= recipeList.length) idx = 0;
  const recipe = recipeList[idx];

  const resultCount = recipe.result_count || 1;
  const craftTimes = Math.ceil(count / resultCount);
  node.craftCount = craftTimes;
  node.producedCount = craftTimes * resultCount;
  node.recipe = recipe;
  node.recipeList = recipeList;
  node.recipeIndex = idx;

  const ingredientCounts = getIngredientCounts(recipe);
  const nextAncestors = ancestors.concat(itemId);

  for (const [ingId, perCraft] of ingredientCounts) {
    const needed = perCraft * craftTimes;
    const childNode = craft(ingId, needed, nextAncestors);
    childNode.perCraft = perCraft;
    node.children.push(childNode);
  }

  return node;
}

function recalcAndRender() {
  totals = {};
  const forest = [];
  for (const [id, count] of selectedItems.entries()) {
    forest.push(craft(id, count, []));
  }
  renderSummary();
  renderDetail(forest);
  togglePanels();
}

function togglePanels() {
  const has = selectedItems.size > 0;
  document.getElementById("panel-summary").hidden = !has;
  document.getElementById("panel-detail").hidden = !has;
}

/* =========================================================
   Summary table (final raw materials)
   ========================================================= */
// Full breakdown used in the summary table: sb (shulker box) / stacks / remainder.
// 1 shulker box = 27 stacks worth of the item (Minecraft's actual capacity).
function stackText(id, count) {
  const item = itemsData[id];
  const stackSize = (item && item.stack_size) || 64;
  if (stackSize <= 1) return "—";

  const shulkerCapacity = stackSize * 27;
  const sb = Math.floor(count / shulkerCapacity);
  const afterSb = count % shulkerCapacity;
  const stacks = Math.floor(afterSb / stackSize);
  const rem = afterSb % stackSize;

  const parts = [];
  if (sb > 0) parts.push(`<span class="stack-sb">${sb}sb</span>`);
  if (stacks > 0) parts.push(`${stacks} ${t("stackUnit")}`);
  if (rem > 0 || parts.length === 0) parts.push(`${rem}`);
  return parts.join(` ${t("plusUnit")} `);
}

// Compact suffix used inline next to counts elsewhere (tree labels, craft meta).
// Returns null when the count doesn't reach a full stack, to avoid clutter.
function stackSuffix(id, count) {
  const item = itemsData[id];
  const stackSize = (item && item.stack_size) || 64;
  if (stackSize <= 1 || count < stackSize) return null;
  return stackText(id, count);
}

function renderSummary() {
  const tbody = document.getElementById("materials-tbody");
  tbody.innerHTML = "";

  const entries = Object.entries(totals).sort((a, b) => b[1] - a[1]);

  for (const [id, count] of entries) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <span class="mat-name-cell">
          <span class="result-icon">${iconImgHtml(id, "pixel-icon")}</span>
          <span class="selected-name">
            <span class="selected-name-main">${escapeHtml(itemName(id))}</span>
            <span class="selected-name-sub">${escapeHtml(itemSubName(id))}</span>
          </span>
        </span>
      </td>
      <td class="num mat-count">${count.toLocaleString()}</td>
      <td class="num mat-stack">${stackText(id, count)}</td>
    `;
    tbody.appendChild(tr);
  }
}

/* =========================================================
   Detail tree (recursive breakdown + recipe visualization)
   ========================================================= */
function renderDetail(forest) {
  const container = document.getElementById("detail-tree");
  container.innerHTML = "";
  forest.forEach((node) => {
    container.appendChild(buildNodeEl(node, true));
  });
}

function buildNodeEl(node, isRoot) {
  const wrap = document.createElement("div");
  wrap.className = "tree-node";

  const isLeaf = node.isBase || node.isError || !node.recipe;
  const suffix = stackSuffix(node.id, node.count);

  const row = document.createElement("div");
  row.className = "tree-node-row" + (isLeaf ? " leaf" : "");
  row.innerHTML = `
    ${isLeaf ? `<span class="tree-toggle"></span>` : `<span class="tree-toggle">▶</span>`}
    <span class="tree-icon">${iconImgHtml(node.id, "pixel-icon")}</span>
    <span class="tree-label">
      <span class="tree-label-name">${escapeHtml(itemName(node.id))}</span>
      <span class="tree-label-count">× ${node.count.toLocaleString()}</span>
      ${suffix ? `<span class="tree-label-stack">${suffix}</span>` : ""}
    </span>
    ${node.isError
      ? `<span class="tree-badge error">${t("badge.cycle")}</span>`
      : node.isBase
        ? `<span class="tree-badge base">${t("badge.base")}</span>`
        : `<span class="tree-badge">${t("meta.craftCount")} ${node.craftCount}${t("meta.times") === "×" ? " ×" : " " + t("meta.times")}</span>`
    }
  `;
  wrap.appendChild(row);

  if (!isLeaf) {
    const body = document.createElement("div");
    body.className = "tree-body";
    body.appendChild(buildRecipeVisual(node));

    if (node.children.length > 0) {
      const childrenWrap = document.createElement("div");
      childrenWrap.className = "tree-children";
      node.children.forEach(child => childrenWrap.appendChild(buildNodeEl(child, false)));
      body.appendChild(childrenWrap);
    }

    wrap.appendChild(body);
    row.addEventListener("click", () => wrap.classList.toggle("expanded"));
  } else if (node.isError) {
    const body = document.createElement("div");
    body.className = "tree-body";
    body.style.display = "block";
    body.innerHTML = `<p style="margin:0;color:var(--redstone);font-size:12.5px;">${t("cycleMsg")}</p>`;
    wrap.appendChild(body);
    wrap.classList.add("expanded");
    row.classList.add("leaf");
  }

  if (isRoot) wrap.classList.add("root-node");

  return wrap;
}

function buildRecipeVisual(node) {
  const recipe = node.recipe;
  const holder = document.createElement("div");

  const title = document.createElement("div");
  title.className = "recipe-block-title";
  title.textContent = t("recipe.title");
  holder.appendChild(title);

  if (node.recipeList && node.recipeList.length > 1) {
    const tabs = document.createElement("div");
    tabs.className = "recipe-variant-tabs";
    node.recipeList.forEach((rec, i) => {
      const tab = document.createElement("button");
      tab.type = "button";
      tab.className = "recipe-variant-tab" + (i === node.recipeIndex ? " active" : "");
      const ingIds = getIngredientCounts(rec).map(([id]) => id);
      tab.innerHTML = `<span class="recipe-variant-label">${t("recipe.variant")} ${i + 1}</span>` +
        ingIds.map(id => iconImgHtml(id, "recipe-variant-icon")).join("");
      tab.title = ingIds.map(id => itemName(id)).join(" + ");
      tab.addEventListener("click", (e) => {
        e.stopPropagation();
        recipeChoice[node.id] = i;
        recalcAndRender();
      });
      tabs.appendChild(tab);
    });
    holder.appendChild(tabs);
  }

  const flex = document.createElement("div");
  flex.className = "recipe-flex";

  if (recipe.type === "shaped") {
    const grid = document.createElement("div");
    grid.className = "craft-grid";

    // Always render a full 3x3 grid (Minecraft's crafting table GUI slots),
    // padding shorter patterns with empty cells so the grid stays consistent.
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const row = recipe.pattern[r];
        const ch = row ? row[c] : undefined;
        const slot = document.createElement("div");
        if (!ch || ch === " " || ch === "_" || !recipe.key[ch]) {
          slot.className = "craft-slot empty";
        } else {
          const ingId = recipe.key[ch];
          slot.className = "craft-slot";
          slot.title = itemName(ingId);
          slot.innerHTML = `${iconImgHtml(ingId, "slot-item-icon")}`;
        }
        grid.appendChild(slot);
      }
    }
    flex.appendChild(grid);
  } else {
    const list = document.createElement("div");
    list.className = "shapeless-list";
    list.innerHTML = `<div style="font-size:11.5px;color:var(--text-faint);margin-bottom:2px;">${t("recipe.shapeless")}</div>`;
    for (const ing of recipe.ingredients) {
      const row = document.createElement("div");
      row.className = "shapeless-row";
      row.innerHTML = `<span class="tree-icon">${iconImgHtml(ing.item, "pixel-icon")}</span> ${escapeHtml(itemName(ing.item))} × ${ing.count}`;
      list.appendChild(row);
    }
    flex.appendChild(list);
  }

  const arrow = document.createElement("div");
  arrow.className = "craft-arrow";
  arrow.textContent = "→";
  flex.appendChild(arrow);

  const resultSlot = document.createElement("div");
  resultSlot.className = "craft-result-slot";
  resultSlot.innerHTML = `${iconImgHtml(node.id, "slot-item-icon")}`;
  flex.appendChild(resultSlot);

  const producedSuffix = stackSuffix(node.id, node.producedCount);
  const meta = document.createElement("div");
  meta.className = "craft-meta";
  meta.innerHTML = `
    <span>${t("meta.perCraft")}: <strong>${itemName(node.id)} × ${recipe.result_count || 1}</strong></span>
    <span>${t("meta.craftCount")}: <strong>${node.craftCount.toLocaleString()} ${escapeHtml(t("meta.times"))}</strong></span>
    <span>${t("meta.produced")}: <strong>${node.producedCount.toLocaleString()} ${escapeHtml(t("meta.pieces"))}</strong>${producedSuffix ? ` <span class="tree-label-stack">${producedSuffix}</span>` : ""}</span>
  `;
  flex.appendChild(meta);

  holder.appendChild(flex);
  return holder;
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
    .replace(/'/g, "&#39;");
}
