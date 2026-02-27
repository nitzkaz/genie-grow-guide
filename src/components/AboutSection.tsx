export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: visual */}
          <div className="relative order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-border bg-card-gradient p-6 sm:p-8 md:p-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-[60px] rounded-full" />
              <div className="relative space-y-5 sm:space-y-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-xl sm:text-2xl">
                  ✨
                </div>
                <blockquote className="font-display text-xl sm:text-2xl font-semibold text-foreground italic leading-relaxed">
                  "We don't just run your ads — we become{" "}
                  <span className="text-gradient">obsessed</span> with your
                  growth."
                </blockquote>
                <div className="font-body text-sm text-muted-foreground">
                  — The Genies Ltd promise
                </div>

                {/* Small stats */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 border-t border-border">
                  {[
                    { icon: "🎯", label: "Certified Google Ads Expert" },
                    { icon: "📊", label: "Data-Driven Decisions" },
                    { icon: "🤝", label: "Personal Partnership" },
                    { icon: "🌍", label: "Remote-First, Global Reach" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2 min-w-0">
                      <span className="text-base shrink-0">{item.icon}</span>
                      <span className="font-body text-xs text-muted-foreground leading-tight break-words">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right: text */}
          <div className="space-y-5 sm:space-y-6 order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10">
              <span className="font-body text-xs text-primary font-medium tracking-widest uppercase">About</span>
            </div>

            <h2 id="about-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
              The magic is in the{" "}
              <span className="text-gradient">details</span>
            </h2>

            <div className="space-y-4 font-body text-muted-foreground leading-relaxed text-base">
              <p>
                Genies Ltd is a boutique digital marketing consultancy
                specializing in paid advertising — with a particular mastery
                of Google Ads. We partner directly with fast-growing companies
                and startups to build campaigns that perform.
              </p>
              <p>
                What makes us different? We're not an agency with account
                managers and layers of approval. When you work with Genies,
                you work with <span className="text-foreground font-medium">us</span> — directly. Every
                keyword researched, every bid optimized, every report written
                is done with your goals at the center.
              </p>
              <p>
                We combine the professionalism of a seasoned agency with the
                personal touch of a trusted advisor. Think of us as your
                in-house growth partner — without the overhead.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-body text-primary font-medium text-sm hover:gap-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
            >
              Let's work together <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
