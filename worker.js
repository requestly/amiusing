// Cloudflare Worker for amiusing.requestly.io.
//
// Replaces the legacy Next.js SSR setup. Mirrors the existing contract
// exactly: when the Requestly desktop proxy intercepts traffic, it injects the
// `amiusingrequestly: true` request header. This Worker reads that header and
// returns the appropriate Success / Failure page inline.
//
// HTML bodies live as separate files (success.html, failure.html) and are
// bundled into the Worker at deploy time via Wrangler's text-import rule
// (see wrangler.toml).

import SUCCESS_HTML from "./success.html";
import FAILURE_HTML from "./failure.html";

const AMIUSING_HEADER = "amiusingrequestly";

const RESPONSE_HEADERS = {
  "content-type": "text/html; charset=utf-8",
  // Never cache — a stale Failure page would survive a later proxy
  // interception and confuse the user.
  "cache-control": "no-store",
  // Prevent browsers from auto-upgrading http:// to https:// for this host.
  // The proxy-test flow is documented as http://, and the desktop proxy can
  // MITM HTTPS only when its CA is trusted — http:// is the lowest-common-
  // denominator that the test page must continue to work over.
  "strict-transport-security": "max-age=0",
};

export default {
  async fetch(request) {
    const isUsingRequestly =
      request.headers.get(AMIUSING_HEADER) === "true";

    return new Response(isUsingRequestly ? SUCCESS_HTML : FAILURE_HTML, {
      headers: RESPONSE_HEADERS,
    });
  },
};
