// pages2.jsx — pagini secundare (Importanța, Ce să NU faci, Autorități, FAQ, Voluntariat, Contact)

function ImportantaPage({ tone, go }) {
  return (
    <div className="page-fade" data-screen-label="04 Importanța albinelor">
      <PageHead
        eyebrow="Educație"
        title="Albinele nu sunt doar insecte care produc miere."
        lede="Sunt esențiale pentru polenizarea plantelor, echilibrul naturii și hrana pe care o consumăm zilnic. Fără ele, multe plante nu ar mai putea produce fructe sau semințe." />
      <section style={{ paddingTop: 0 }}>
        <div className="shell">
          <div className="stats-strip">
            <div className="stat"><div className="stat-num">75%</div><div className="stat-lbl">din culturile alimentare globale depind de polenizatori</div></div>
            <div className="stat"><div className="stat-num">3</div><div className="stat-lbl">din 4 fructe consumate vin via polenizare</div></div>
            <div className="stat"><div className="stat-num">~90%</div><div className="stat-lbl">din roiurile urbane pot fi salvate intact</div></div>
            <div className="stat"><div className="stat-num">0</div><div className="stat-lbl">substanțe toxice folosite în intervenții</div></div>
          </div>
        </div>
      </section>
      <section>
        <div className="shell" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
          <div>
            <div style={{ aspectRatio: '4/5', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <image-slot id="importanta-1" shape="rect" placeholder="Foto: albine pe floare"></image-slot>
            </div>
          </div>
          <div className="prose">
            <h2>Albinele NU sunt agresive</h2>
            <p>Un lucru important de știut: <strong>albinele nu sunt agresive din fire</strong>. Un roi:</p>
            <ul>
              <li>nu are stup</li>
              <li>nu are miere de apărat</li>
              <li>este, de obicei, liniștit</li>
            </ul>
            <p>Majoritatea înțepăturilor apar din panică sau din intervenții greșite — niciodată din inițiativă proprie a albinelor.</p>

            <h2>Albine, viespi sau altceva?</h2>
            <p>Mulți oameni confundă albinele cu viespile, hornetele sau bondarii. Comportamentele lor sunt diferite. Dacă nu ești sigur ce ai găsit, <strong>nu interveni</strong> — sună-ne și te ajutăm să identifici situația.</p>
            <div className="callout">
              <div className="ttl">Spune-ne la telefon</div>
              <p>Pe baza descrierii — sau a unei poze, dacă poți face — îți confirmăm dacă sunt albine sau altceva. Fără ipoteze, fără riscuri.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="shell">
          <div className="sect-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Identifică</div>
              <h2>Ce ai în fața ta?</h2>
            </div>
            <p className="sub">Trei comportamente. Trei reacții potrivite. Pentru orice altceva — sună.</p>
          </div>
          <div className="id-grid">
            <div className="id-card">
              <div className="photo"><image-slot id="id-1" shape="rect" placeholder="Foto roi albine compact"></image-slot></div>
              <div className="body">
                <span className="verdict ok">Roi compact</span>
                <h3 style={{ marginTop: 10 }}>Roi de albine staționat</h3>
                <p>Bilă densă, agățată de o creangă, balcon sau structură. Calmă. Acesta este momentul potrivit să suni.</p>
              </div>
            </div>
            <div className="id-card">
              <div className="photo"><image-slot id="id-2" shape="rect" placeholder="Foto viespi cu cuib gri"></image-slot></div>
              <div className="body">
                <span className="verdict no">Cuib viespi</span>
                <h3 style={{ marginTop: 10 }}>Cuib de viespi / hornete</h3>
                <p>Cuib gri, în formă de balon, sub streașină sau în spații închise. Mai agresive — păstrează distanță, sună după sfat.</p>
              </div>
            </div>
            <div className="id-card">
              <div className="photo"><image-slot id="id-3" shape="rect" placeholder="Foto albine cercetaș zburând"></image-slot></div>
              <div className="body">
                <span className="verdict maybe">Câteva albine</span>
                <h3 style={{ marginTop: 10 }}>Albine cercetaș</h3>
                <p>Câteva albine care zboară individual. Nu este o urgență — caută. Dacă apare roiul în câteva ore, atunci suni.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="shell">
          <div className="reassure">
            <div>
              <h2>Ce se întâmplă dacă un roi este distrus.</h2>
              <p>Pierderea unei colonii întregi. Afectarea ecosistemului local. Un pericol inutil pentru oameni. De cele mai multe ori, roiurile pot fi salvate <strong>rapid și sigur</strong>. Sună înainte să faci ceva.</p>
            </div>
            <div className="right"><PhoneButton tone={tone} /></div>
          </div>
        </div>
      </section>
    </div>);

}

// ─── CE SA NU FACI ───────────────────────────────────────
function CeSaNuFaciPage({ tone }) {
  return (
    <div className="page-fade" data-screen-label="05 Ce să NU faci">
      <PageHead
        eyebrow="Ghid esențial · 3 minute"
        title="Ce să NU faci dacă ai găsit un roi de albine."
        lede="Albinele nu sunt agresive în mod normal, însă pot reacționa dacă sunt deranjate. Cele mai multe înțepături apar din panică sau intervenții greșite — nu din comportamentul roiului." />
      <section>
        <div className="shell">
          <div className="avoid-grid">
            <div className="avoid-item">
              <div className="avoid-icon">✕</div>
              <div><h4>Nu folosi insecticide sau chimicale</h4><p>Sunt toxice pentru oameni, animale și copii. Și — în plus — nu rezolvă problema: roiul rămâne pe loc, agitat.</p></div>
            </div>
            <div className="avoid-item">
              <div className="avoid-icon">✕</div>
              <div><h4>Nu folosi foc sau căldură</h4><p>Pericol grav de incendiu. Roiurile nu pleacă „arse afară”. Ai putea provoca un dezastru mult mai mare.</p></div>
            </div>
            <div className="avoid-item">
              <div className="avoid-icon">✕</div>
              <div><h4>Nu pulveriza cu spumă poliuretanică</h4><p>Lipește albinele într-o masă imposibil de mutat. Și nu rezolvă cauza — colonia rămâne periculoasă timp îndelungat.</p></div>
            </div>
            <div className="avoid-item">
              <div className="avoid-icon">✕</div>
              <div><h4>Nu arunca cu apă, ulei sau alte lichide</h4><p>Nu îndepărtează roiul. Doar îl enervează și complică intervenția apicultorului.</p></div>
            </div>
            <div className="avoid-item">
              <div className="avoid-icon">✕</div>
              <div><h4>Nu încerca să muți roiul cu mâna</h4><p>Chiar dacă ai mănuși. Riști înțepături multiple, pierderea reginei și un roi imposibil de recuperat.</p></div>
            </div>
            <div className="avoid-item">
              <div className="avoid-icon">✕</div>
              <div><h4>Nu chema deratizatori</h4><p>Nu sunt pregătiți pentru albine. Soluția lor este eliminarea — nu salvarea. Și e ilegală.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="shell">
          <div className="sect-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Ce să faci, în schimb</div>
              <h2>Trei lucruri simple, înainte să suni.</h2>
            </div>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-num"><span>01</span><span>Distanță</span></div>
              <h3>Păstrează distanța</h3>
              <p>3-5 metri sunt suficienți. Roiul nu te va urmări. Mută copiii și animalele din zonă, dar fără panică.</p>
            </div>
            <div className="step">
              <div className="step-num"><span>02</span><span>Acces</span></div>
              <h3>Nu lăsa pe nimeni să intervină</h3>
              <p>Vecinii bine intenționați, administratorul de bloc, deratizatorii — niciunul nu are echipament potrivit. Așteaptă apicultorul.</p>
            </div>
          </div>
          <div style={{ marginTop: 56, textAlign: 'center' }}>
            <PhoneButton tone={tone} />
            <p style={{ marginTop: 18, color: 'var(--ink-soft)', fontSize: 14 }}>Un apel ne ajută să înțelegem situația și să găsim cea mai bună soluție.</p>
          </div>
        </div>
      </section>
    </div>);

}

// ─── AUTORITATI ──────────────────────────────────────────
function AutoritatiPage({ tone }) {
  return (
    <div className="page-fade" data-screen-label="06 Autorități">
      <PageHead
        eyebrow="Colaborăm cu autoritățile"
        title="BEE112 nu acționează singur."
        lede="Intervențiile sunt rezultatul unei colaborări reale între voluntari și autorități. Fiecare entitate are un rol — și cetățeanul panicat nu este lăsat singur." />
      <section>
        <div className="shell">
          <div className="auth-grid" style={{ gridTemplateColumns: '1fr', gap: 16 }}>
            <div className="auth-card" style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 40, padding: 40 }}>
              <div style={{ flex: '0 0 220px' }}>
                <span className="badge">Prim contact · 24/7</span>
                <h3 style={{ marginTop: 12, fontSize: 32 }}>112 & ISU – Pompierii</h3>
                <div className="auth-num" style={{ fontSize: 64, marginTop: 20 }}></div>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ color: 'var(--ink-soft)', fontSize: 17, lineHeight: 1.7, marginBottom: 16 }}>
                  În multe situații, cetățenii apelează direct serviciul de urgență 112. În funcție de caz, apelul este redirecționat către structurile competente — inclusiv ISU – Pompierii, care oferă sprijin esențial în intervențiile dificile.
                </p>
                <p style={{ color: 'var(--ink-soft)', fontSize: 16, lineHeight: 1.65 }}>
                  În situațiile dificile (etaje superioare, acces periculos), pompierii ISU sunt alături de noi. Sunt oameni curajoși care urcă la înălțime și oferă sprijin direct pentru salvarea albinelor și siguranța oamenilor.
                </p>
              </div>
            </div>
            <div className="auth-card" style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 40, padding: 40, height: "190px" }}>
              <div style={{ flex: '0 0 220px' }}>
                <span className="badge">Sectoarele 1–6</span>
                <h3 style={{ marginTop: 12, fontSize: 32 }}>ADP</h3>
                <div className="auth-num" style={{ fontSize: 32, marginTop: 20 }}><br /><br />
