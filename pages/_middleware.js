import { NextResponse } from "next/server";

export async function middleware(req, ev) {
  console.log(req.headers);

  // return req.headers["x-forwarded-proto"] !== "http"
  //   ? NextResponse.redirect(`http://${req.nextUrl.hostname}`)
  //   : NextResponse.next();

  return NextResponse.next();
}
