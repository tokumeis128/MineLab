"use strict";

/* =========================================================
   i18n
   ========================================================= */
const I18N = {
  ja: {
    "brand.tagline": "MOTDジェネレーター",
    "eyebrow.editor": "STEP 01 — 入力",
    "heading.editor": "MOTDを編集",
    "hint.howTo": "下の欄に文章を入力し、色や太字などを付けたい範囲をドラッグして選択してから、ボタンを押すと適用されます。",
    "toolbar.color": "色",
    "toolbar.format": "書式",
    "label.motdText": "MOTD（Enterで改行 / 2行まで）",
    "btn.clearMotd": "全て削除",
    "confirm.clearMotd": "入力内容をすべて削除しますか？",
    "eyebrow.preview": "STEP 02 — プレビュー",
    "heading.preview": "プレビュー",
    "hint.previewNote": "マルチプレイのサーバー一覧の表示を再現しています。実際の見え方は環境により多少異なります。",
    "eyebrow.output": "STEP 03 — 出力",
    "heading.output": "出力",
    "output.raw": "§コード（プラグインの/motdコマンドなどに）",
    "output.properties": "server.properties 用（Unicodeエスケープ済み）",
    "output.propertiesNote": "server.properties はJavaのプロパティファイル形式（ASCII）で読み込まれるため、日本語や§記号などASCII外の文字はそのまま書くと文字化けします。この欄は \\uXXXX 形式に自動変換済みです。motd= の行をこの内容で置き換えてください（\\n はそのまま2文字として貼り付けます）。",
    "btn.copy": "コピー",
    "btn.copied": "コピーしました",
    "footer.disclaimer": "本サイトは非公式のファンメイドツールです。Minecraft および Mojang とは関係ありません。\n一部コンテンツの生成にAIアシスタントを利用しています。\n© 2026 MineLab. All rights reserved.",
    "color.black": "黒", "color.darkBlue": "濃い青", "color.darkGreen": "濃い緑", "color.darkAqua": "濃い水色",
    "color.darkRed": "濃い赤", "color.darkPurple": "濃い紫", "color.gold": "金", "color.gray": "灰色",
    "color.darkGray": "濃い灰色", "color.blue": "青", "color.green": "緑", "color.aqua": "水色",
    "color.red": "赤", "color.lightPurple": "ピンク", "color.yellow": "黄色", "color.white": "白",
    "format.bold": "太字", "format.italic": "斜体", "format.underline": "下線",
    "format.strike": "取り消し線", "format.obf": "ランダム文字", "format.reset": "リセット",
  },
  en: {
    "brand.tagline": "MOTD Generator",
    "eyebrow.editor": "STEP 01 — INPUT",
    "heading.editor": "Edit your MOTD",
    "hint.howTo": "Type your message below, drag to select the part you want to style, then click a button to apply it.",
    "toolbar.color": "Color",
    "toolbar.format": "Format",
    "label.motdText": "MOTD (press Enter for a new line / 2 lines max)",
    "btn.clearMotd": "Clear all",
    "confirm.clearMotd": "Clear everything you've typed?",
    "eyebrow.preview": "STEP 02 — PREVIEW",
    "heading.preview": "Preview",
    "hint.previewNote": "This recreates how it looks in the multiplayer server list. The real rendering may vary slightly.",
    "eyebrow.output": "STEP 03 — OUTPUT",
    "heading.output": "Output",
    "output.raw": "§ code (for plugin /motd commands, etc.)",
    "output.properties": "For server.properties (Unicode-escaped)",
    "output.propertiesNote": "server.properties is loaded as a Java properties file (ASCII), so Japanese text and even the § symbol get mangled if written directly. This box is auto-converted to \\uXXXX escapes. Replace the motd= line with this (paste \\n literally as two characters).",
    "btn.copy": "Copy",
    "btn.copied": "Copied!",
    "footer.disclaimer": "This is an unofficial fan-made tool. Not affiliated with Minecraft or Mojang.\nSome content on this site was generated with the help of an AI assistant.\n© 2026 MineLab. All rights reserved.",
    "color.black": "Black", "color.darkBlue": "Dark Blue", "color.darkGreen": "Dark Green", "color.darkAqua": "Dark Aqua",
    "color.darkRed": "Dark Red", "color.darkPurple": "Dark Purple", "color.gold": "Gold", "color.gray": "Gray",
    "color.darkGray": "Dark Gray", "color.blue": "Blue", "color.green": "Green", "color.aqua": "Aqua",
    "color.red": "Red", "color.lightPurple": "Light Purple", "color.yellow": "Yellow", "color.white": "White",
    "format.bold": "Bold", "format.italic": "Italic", "format.underline": "Underline",
    "format.strike": "Strikethrough", "format.obf": "Obfuscated", "format.reset": "Reset",
  }
};

