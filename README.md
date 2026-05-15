# amiusing.requestly.io

A Cloudflare Worker that tells the user whether their traffic is currently flowing through the Requestly desktop proxy.

The Requestly desktop proxy injects an `amiusingrequestly: true` request header on every outbound request to `amiusing.requestly.io`. This Worker reads that header on receipt and returns one of two inline pages:

- `success.html` — shown when the header is present (i.e. the user IS being proxied).
- `failure.html` — shown otherwise.

## Local development

```bash
npm install
npx wrangler dev
```

Then in another terminal:

```bash
# No header → No page
curl -i http://127.0.0.1:8787/

# With header → Yes page
curl -i -H 'amiusingrequestly: true' http://127.0.0.1:8787/
```

## Deploy

One-time setup:

```bash
npx wrangler login
```

Staging (before cutover):

```bash
npm run deploy:staging
```

Production:

```bash
npm run deploy
```

Routes are configured per-deploy via the `--route` flag in the npm scripts (see `package.json`). Adjust `wrangler.toml` if you prefer to pin routes there.

## Cloudflare configuration

For HTTP to work end-to-end (the proxy-test docs reference `http://amiusing.requestly.io` because the desktop proxy MITM only works over HTTPS once the Requestly CA is trusted), the following must be set on the `amiusing.requestly.io` hostname in Cloudflare:

- **Configuration Rule** scoped to `amiusing.requestly.io`: `Always Use HTTPS = Off`.
- HSTS not enabled for this hostname. The Worker also emits `Strict-Transport-Security: max-age=0` as belt-and-suspenders.

The site-wide HTTPS setting on `requestly.io` stays untouched.

## Response headers

Every response from the Worker sets:

- `content-type: text/html; charset=utf-8`
- `cache-control: no-store` — a cached "No" must not survive a later interception.
- `strict-transport-security: max-age=0` — keep `http://` from being auto-upgraded.
