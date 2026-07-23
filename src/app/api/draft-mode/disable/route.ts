import { draftMode } from "next/headers";
import { NextResponse } from "next/server";
import { sanitizeBlogPreviewPath } from "@/sanity/preview";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const mode = await draftMode();
  mode.disable();

  const redirectTo = sanitizeBlogPreviewPath(requestUrl.searchParams.get("redirect"));
  const response = NextResponse.redirect(new URL(redirectTo, request.url));
  response.headers.set("Cache-Control", "no-store");
  return response;
}
