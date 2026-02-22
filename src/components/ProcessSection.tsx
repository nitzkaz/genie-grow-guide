const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We start with a free strategy call. I learn everything about your business, goals, current situation, and what success looks like for you.",
    icon: "🤝",
  },
  {
    number: "02",
    title: "Strategy & Audit",
    description:
      "If you're running ads, I audit your account first. Then I build a tailored paid media strategy — including keywords, targeting, structure, and budget plan.",
    icon: "🗺️",
  },
  {
    number: "03",
    title: "Build & Launch",
    description:
      "I set up your campaigns with precision. From creatives to conversion tracking — everything is tested before a single dollar is spent.",
    icon: "🚀",
  },
  {
    number: "04",
    title: "Optimize Continuously",
    description:
      "No set-and-forget. I monitor daily, optimize weekly, and report every two weeks with clear insights and next steps.",
    icon: "⚡",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-card/20 relative overflow-hidden" aria-labelledby="process-heading">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10">
            <span className="font-body text-xs text-primary font-medium tracking-widest uppercase">Process</span>
          </div>
          <h2 id="process-heading" className="font-display text-4xl md:text-5xl font-bold text-foreground">
            How the magic{" "}
            <span className="text-gradient italic">happens</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            A clear, transparent process from first conversation to
            measurable results.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" aria-hidden="true" />
          <ol className="relative list-none grid md:grid-cols-4 gap-8 m-0 p-0" aria-label="Process steps">
          {steps.map((step, i) => (
              <li key={i} className="relative group">
                {/* Number circle */}
                <div className="relative mb-6 w-14 h-14 mx-auto md:mx-0">
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-md group-hover:bg-primary/30 transition-all duration-300" />
                  <div className="relative w-14 h-14 rounded-full bg-card border border-primary/40 flex items-center justify-center">
                    <span className="font-display font-bold text-primary text-sm">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center md:text-left space-y-3">
                  <div className="text-2xl">{step.icon}</div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="font-body text-muted-foreground mb-6">
            Ready to get started? The first call is always free.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full btn-shimmer text-primary-foreground font-body font-semibold text-base transition-all duration-200 hover:scale-105 glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span aria-hidden="true">✨</span> Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}