</div>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ color: 'var(--ink-soft)', fontSize: 17, lineHeight: 1.7 }}>
                  Administrația Domeniului Public, prin structurile de sector, ne sprijină frecvent cu acces și logistică în intervențiile urbane. Este coloana tăcută a multor recuperări de roiuri — uneori cu nacelă, alteori cu permis de acces într-o zonă închisă publicului.
                </p>
              </div>
            </div>
            <div className="auth-card" style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 40, padding: 40 }}>
              <div style={{ flex: '0 0 220px' }}>
                <span className="badge">Liant</span>
                <h3 style={{ marginTop: 12, fontSize: 32 }}>Poliția Locală</h3>
                <div className="auth-num" style={{ fontSize: 32, marginTop: 20 }}></div>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ color: 'var(--ink-soft)', fontSize: 17, lineHeight: 1.7 }}>
                  Poliția Locală este adesea primul contact al cetățeanului și are un rol important în redirecționarea corectă a situațiilor către echipele competente. Este liantul între panică și soluție.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="shell">
          <div className="callout" style={{ maxWidth: 820, margin: '0 auto' }}>
            <div className="ttl">Notă</div>
            <p>BEE112 nu se substituie autorităților. BEE112 colaborează. Asta ne poziționează responsabil, legal și credibil — fără să promitem ce nu ținem.</p>
          </div>
        </div>
      </section>
    </div>);

}