let currentLang = "ja";

/* =========================================================
   Feature / tool switcher (hamburger menu)
   ========================================================= */
const FEATURES = [
  { id: "home", icon: "🏠", name: "ホーム", tagline: "MineLab Home", active: false, href: "home.html" },
  { id: "craft", icon: "⛏", name: "クラフト計算機", tagline: "Recipe Stack Resolver", active: false, href: "index.html" },
  { id: "motd", icon: "📜", name: "MOTDジェネレーター", tagline: "Server List Message Editor", active: true, href: null },
  { id: "pack", icon: "🧩", name: "リソースパック情報ジェネレーター", tagline: "pack.mcmeta / manifest.json Generator", active: false, href: "pack.html" },
  { id: "properties", icon: "🖥", name: "server.propertiesエディター", tagline: "Server Properties Editor", active: false, href: "properties.html" },
];

/* =========================================================
   Minecraft color / format codes
   ========================================================= */
const COLORS = [
  { code: "0", hex: "#000000", labelKey: "color.black" },
  { code: "1", hex: "#0000AA", labelKey: "color.darkBlue" },
  { code: "2", hex: "#00AA00", labelKey: "color.darkGreen" },
  { code: "3", hex: "#00AAAA", labelKey: "color.darkAqua" },
  { code: "4", hex: "#AA0000", labelKey: "color.darkRed" },
  { code: "5", hex: "#AA00AA", labelKey: "color.darkPurple" },
  { code: "6", hex: "#FFAA00", labelKey: "color.gold" },
  { code: "7", hex: "#AAAAAA", labelKey: "color.gray" },
  { code: "8", hex: "#555555", labelKey: "color.darkGray" },
  { code: "9", hex: "#5555FF", labelKey: "color.blue" },
  { code: "a", hex: "#55FF55", labelKey: "color.green" },
  { code: "b", hex: "#55FFFF", labelKey: "color.aqua" },
  { code: "c", hex: "#FF5555", labelKey: "color.red" },
  { code: "d", hex: "#FF55FF", labelKey: "color.lightPurple" },
  { code: "e", hex: "#FFFF55", labelKey: "color.yellow" },
  { code: "f", hex: "#FFFFFF", labelKey: "color.white" },
];
const COLOR_MAP = Object.fromEntries(COLORS.map(c => [c.code, c.hex]));

const FORMATS = [
  { code: "l", icon: "B", labelKey: "format.bold" },
  { code: "o", icon: "I", labelKey: "format.italic" },
  { code: "n", icon: "U", labelKey: "format.underline" },
  { code: "m", icon: "S", labelKey: "format.strike" },
  { code: "k", icon: "?", labelKey: "format.obf" },
  { code: "r", icon: "⟲", labelKey: "format.reset", reset: true },
];

const MAX_VISIBLE_CHARS = 45;
const MAX_LINES = 2;
const OBF_CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?#%*+-";

/* =========================================================
   Init
   ========================================================= */
document.addEventListener("DOMContentLoaded", init);

function init() {
  initTheme();
  initLang();
  renderNavMenu();
  renderToolbar();
  bindStaticEvents();
  updateAll();
  startObfuscationLoop();
}

function editorEl() {
  return document.getElementById("motd-text");
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
    renderToolbar();
    updateAll();
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

  const editor = editorEl();

  editor.addEventListener("keydown", (e) => {
    // Minecraft's MOTD only supports 2 lines — block a 3rd line at the source
    // rather than silently truncating while the person is still typing.
    if (e.key === "Enter") {
      const lineCount = editor.value.split("\n").length;
      if (lineCount >= MAX_LINES) e.preventDefault();
    }
  });

  editor.addEventListener("input", () => {
    // Backstop for paste / IME input that can introduce extra newlines at once.
    const lines = editor.value.split("\n");
    if (lines.length > MAX_LINES) {
      const pos = editor.selectionStart;
      editor.value = lines.slice(0, MAX_LINES).join("\n");
      editor.setSelectionRange(Math.min(pos, editor.value.length), Math.min(pos, editor.value.length));
    }
    updateAll();
  });

  document.getElementById("motd-clear").addEventListener("click", () => {
    if (!editor.value) return;
    if (!window.confirm(t("confirm.clearMotd"))) return;
    editor.value = "";
    updateAll();
  });

  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => handleCopy(btn));
  });
}

