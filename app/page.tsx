import KontaktVorm from './components/KontaktVorm'

export default function Home() {
  return (
    <>
      <nav>
        <a href="#" className="nav-logo">SEPPS <span>JK</span></a>
        <ul>
          <li><a href="#klubi">Klubi</a></li>
          <li><a href="#trennid">Trennid</a></li>
          <li><a href="#treenerid">Treenerid</a></li>
          <li><a href="#kalender">Kalender</a></li>
          <li><a href="#kontakt">Kontakt</a></li>
        </ul>
      </nav>

      <section className="hero" id="top">
        <div className="hero-bg-text">SEPPS</div>
        <div className="hero-badge">Asutatud 2009 — Saaremaa</div>
        <h1>SEPPS <em>JALGPALLI</em> KLUBI</h1>
        <p className="hero-sub">Kasvatame noori jalgpallureid südamega. Igale lapsele koht väljakul, igale unistusele võimalus.</p>
        <div className="hero-cta">
          <a href="#trennid" className="btn-primary">Liitu treeninguga</a>
          <a href="#klubi" className="btn-ghost">Tutvu klubiga</a>
        </div>
      </section>

      <section id="klubi">
        <div className="section-label">Meie lugu</div>
        <h2 className="section-title">KLUBI</h2>
        <div className="klubi-grid">
          <div className="klubi-text">
            <p>Sepps JK sündis 2009. aastal Saaremaal väikese, kuid suure südamega kogukonnana. Klubi loojad — endised kohalikud jalgpallurid — soovisid anda saare noortele võimaluse arendada oma annet professionaalse juhendamise all, ilma et nad peaksid kodusaart jätma.</p>
            <p>Täna on Sepps JK Saaremaa suurim jalgpalliklubi, kus treenib üle 120 noore mängija. Meie missioon on lihtne: armastus jalgpalli vastu, aus mäng ja kogukonna kokkuhoidmine.</p>
            <p>Usume, et sport kujundab iseloomu. Meie juures ei ole tähtsam ainult tulemus — tähtis on, millise inimesena väljakult lahkud.</p>
          </div>
          <div className="klubi-stats">
            <div className="stat-box">
              <div className="stat-number">120+</div>
              <div className="stat-label">Noort mängijat</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">15</div>
              <div className="stat-label">Aastat tegutsenud</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">8</div>
              <div className="stat-label">Vanuseklassi</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">3</div>
              <div className="stat-label">Profitreenerit</div>
            </div>
          </div>
        </div>
      </section>

      <section id="trennid">
        <div className="section-label">Vanuseklassid</div>
        <h2 className="section-title">TREENINGUD</h2>
        <div className="trennid-grid">
          <div className="trenn-kaart">
            <div className="trenn-aasta">2015</div>
            <div className="trenn-nimi">Minijalgpall</div>
            <div className="trenn-info">T/N • 16:00–17:00<br/>Saaremaa Spordikeskus<br/>Sünd. 2015 ja hiljem</div>
            <a href="#kontakt" className="trenn-liitu">Liitu →</a>
          </div>
          <div className="trenn-kaart">
            <div className="trenn-aasta">2014</div>
            <div className="trenn-nimi">Alaklass C</div>
            <div className="trenn-info">T/N • 17:00–18:15<br/>Saaremaa Spordikeskus<br/>Sünd. 2014</div>
            <a href="#kontakt" className="trenn-liitu">Liitu →</a>
          </div>
          <div className="trenn-kaart">
            <div className="trenn-aasta">2013</div>
            <div className="trenn-nimi">Alaklass C</div>
            <div className="trenn-info">E/K/R • 17:00–18:30<br/>Saaremaa Spordikeskus<br/>Sünd. 2013</div>
            <a href="#kontakt" className="trenn-liitu">Liitu →</a>
          </div>
          <div className="trenn-kaart">
            <div className="trenn-aasta">2012</div>
            <div className="trenn-nimi">Alaklass B</div>
            <div className="trenn-info">E/K/R • 17:30–19:00<br/>Saaremaa Spordikeskus<br/>Sünd. 2012</div>
            <a href="#kontakt" className="trenn-liitu">Liitu →</a>
          </div>
          <div className="trenn-kaart">
            <div className="trenn-aasta">2011</div>
            <div className="trenn-nimi">Alaklass B</div>
            <div className="trenn-info">E/K/R • 18:00–19:30<br/>Saaremaa Spordikeskus<br/>Sünd. 2011</div>
            <a href="#kontakt" className="trenn-liitu">Liitu →</a>
          </div>
          <div className="trenn-kaart">
            <div className="trenn-aasta">2010</div>
            <div className="trenn-nimi">Alaklass A</div>
            <div className="trenn-info">E/K/R • 18:00–19:30<br/>Saaremaa Spordikeskus<br/>Sünd. 2010</div>
            <a href="#kontakt" className="trenn-liitu">Liitu →</a>
          </div>
          <div className="trenn-kaart">
            <div className="trenn-aasta">2009</div>
            <div className="trenn-nimi">Alaklass A</div>
            <div className="trenn-info">E/K/R • 18:30–20:00<br/>Saaremaa Spordikeskus<br/>Sünd. 2009</div>
            <a href="#kontakt" className="trenn-liitu">Liitu →</a>
          </div>
          <div className="trenn-kaart">
            <div className="trenn-aasta">2008</div>
            <div className="trenn-nimi">Noored A</div>
            <div className="trenn-info">E/K/R • 19:00–20:30<br/>Saaremaa Spordikeskus<br/>Sünd. 2008 ja varem</div>
            <a href="#kontakt" className="trenn-liitu">Liitu →</a>
          </div>
        </div>
      </section>

      <section id="treenerid">
        <div className="section-label">Meie meeskond</div>
        <h2 className="section-title">TREENERID</h2>
        <div className="treenerid-grid">
          <div className="treeneri-kaart">
            <div className="treeneri-number">01</div>
            <div className="treeneri-roll">Peatreener</div>
            <div className="treeneri-nimi">JAN VAZINSKI</div>
            <p className="treeneri-kirjeldus">Jan on Sepps JK selgroog — rahulik, analüütiline ja mängijatele pühendunud treener. Ta usub, et iga noor jalgpallur vajab individuaalset lähenemist ning tema trennid ühendavad taktikalise sügavuse ja loomulikku mängulusti.</p>
            <div className="treeneri-kogemus">
              <strong>Kogemus:</strong> 12 aastat treenerikogemust. Endine FC Kuressaare mängija (2005–2014). UEFA B-litsents. Töötanud Tartu JK Tammeka noorteakadeemias 2015–2018 enne Saaremaale naasmist.
            </div>
          </div>
          <div className="treeneri-kaart">
            <div className="treeneri-number">02</div>
            <div className="treeneri-roll">Noortetreener</div>
            <div className="treeneri-nimi">MADIS SEPP</div>
            <p className="treeneri-kirjeldus">Madis on klubi asutajaliige ja Saaremaa jalgpalli elav legend. Tema energia on nakkav — lapsed armastavad tema tunde nende intensiivsuse ja humoorika õhkkonna pärast.</p>
            <div className="treeneri-kogemus">
              <strong>Kogemus:</strong> UEFA C-litsents. 8 aastat Sepps JK noortetreenerina. Endine regionaalliiga mängija. Korraldab igal suvel Saaremaa jalgpallilaagrit, kuhu osaleb 80+ noort.
            </div>
          </div>
          <div className="treeneri-kaart">
            <div className="treeneri-number">03</div>
            <div className="treeneri-roll">Väravavahtide treener & noorimate juhendaja</div>
            <div className="treeneri-nimi">ENE KOTKAS</div>
            <p className="treeneri-kirjeldus">Ene on klubi südametunnistus. Ta juhendab noorimaid ning tegeleb lisaks kõigi vanuseklasside väravavahtide spetsiifilise treeninguga.</p>
            <div className="treeneri-kogemus">
              <strong>Kogemus:</strong> Endine Eesti naiste koondise väravavaht (2003–2011). UEFA B-litsents + väravavahtide erialane koolitus. 6 aastat Sepps JK-s.
            </div>
          </div>
        </div>
      </section>

      <section id="kalender">
        <div className="section-label">2025 hooaeg</div>
        <h2 className="section-title">KALENDER</h2>
        <div className="kalender-list">
          <div className="event-rida">
            <div className="event-kuupaev">
              <div className="event-paev">12</div>
              <div className="event-kuu">APR</div>
            </div>
            <div className="event-info">
              <div className="event-pealkiri">Sepps JK — Orissaare JK</div>
              <div className="event-koht">Saaremaa Spordikeskus • 14:00</div>
            </div>
            <div className="event-tag mang">Kodumäng</div>
          </div>
          <div className="event-rida">
            <div className="event-kuupaev">
              <div className="event-paev">19</div>
              <div className="event-kuu">APR</div>
            </div>
            <div className="event-info">
              <div className="event-pealkiri">Noorte kevadturniir — B-klass</div>
              <div className="event-koht">Kuressaare Staadion • 10:00–17:00</div>
            </div>
            <div className="event-tag">Turniir</div>
          </div>
          <div className="event-rida">
            <div className="event-kuupaev">
              <div className="event-paev">03</div>
              <div className="event-kuu">MAI</div>
            </div>
            <div className="event-info">
              <div className="event-pealkiri">Sepps JK — Saaremaa JK</div>
              <div className="event-koht">Kuressaare Staadion • 15:00</div>
            </div>
            <div className="event-tag mang">Kodumäng</div>
          </div>
          <div className="event-rida">
            <div className="event-kuupaev">
              <div className="event-paev">17</div>
              <div className="event-kuu">MAI</div>
            </div>
            <div className="event-info">
              <div className="event-pealkiri">Viikingite karikas — C-klass</div>
              <div className="event-koht">Kärdla Spordihall, Hiiumaa</div>
            </div>
            <div className="event-tag">Turniir</div>
          </div>
          <div className="event-rida">
            <div className="event-kuupaev">
              <div className="event-paev">07</div>
              <div className="event-kuu">JUN</div>
            </div>
            <div className="event-info">
              <div className="event-pealkiri">Sepps JK — Pärnu JK Vaprus II</div>
              <div className="event-koht">Kuressaare Staadion • 16:00</div>
            </div>
            <div className="event-tag mang">Kodumäng</div>
          </div>
          <div className="event-rida">
            <div className="event-kuupaev">
              <div className="event-paev">23</div>
              <div className="event-kuu">JUN</div>
            </div>
            <div className="event-info">
              <div className="event-pealkiri">Sepps JK Suvefestival & Avatud Trenn</div>
              <div className="event-koht">Saaremaa Spordikeskus • Kõik on oodatud!</div>
            </div>
            <div className="event-tag">Sündmus</div>
          </div>
          <div className="event-rida">
            <div className="event-kuupaev">
              <div className="event-paev">14</div>
              <div className="event-kuu">JUL</div>
            </div>
            <div className="event-info">
              <div className="event-pealkiri">Suvejalgpallilaager — kõik vanuseklassid</div>
              <div className="event-koht">Saaremaa Spordikeskus • 5-päevane laager</div>
            </div>
            <div className="event-tag">Laager</div>
          </div>
          <div className="event-rida">
            <div className="event-kuupaev">
              <div className="event-paev">06</div>
              <div className="event-kuu">SEP</div>
            </div>
            <div className="event-info">
              <div className="event-pealkiri">Hooaja lõputseremoonia & auhinnagala</div>
              <div className="event-koht">Kuressaare Kultuurikeskus • 18:00</div>
            </div>
            <div className="event-tag">Sündmus</div>
          </div>
        </div>
      </section>

      <section id="kontakt">
        <div className="section-label">Võta ühendust</div>
        <h2 className="section-title">KONTAKT</h2>
        <div className="kontakt-grid">
          <div className="kontakt-info">
            <p>Kas soovid oma lapse treeningusse registreerida? Või on sul muid küsimusi? Kirjuta meile või helista — vastame esimesel võimalusel.</p>
            <div className="kontakt-detail">
              <div className="kontakt-detail-label">Telefon</div>
              <a href="tel:+37253013757" className="kontakt-detail-value">+372 5301 3757</a>
            </div>
            <div className="kontakt-detail">
              <div className="kontakt-detail-label">E-post</div>
              <a href="mailto:karlv2pper@gmail.com" className="kontakt-detail-value">karlv2pper@gmail.com</a>
            </div>
            <div className="kontakt-detail">
              <div className="kontakt-detail-label">Aadress</div>
              <span className="kontakt-detail-value" style={{cursor:'default'}}>Saaremaa Spordikeskus<br/>Kuressaare, Saaremaa</span>
            </div>
          </div>
          <KontaktVorm />
        </div>
      </section>

      <footer>
        <div className="footer-logo">SEPPS <span>JK</span></div>
        <div className="footer-text">© 2026 Sepps JK. Saaremaa jalgpall südamega.</div>
      </footer>
    </>
  )
}