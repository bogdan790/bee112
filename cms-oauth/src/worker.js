// Decap CMS — GitHub OAuth provider (Cloudflare Worker)
// Rezolvă autentificarea „Login with GitHub" pentru panoul /admin/ pe Cloudflare Pages
// (git-gateway e doar pentru Netlify). Worker-ul face schimbul code→token cu GitHub
// și predă token-ul către Decap prin handshake-ul postMessage standard.
//
// Variabile (secrets) necesare:
//   GITHUB_CLIENT_ID      — din GitHub OAuth App
//   GITHUB_CLIENT_SECRET  — din GitHub OAuth App
//
// Endpoints:
//   /auth      — pornește fluxul (Decap deschide acest URL)
//   /callback  — primește codul de la GitHub, întoarce token-ul către Decap

const GITHUB_AUTHORIZE = 'https://github.com/login/oauth/authorize';
const GITHUB_TOKEN = 'https://github.com/login/oauth/access_token';
const PROVIDER = 'github';

function renderHandshake(message) {
  // Protocolul Decap: popup-ul așteaptă un prim mesaj de la opener, apoi îi trimite rezultatul.
  return `<!doctype html><html><head><meta charset="utf-8"></head><body><script>
  (function () {
    function receiveMessage(e) {
      window.opener.postMessage(${JSON.stringify(message)}, e.origin);
      window.removeEventListener('message', receiveMessage, false);
    }
    window.addEventListener('message', receiveMessage, false);
    window.opener.postMessage('authorizing:${PROVIDER}', '*');
  })();
  </script></body></html>`;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/auth') {
      const params = new URLSearchParams({
        client_id: env.GITHUB_CLIENT_ID,
        redirect_uri: `${url.origin}/callback`,
        scope: 'repo,user',
        state: crypto.randomUUID(),
      });
      return Response.redirect(`${GITHUB_AUTHORIZE}?${params.toString()}`, 302);
    }

    if (url.pathname === '/callback') {
      const code = url.searchParams.get('code');
      if (!code) return new Response('Missing ?code', { status: 400 });

      const res = await fetch(GITHUB_TOKEN, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          client_id: env.GITHUB_CLIENT_ID,
          client_secret: env.GITHUB_CLIENT_SECRET,
          code,
        }),
      });
      const data = await res.json();

      const message = data.access_token
        ? `authorization:${PROVIDER}:success:${JSON.stringify({ token: data.access_token, provider: PROVIDER })}`
        : `authorization:${PROVIDER}:error:${JSON.stringify(data)}`;

      return new Response(renderHandshake(message), {
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }

    return new Response('BEE112 CMS OAuth — endpoints: /auth, /callback', { status: 200 });
  },
};