// ─── FAQ ──────────────────────────────────────────────────
const FAQ_ITEMS = [
{ q: "Costă intervenția?", a: <>
    <p><strong>Intervenția în sine este gratuită.</strong> Suntem voluntari, iar scopul nostru este salvarea albinelor.</p>
    <p>În anumite situații pot apărea costuri colaterale, care nu țin de intervenția apicultorului, ci de contextul în care se află roiul (de exemplu, acces dificil sau lucrări necesare pentru a ajunge în siguranță la albine). Toate detaliile sunt discutate clar și deschis la telefon, înainte de orice intervenție.</p>
  </> },
{ q: "Ce faceți cu albinele după ce le luați?", a: <>
    <p>Albinele sunt relocate în <strong>stupinele noastre</strong>, unde își pot continua viața normal. Le ajutăm să crească, le oferim condiții sigure și ne asigurăm că își pot îndeplini rolul lor natural cât mai bine. Preluăm orice mărime de roi.</p>
  </> },
{ q: "Este normal să fie atât de multe albine în oraș?", a: <>
    <p><strong>Da, este normal.</strong> Există o perioadă a anului în care albinele devin mult mai vizibile pentru oameni, în special primăvara — în lunile mai–iunie — când are loc roirea.</p>
    <p>Albinele există de milioane de ani și s-au adaptat la prezența noastră. Noi ne putem adapta la prezența lor cu informare și calm.</p>
  </> },
{ q: "Interveniți noaptea?", a: <>
    <p>În principiu, <strong>nu intervenim noaptea</strong>. Pentru o recuperare sigură este nevoie de vizibilitate, iar noaptea nu este un moment oportun.</p>
    <p>De obicei recuperăm roiurile pe timpul zilei și revenim pe înserat pentru a ridica cutiile, când toată albina se întoarce „acasă”.</p>
  </> },
{ q: "Ce fac dacă nu sunt sigur că sunt albine?", a: <>
    <p>Procedați exact la fel ca și cum ați ști sigur: <strong>ne sunați</strong>. Pe baza descrierii și, dacă e posibil, a uneia sau două fotografii, vă putem ajuta să identificați corect insecta.</p>
  </> },
{ q: "Ce fac dacă sunt viespi?", a: <>
    <p>Viespile, prin natura lor, sunt mai agresive. Nu le provocați, nu încercați să interveniți singur. Ne puteți suna și vă oferim explicații clare despre ce să NU faceți și ce opțiuni aveți mai departe.</p>
  </> },
{ q: "Ce fac dacă roiul este într-o zonă periculoasă?", a: <>
    <p>Roiurile de albine <strong>nu sunt agresive</strong>. În momentul roirii, sunt concentrate pe găsirea unei noi locații. Am avut intervenții în școli, hoteluri, zone publice, piețe și spații comerciale.</p>
    <p>Ce trebuie să faceți: păstrați distanța, nu interveniți, sunați.</p>
  </> },
{ q: "Ce fac dacă roiul pleacă singur?", a: <>
    <p>Îi urați drum bun și le doriți o casă primitoare 😊. Și — vă rugăm — ne anunțați telefonic, ca să nu venim degeaba și să putem redirecționa intervenția către alt caz.</p>
  </> },
{ q: "Ce fac dacă sunt alergic?", a: <>
    <p>Dacă sunteți înțepat și știți că aveți alergie la veninul de albine, <strong>apelați imediat serviciile medicale de urgență</strong>. Noi suntem apicultori și salvatori de albine, nu medici.</p>
  </> },
{ q: "Interveniți și în afara Bucureștiului?", a: <>
    <p>Intervenim, de regulă, în București, în mare parte din Ilfov și în localitățile limitrofe. În multe cazuri avem colegi sau colaboratori și în alte localități sau județe și putem redirecționa solicitarea.</p>
  </> },
{ q: "Roiul a plecat și echipa e deja pe drum. Ce fac?", a: <>
    <p>Sunați-ne cât mai repede. Comunicarea este foarte importantă. Un simplu apel ne ajută să evităm deplasări inutile, să economisim resurse și să redirecționăm timpul către alte situații.</p>
  </> },
{ q: "Văd că un alt apicultor intervine deja. Ce fac?", a: <>
    <p>Lăsați-l să își continue intervenția. Și sunați-ne ca să redirecționăm resursele către alt roi. În perioadele de roire primim sute de apeluri pe săptămână — gestul vostru ne ajută enorm.</p>
  </> }];


