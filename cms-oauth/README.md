# BEE112 — Decap CMS OAuth (Cloudflare Worker)

Worker care autentifică panoul `/admin/` cu GitHub (necesar pe Cloudflare Pages).

## Pași de pus în funcțiune

### 1. GitHub OAuth App (1 dată, în browser — doar tu poți)
GitHub → Settings → Developer settings → **OAuth Apps** → **New OAuth App**:
- **Application name:** `BEE112 CMS`
- **Homepage URL:** `https://bee112.ro`
- **Authorization callback URL:** `https://bee112-cms-oauth.<SUBDOMENIU>.workers.dev/callback`
  (URL-ul exact al worker-ului apare după primul deploy — îl actualizezi aici după pasul 2)
- Generează un **Client secret**. Notează **Client ID** + **Client secret**.

### 2. Deploy worker
```
cd cms-oauth
npx wrangler login            # autentificare Cloudflare (în browser)
npx wrangler secret put GITHUB_CLIENT_ID       # lipești Client ID
npx wrangler secret put GITHUB_CLIENT_SECRET   # lipești Client secret
npx wrangler deploy
```
Deploy-ul afișează URL-ul, ex: `https://bee112-cms-oauth.xxxx.workers.dev`.

### 3. Leagă-le
- Pune URL-ul worker-ului ca `backend.base_url` în `public/admin/config.yml`.
- Actualizează **Authorization callback URL** din OAuth App cu `<URL>/callback`.

### 4. Test
`https://bee112.ro/admin/` → „Login with GitHub" → autorizezi → editezi.
