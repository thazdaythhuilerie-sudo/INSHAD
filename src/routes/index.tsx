import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import bridge from "@/assets/constantine-bridge.jpg";
import stage from "@/assets/stage.jpg";
import drum from "@/assets/drum.jpg";
import medina from "@/assets/medina.jpg";
import theater from "@/assets/theater.jpg";
import oud from "@/assets/oud.jpg";
import tramway from "@/assets/tramway.jpg";
import aiLab from "@/assets/ai-lab.jpg";
import logoInshad from "@/assets/logo-inshad.png.asset.json";
import logoMinistry from "@/assets/logo-ministry.png.asset.json";
import { CONTENT, COUNTRIES, type Lang } from "@/lib/festival-content";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "المهرجان الثقافي الدولي للإنشاد — قسنطينة، الدورة 12" },
      { name: "description", content: "الإنشاد والابتكار: نحو مهرجان ثقافي مستدام. خمس ليالٍ فنية دولية في قسنطينة." },
      { property: "og:title", content: "مهرجان الإنشاد الدولي — قسنطينة 12" },
      { property: "og:description", content: "Inshad & Innovation: five international nights in Constantine, Algeria." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const GALLERY = [
  { src: stage, offset: "md:mt-24" },
  { src: drum, offset: "md:mt-0" },
  { src: medina, offset: "md:mt-12" },
  { src: theater, offset: "md:mt-0" },
  { src: oud, offset: "md:mt-20" },
];
const HIGHLIGHT_IMAGES = [theater, tramway, aiLab];

function Index() {
  const [lang, setLang] = useState<Lang>("ar");
  const t = CONTENT[lang];
  const letters = Array.from(t.gallery.replace(/\s/g, ""));
  useReveal(lang);

  return (
    <main dir={t.dir} lang={lang} className="font-persian bg-background text-foreground">
      {/* HERO */}
      <section id="home" className="relative h-screen min-h-[620px] overflow-hidden">
        <img src={bridge} alt="جسر سيدي مسيد، قسنطينة" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover animate-hero-zoom" />
        <div className="absolute inset-0 bg-hero-fade" />

        <div className="relative z-10 border-b border-border px-6 py-2 text-center text-[11px] text-foreground/70 md:px-12">{t.patronage}</div>

        <header className="relative z-10 flex items-center justify-between gap-4 px-6 py-5 md:px-12">
          <div className="flex items-center gap-4">
            <span className="flex flex-col gap-1">
              <span className="block h-0.5 w-4 bg-foreground" />
              <span className="block h-0.5 w-4 bg-foreground" />
            </span>
            <img src={logoInshad.url} alt="محافظة المهرجان الثقافي الدولي للإنشاد" className="h-11 w-auto" />
            <img src={logoMinistry.url} alt="وزارة الثقافة والفنون" className="h-11 w-auto" />
            <span className="hidden text-lg font-bold sm:inline">{t.menu}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex rounded-full bg-background/60 p-1 text-xs backdrop-blur">
              {(["ar", "fr", "en"] as Lang[]).map((l) => (
                <button key={l} onClick={() => setLang(l)} className={`rounded-full px-3 py-1 uppercase transition-colors ${lang === l ? "bg-foreground text-background" : "text-foreground/70 hover:text-foreground"}`}>
                  {l}
                </button>
              ))}
            </div>
            <a href="#digital" className="rounded-full bg-background px-5 py-2 text-sm transition-opacity hover:opacity-80">{t.qr}</a>
          </div>
        </header>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
          <div className="mb-4 flex items-center gap-3 animate-fade-up">
            <span className="font-latin text-5xl font-black md:text-6xl">12</span>
            <span className="h-10 w-px bg-foreground/50" />
            <span className="text-sm text-foreground/80">{t.editionStamp}</span>
          </div>
          <h1 className="text-7xl font-bold md:text-9xl animate-fade-up">{t.title}</h1>
          <p className="mt-6 max-w-2xl text-lg font-bold md:text-2xl animate-fade-up">{t.headline}</p>
          <p className="mt-3 max-w-xl text-sm text-foreground/75 animate-fade-up">{t.subtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 animate-fade-up">
            <a href="#program" className="rounded-full bg-foreground px-6 py-2.5 text-sm font-bold text-background transition-opacity hover:opacity-85">{t.ctaProgram}</a>
            <a href="#legends" className="rounded-full border border-foreground/60 px-6 py-2.5 text-sm transition-colors hover:bg-foreground/10">{t.ctaMemory}</a>
          </div>
        </div>

        <div className="absolute start-auto left-0 top-1/2 z-10 hidden h-1/2 -translate-y-1/2 md:left-8 md:block">
          <div className="relative h-full w-px bg-foreground/50">
            <span className="absolute -left-4 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full bg-foreground/80" />
          </div>
        </div>

        <footer className="absolute inset-x-0 bottom-10 z-10 grid grid-cols-3 items-center px-6 py-4 text-sm md:px-12">
          <div className="font-latin text-lg">
            <span className="font-bold">05</span> <span className="text-foreground/70">/ 12</span>
          </div>
          <div className="text-center font-bold">{t.commissariat}</div>
          <nav className="hidden justify-end gap-6 text-foreground/80 md:flex">
            {[["#festival", 1], ["#program", 2], ["#legends", 3]].map(([h, i]) => (
              <a key={h} href={h as string} className="hover:text-foreground">{t.nav[i as number]}</a>
            ))}
          </nav>
        </footer>

        <div className="absolute inset-x-0 bottom-0 z-10 overflow-hidden border-t border-border py-2" dir="ltr">
          <div className="flex w-max gap-8 text-xl animate-marquee hover:[animation-play-state:paused]">
            {[...COUNTRIES, ...COUNTRIES, ...COUNTRIES].map((f, i) => <span key={i}>{f}</span>)}
          </div>
        </div>
      </section>

      {/* GALLERY + PITCH (same as original second section) */}
      <section id="festival" className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-5" dir="rtl">
          {GALLERY.map((g, i) => (
            <figure key={i} data-reveal style={{ transitionDelay: `${i * 120}ms` }} className={`reveal relative ${g.offset} group`}>
              <span className="absolute -top-10 left-0 z-10 text-5xl font-bold">{letters[i]}</span>
              <img src={g.src} alt="" loading="lazy" width={768} height={1024} className="aspect-[2/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </figure>
          ))}
        </div>
        <p data-reveal className="reveal mt-24 text-justify text-sm leading-8 text-muted-foreground">{t.pitch}</p>
      </section>

      {/* KEY FIGURES */}
      <section className="mx-auto max-w-5xl border-y border-border px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {t.figures.map((f, i) => (
            <div key={f.n} data-reveal style={{ transitionDelay: `${i * 100}ms` }} className="reveal text-center">
              <div className="font-latin text-6xl font-black">{f.n}</div>
              <div className="mt-2 text-sm text-muted-foreground">{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* VISION: 7 AXES */}
      <section className="mx-auto grid max-w-5xl gap-12 px-6 py-24 md:grid-cols-[2fr_3fr]">
        <figure data-reveal className="reveal group overflow-hidden">
          <img src={stage} alt="" loading="lazy" width={768} height={1024} className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </figure>
        <div>
          <p className="text-sm text-muted-foreground">{t.visionKicker}</p>
          <h2 className="mt-2 text-5xl font-bold">{t.visionTitle}</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">{t.visionText}</p>
          <ol className="mt-8 divide-y divide-border border-y border-border">
            {t.axes.map((a, i) => (
              <li key={a.title} data-reveal style={{ transitionDelay: `${i * 60}ms` }} className="reveal group flex gap-5 py-4">
                <span className="font-latin text-sm text-muted-foreground">0{i + 1}</span>
                <div>
                  <h3 className="font-bold transition-opacity group-hover:opacity-70">{a.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{a.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* LEGENDS */}
      <section id="legends" className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm text-muted-foreground">{t.legendsKicker}</p>
          <h2 className="mt-2 text-4xl font-bold md:text-5xl">{t.legendsTitle}</h2>
        </div>
        <div className="mt-12 overflow-hidden" dir="ltr">
          <div className="flex w-max gap-6 animate-marquee-slow hover:[animation-play-state:paused]">
            {[...t.legends, ...t.legends].map((l, i) => (
              <article key={i} dir={t.dir} className="group w-60 shrink-0">
                <div className="arch-frame flex aspect-[3/4] items-center justify-center bg-card transition-transform duration-500 group-hover:-translate-y-2">
                  <span className="text-6xl font-bold text-foreground/80">{Array.from(l.name)[0]}</span>
                </div>
                <h3 className="mt-4 font-bold">{l.name}</h3>
                <p className="text-xs text-muted-foreground">{l.country} · {l.style}</p>
                <span className="mt-2 inline-block rounded-full border border-border px-3 py-0.5 text-[11px] text-muted-foreground">{l.edition}</span>
              </article>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-5xl px-6">
          <a href="#legends" className="text-sm underline-offset-4 hover:underline">{t.legendsCta}</a>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section id="program" className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-sm text-muted-foreground">{t.highlightsKicker}</p>
        <h2 className="mt-2 text-5xl font-bold">{t.highlightsTitle}</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {t.highlights.map((h, i) => (
            <article key={h.title} data-reveal style={{ transitionDelay: `${i * 120}ms` }} className="reveal group">
              <div className="overflow-hidden">
                <img src={HIGHLIGHT_IMAGES[i]} alt="" loading="lazy" width={1024} height={768} className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <span className="mt-4 block font-latin text-sm text-muted-foreground">0{i + 1}</span>
              <h3 className="mt-1 text-lg font-bold">{h.title}</h3>
              <p className="mt-2 text-xs leading-6 text-muted-foreground">{h.text}</p>
              {h.note && <p className="mt-2 text-[11px] italic text-muted-foreground/70">* {h.note}</p>}
              <button className="mt-4 text-sm underline-offset-4 hover:underline">{t.more} ←</button>
            </article>
          ))}
        </div>
      </section>

      {/* DIGITAL BANNER */}
      <section id="digital" className="relative overflow-hidden">
        <img src={bridge} alt="" loading="lazy" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-banner-fade" />
        <div className="relative mx-auto grid max-w-5xl gap-10 px-6 py-28 md:grid-cols-2">
          <h2 data-reveal className="reveal text-5xl font-bold md:col-span-2 md:text-7xl">{t.bannerTitle}</h2>
          <div data-reveal className="reveal">
            <p className="text-sm leading-7 text-foreground/85">{t.bannerTalents}</p>
            <button className="mt-4 rounded-full bg-foreground px-6 py-2 text-sm font-bold text-background hover:opacity-85">{t.bannerTalentsCta}</button>
          </div>
          <div data-reveal className="reveal">
            <p className="text-sm leading-7 text-foreground/85">{t.bannerAudience}</p>
            <button className="mt-4 rounded-full border border-foreground/60 px-6 py-2 text-sm hover:bg-foreground/10">{t.bannerAudienceCta}</button>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-center text-sm text-muted-foreground">{t.partnersTitle}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          <img src={logoMinistry.url} alt="" className="h-16 w-auto grayscale transition hover:grayscale-0" />
          <img src={logoInshad.url} alt="" className="h-16 w-auto grayscale transition hover:grayscale-0" />
          {t.partners.slice(1).map((p) => (
            <span key={p} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{p}</span>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-6 py-12 md:px-12">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-3">
          <div>
            <img src={logoInshad.url} alt="" className="h-14 w-auto" />
            <p className="mt-4 text-xs leading-6 text-muted-foreground">{t.footerAbout}</p>
          </div>
          <nav className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {t.nav.map((n) => <a key={n} href="#home" className="hover:text-foreground">{n}</a>)}
          </nav>
          <div className="text-sm">
            <p className="font-bold">{t.footerContact}</p>
            <p className="mt-2 text-xs text-muted-foreground">{t.address}</p>
            <p className="mt-1 font-latin text-xs text-muted-foreground" dir="ltr">contact@festival-inshad.dz</p>
            <div className="mt-4 flex gap-4 text-xs text-muted-foreground">
              {["Facebook", "Instagram", "YouTube"].map((s) => <a key={s} href="#" className="hover:text-foreground">{s}</a>)}
            </div>
          </div>
        </div>
        <p className="mt-10 text-center text-[11px] text-muted-foreground">© 2026 — {t.rights}</p>
      </footer>
    </main>
  );
}