function FAQPage() {
  const [open, setOpen] = React.useState(0);
  return (
    <div className="page-fade" data-screen-label="07 Întrebări frecvente">
      <PageHead
        eyebrow="Întrebări frecvente"
        title="Răspunsuri scurte la întrebări reale."
        lede="Întrebări care apar des, în mijlocul situațiilor reale. Răspunsuri date la telefon, transcrise aici pentru cei care vor mai întâi să citească." />
      <section>
        <div className="narrow">
          <div className="faq-list">
            {FAQ_ITEMS.map((item, i) =>
            <details key={i} className="faq-item" open={open === i}
            onToggle={(e) => {if (e.target.open) setOpen(i);}}>
                <summary>
                  <span>{item.q}</span>
                  <span className="faq-chevron">+</span>
                </summary>
                <div className="faq-body">{item.a}</div>
              </details>
            )}
          </div>
        </div>
      </section>
    </div>);

}

// ─── VOLUNTARIAT ──────────────────────────────────────────
function VoluntariatPage({ tone }) {
  const [sent, setSent] = React.useState(false);
  return (
    <div className="page-fade" data-screen-label="08 Voluntariat">
      <PageHead
        eyebrow="Patrula Apicolă Urbană"
        title="Vrei să fii parte din echipa de voluntari?"
        lede="Dacă ești apicultor, pasionat de protejarea albinelor sau pur și simplu vrei să ajuți comunitatea, ne poți contacta pentru a deveni voluntar PAB." />
      <section>
        <div className="shell" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
          <div className="prose">
            <h2>Cine poate deveni voluntar</h2>
            <p>Apicultori cu experiență, persoane cu cursuri apicole, pasionați dispuși să învețe alături de un mentor. Validarea noastră nu este birocratică — este <strong>umană</strong>.</p>

            <h2>Ce căutăm</h2>
            <ul>
              <li>oameni care iubesc albina</li>
              <li>care înțeleg frica omului</li>
              <li>care știu să vorbească calm</li>
              <li>care nu judecă, nu fac scandal</li>
            </ul>

            <h2>Ce nu contează</h2>
            <ul>
              <li>câți stupi ai</li>
              <li>ce producție faci</li>
              <li>ce rang ai în asociație</li>
            </ul>

            <div className="callout">
              <div className="ttl">Cel mai simplu mod</div>
              <p>Sună-ne. Discutăm. Dacă ne potrivim, te invităm la o intervenție și vezi cum lucrăm.</p>
            </div>
            <PhoneButton tone={tone} />
          </div>
          <div className="contact-card">
            <h3 style={{ fontSize: 24, marginBottom: 8 }}>Sau scrie-ne câteva rânduri</h3>
            <p style={{ color: 'var(--ink-soft)', fontSize: 14, marginBottom: 24 }}>Te contactăm la telefon. Fără birocrație, fără CV.</p>
            {sent ?
            <div className="callout" style={{ margin: 0 }}>
                <div className="ttl">Mulțumim</div>
                <p>Mesajul tău a ajuns. Te sunăm în 24–48 ore. Între timp — albinele îți mulțumesc.</p>
              </div> :

            <form onSubmit={(e) => {e.preventDefault();setSent(true);}}>
                <div className="field">
                  <label>Numele tău</label>
                  <input type="text" placeholder="Cum te cheamă" required />
                </div>
                <div className="field">
                  <label>Telefon</label>
                  <input type="tel" placeholder="07xx xxx xxx" required />
                </div>
                <div className="field">
                  <label>Oraș</label>
                  <input type="text" placeholder="București, Pipera, Otopeni..." />
                </div>
                <div className="field">
                  <label>Experiență</label>
                  <select>
                    <option>Apicultor cu stupi proprii</option>
                    <option>Curs apicol absolvit</option>
                    <option>Pasionat, vreau să învăț</option>
                    <option>Vreau să ajut altcumva</option>
                  </select>
                </div>
                <div className="field">
                  <label>Câteva rânduri despre tine</label>
                  <textarea placeholder="Ce te-a făcut să vrei să te alături?" rows="4"></textarea>
                </div>
                <button type="submit" className="btn-phone" style={{ padding: '14px 22px', fontSize: 16 }}>
                  <span className="ico" style={{ width: 32, height: 32 }}>→</span>
                  <span><span className="num">Trimite</span></span>
                </button>
              </form>
            }
          </div>
        </div>
      </section>
    </div>);

}

