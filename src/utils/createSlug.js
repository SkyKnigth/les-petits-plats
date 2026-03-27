import { cleanText } from "./cleanText";

export function createSlug(texte = "") {
  return cleanText(texte)
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}