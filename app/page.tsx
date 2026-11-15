import Motion from './Motion';
import {
  WA_NUMBER, WA_HELLO, UPWORK, SELAR, SOCIAL, wa, ticker, portfolio, services, team, steps, packages, kit, reviews,
} from './data';

const Arrow = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const Chat = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M20.5 11.6a8.4 8.4 0 0 1-12.3 7.5L3.5 20.5l1.4-4.6A8.4 8.4 0 1 1 20.5 11.6Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M9 9.5c.3 2.4 2.1 4.3 4.6 4.9l1-1.1 1.8.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
);
const Star = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="m12 2.8 2.8 6 6.4.6-4.8 4.3 1.4 6.3L12 16.8 6.2 20l1.4-6.3L2.8 9.4l6.4-.6Z" fill="currentColor" /></svg>
);

function ReviewCard({ r, hidden }: { r: (typeof reviews)[number]; hidden?: boolean }) {
  return (
    <figure className="rev" aria-hidden={hidden ? 'true' : undefined}>
      <div className="rev-stars" role="img" aria-label="5 out of 5 stars"><Star /><Star /><Star /><Star /><Star /></div>
      <blockquote>“{r.q}”</blockquote>
      <figcaption>
        <span className="ava" aria-hidden="true">{r.who.charAt(0)}</span>
        <span><b>{r.who}</b><small>{r.src}</small></span>
      </figcaption>
    </figure>
  );
}