// ─── CONTACT ──────────────────────────────────────────────
function ContactPage({ tone }) {
  return (
    <div className="page-fade" data-screen-label="09 Contact">
      <PageHead
        eyebrow="Contact BEE112"
        title="Apelul telefonic. Întotdeauna apelul."
        lede="Pentru situații care implică albine, apelul telefonic este cea mai rapidă și eficientă soluție. Nu folosim formulare pentru urgențe." />
      <section>
        <div className="shell">
          <div className="contact-grid">
            <div>
              <PhoneButton tone={tone} />
              <p style={{ marginTop: 18, color: 'var(--ink-soft)', fontSize: 15, maxWidth: '46ch' }}>
                Discutăm calm. Te ghidăm pas cu pas. Stabilim ora intervenției împreună. Fără formulare, fără cont, fără presiune.
              </p>

              <h2 style={{ fontSize: 28, marginTop: 56, marginBottom: 20, letterSpacing: '-0.02em' }}>Limitare geografică</h2>
              <p style={{ color: 'var(--ink-soft)', fontSize: 16, lineHeight: 1.7, maxWidth: '52ch' }}>
                BEE112 funcționează exclusiv în <strong>municipiul București și județul Ilfov</strong>. Dacă te afli în alt oraș, încearcă să contactezi un apicultor local sau o asociație apicolă din zonă. Dacă apelezi la noi, încercăm să ajutăm cu redirecționarea către colaboratorii noștri din alte județe.
              </p>

              <div className="callout warn" style={{ marginTop: 28, maxWidth: 560 }}>
                <div className="ttl">Urgență medicală</div>
                <p>Dacă ai fost înțepat și ești alergic, apelează imediat <strong>112</strong>. Noi suntem apicultori, nu medici.</p>
              </div>
            </div>
            <div>
              <div className="contact-card">
                <div className="side-card-title">Date contact</div>
                <div className="contact-stat"><b>Telefon</b><a href={`tel:${PHONE_TEL}`}>{PHONE}</a></div>
                <div className="contact-stat"><b>Email</b><a href="mailto:contact@bee112.ro">contact@bee112.ro</a></div>
                <div className="contact-stat"><b>Web</b><span>bee112.ro</span></div>
                <div className="contact-stat"><b>Zona</b><span>București & Ilfov</span></div>
                <div className="contact-stat"><b>Program</b><span>Lumina zilei</span></div>
                <div className="contact-stat"><b>Cost</b><span>Gratuit</span></div>
              </div>
              <div style={{ aspectRatio: '16/10', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginTop: 20 }}>
                <image-slot id="contact-map" shape="rect" placeholder="Hartă București + Ilfov · cu zonele acoperite"></image-slot>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);

}

window.ImportantaPage = ImportantaPage;
window.CeSaNuFaciPage = CeSaNuFaciPage;
window.AutoritatiPage = AutoritatiPage;
window.FAQPage = FAQPage;
window.VoluntariatPage = VoluntariatPage;
window.ContactPage = ContactPage;