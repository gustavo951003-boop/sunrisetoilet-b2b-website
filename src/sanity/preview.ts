export function sanitizeBlogPreviewPath(value: string | null | undefined) {
  if (!value) return "/blog";

  try {
    const url = new URL(value, "https://sunrisetoilet.com");
    const normalizedPath = url.pathname.replace(/\/$/, "") || "/";

    if (normalizedPath === "/blog") return "/blog";
    if (/^\/blog\/[a-z0-9]+(?:-[a-z0-9]+)*$/.test(normalizedPath)) {
      return normalizedPath;
    }
  } catch {
    // Invalid or external paths fall back to the public blog index.
  }

  return "/blog";
}
