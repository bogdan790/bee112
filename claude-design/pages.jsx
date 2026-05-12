// pages.jsx — toate paginile site-ului BEE112

const PHONE = "0761 330 577";
const PHONE_TEL = "+40761330577";

// ─── helper components ────────────────────────────────────
function PhoneButton({ size = "regular", tone = "calm" }) {
  const label = tone === "ferm" ?
  "Sună acum" :
  "Sună — răspundem cu calm";
  return (
    <a href={`tel:${PHONE_TEL}`} className="btn-phone" data-size={size}>
      <span className="ico">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span>
        <span className="lbl">{label}</span>
        <span className="num">{PHONE}</span>
      </span>
    </a>);

}

function PageHead({ eyebrow, title, lede }) {
  return (
    <section className="page-head">
      <div className="shell">
        {eyebrow && <div className="eyebrow" style={{ marginBottom: 18 }}>{eyebrow}</div>}
        <h1 style={{ fontSize: "0px", fontFamily: "Geist" }}>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
      </div>
    </section>);

}

function Footer({ go }) {
  return (
    <footer>
      <div className="shell">
        <div className="foot-grid">
          <div>
            <div className="brand" style={{ marginBottom: 16 }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 75" style={{ height: 52, width: 'auto', display: 'block', flexShrink: 0 }}>
                <g transform="translate(0, 5)">
                  <path d="M 0 35 Q 45 28 95 18" stroke="#888b8d" strokeWidth="12" strokeLinecap="round" fill="none" />
                  <path d="M 75 18 Q 80 5 95 5 Q 90 15 80 20 Z" fill="#5a8a3a" />
                  <path d="M 30 30 Q 25 15 15 18 Q 20 28 28 32 Z" fill="#5a8a3a" />
                  <path d="M 12 34 C 20 28, 28 32, 35 28 C 40 22, 45 20, 50 25 C 55 16, 65 14, 72 20 C 80 18, 85 24, 86 32 C 88 55, 65 70, 48 65 C 30 60, 15 45, 12 34 Z" fill="#4a2e15" />
                  <path d="M 25 45 C 35 52, 45 50, 55 45 M 35 55 C 45 60, 55 58, 65 50 M 65 30 C 72 35, 75 40, 75 45" stroke="#f4f1ea" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.8" />
                  <path d="M 8 48 Q 10 46 12 48 Q 10 50 8 48 Z" fill="#4a2e15" />
                  <path d="M 10 45 L 8 43 M 12 45 L 14 43" stroke="#4a2e15" strokeWidth="1" strokeLinecap="round" />
                  <path d="M 90 40 Q 92 38 94 40 Q 92 42 90 40 Z" fill="#4a2e15" />
                  <path d="M 92 37 L 90 35 M 94 37 L 96 35" stroke="#4a2e15" strokeWidth="1" strokeLinecap="round" />
                </g>
                <text x="105" y="52" fontFamily="var(--font-heading, ui-sans-serif, system-ui, sans-serif)" fontSize="36" fontWeight="900" fill="#ffffff" letterSpacing="-0.5">BEE<tspan fill="var(--primary)">112</tspan></text>
              </svg>
            </div>
            <p style={{ maxWidth: '32ch', fontSize: 14, lineHeight: 1.6 }}>
              Inițiativă civică de voluntariat. Salvăm roiuri de albine în București și Ilfov, fără substanțe toxice, fără taxe.
            </p>
            <a href={`tel:${PHONE_TEL}`} className="foot-cta" style={{ marginTop: 22 }}>📞 {PHONE}</a>
          </div>
          <div>
            <h4>Site</h4>
            <ul>
              <li><a href="#/" onClick={(e) => {e.preventDefault();go('home');}}>Acasă</a></li>
              <li><a href="#/cine-suntem" onClick={(e) => {e.preventDefault();go('cine-suntem');}}>Cine suntem</a></li>
              <li><a href="#/cum-functioneaza" onClick={(e) => {e.preventDefault();go('cum-functioneaza');}}>Cum funcționează</a></li>
              <li><a href="#/importanta-albinelor" onClick={(e) => {e.preventDefault();go('importanta-albinelor');}}>Importanța albinelor</a></li>
            </ul>
          </div>
          <div>
            <h4>Resurse</h4>
            <ul>
              <li><a href="#/ce-sa-nu-faci" onClick={(e) => {e.preventDefault();go('ce-sa-nu-faci');}}>Ce să NU faci</a></li>
              <li><a href="#/autoritati" onClick={(e) => {e.preventDefault();go('autoritati');}}>Lucrăm cu autoritățile</a></li>
              <li><a href="#/intrebari" onClick={(e) => {e.preventDefault();go('intrebari');}}>Întrebări frecvente</a></li>
              <li><a href="#/voluntariat" onClick={(e) => {e.preventDefault();go('voluntariat');}}>Voluntariat</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={`tel:${PHONE_TEL}`}>{PHONE}</a></li>
              <li>București & Ilfov</li>
              <li><a href="mailto:contact@bee112.ro">contact@bee112.ro</a></li>
              <li><a href="https://www.facebook.com/p/Patrula-Apicola-Urbana-100068758055323/?locale=ro_RO" target="_blank" rel="noopener">Facebook · Patrula Apicolă Urbană</a></li>
              <li><a href="#/contact" onClick={(e) => {e.preventDefault();go('contact');}}>Toate datele</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>BEE112 · Patrula Apicolă Urbană · serviciu voluntar, fără scop comercial</span>
          <span>© 2026 bee112.ro</span>
        </div>
      </div>
    </footer>);

}

// ─── HERO variants ────────────────────────────────────────
function HeroPanic({ tone, go }) {
  const headline = tone === "ferm" ?
  <>Ai găsit un roi de albine?<br /><span style={{ color: 'var(--primary)' }}>Nu le omorî.</span> Sună-ne.</> :
  <>Ai găsit un roi de albine?<br /><span style={{ color: 'var(--primary)' }}>E în regulă.</span> Te ajutăm.</>;
  const lede = tone === "ferm" ?
  "Intervenția este gratuită. Nu folosim substanțe. Roiurile nu sunt agresive — sună înainte să faci ceva." :
  "Vorbim calm, evaluăm situația, trimitem un apicultor voluntar. Fără formulare, fără grabă.";
  return (
    <section className="hero hero-panic">
      <div className="shell">
        <div className="hero-grid">
          <div className="hero-msg">
            <div className="eyebrow" style={{ marginBottom: 24 }}>Patrula Apicolă Urbană · București · Ilfov</div>
            <h1>{headline}</h1>
            <p className="lede">{lede}</p>
            <div className="cta-row">
              <PhoneButton tone={tone} />
              <button className="btn-ghost" onClick={() => go('cum-functioneaza')}>Cum funcționează →</button>
            </div>
            <div className="hero-meta">
              <span><b>Gratuit</b> · serviciu voluntar</span>
              <span className="hero-meta-dot"><b>Non-letal</b> · fără substanțe</span>
              <span className="hero-meta-dot"><b>Discret</b> · fără birocrație</span>
            </div>
          </div>
          <div className="hero-side">
            <div className="side-card-title">Despre intervenție</div>
            <div className="side-card-row"><b>Cost</b><span className="val">Gratuit</span></div>
            <div className="side-card-row"><b>Echipă</b><span className="val">Apicultori voluntari</span></div>
            <div className="side-card-row"><b>Acoperire</b><span className="val">București & Ilfov</span></div>
            <div className="side-card-row"><b>Timp răspuns</b><span className="val">~30 min telefon</span></div>
            <div className="side-card-row"><b>Program</b><span className="val">Lumina zilei</span></div>
            <div className="live-strip">
              <span className="nav-pulse"></span>
              <span>Echipa este disponibilă azi · răspundem direct la telefon</span>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function HeroImage({ tone, go }) {
  const head = tone === "ferm" ? "Nu distruge. Sună." : "E ok. Sună-ne.";
  return (
    <section className="hero hero-image">
      <div className="image-bg">
        <image-slot id="hero-bg" shape="rect" placeholder="Foto roi de albine pe creangă · 1920×1080"></image-slot>
      </div>
      <div className="shell">
        <div className="hero-msg">
          <div className="tag" style={{ background: 'rgba(255,255,255,.15)', color: 'white', marginBottom: 24 }}>Patrula Apicolă Urbană</div>
          <h1>{head}</h1>
          <p className="lede">
            {tone === "ferm" ?
            "BEE112 intervine non-letal în București și Ilfov. Albinele se relochează în siguranță. Tu nu plătești nimic." :
            "BEE112 este o linie umană de urgență pentru albine. Vorbim, înțelegem situația, venim. Fără taxe, fără presiune."}
          </p>
          <div className="cta-row">
            <PhoneButton tone={tone} />
            <button className="btn-ghost" style={{ borderColor: 'rgba(255,255,255,.3)', color: 'white' }} onClick={() => go('cum-functioneaza')}>Cum funcționează →</button>
          </div>
        </div>
      </div>
    </section>);

}

function HeroSplit({ tone, go }) {
  return (
    <section className="hero hero-split">
      <div className="shell">
        <div className="hero-grid">
          <div className="hero-msg" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="eyebrow" style={{ marginBottom: 22 }}>Linie de urgență voluntară · 2026</div>
            <h1>
              {tone === "ferm" ?
              <>Albinele nu trebuie distruse. Trebuie <span style={{ color: 'var(--primary)' }}>salvate</span>.</> :
              <>O voce calmă, la <span style={{ color: 'var(--primary)' }}>celălalt capăt</span> al telefonului.</>}
            </h1>
            <p className="lede">
              BEE112 este Patrula Apicolă Urbană — apicultori voluntari care intervin gratuit pentru roiurile găsite în oraș. Sună, descriem împreună ce vezi, venim.
            </p>
            <PhoneButton tone={tone} />
            <div className="hero-meta">
              <span><b>București · Ilfov</b></span>
              <span className="hero-meta-dot"><b>0 lei</b></span>
              <span className="hero-meta-dot"><b>Voluntari</b></span>
            </div>
          </div>
          <div className="hero-photo">
            <image-slot id="hero-photo" shape="rect" placeholder="Apicultor recuperând roi · foto portret"></image-slot>
          </div>
        </div>
      </div>
    </section>);

}

function HeroMinimal({ tone, go }) {
  return (
    <section className="hero hero-minimal">
      <div className="shell">
        <div className="eyebrow" style={{ marginBottom: 32, justifyContent: 'center', display: 'inline-flex' }}>BEE112 · Patrula Apicolă Urbană</div>
        <h1>
          {tone === "ferm" ?
          <>Nu omorî. <span style={{ color: 'var(--primary)' }}>Sună.</span> Rezolvăm.</> :
          <>Sună-ne. <span style={{ color: 'var(--primary)' }}>Vorbim.</span> Venim.</>}
        </h1>
        <p className="lede">
          O linie de urgență voluntară pentru roiurile de albine din București și Ilfov. Gratuit. Non-letal. Fără formulare.
        </p>
        <div className="cta-row">
          <PhoneButton tone={tone} />
          <button className="btn-ghost" onClick={() => go('cum-functioneaza')}>Cum funcționează →</button>
        </div>
      </div>
    </section>);

}

// ─── HOME ─────────────────────────────────────────────────
function HomePage({ hero, tone, go }) {
  const Hero = { panic: HeroPanic, image: HeroImage, split: HeroSplit, minimal: HeroMinimal }[hero] || HeroPanic;
  return (
    <div className="page-fade" data-screen-label="01 Home">
      <Hero tone={tone} go={go} />

      {/* Cum funcționează — 2 pași */}
      <section>
        <div className="shell">
          <div className="sect-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Procesul</div>
              <h2>Cum funcționează BEE112. Doi pași. Nici un formular.</h2>
            </div>
            <p className="sub">Fluxul este simplu pentru că oamenii speriați nu completează formulare. Tot ce avem nevoie discutăm la telefon.</p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-num"><span>01</span><span>Apel telefonic</span></div>
              <h3>Suni și discutăm calm</h3>
              <p>Răspundem direct la {PHONE}. Te întrebăm unde este roiul, cât de mare pare și dacă este accesibil. Fără formulare, fără cont, fără pași inutili.</p>
            </div>
            <div className="step">
              <div className="step-num"><span>02</span><span>Intervenție</span></div>
              <h3>Trimitem un apicultor voluntar</h3>
              <p>Stabilim ora, ne deplasăm și recuperăm roiul în siguranță. Albinele sunt relocate în stupinele noastre. Nu folosim substanțe toxice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lucrăm cu autoritățile */}
      <section className="section-alt">
        <div className="shell">
          <div className="sect-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Colaborăm</div>
              <h2>Nu suntem singuri. Lucrăm cu autoritățile.</h2>
            </div>
            <p className="sub">Mulți cetățeni sună la 112 sau la Poliția Locală. Apelurile ajung la noi prin redirecționare. Pentru cazurile dificile, intervenim împreună cu ISU.</p>
          </div>
          <div className="auth-grid">
            <div className="auth-card">
              <span className="badge">112 · ISU</span>
              <h3>Serviciul de urgență & Pompierii</h3>
              <p>Pentru situații dificile — etaje superioare, acces periculos — pompierii ISU vin alături de noi cu echipamente speciale.</p>
              <div className="auth-num"></div>
            </div>
            <div className="auth-card">
              <span className="badge">Sectoarele 1–6</span>
              <h3>Administrația Domeniului Public</h3>
              <p>ADP ne sprijină cu acces și logistică în intervențiile urbane. Este coloana tăcută a multor recuperări de roiuri.</p>
              <div className="auth-num"></div>
            </div>
            <div className="auth-card">
              <span className="badge">Primul contact</span>
              <h3>Poliția Locală</h3>
              <p>Adesea primul contact al cetățeanului. Redirecționează sesizările către echipa BEE112 — scopul comun este calmul și siguranța.</p>
              <div className="auth-num"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Ce să NU faci */}
      <section>
        <div className="shell">
          <div className="sect-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Educație</div>
              <h2>Ce să NU faci dacă vezi un roi de albine.</h2>
            </div>
            <p className="sub">Cele mai multe înțepături nu vin de la roi. Vin de la oamenii care încearcă să facă „ceva” înainte să sune.</p>
          </div>
          <div className="avoid-grid">
            <div className="avoid-item">
              <div className="avoid-icon">✕</div>
              <div><h4>Nu stropi cu insecticide</h4><p>Sunt toxice pentru oameni, animale și nu rezolvă problema — roiul rămâne pe loc.</p></div>
            </div>
            <div className="avoid-item">
              <div className="avoid-icon">✕</div>
              <div><h4>Nu folosi foc sau spumă</h4><p>Pericol grav de incendiu și de înțepături în masă. Roiurile nu se „scot” cu căldură.</p></div>
            </div>
            <div className="avoid-item">
              <div className="avoid-icon">✕</div>
              <div><h4>Nu arunca cu apă</h4><p>Apa nu îndepărtează roiul. Doar enervează albinele și complică intervenția.</p></div>
            </div>
            <div className="avoid-item">
              <div className="avoid-icon">✕</div>
              <div><h4>Nu interveni fără experiență</h4><p>Mută copiii, animalele și obiectele inflamabile. Apoi sună. Restul îl facem noi.</p></div>
            </div>
          </div>
          <div style={{ marginTop: 40 }}>
            <button className="btn-ghost" onClick={() => go('ce-sa-nu-faci')}>Vezi ghidul complet →</button>
          </div>
        </div>
      </section>

      {/* Reasigurare */}
      <section className="section-alt">
        <div className="shell">
          <div className="reassure">
            <div>
              <h2>Albinele nu sunt agresive când roiesc.</h2>
              <p>În peste 90% din cazuri, intervenția este simplă și sigură. Roiul nu are stup, nu are miere de apărat — este, de obicei, liniștit și concentrat să-și găsească o casă nouă.</p>
            </div>
            <div className="right">
              <PhoneButton tone={tone} />
            </div>
          </div>
        </div>
      </section>
    </div>);

}

// ─── CINE SUNTEM ─────────────────────────────────────────
function DespreNoiPage({ tone }) {
  return (
    <div className="page-fade" data-screen-label="02 Cine suntem">
      <PageHead
        eyebrow="Despre BEE112"
        title="O linie umană pentru albinele orașului."
        lede="BEE112 — Patrula Apicolă Urbană este o inițiativă civică de voluntariat, pornită în București și extinsă la nivel național printr-o rețea de apicultori voluntari." />
      <section>
        <div className="shell" style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 64, alignItems: 'start' }}>
          <div className="prose">
            <h2>De unde vine numele „112”</h2>
            <p>Așa cum 112 este numărul unic pentru urgențe, <strong>BEE112</strong> este punctul de contact pentru situații care implică albine. Nu suntem 112. Dar funcționăm după aceeași logică: suni, discutăm calm, trimitem ajutorul potrivit.</p>

            <h2>Ce facem, concret</h2>
            <ul>
              <li>Salvăm roiuri de albine din copaci, balcoane, clădiri, spații publice.</li>
              <li>Relocăm albinele în stupinele noastre, în siguranță.</li>
              <li>Nu folosim substanțe toxice.</li>
              <li>Nu distrugem coloniile.</li>
            </ul>
            <p><strong>Scopul nostru este salvarea, nu eliminarea.</strong></p>

            <div className="callout">
              <div className="ttl">Promisiunea noastră</div>
              <p>Nu distruge. Sună. Rezolvăm.</p>
            </div>

            <h2>Oamenii din spatele BEE112</h2>
            <p>BEE112 este format din apicultori autorizați, voluntari cu experiență și oameni care cunosc comportamentul albinelor în mediul urban. Validarea echipei nu este birocratică — este <strong>umană</strong>. Contează cum vorbești cu un om panicat. Nu câți stupi ai.</p>

            <h2>Ne sprijinim pe colaborare</h2>
            <p>De-a lungul timpului, am colaborat sau am fost solicitați de serviciul 112, autorități locale, instituții publice, cetățeni. Scopul comun a fost întotdeauna siguranța oamenilor și protejarea albinelor.</p>
          </div>
          <div>
            <div style={{ aspectRatio: '4/5', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: 20 }}>
              <image-slot id="despre-1" shape="rect" placeholder="Foto echipă · portret de grup"></image-slot>
            </div>
            <div className="contact-card">
              <div className="side-card-title">Pe scurt</div>
              <div className="contact-stat"><b>Origine</b><span>București, 2021</span></div>
              <div className="contact-stat"><b>Acoperire</b><span>București & Ilfov</span></div>
              <div className="contact-stat"><b>Tip</b><span>Voluntariat</span></div>
              <div className="contact-stat"><b>Mentorat de</b><span>ACA București</span></div>
              <div className="contact-stat"><b>Cost intervenție</b><span>0 lei</span></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-alt">
        <div className="shell" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px,3.4vw,46px)', maxWidth: '22ch', margin: '0 auto 24px', lineHeight: 1.1 }}>
            {tone === "ferm" ? "Intervenția nu se taxează. Nu distrugem. Salvăm." : "Intervenția nu se taxează. Ajutăm albina."}
          </h2>
          <p style={{ maxWidth: '52ch', margin: '0 auto 36px', color: 'var(--ink-soft)', fontSize: 17 }}>
            BEE112 este un serviciu voluntar, oferit comunității din dorința de a proteja albinele și oamenii. Nu percepem taxe pentru intervenții și nu suntem o firmă comercială.
          </p>
          <PhoneButton tone={tone} />
        </div>
      </section>
    </div>);

}

