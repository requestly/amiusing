import { NextResponse } from "next/server";

export async function middleware(req, ev) {
  return req.headers["x-forwarded-proto"] !== "https"
    ? NextResponse.redirect(`http://${req.nextUrl.hostname}`)
    : NextResponse.next();
}
