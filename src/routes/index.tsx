import { createFileRoute } from "@tanstack/react-router";
import logoUrl from "@/assets/claude-kameni-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Claude Kameni — Coming Soon 2027" },
      {
        name: "description",
        content:
          "Something remarkable is taking shape. Claude Kameni arrives in 2027. Get in touch: claudekameni@gmail.com",
      },
      { property: "og:title", content: "Claude Kameni — Coming Soon 2027" },
      {
        property: "og:description",
        content:
          "Something remarkable is taking shape. Claude Kameni arrives in 2027.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Claude Kameni — Coming Soon 2027" },
      {
        name: "twitter:description",
        content:
          "Something remarkable is taking shape. Claude Kameni arrives in 2027.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background text-foreground">
      {/* Atmosphere */}
      <div
        aria-hidden
        className="animate-halo pointer-events-none absolute inset-0"
        style={{ background: "var(--glow-halo)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-48 top-0 size-[55vmin] rounded-full bg-primary/8 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-48 bottom-0 size-[55vmin] rounded-full bg-gold/15 blur-[110px]"
      />
      <div
        aria-hidden
        className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-multiply"
      />

      {/* Top bar — stacked & centered on mobile, logo left + label right on desktop */}
      <header className="relative z-10 flex flex-col items-center gap-5 px-6 py-8 text-center md:flex-row md:items-center md:justify-between md:gap-8 md:px-14 md:py-10 md:text-left">
        <div className="animate-rise flex justify-center [animation-delay:60ms]">
          <span className="logo-shine relative inline-block overflow-hidden rounded-md">
            <img
              src={logoUrl}
              alt="Claude Kameni"
              className="relative z-0 block h-36 w-auto max-w-[72vw] sm:h-40 md:h-44 lg:h-52"
            />
          </span>
        </div>
        <span className="animate-rise font-body text-[10px] uppercase tracking-[0.34em] text-muted-foreground [animation-delay:140ms] md:text-[11px] md:tracking-[0.42em]">
          Teaser — N° 001
        </span>
      </header>

      {/* Hero */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-16 text-center">
        <div className="animate-rise flex items-center gap-4 [animation-delay:220ms]">
          <span className="h-px w-10 bg-foreground/30 md:w-16" />
          <span className="font-body text-[11px] uppercase tracking-[0.55em] text-muted-foreground md:text-xs">
            Coming Soon
          </span>
          <span className="h-px w-10 bg-foreground/30 md:w-16" />
        </div>

        <h1 className="font-display mt-6 flex text-[clamp(7.5rem,30vw,22rem)] font-light leading-[0.85] tracking-[-0.02em]">
          {["2", "0", "2", "7"].map((digit, i) => (
            <span
              key={i}
              className="year-digit year-gradient"
              style={{ animationDelay: `${480 + i * 180}ms` }}
            >
              {digit}
            </span>
          ))}
          <span className="sr-only">2027</span>
        </h1>

        <p className="animate-rise font-display mt-6 max-w-[36ch] text-balance text-xl font-light italic text-foreground/80 md:mt-8 md:text-2xl [animation-delay:440ms]">
          Something remarkable is taking shape.
        </p>
        <p className="animate-rise mt-4 max-w-[44ch] text-sm leading-relaxed text-muted-foreground md:text-base [animation-delay:500ms]">
          A new chapter, built slowly and deliberately. The reveal begins in
          2027.
        </p>

        {/* Contact */}
        <div className="animate-rise mt-12 flex flex-col items-center gap-3 [animation-delay:600ms]">
          <span className="font-body text-[10px] uppercase tracking-[0.4em] text-muted-foreground/70">
            Get in touch
          </span>
          <a
            href="mailto:claudekameni@gmail.com"
            className="group inline-flex items-center gap-3 rounded-full border border-foreground/20 bg-card/70 px-6 py-3.5 shadow-[var(--shadow-soft)] backdrop-blur-md transition-colors duration-300 hover:border-foreground/40 hover:bg-card"
          >
            <span className="size-1.5 rounded-full bg-gold transition-colors duration-300 group-hover:bg-foreground" />
            <span className="font-body text-sm tracking-[0.06em] text-foreground/90 md:text-base">
              claudekameni@gmail.com
            </span>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 flex items-center justify-between px-6 py-8 md:px-14">
        <span className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70">
          © 2027 Claude Kameni
        </span>
        <span className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70">
          Arriving 2027
        </span>
      </footer>
    </div>
  );
}
