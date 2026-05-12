// app.jsx — router + tweaks panel + boot

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "direction": "calm",
  "hero": "panic",
  "primary": "#5a8a3a",
  "primaryDeep": "#3f6628",
  "density": 1,
  "phoneScale": 1,
  "fontHeading": "Geist",
  "fontBody": "Geist",
  "tone": "calm",
  "baseSize": 16
} /*EDITMODE-END*/;

const ROUTES = [
{ id: 'home', label: 'Acasă', emergency: true },
{ id: 'cine-suntem', label: 'Cine suntem' },
{ id: 'cum-functioneaza', label: 'Cum funcționează' },
{ id: 'importanta-albinelor', label: 'Importanța albinelor' },
{ id: 'ce-sa-nu-faci', label: 'Ce să NU faci' },
{ id: 'autoritati', label: 'Autorități' },
{ id: 'intrebari', label: 'Întrebări' },
{ id: 'voluntariat', label: 'Voluntariat' },
{ id: 'contact', label: 'Contact' }];


function useRoute() {
  const [route, setRoute] = React.useState(() => {
    const h = window.location.hash.replace(/^#\/?/, '') || 'home';
    return h;
  });
  React.useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace(/^#\/?/, '') || 'home';
      setRoute(h);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const go = (id) => {window.location.hash = '#/' + (id === 'home' ? '' : id);};
  return [route, go];
}

function Nav({ route, go, tone }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="nav">
      <div className="shell">
        <div className="nav-inner">
          <a href="#/" onClick={(e) => {e.preventDefault();go('home');}} className="brand" aria-label="BEE112 — acasă">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 75" style={{ height: 48, width: 'auto', display: 'block', flexShrink: 0 }}>
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
              <text x="105" y="52" fontFamily="var(--font-heading, ui-sans-serif, system-ui, sans-serif)" fontSize="36" fontWeight="900" fill="var(--ink)" letterSpacing="-0.5">BEE<tspan fill="var(--primary)">112</tspan></text>
            </svg>
          </a>
          <nav className="nav-links">
            {ROUTES.filter((r) => r.id !== 'home').slice(0, 7).map((r) =>
            <a key={r.id} href={'#/' + r.id}
            className={'nav-link ' + (route === r.id ? 'active' : '')}
            onClick={(e) => {e.preventDefault();go(r.id);}}>{r.label}</a>
            )}
          </nav>
          <a href={`tel:${PHONE_TEL}`} className="nav-cta">
            <span className="nav-pulse"></span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>{PHONE}</span>
          </a>
          <button className="nav-burger" onClick={() => setOpen((o) => !o)} aria-label="Meniu">
            <svg width="20" height="20" viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" /></svg>
          </button>
        </div>
        {open &&
        <div className="nav-sheet">
            {ROUTES.map((r) =>
          <a key={r.id} href={'#/' + r.id}
          className={'nav-link ' + (route === r.id ? 'active' : '')}
          onClick={(e) => {e.preventDefault();go(r.id);setOpen(false);}}>{r.label}</a>
          )}
          </div>
        }
      </div>
    </div>);

}

// ─── TWEAKS PANEL ────────────────────────────────────────
const COLOR_PRESETS = {
  green: { p: '#5a8a3a', d: '#3f6628', s: '#eaf2dd' }, // BEE112 default
  forest: { p: '#2f6b3a', d: '#1f4a25', s: '#dde9dc' }, // deep forest
  lime: { p: '#7eb13a', d: '#5b8927', s: '#f0f6dc' }, // bright lime
  emerald: { p: '#3a8a5e', d: '#256148', s: '#dceae0' } // emerald
};

const FONT_CHOICES = ['Geist', 'Manrope', 'Instrument Serif', 'Newsreader', 'Archivo'];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, go] = useRoute();

  // apply CSS variables based on tweaks
  React.useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--primary', t.primary);
    r.style.setProperty('--primary-deep', t.primaryDeep);
    r.style.setProperty('--space', t.density);
    r.style.setProperty('--phone-scale', t.phoneScale);
    r.style.setProperty('--font-heading', `'${t.fontHeading}', ui-sans-serif, system-ui, sans-serif`);
    r.style.setProperty('--font-body', `'${t.fontBody}', ui-sans-serif, system-ui, sans-serif`);
    r.style.setProperty('--base', t.baseSize + 'px');
  }, [t]);

  // apply direction class
  React.useEffect(() => {
    document.body.classList.remove('dir-calm', 'dir-editorial', 'dir-linia112');
    document.body.classList.add('dir-' + t.direction);
  }, [t.direction]);

  // map direction preset → adjust palette + fonts when user picks direction
  const applyDirection = (dir) => {
    const updates = { direction: dir };
    if (dir === 'calm') {
      Object.assign(updates, { primary: '#5a8a3a', primaryDeep: '#3f6628', fontHeading: 'Geist', fontBody: 'Geist' });
    } else if (dir === 'editorial') {
      Object.assign(updates, { primary: '#2f6b3a', primaryDeep: '#1f4a25', fontHeading: 'Instrument Serif', fontBody: 'Newsreader' });
    } else if (dir === 'linia112') {
      Object.assign(updates, { primary: '#1d8c3a', primaryDeep: '#0e5e22', fontHeading: 'Archivo', fontBody: 'Geist' });
    }
    setTweak(updates);
  };

  const setColorPreset = (key) => {
    const p = COLOR_PRESETS[key];
    setTweak({ primary: p.p, primaryDeep: p.d });
  };

  const Page = (() => {
    switch (route) {
      case 'cine-suntem':return <DespreNoiPage tone={t.tone} go={go} />;
      case 'cum-functioneaza':return <CumFunctioneazaPage tone={t.tone} go={go} />;
      case 'importanta-albinelor':return <ImportantaPage tone={t.tone} go={go} />;
      case 'ce-sa-nu-faci':return <CeSaNuFaciPage tone={t.tone} go={go} />;
      case 'autoritati':return <AutoritatiPage tone={t.tone} go={go} />;
      case 'intrebari':return <FAQPage />;
      case 'voluntariat':return <VoluntariatPage tone={t.tone} go={go} />;
      case 'contact':return <ContactPage tone={t.tone} go={go} />;
      default:return <HomePage hero={t.hero} tone={t.tone} go={go} />;
    }
  })();

  return (
    <React.Fragment>
      <Nav route={route} go={go} tone={t.tone} />
      <main key={route}>{Page}</main>
      <Footer go={go} />

      {/* Sticky mobile CTA */}
      <a href={`tel:${PHONE_TEL}`} className="sticky-mobile-cta">
        <div>
          <strong>Sună BEE112</strong>
          <div className="num">{PHONE}</div>
        </div>
        <span style={{ fontSize: 22 }}>📞</span>
      </a>

      <TweaksPanel title="Tweaks · BEE112">
        <TweakSection label="Direcție vizuală" />
        <TweakRadio label="Stil" value={t.direction}
        options={[
        { value: 'calm', label: 'Calm' },
        { value: 'editorial', label: 'Editorial' },
        { value: 'linia112', label: 'Linia 112' }]
        }
        onChange={applyDirection} />

        <TweakSection label="Hero (homepage)" />
        <TweakSelect label="Layout"
        value={t.hero}
        options={[
        { value: 'panic', label: 'Panică controlată (split + card)' },
        { value: 'image', label: 'Imagine fundal + overlay' },
        { value: 'split', label: 'Split 50/50 cu foto' },
        { value: 'minimal', label: 'Centrat minimalist' }]
        }
        onChange={(v) => setTweak('hero', v)} />

        <TweakSection label="Culoare primară" />
        <TweakColor label="Verde"
        value={t.primary}
        options={Object.values(COLOR_PRESETS).map((c) => c.p)}
        onChange={(v) => {
          const key = Object.keys(COLOR_PRESETS).find((k) => COLOR_PRESETS[k].p === v);
          if (key) setColorPreset(key);else
          setTweak('primary', v);
        }} />

        <TweakSection label="Buton telefon" />
        <TweakSlider label="Mărime" value={t.phoneScale} min={0.85} max={1.6} step={0.05}
        onChange={(v) => setTweak('phoneScale', v)} />

        <TweakSection label="Spațiere" />
        <TweakSlider label="Densitate" value={t.density} min={0.7} max={1.4} step={0.05}
        onChange={(v) => setTweak('density', v)} />

        <TweakSection label="Tipografie" />
        <TweakSelect label="Heading" value={t.fontHeading}
        options={FONT_CHOICES.map((f) => ({ value: f, label: f }))}
        onChange={(v) => setTweak('fontHeading', v)} />
        <TweakSelect label="Body" value={t.fontBody}
        options={FONT_CHOICES.map((f) => ({ value: f, label: f }))}
        onChange={(v) => setTweak('fontBody', v)} />
        <TweakSlider label="Bază" value={t.baseSize} min={14} max={20} step={1} unit="px"
        onChange={(v) => setTweak('baseSize', v)} />

        <TweakSection label="Ton copywriting" />
        <TweakRadio label="Ton" value={t.tone}
        options={[
        { value: 'calm', label: 'Calm' },
        { value: 'ferm', label: 'Ferm' }]
        }
        onChange={(v) => setTweak('tone', v)} />
      </TweaksPanel>
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);