// ─── CUM FUNCTIONEAZA ────────────────────────────────────
function CumFunctioneazaPage({ tone }) {
  return (
    <div className="page-fade" data-screen-label="03 Cum funcționează">
      <PageHead
        eyebrow="Procesul de intervenție"
        title="Doi pași. O voce umană. Zero birocrație."
        lede="BEE112 nu colectează formulare în situații de urgență. Discutăm la telefon, ne deplasăm, salvăm roiul. Restul detaliilor le rezolvăm împreună." />
      <section>
        <div className="shell">
          <div className="steps">
            <div className="step">
              <div className="step-num"><span>01</span><span>Apelul</span></div>
              <h3>Suni la {PHONE}</h3>
              <p>Răspundem direct, fără robot, fără meniu vocal. Te ascultăm calm. Te întrebăm câteva detalii simple — unde este roiul, cât de mare pare, dacă e accesibil.</p>
            </div>
            <div className="step">
              <div className="step-num"><span>02</span><span>Intervenția</span></div>
              <h3>Trimitem un apicultor voluntar</h3>
              <p>Stabilim ora împreună. Apicultorul ajunge cu echipament. Recuperează roiul fără substanțe toxice. Te lăsăm cu situația rezolvată.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="shell">
          <div className="sect-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>În culise</div>
              <h2>Cum ajunge apelul la apicultorul potrivit.</h2>
            </div>
            <p className="sub">Procesul real, în spatele unui apel scurt. Transparent, fără promisiuni nerealiste.</p>
          </div>
          <div className="prose" style={{ maxWidth: 820 }}>
            <ol style={{ paddingLeft: 22, lineHeight: 1.8 }}>
              <li><strong>Descoperi roiul.</strong> Un copac, un balcon, o clădire — albinele se odihnesc înainte să-și caute o casă.</li>
              <li><strong>Apelezi BEE112, 112, Poliția Locală sau ADP.</strong> Oricare dintre acestea funcționează. Toate ajung la noi.</li>
              <li><strong>Sesizarea ajunge la persoana responsabilă</strong> de grup (Marian Pătrașcu).</li>
              <li><strong>Intervenția este alocată</strong> în funcție de disponibilitate, locație și dificultate.</li>
              <li><strong>Dacă este nevoie</strong>: ADP — acces și nacelă; ISU — echipamente și sprijin la înălțime.</li>
              <li><strong>BEE112 aduce know-how-ul apicol.</strong> Pompierii și ADP-ul aduc accesul. Tu ne aduci apelul.</li>
            </ol>
            <div className="callout warn">
              <div className="ttl">Important</div>
              <p>Dacă roiul pleacă singur înainte să ajungem, sună-ne. Comunicarea ne ajută să nu facem drumuri inutile și să redirecționăm intervenția către alt caz.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="shell">
          <div className="sect-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Siguranța intervenției</div>
              <h2>Pentru oameni și pentru albine.</h2>
            </div>
          </div>
          <div className="prose">
            <p><strong>Nu folosim substanțe toxice.</strong> Insecticidele, fumul agresiv, focul, spuma poliuretanică — toate sunt excluse. La roiuri proaspete nu folosim nici măcar afumătorul. Fumul nu este soluția; de cele mai multe ori este doar o sursă de stres pentru albine.</p>
            <p>Lucrăm cu calm, mecanic, controlat. Albinele se transferă într-o cutie de transport, iar drumul către stupina permanentă se face pe înserat, când toată colonia este acasă.</p>
          </div>
        </div>
      </section>
    </div>);

}

window.HomePage = HomePage;
window.DespreNoiPage = DespreNoiPage;
window.CumFunctioneazaPage = CumFunctioneazaPage;
window.PhoneButton = PhoneButton;
window.PageHead = PageHead;
window.Footer = Footer;
window.PHONE = PHONE;
window.PHONE_TEL = PHONE_TEL;