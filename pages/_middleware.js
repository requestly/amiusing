import { NextResponse } from "next/server";

export async function middleware(req, ev) {
  console.log({
    hn: req.nextUrl.hostname,
    o: req.nextUrl.origin,
    nU: req.nextUrl,
  });
  // return req.headers["x-forwarded-proto"] !== "http"
  //   ? NextResponse.redirect(`http://${req.hostname}${req.originalUrl}`)
  //   : NextResponse.next();
  return NextResponse.next();
}
