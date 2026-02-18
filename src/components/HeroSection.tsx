import genieLogo from "@/assets/genie-logo.png";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero bg-grid noise"
    >
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/8 blur-[100px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-body text-sm text-primary font-medium tracking-wide">
                Digital Marketing Consultant
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground">
              Your wish is{" "}
              <span className="text-gradient glow-text italic">
                my command
              </span>
            </h1>

            {/* Subheadline */}
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Paid advertising that actually delivers. I build, manage, and
              optimize campaigns that grow your business — with the precision
              of an agency and the care of a dedicated partner.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full btn-shimmer text-primary-foreground font-body font-semibold text-base transition-all duration-200 hover:scale-105 glow"
              >
                <span>✨</span> Make a Wish
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-border hover:border-primary/50 text-foreground font-body font-medium text-base transition-all duration-200 hover:bg-primary/5"
              >
                See My Services →
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex items-center gap-6 pt-2">
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-primary">10+</div>
                <div className="font-body text-xs text-muted-foreground">Years Experience</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-primary">50+</div>
                <div className="font-body text-xs text-muted-foreground">Clients Served</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-primary">$M+</div>
                <div className="font-body text-xs text-muted-foreground">Ad Spend Managed</div>
              </div>
            </div>
          </div>

          {/* Genie illustration */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <img
                src={genieLogo}
                alt="Genies Ltd - Magic Lamp"
                className="relative w-72 h-72 md:w-96 md:h-96 object-contain animate-float animate-genie-glow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-primary" />
        <span className="font-body text-xs text-muted-foreground tracking-widest">SCROLL</span>
      </div>
    </section>
  );
}