/* =========================================================
   Toolbar (colors + formats)
   ========================================================= */
function renderToolbar() {
  const colorGrid = document.getElementById("color-grid");
  colorGrid.innerHTML = COLORS.map(c => `
    <button
      type="button"
      class="color-swatch"
      style="background:${c.hex};"
      data-code="${c.code}"
      title="${escapeHtml(t(c.labelKey))}"
      aria-label="${escapeHtml(t(c.labelKey))}"
    >
      <span class="color-swatch-label" style="color:${idealTextColor(c.hex)};">${c.code}</span>
    </button>
  `).join("");

  colorGrid.querySelectorAll(".color-swatch").forEach(btn => {
    btn.addEventListener("click", () => insertCode(btn.dataset.code, { atEnd: false }));
  });

  const formatRow = document.getElementById("format-btn-row");
  formatRow.innerHTML = FORMATS.map(f => `
    <button type="button" class="format-btn${f.reset ? " is-reset" : ""}" data-code="${f.code}" data-reset="${!!f.reset}">
      <span class="format-btn-icon">${f.icon}</span><span>${escapeHtml(t(f.labelKey))}</span>
    </button>
  `).join("");

  formatRow.querySelectorAll(".format-btn").forEach(btn => {
    btn.addEventListener("click", () => insertCode(btn.dataset.code, { atEnd: btn.dataset.reset === "true" }));
  });
}

function idealTextColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6 ? "#000000" : "#ffffff";
}

// Inserts "&<code>" into the currently active line input.
// atEnd=false (colors, bold/italic/underline/strike/obf): inserted right before the
//   selection, so it starts applying from the selected text onward — matching how
//   Minecraft's own formatting codes cascade forward through the string.
// atEnd=true (reset): inserted right after the selection, to stop the effect there.
function insertCode(code, opts) {
  const el = editorEl();
  el.focus();
  const start = typeof el.selectionStart === "number" ? el.selectionStart : el.value.length;
  const end = typeof el.selectionEnd === "number" ? el.selectionEnd : el.value.length;
  const insertPos = opts && opts.atEnd ? end : start;
  const codeStr = "&" + code;
  const val = el.value;

  el.value = val.slice(0, insertPos) + codeStr + val.slice(insertPos);

  let newStart, newEnd;
  if (opts && opts.atEnd) {
    newStart = start;
    newEnd = end;
  } else {
    newStart = start + codeStr.length;
    newEnd = end + codeStr.length;
  }
  el.setSelectionRange(newStart, newEnd);
  updateAll();
}

/* =========================================================
   Parsing + rendering
   ========================================================= */
const CODE_RE = /^[0-9a-fk-or]$/i;

function parseLine(raw) {
  const segments = [];
  let color = null, bold = false, italic = false, underline = false, strike = false, obf = false;
  let buf = "";

  for (let i = 0; i < raw.length; i++) {
    const ch = raw[i];
    if (ch === "&" && i + 1 < raw.length && CODE_RE.test(raw[i + 1])) {
      if (buf) { segments.push({ text: buf, color, bold, italic, underline, strike, obf }); buf = ""; }
      const code = raw[i + 1].toLowerCase();
      i++;
      if (code === "r") {
        color = null; bold = italic = underline = strike = obf = false;
      } else if (code === "l") {
        bold = true;
      } else if (code === "o") {
        italic = true;
      } else if (code === "n") {
        underline = true;
      } else if (code === "m") {
        strike = true;
      } else if (code === "k") {
        obf = true;
      } else if (COLOR_MAP[code]) {
        // A color code resets bold/italic/underline/strike/obf, matching Minecraft's behavior.
        color = COLOR_MAP[code];
        bold = italic = underline = strike = obf = false;
      }
    } else {
      buf += ch;
    }
  }
  if (buf) segments.push({ text: buf, color, bold, italic, underline, strike, obf });
  return segments;
}