export default function Page() {
  const rowA = reviews.slice(0, 3);
  const rowB = reviews.slice(3);
  return (
    <>
      {/* 1 · Loader */}
      <div className="loader" id="loader" aria-hidden="true">
        <div className="loader-panel lp1" /><div className="loader-panel lp2" />
        <div className="loader-inner">
          <div className="loader-mark">A.O.</div>
          <div className="loader-name">{'Book Marketing'.split('').map((c, i) => <span key={i} style={{ ['--i' as string]: i }}>{c === ' ' ? ' ' : c}</span>)}</div>
          <div className="loader-bar"><i /></div>
        </div>
      </div>
      <div className="progress" id="progress" aria-hidden="true" />

      {/* 2 · Nav */}
      <header className="nav" id="nav">
        <a href="#top" className="brand" aria-label="A.O. Book Marketing, back to top">
          <img src="/img/logo.webp" alt="" width="44" height="44" />
          <span>A.O. Book Marketing<small>&amp; Digital Services</small></span>
        </a>
        <nav className="nav-links" aria-label="Main">
          <a href="#work">Work</a><a href="#services">Services</a><a href="#story">Story</a><a href="#pricing">Pricing</a><a href="#reviews">Reviews</a>
        </nav>
        <a className="btn btn-accent nav-cta mag" href={WA_HELLO} target="_blank" rel="noopener"><Chat /> WhatsApp us</a>
        <button className="burger" id="burger" aria-label="Open menu" aria-expanded="false" aria-controls="sheet"><i /><i /></button>
      </header>
      <div className="sheet" id="sheet" hidden>
        <nav aria-label="Mobile">
          {[['#work', 'Work'], ['#services', 'Services'], ['#story', 'Story'], ['#pricing', 'Pricing'], ['#kit', 'Starter Kit'], ['#reviews', 'Reviews'], ['#contact', 'Contact']].map(([h, t]) => (
            <a key={h} href={h}>{t}</a>
          ))}
        </nav>
        <a className="btn btn-ink" href={WA_HELLO} target="_blank" rel="noopener"><Chat /> {WA_NUMBER}</a>
      </div>

      <main id="top">
        {/* 3 · Hero */}
        <section className="hero" id="hero">
          <div className="hero-dots" aria-hidden="true">
            <i className="dot d1" data-depth="18" /><i className="dot d2" data-depth="-24" /><i className="dot d3" data-depth="30" /><i className="dot d4" data-depth="-14" /><i className="dot d5" data-depth="22" />
          </div>
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="kicker hx"><span className="pulse" aria-hidden="true" />Upwork Rising Talent · Book marketing team</p>
              <h1 className="h1">
                <span className="line"><span>Elevate your</span></span>
                <span className="line"><span>book from draft</span></span>
                <span className="line"><span>to <em className="scrib">bestseller.
                  <svg viewBox="0 0 300 24" preserveAspectRatio="none" aria-hidden="true"><path id="scribble" d="M4 16C60 6 130 4 200 9s70 9 92-2" /></svg>
                </em></span></span>
              </h1>
              <p className="lead hx">
                A four-specialist team for indie and self-published authors: <b>8-week launches</b>, <b>ARC outreach</b>, <b>covers &amp; trailers</b>, <b>editing</b> and <b>Amazon KDP optimization</b>.
              </p>
              <div className="cta-row hx">
                <a className="btn btn-accent mag" href={WA_HELLO} target="_blank" rel="noopener"><Chat /> Start on WhatsApp</a>
                <a className="btn btn-outline mag" href="#pricing">See packages <Arrow /></a>
              </div>
              <dl className="proof hx">
                <div><dt><span className="count" data-to="5">5</span>★</dt><dd>Upwork rated</dd></div>
                <div><dt>#<span className="count" data-to="1">1</span></dt><dd>Amazon bestseller</dd></div>
                <div><dt>$<span className="count" data-to="75">75</span></dt><dd>packages from</dd></div>
              </dl>
            </div>

            <div className="stage" id="stage" aria-hidden="true">
              <div className="blob" />
              <svg className="ring" viewBox="0 0 400 400">
                <defs><path id="ringPath" d="M200,200 m-170,0 a170,170 0 1,1 340,0 a170,170 0 1,1 -340,0" /></defs>
                <text><textPath href="#ringPath">MARKETING · VISIBILITY · GROWTH · A.O. BOOK MARKETING · MARKETING · VISIBILITY · GROWTH ·</textPath></text>
              </svg>
              <div className="plate"><img src="/img/founder-800.webp" alt="" width="800" height="800" /></div>
              <div className="sticker s1"><b>#1 Bestseller</b><span>Counseling Children · Kindle Store</span></div>
              <div className="sticker s2"><span>Packages from</span><b>$75</b></div>
              <div className="sticker s3"><span className="mini-stars"><Star /><Star /><Star /><Star /><Star /></span>“Got my book to #1 in its Amazon category.”<i>Kim G.</i></div>
            </div>
          </div>
          <div className="ticker" aria-label="Services">
            <div className="ticker-track">
              {[0, 1].map((k) => (
                <div className="ticker-set" key={k} aria-hidden={k ? 'true' : undefined}>
                  {ticker.map((t) => <span key={t}>{t}<i>✦</i></span>)}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 · Sticky sideways gallery: portfolio */}
        <section className="dark gallery" id="work">
          <div className="menu-scroller" id="menuScroller">
            <div className="menu" id="menu">
              <div className="wrap gallery-head">
                <p className="eyebrow">Portfolio</p>
                <h2 className="h2 sp">Real books. <em>Real</em> rankings.</h2>
                <p className="swipe-hint">Swipe <Arrow /></p>
              </div>
              <div className="rail" id="rail">
                {portfolio.map((p) => (
                  <article className="card tilt" key={p.name}>
                    <div className="card-img"><img src={`/img/${p.img}.webp`} alt={`${p.name}: project sample`} width="800" height="1000" loading="lazy" /></div>
                    <span className="pill">{p.tag}</span>
                    <h3>{p.name}</h3>
                    <p className="by">{p.by}</p>
                    <p>{p.line}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services + team */}
        <section className="services" id="services">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">What we offer</p>
              <h2 className="h2 sp">Six disciplines. <em>One</em> named lead each.</h2>
            </div>
            <div className="svc-grid">
              {services.map((s) => (
                <article className="svc rv tilt" key={s.n}>
                  <span className="svc-n">{s.n}</span>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                  <span className="lead-by">Led by <b>{s.lead}</b></span>
                </article>
              ))}
            </div>
            <div className="team">
              {team.map((m) => (
                <article className="mate rv" key={m.name}>
                  {m.photo ? <img className="ava-lg" src="/img/founder-800.webp" alt="Awoniyi Oluwatobi" width="72" height="72" loading="lazy" /> : <span className="ava-lg" aria-hidden="true">{m.i}</span>}
                  <div>
                    <h3>{m.name}</h3>
                    <p>{m.role}</p>
                    <ul>{m.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 6 · Story */}
        <section className="story" id="story">
          <div className="wrap story-grid">
            <div>
              <p className="eyebrow">Our mission</p>
              <h2 className="h2 big sp">Every book deserves <em>to be found.</em></h2>
              <p className="lit-text" id="litText">
                The publishing landscape has shifted. The authors winning today aren&apos;t always the most talented; they&apos;re the most strategically visible. We exist to close that gap for indie and self-published writers who deserve better than invisibility.
              </p>
              <p className="sig">We don&apos;t just market books. We build author careers. — Awoniyi</p>
            </div>
            <div className="collage" aria-hidden="true">
              <div className="c-tall drift" data-speed="-40"><img src="/img/founder-tall.webp" alt="" width="800" height="1000" loading="lazy" /></div>
              <figure className="c-polaroid drift" data-speed="60"><img src="/img/pivot-wide.webp" alt="" width="900" height="480" loading="lazy" /><figcaption>#1 in Counseling Children!</figcaption></figure>
              <svg className="c-badge drift" data-speed="-80" viewBox="0 0 200 200">
                <defs><path id="badgePath" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" /></defs>
                <circle cx="100" cy="100" r="96" />
                <text><textPath href="#badgePath">FOUNDER-LED · INDIE AUTHORS · BOOK MARKETING ·</textPath></text>
                <text x="100" y="112" textAnchor="middle" className="badge-mid">A.O.</text>
              </svg>
              <div className="c-sticker drift" data-speed="30">Upwork<br /><b>5★</b> rated</div>
            </div>
          </div>
          <div className="wrap stats">
            <div className="rv"><b>4</b><span>specialists</span></div>
            <div className="rv"><b>6</b><span>core disciplines</span></div>
            <div className="rv"><b>8wk</b><span>launch campaigns</span></div>
            <div className="rv"><b>24h</b><span>reply time</span></div>
          </div>
        </section>

        {/* 7 · Process stack */}
        <section className="process" id="process">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">How it works</p>
              <h2 className="h2 sp">Draft to launch in <em>four</em> clear steps.</h2>
            </div>
            <div className="stack">
              {steps.map((s, i) => (
                <article className="step" key={s.n} style={{ background: s.bg, ['--i' as string]: i }}>
                  <div className="step-copy">
                    <span className="step-n">{s.n}</span>
                    <h3>{s.t}</h3>
                    <p>{s.d}</p>
                  </div>
                  <div className="step-img"><img src={`/img/${s.img}.webp`} alt="" width="800" height="1000" loading="lazy" /></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5 · Price board */}
        <section className="pricing" id="pricing">
          <div className="wrap board-grid">
            <div className="board-left">
              <p className="eyebrow">Pricing</p>
              <h2 className="h2 sp">Pick a package, <em>not</em> a guess.</h2>
              <p className="detail rv">Every project is delivered through <b>Upwork</b> for payment protection, and you can WhatsApp the team to talk it through before you hire.</p>
              <a className="special rv" href="#kit"><small>New on Selar</small><b>Starter Kit</b><span>$7.30</span></a>
            </div>
            <div className="paper rv">
              <span className="tape" aria-hidden="true" />
              <h3>Team packages <small>per project</small></h3>
              <ul className="price-rows">
                {packages.map((p) => (
                  <li key={p.name}><span>{p.name}</span><i aria-hidden="true" /><b>${p.price}</b></li>
                ))}
                <li><span>Discoverability Starter Kit (PDF)</span><i aria-hidden="true" /><b>$7.30</b></li>
              </ul>
              <p className="paper-note">Individual services are also available from each specialist.</p>
            </div>
          </div>
          <div className="wrap pkgs">
            {packages.map((p) => (
              <article className={`pkg rv tilt${p.hot ? ' hot' : ''}`} key={p.name}>
                <span className="pkg-tier">{p.tier}</span>
                <h3>{p.name}</h3>
                <p className="pkg-blurb">{p.blurb}</p>
                <p className="pkg-price"><b>${p.price}</b> / project</p>
                <ul>{p.items.map((it) => <li key={it}>{it}</li>)}<li className="days">{p.days}</li></ul>
                <a className={`btn ${p.hot ? 'btn-ink' : 'btn-accent'} mag`} href={wa(`Hi Awoniyi, I'm interested in the "${p.name}" package ($${p.price} / project) for my book.`)} target="_blank" rel="noopener"><Chat /> Get started</a>
              </article>
            ))}
          </div>
        </section>

        {/* Starter Kit */}
        <section className="dark kit" id="kit">
          <div className="wrap kit-grid">
            <div className="kit-cover rv tilt">
              <img src="/img/starter-kit.webp" alt="Cover of the Amazon Discoverability Starter Kit, a 41-page KDP workbook by Awoniyi Oluwatobi" width="700" height="1117" loading="lazy" />
              <span className="kit-price">Only<br /><b>$7.30</b></span>
            </div>
            <div>
              <p className="eyebrow">Get the book</p>
              <h2 className="h2 sp">Stop guessing at your <em>Amazon</em> page.</h2>
              <p className="rv">The Indie Author Amazon Discoverability Starter Kit is a practical KDP workbook: positioning, keyword research, categories, metadata and listing clarity, worked through at your own pace.</p>
              <ul className="kit-list">{kit.contents.map((c) => <li className="rv" key={c}>{c}</li>)}</ul>
              <a className="btn btn-accent mag" href={SELAR} target="_blank" rel="noopener">Get it on Selar · $7.30 <Arrow /></a>
              <p className="fine">Digital product, nothing is shipped. An educational resource that does not guarantee sales, rankings, reviews or bestseller status.</p>
            </div>
          </div>
        </section>

        {/* 8 · Reviews */}
        <section className="reviews" id="reviews">
          <div className="wrap sec-head">
            <p className="eyebrow">Testimonials</p>
            <h2 className="h2 sp">Authors say it <em>best.</em></h2>
          </div>
          <div className="marquee">
            <div className="mq-track">{rowA.map((r) => <ReviewCard r={r} key={r.who} />)}{rowA.map((r) => <ReviewCard r={r} key={r.who + 'x'} hidden />)}{rowA.map((r) => <ReviewCard r={r} key={r.who + 'y'} hidden />)}</div>
          </div>
          <div className="marquee rev-dir">
            <div className="mq-track">{rowB.map((r) => <ReviewCard r={r} key={r.who} />)}{rowB.map((r) => <ReviewCard r={r} key={r.who + 'x'} hidden />)}{rowB.map((r) => <ReviewCard r={r} key={r.who + 'y'} hidden />)}</div>
          </div>
        </section>

        {/* 9 · Contact */}
        <section className="visit" id="contact">
          <div className="wrap visit-grid">
            <div className="visit-card rv">
              <p className="eyebrow">Get in touch</p>
              <h2 className="h2">Let&apos;s get your book the readers it <em>deserves.</em></h2>
              <a className="big-phone" href={WA_HELLO} target="_blank" rel="noopener">{WA_NUMBER}</a>
              <p className="muted">WhatsApp the team. We reply within 24 hours.</p>
              <div className="cta-row">
                <a className="btn btn-accent mag" href={WA_HELLO} target="_blank" rel="noopener"><Chat /> WhatsApp</a>
                <a className="btn btn-outline-light mag" href={UPWORK} target="_blank" rel="noopener">Hire on Upwork <Arrow /></a>
              </div>
              <ul className="channels">
                <li><a href={SOCIAL.facebook} target="_blank" rel="noopener">Facebook</a></li>
                <li><a href={SOCIAL.instagram} target="_blank" rel="noopener">Instagram</a></li>
                <li><a href={SOCIAL.linkedin} target="_blank" rel="noopener">LinkedIn</a></li>
                <li><a href={SELAR} target="_blank" rel="noopener">Selar store</a></li>
              </ul>
            </div>
            <div className="chat rv" aria-label="What to send us">
              <div className="chat-top"><img src="/img/logo.webp" alt="" width="40" height="40" /><span><b>A.O. Book Marketing</b><small>usually replies within 24 hours</small></span></div>
              <div className="bubble me">Hi Awoniyi! I&apos;d like help with my book.</div>
              <div className="bubble them">Great! Send us a short note with three things:</div>
              <div className="bubble them list"><span>📚 Your genre</span><span>✍️ Where the book is at</span><span>🎯 What you want to improve</span></div>
              <div className="bubble them">…and we&apos;ll reply with next steps.</div>
              <a className="chat-input" href={WA_HELLO} target="_blank" rel="noopener">Type your message on WhatsApp <Arrow /></a>
            </div>
          </div>
        </section>

        {/* 10 · Close */}
        <section className="dark close" id="close">
          <div className="wrap">
            <h2 className="close-line" id="closeLine">Your readers are <em>out there.</em></h2>
            <p>Let&apos;s help them find you.</p>
            <div className="cta-row center">
              <a className="btn btn-accent mag" href={WA_HELLO} target="_blank" rel="noopener"><Chat /> {WA_NUMBER}</a>
              <a className="btn btn-outline-light mag" href={UPWORK} target="_blank" rel="noopener">Hire us on Upwork <Arrow /></a>
            </div>
          </div>
        </section>
      </main>

      {/* 11 · Footer */}
      <footer className="footer">
        <div className="wrap foot-grid">
          <div>
            <a href="#top" className="brand"><img src="/img/logo.webp" alt="" width="44" height="44" /><span>A.O. Book Marketing<small>&amp; Digital Services</small></span></a>
            <p>A full-service book marketing team helping indie authors build visibility that lasts.</p>
            <p className="gold-tag">Marketing · Visibility · Growth</p>
          </div>
          <div>
            <h3>Explore</h3>
            <ul><li><a href="#work">Portfolio</a></li><li><a href="#services">Services &amp; team</a></li><li><a href="#pricing">Pricing</a></li><li><a href="#kit">Starter Kit</a></li><li><a href="#reviews">Reviews</a></li></ul>
          </div>
          <div>
            <h3>Connect</h3>
            <ul>
              <li><a href={WA_HELLO} target="_blank" rel="noopener">WhatsApp {WA_NUMBER}</a></li>
              <li><a href={UPWORK} target="_blank" rel="noopener">Upwork</a></li>
              <li><a href={SOCIAL.linkedin} target="_blank" rel="noopener">LinkedIn</a></li>
              <li><a href={SOCIAL.instagram} target="_blank" rel="noopener">Instagram</a></li>
              <li><a href={SOCIAL.facebook} target="_blank" rel="noopener">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="wrap foot-bottom">
          <span>© {new Date().getFullYear()} Awoniyi Oluwatobi. All rights reserved.</span>
          <span>Design concept by Auroxa Tech · <a href="/credits/">Photo credits</a></span>
        </div>
      </footer>

      {/* 12 · Phone dock */}
      <nav className="dock" id="dock" aria-label="Quick actions">
        <a className="dock-main" href={WA_HELLO} target="_blank" rel="noopener"><Chat /> WhatsApp</a>
        <a href="#pricing">Pricing</a>
        <a href={UPWORK} target="_blank" rel="noopener">Upwork</a>
      </nav>

      <Motion />
    </>
  );
}
