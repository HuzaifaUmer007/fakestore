'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

/** All page motion lives here, wired once on mount (the markup is server-rendered). */
export default function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('js');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = matchMedia('(pointer: fine)').matches;
    gsap.registerPlugin(ScrollTrigger);
    const cleanups: Array<() => void> = [];
    const $ = <T extends Element = HTMLElement>(s: string) => document.querySelector(s) as T | null;
    const $$ = <T extends Element = HTMLElement>(s: string) => Array.from(document.querySelectorAll(s)) as T[];

    // ---- Split-word headings (.sp) -------------------------------------------------
    $$('.sp').forEach((h) => {
      if (h.dataset.split) return;
      h.dataset.split = '1';
      let i = 0;
      const walk = (node: Node) => {
        Array.from(node.childNodes).forEach((n) => {
          if (n.nodeType === 3) {
            const frag = document.createDocumentFragment();
            (n.textContent || '').split(/(\s+)/).forEach((part) => {
              if (!part) return;
              if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
              const w = document.createElement('span'); w.className = 'w';
              const s = document.createElement('span'); s.textContent = part; s.style.setProperty('--i', String(i++));
              w.appendChild(s); frag.appendChild(w);
            });
            n.parentNode!.replaceChild(frag, n);
          } else if (n.nodeType === 1) walk(n);
        });
      };
      walk(h);
    });

    // ---- Scroll-lit statement: wrap words ------------------------------------------
    const lit = $('#litText');
    if (lit && !lit.dataset.split) {
      lit.dataset.split = '1';
      lit.innerHTML = (lit.textContent || '').trim().split(/\s+/).map((w) => `<span class="lw">${w}</span>`).join(' ');
    }

    // ---- Reveals via IntersectionObserver --------------------------------------------
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    $$('.sp, .rv').forEach((el) => (reduce ? el.classList.add('in') : io.observe(el)));
    cleanups.push(() => io.disconnect());

    // ---- Lenis smooth scroll ----------------------------------------------------------
    let lenis: Lenis | null = null;
    if (!reduce) {
      lenis = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      (window as unknown as { __lenis: Lenis }).__lenis = lenis;
      const raf = (t: number) => lenis!.raf(t * 1000);
      gsap.ticker.add(raf); gsap.ticker.lagSmoothing(0);
      lenis.on('scroll', ScrollTrigger.update);
      cleanups.push(() => { gsap.ticker.remove(raf); lenis!.destroy(); });
    }

    // ---- Anchors + mobile sheet ----------------------------------------------------------
    const burger = $('#burger'), sheet = $('#sheet');
    const setSheet = (open: boolean) => {
      if (!burger || !sheet) return;
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      if (open) { sheet.hidden = false; requestAnimationFrame(() => sheet.classList.add('open')); lenis?.stop(); }
      else { sheet.classList.remove('open'); lenis?.start(); setTimeout(() => { if (!sheet.classList.contains('open')) sheet.hidden = true; }, 700); }
    };
    const onBurger = () => setSheet(burger!.getAttribute('aria-expanded') !== 'true');
    burger?.addEventListener('click', onBurger);
    const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') setSheet(false); };
    addEventListener('keydown', onEsc);
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute('href')!;
      const target = id === '#top' ? document.body : document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      setSheet(false);
      if (lenis) lenis.scrollTo(target as HTMLElement, { offset: -70, duration: 1.5 });
      else (target as HTMLElement).scrollIntoView();
    };
    document.addEventListener('click', onClick);
    cleanups.push(() => { burger?.removeEventListener('click', onBurger); removeEventListener('keydown', onEsc); document.removeEventListener('click', onClick); });

    // ---- Nav glass / hide, progress bar, dock --------------------------------------------
    const nav = $('#nav'), bar = $('#progress'), dock = $('#dock');
    let lastY = scrollY;
    const onScroll = () => {
      const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
      nav?.classList.toggle('scrolled', y > 30);
      nav?.classList.toggle('hide', y > 300 && y > lastY && !(burger?.getAttribute('aria-expanded') === 'true'));
      dock?.classList.toggle('show', y > 500);
      if (bar) bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      lastY = y;
    };
    addEventListener('scroll', onScroll, { passive: true }); onScroll();
    cleanups.push(() => removeEventListener('scroll', onScroll));

    // ---- Count-ups -------------------------------------------------------------------------
    const countUp = () => $$('.count').forEach((el) => {
      const to = Number(el.dataset.to || 0); const o = { v: 0 };
      if (reduce) { el.textContent = String(to); return; }
      gsap.to(o, { v: to, duration: 1.6, ease: 'power3.out', onUpdate: () => { el.textContent = String(Math.round(o.v)); } });
    });

    // ---- Hero timeline (runs when the loader lifts) ------------------------------------------
    const heroIn = () => {
      if (reduce) { countUp(); return; }
      const tl = gsap.timeline({ defaults: { ease: 'expo.out', duration: 1.2 } });
      tl.from('.h1 .line > span', { yPercent: 110, stagger: 0.09 })
        .fromTo('#scribble', { strokeDashoffset: 320 }, { strokeDashoffset: 0, duration: 1.1, ease: 'power2.inOut' }, 0.5)
        .from('.hx', { y: 24, opacity: 0, stagger: 0.07, duration: 1 }, 0.25)
        .from('.plate', { scale: 0.6, rotate: -25, opacity: 0, duration: 1.4 }, 0.1)
        .from('.blob', { scale: 0.4, opacity: 0, ease: 'back.out(1.6)', duration: 1.2 }, 0.05)
        .from('.ring', { scale: 0.7, opacity: 0, duration: 1.2 }, 0.3)
        .from('.sticker', { scale: 0, opacity: 0, ease: 'back.out(2.2)', stagger: 0.12, duration: 0.8 }, 0.7)
        .from('.dot', { scale: 0, ease: 'back.out(3)', stagger: 0.06, duration: 0.6 }, 0.8)
        .from('.ticker', { xPercent: 12, opacity: 0, duration: 1.4 }, 0.6)
        .add(countUp, 0.7);
    };
    let started = false;
    const start = () => { if (started) return; started = true; root.classList.remove('loading'); heroIn(); };
    const loaderTimer = setTimeout(start, reduce ? 0 : 1250);
    const failSafe = setTimeout(start, 3000);
    cleanups.push(() => { clearTimeout(loaderTimer); clearTimeout(failSafe); });

    // ---- Hero pointer parallax (paused when hero off screen) -------------------------------------
    const hero = $('#hero');
    if (fine && !reduce && hero) {
      let tx = 0, ty = 0, cx = 0, cy = 0, rafId = 0, visible = true;
      const dots = $$('.dot'), stage = $('#stage');
      const onMove = (e: PointerEvent) => { tx = e.clientX / innerWidth - 0.5; ty = e.clientY / innerHeight - 0.5; };
      const loop = () => {
        cx += (tx - cx) * 0.08; cy += (ty - cy) * 0.08;
        dots.forEach((d) => { const k = Number(d.dataset.depth || 10); d.style.translate = `${cx * k}px ${cy * k}px`; });
        if (stage) stage.style.translate = `${cx * -12}px ${cy * -12}px`;
        if (visible) rafId = requestAnimationFrame(loop);
      };
      const vis = new IntersectionObserver(([e]) => { visible = e.isIntersecting; cancelAnimationFrame(rafId); if (visible) rafId = requestAnimationFrame(loop); });
      vis.observe(hero);
      addEventListener('pointermove', onMove, { passive: true });
      cleanups.push(() => { vis.disconnect(); cancelAnimationFrame(rafId); removeEventListener('pointermove', onMove); });
    }

    // ---- Magnetic buttons + tilt cards (fine pointers only) -----------------------------------------
    if (fine && !reduce) {
      $$('.mag').forEach((b) => {
        const mv = (e: PointerEvent) => { const r = b.getBoundingClientRect(); b.style.translate = `${(e.clientX - r.left - r.width / 2) * 0.22}px ${(e.clientY - r.top - r.height / 2) * 0.3}px`; };
        const out = () => { b.style.translate = ''; };
        b.style.transition += ', translate .35s cubic-bezier(.16,1,.3,1)';
        b.addEventListener('pointermove', mv); b.addEventListener('pointerleave', out);
        cleanups.push(() => { b.removeEventListener('pointermove', mv); b.removeEventListener('pointerleave', out); });
      });
      $$('.tilt').forEach((c) => {
        const mv = (e: PointerEvent) => {
          const r = c.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
          const ang = Math.min(8, Math.hypot(x, y) * 16);
          c.style.rotate = `${-y} ${x} 0 ${ang}deg`;
        };
        const out = () => { c.style.rotate = ''; };
        c.style.transition = 'rotate .5s cubic-bezier(.16,1,.3,1)';
        c.addEventListener('pointermove', mv); c.addEventListener('pointerleave', out);
        cleanups.push(() => { c.removeEventListener('pointermove', mv); c.removeEventListener('pointerleave', out); });
      });
    }

    // ---- ScrollTrigger scenes --------------------------------------------------------------------
    const mm = gsap.matchMedia();
    if (!reduce) {
      // Scroll-lit statement
      const words = $$('.lit-text .lw');
      if (words.length) {
        ScrollTrigger.create({
          trigger: '#litText', start: 'top 80%', end: 'bottom 45%', scrub: true,
          onUpdate: (s) => { const n = Math.round(s.progress * words.length); words.forEach((w, i) => w.classList.toggle('lit', i < n)); },
        });
      }
      // Collage drift
      $$('.drift').forEach((el) => {
        gsap.to(el, { y: Number(el.dataset.speed || 0), ease: 'none', scrollTrigger: { trigger: '.story', start: 'top bottom', end: 'bottom top', scrub: true } });
      });
      // Process stack: the card underneath scales to 0.93
      const stepsEls = $$('.step');
      stepsEls.forEach((s, i) => {
        const next = stepsEls[i + 1]; if (!next) return;
        gsap.to(s, { scale: 0.93, ease: 'none', scrollTrigger: { trigger: next, start: 'top bottom', end: 'top 25%', scrub: true } });
      });
      // Close line scales up
      gsap.fromTo('#closeLine', { scale: 0.72, opacity: 0.4 }, { scale: 1, opacity: 1, ease: 'none', scrollTrigger: { trigger: '.close', start: 'top bottom', end: 'center center', scrub: true } });

      // Sticky sideways gallery (no pin: true with Lenis)
      mm.add('(min-width: 900px)', () => {
        const rail = $('#rail')!, menu = $('#menu')!, scroller = $('#menuScroller')!;
        const dist = () => Math.max(0, rail.scrollWidth - innerWidth);
        let stick = 0;
        const layout = () => {
          gsap.set(rail, { x: 0 });
          const h = menu.offsetHeight;
          stick = h > innerHeight ? innerHeight - h : Math.round((innerHeight - h) / 2);
          scroller.style.setProperty('--stick', stick + 'px');
          scroller.style.height = h + dist() + 'px';
        };
        scroller.classList.add('is-live'); layout();
        ScrollTrigger.addEventListener('refreshInit', layout);
        gsap.to(rail, {
          x: () => -dist(), ease: 'none',
          scrollTrigger: { trigger: scroller, start: () => 'top ' + stick + 'px', end: () => '+=' + dist(), scrub: 0.5, invalidateOnRefresh: true },
        });
        return () => {
          ScrollTrigger.removeEventListener('refreshInit', layout);
          scroller.classList.remove('is-live'); scroller.style.height = ''; scroller.style.removeProperty('--stick');
          gsap.set(rail, { clearProps: 'transform' });
        };
      });
    } else {
      $$('.lit-text .lw').forEach((w) => w.classList.add('lit'));
    }

    const refresh = () => ScrollTrigger.refresh();
    addEventListener('load', refresh);
    document.fonts?.ready.then(refresh);
    cleanups.push(() => removeEventListener('load', refresh));

    return () => { cleanups.forEach((f) => f()); mm.revert(); ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);

  return null;
}
