import { createFileRoute } from "@tanstack/react-router";
import hall from "@/assets/vakil-hall.jpg";
import tiles from "@/assets/tiles.jpg";
import courtyard from "@/assets/courtyard.jpg";
import corridor from "@/assets/corridor.jpg";
import facade from "@/assets/facade.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "مسجد وکیل — ایران ما" },
      { name: "description", content: "سفری مجازی به مسجد وکیل شیراز، شاهکار معماری دوره زندیه." },
      { property: "og:title", content: "مسجد وکیل — ایران ما" },
      { property: "og:description", content: "سفری مجازی به مسجد وکیل شیراز، شاهکار معماری دوره زندیه." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// RTL order: first item renders on the right.
const gallery = [
  { letter: "و", src: facade, offset: "md:mt-24" },
  { letter: "ک", src: corridor, offset: "md:mt-0" },
  { letter: "ی", src: courtyard, offset: "md:mt-12" },
  { letter: "ل", src: tiles, offset: "md:mt-0" },
];

function Index() {
  return (
    <main dir="rtl" className="font-persian bg-background text-foreground">
      <section className="relative h-screen min-h-[560px] overflow-hidden">
        <img src={hall} alt="شبستان مسجد وکیل" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover animate-hero-zoom" />
        <div className="absolute inset-0 bg-hero-fade" />

        <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
          <div className="flex items-center gap-3 text-lg font-bold">
            <span className="flex flex-col gap-1">
              <span className="block h-0.5 w-4 bg-foreground" />
              <span className="block h-0.5 w-4 bg-foreground" />
            </span>
            ایران ما
          </div>
          <button className="rounded-full bg-background px-6 py-2 text-sm transition-opacity hover:opacity-80">تور مجازی</button>
        </header>

        <h1 className="absolute inset-0 z-10 flex items-center justify-center text-6xl font-bold md:text-9xl animate-fade-up">مسجد وکیل</h1>

        <div className="absolute left-0 top-1/2 z-10 hidden h-1/2 -translate-y-1/2 md:block md:left-8">
          <div className="relative h-full w-px bg-foreground/50">
            <span className="absolute -left-4 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full bg-foreground/80" />
          </div>
        </div>

        <footer className="absolute inset-x-0 bottom-0 z-10 grid grid-cols-3 items-center px-6 py-6 text-sm md:px-12">
          <div className="font-latin text-lg">
            <span className="font-bold">۰۵</span> <span className="text-foreground/70">/ ۱۰</span>
          </div>
          <div className="text-center font-bold">میلاد پهلوانیان</div>
          <nav className="flex justify-end gap-8 text-foreground/80">
            <a href="#about" className="hover:text-foreground">درباره ما</a>
            <a href="#about" className="hover:text-foreground">خدمات</a>
            <a href="#about" className="hover:text-foreground">تماس با ما</a>
          </nav>
        </footer>
      </section>

      <section id="about" className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {gallery.map((g) => (
            <figure key={g.letter} className={`relative ${g.offset} group`}>
              <span className="absolute -top-10 left-0 z-10 text-5xl font-bold">{g.letter}</span>
              <img src={g.src} alt="" loading="lazy" width={768} height={1024} className="aspect-[2/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </figure>
          ))}
        </div>
        <p className="mt-24 text-justify text-sm leading-8 text-muted-foreground">
          مسجد وکیل یا مسجد سلطانی، مسجدی تاریخی مربوط به دوره زندیان در شیراز است که به دستور کریم‌خان زند ساخته شد. این مسجد در غرب بازار وکیل و در انتهای راستهٔ شمشیرگرها واقع شده‌است. طرح این مسجد دو ایوانی بوده و دارای دو شبستان جنوبی و شرقی است. شبستان جنوبی با ستون‌های سنگی یکپارچه و ماریچ از شاخصه‌های معماری ایرانی و از مناظر دیدنی این مسجداست که دارای ۴۸ ستون سنگی یکپارچه می‌باشد. مساحت این شبستان در حدود ۵ هزار متر مربع است و منبر چهارده پله‌ای یکپارچه از سنگ مرمر از زیبائی‌های قسمت شبستان می‌باشد. گویند به فرمان کریم خان این سنگ از مراغه به شیراز آورده شد.
        </p>
      </section>
    </main>
  );
}
