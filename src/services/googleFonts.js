import axios from "axios";
import JSZip from "jszip";

const CACHE_KEY = "google-fonts-cache-v1";
const CACHE_TTL_MS = 1000 * 60 * 60 * 6;
const API_BASE = "https://www.googleapis.com/webfonts/v1/webfonts";

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/\+/g, "plus")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const mapFont = (font) => {
  const files = font.files || {};
  const variants = font.variants || Object.keys(files);

  return {
    id: slugify(font.family),
    family: font.family,
    category: font.category,
    variants,
    files,
    previewText: "The quick brown fox jumps over the lazy dog",
    charset:
      "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz @_e'e&_\"'(-'(",
    // Simple visual placeholders for examples until a bespoke image dataset is added.
    images: [
      `https://source.unsplash.com/1200x800/?typography,${encodeURIComponent(font.family)}`,
      `https://source.unsplash.com/1200x800/?lettering,design,${encodeURIComponent(font.family)}`,
    ],
  };
};

const readCache = () => {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed.timestamp || !Array.isArray(parsed.data)) return null;
    if (Date.now() - parsed.timestamp > CACHE_TTL_MS) return null;
    return parsed.data;
  } catch {
    return null;
  }
};

const writeCache = (fonts) => {
  try {
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ timestamp: Date.now(), data: fonts }),
    );
  } catch {
    // Ignore storage errors and continue with runtime data.
  }
};

export const fetchGoogleFonts = async () => {
  const cached = readCache();
  if (cached) return cached;

  const apiKey = import.meta.env.VITE_GOOGLE_FONTS_API_KEY;
  if (!apiKey) {
    throw new Error("Missing VITE_GOOGLE_FONTS_API_KEY");
  }

  const response = await axios.get(API_BASE, {
    params: {
      key: apiKey,
      sort: "popularity",
    },
  });

  const items = response.data?.items || [];
  const fonts = items.map(mapFont);
  writeCache(fonts);
  return fonts;
};

export const downloadSingleVariant = async (font, variant) => {
  const url = font.files?.[variant];
  if (!url) {
    throw new Error(`No file found for variant: ${variant}`);
  }

  const response = await axios.get(url, { responseType: "blob" });
  const extension = url.includes(".woff2") ? "woff2" : "ttf";
  const link = document.createElement("a");
  link.href = URL.createObjectURL(response.data);
  link.download = `${font.family}-${variant}.${extension}`;
  link.click();
  URL.revokeObjectURL(link.href);
};

export const downloadAllFonts = async (font) => {
  const zip = new JSZip();

  for (const [variant, url] of Object.entries(font.files || {})) {
    const response = await axios.get(url, { responseType: "arraybuffer" });
    const extension = url.includes(".woff2") ? "woff2" : "ttf";
    zip.file(`${font.family}-${variant}.${extension}`, response.data);
  }

  const content = await zip.generateAsync({ type: "blob" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(content);
  link.download = `${font.family}.zip`;
  link.click();
  URL.revokeObjectURL(link.href);
};
