import { NextRequest } from "next/server";
import { isRatelimited } from "./utils/ratelimits";

const authEndpoints = ["/blogs/create"];
const ratelimitEndpoints = ["/email"];

function isActive(endpoints: Array<string>, request: NextRequest) {
  for (const endpoint of endpoints) {
    if (request.nextUrl.href.endsWith(endpoint)) return true;
  }
  return false;
}

export function middleware(request: NextRequest) {
  if (
    isActive(authEndpoints, request) &&
    request.headers.get("Authorization") != process.env.MASTER_KEY
  ) {
    return new Response("Failed Auth", { status: 401 });
  } else if (
    isActive(ratelimitEndpoints, request) &&
    isRatelimited(String(request.headers.get("x-forwarded-for")))
  ) {
    return new Response("Failed rate limits", { status: 429 });
  }
}
