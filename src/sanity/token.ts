import "server-only";

export function getSanityReadToken() {
  const token = process.env.SANITY_API_READ_TOKEN?.trim();

  if (!token) {
    throw new Error("Missing SANITY_API_READ_TOKEN for Sanity draft preview.");
  }

  return token;
}
