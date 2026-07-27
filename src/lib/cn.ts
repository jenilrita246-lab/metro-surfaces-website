/** Tiny classname joiner — no runtime dependency needed. */
export function cn(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}