function renderPreviewLine(containerEl, segments) {
  containerEl.innerHTML = segments.map(seg => {
    if (!seg.text) return "";
    const classes = [];
    if (seg.bold) classes.push("mc-bold");
    if (seg.italic) classes.push("mc-italic");
    if (seg.underline) classes.push("mc-underline");
    if (seg.strike) classes.push("mc-strike");

    let style = "";
    if (seg.color) style += `color:${seg.color};text-shadow:2px 2px 0 ${shadowColor(seg.color)};`;

    if (seg.obf) {
      classes.push("mc-obf");
      return `<span class="${classes.join(" ")}" style="${style}" data-obf-len="${seg.text.length}">${escapeHtml(randomObfString(seg.text.length))}</span>`;
    }
    return `<span class="${classes.join(" ")}" style="${style}">${escapeHtml(seg.text)}</span>`;
  }).join("");
}

function shadowColor(hex) {
  const r = Math.floor(parseInt(hex.slice(1, 3), 16) * 0.25);
  const g = Math.floor(parseInt(hex.slice(3, 5), 16) * 0.25);
  const b = Math.floor(parseInt(hex.slice(5, 7), 16) * 0.25);
  return `rgb(${r},${g},${b})`;
}

function randomObfString(len) {
  let out = "";
  for (let i = 0; i < len; i++) out += OBF_CHARS[Math.floor(Math.random() * OBF_CHARS.length)];
  return out;
}

function startObfuscationLoop() {
  setInterval(() => {
    document.querySelectorAll(".mc-obf").forEach(el => {
      const len = parseInt(el.dataset.obfLen, 10) || el.textContent.length;
      el.textContent = randomObfString(len);
    });
  }, 90);
}

/* =========================================================
   Output + counts
   ========================================================= */
function updateAll() {
  const lines = editorEl().value.split("\n");
  const l1 = lines[0] || "";
  const l2 = lines[1] || "";

  updateCount("count-line1", l1);
  updateCount("count-line2", l2);

  renderPreviewLine(document.getElementById("preview-line1"), parseLine(l1));
  renderPreviewLine(document.getElementById("preview-line2"), parseLine(l2));

  renderOutput(l1, l2);
}

function updateCount(id, text) {
  const visible = text.replace(/&[0-9a-fk-or]/gi, "").length;
  const el = document.getElementById(id);
  const lineLabel = id === "count-line1" ? (currentLang === "ja" ? "1行目" : "Line 1") : (currentLang === "ja" ? "2行目" : "Line 2");
  el.textContent = `${lineLabel}: ${visible} / ${MAX_VISIBLE_CHARS}`;
  el.classList.toggle("is-over", visible > MAX_VISIBLE_CHARS);
}

function toSectionCodes(text) {
  return text.replace(/&([0-9a-fk-or])/gi, (m, c) => "\u00A7" + c.toLowerCase());
}

// Java's Properties file format is parsed as ASCII/Latin-1: anything outside
// that range (Japanese text, but also the § section-sign itself) has to be
// written as a \uXXXX escape or it comes out mangled in server.properties.
function toPropertiesEscaped(text) {
  let out = "";
  for (const ch of text) {
    const code = ch.codePointAt(0);
    if (ch === "\\") {
      out += "\\\\";
    } else if (code > 126) {
      out += "\\u" + code.toString(16).padStart(4, "0");
    } else {
      out += ch;
    }
  }
  return out;
}

function renderOutput(l1, l2) {
  const rawL1 = toSectionCodes(l1);
  const rawL2 = toSectionCodes(l2);

  document.getElementById("output-raw").textContent = rawL2 ? `${rawL1}\n${rawL2}` : rawL1;

  const propLine = "motd=" + toPropertiesEscaped(rawL1) + (rawL2 ? "\\n" + toPropertiesEscaped(rawL2) : "");
  document.getElementById("output-properties").textContent = propLine;
}

/* =========================================================
   Copy to clipboard
   ========================================================= */
function handleCopy(btn) {
  const targetId = btn.dataset.copyTarget;
  const targetEl = document.getElementById(targetId);
  if (!targetEl) return;
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
