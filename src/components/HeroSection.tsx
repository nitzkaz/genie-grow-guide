import genieLogo from "@/assets/genie-logo.png";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-0 md:min-h-screen flex items-center justify-center overflow-hidden bg-hero bg-grid noise"
      aria-label="Hero"
    >
      {/* Background glow orbs - decorative */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none animate-pulse-glow" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/8 blur-[100px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '1s' }} aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
          {/* Text - centered on mobile, left-aligned from md */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up text-center md:text-left">
            {/* Eyebrow */}
            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground">
              Your wish is{" "}
              <span className="text-gradient glow-text italic">
                our command
              </span>
            </h1>

            {/* Subheadline */}
            <p className="font-body text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto md:mx-0">
              Paid advertising that actually delivers. We build, manage, and
              optimize campaigns that grow your business — with the precision
              of an agency and the care of a dedicated partner.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full btn-shimmer text-primary-foreground font-body font-semibold text-base transition-all duration-200 hover:scale-105 glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span aria-hidden="true">✨</span> Make a Wish
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-border hover:border-primary/50 text-foreground font-body font-medium text-base transition-all duration-200 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                See Our Services →
              </a>
            </div>

            {/* Trust signals */}
            <ul className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 pt-2 list-none" aria-label="Trust metrics">
              <li className="text-center">
                <span className="font-display text-xl sm:text-2xl font-bold text-primary">7+</span>
                <span className="font-body text-xs text-muted-foreground block">Years Experience</span>
              </li>
              <li className="w-px h-8 sm:h-10 bg-border shrink-0 hidden sm:block" aria-hidden="true" />
              <li className="text-center">
                <span className="font-display text-xl sm:text-2xl font-bold text-primary">20+</span>
                <span className="font-body text-xs text-muted-foreground block">Clients Served</span>
              </li>
              <li className="w-px h-8 sm:h-10 bg-border shrink-0 hidden sm:block" aria-hidden="true" />
              <li className="text-center">
                <span className="font-display text-xl sm:text-2xl font-bold text-primary">$50M+</span>
                <span className="font-body text-xs text-muted-foreground block">Ad Spend Managed</span>
              </li>
            </ul>
          </div>

          {/* Genie illustration - hidden on mobile, visible from md */}
          <div className="hidden md:flex justify-end order-first md:order-none">
            <div className="relative">
              <img
                src={genieLogo}
                alt="Genies Ltd - Magic Lamp"
                width={384}
                height={384}
                className="relative w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 object-contain animate-float animate-genie-glow"
                style={{ mixBlendMode: 'screen' }}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>

        {/* Genie logo on mobile/tablet only - bounces down to line above "Trusted by" */}
        <div className="md:hidden flex justify-center pt-8 sm:pt-12 pb-0 -mb-px">
          <img
            src={genieLogo}
            alt=""
            width={200}
            height={200}
            className="w-32 h-32 sm:w-40 sm:h-40 object-contain opacity-90 animate-float"
            style={{ mixBlendMode: "screen" }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Scroll indicator - decorative, hidden on mobile */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-50" aria-hidden="true">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-primary" />
        <span className="font-body text-xs text-muted-foreground tracking-widest">SCROLL</span>
      </div>
    </section>
  );
}
