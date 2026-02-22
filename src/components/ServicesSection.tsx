const services = [
  {
    icon: "🎯",
    title: "Campaign Strategy & Setup",
    description:
      "From keyword research to ad group architecture, I build campaigns with a solid foundation designed to scale. Search, DSA, Performance Max — I cover it all.",
    tags: ["Google Ads", "Keyword Research", "Audience Targeting"],
  },
  {
    icon: "⚙️",
    title: "Ongoing Management & Optimization",
    description:
      "Continuous monitoring, bid adjustments, budget reallocation, and creative testing. I keep your campaigns sharp and your ROI climbing — every single week.",
    tags: ["Bid Management", "A/B Testing", "Budget Optimization"],
  },
  {
    icon: "📈",
    title: "Performance Reporting",
    description:
      "Bi-weekly detailed reports with key metrics, insights, and clear recommended actions. No jargon — just what you need to know and what to do next.",
    tags: ["KPI Reporting", "Data Insights", "Recommendations"],
  },
  {
    icon: "🔍",
    title: "Account Audit & Analysis",
    description:
      "A deep dive into your existing Google Ads account: identifying waste, fixing structure, uncovering missed opportunities. A powerful starting point.",
    tags: ["Account Health", "Quick Wins", "Funnel Analysis"],
  },
  {
    icon: "🌍",
    title: "Market & Competitive Research",
    description:
      "Understand where your competitors are winning (and losing) in paid search. I map the landscape so your campaigns start with an unfair advantage.",
    tags: ["Competitor Analysis", "Market Research", "Expansion Opportunities"],
  },
  {
    icon: "🔄",
    title: "App Funnel Transition",
    description:
      "Ready to expand from web to app? I manage the transition from web funnels to app install and engagement campaigns with precision.",
    tags: ["App Campaigns", "UAC", "Funnel Testing"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-card/30" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10">
            <span className="font-body text-xs text-primary font-medium tracking-widest uppercase">Services</span>
          </div>
          <h2 id="services-heading" className="font-display text-4xl md:text-5xl font-bold text-foreground">
            What I do for your{" "}
            <span className="text-gradient italic">growth</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Results-driven paid advertising services, tailored to your
            specific goals. No fluff, no guesswork — just measurable outcomes.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-border bg-card-gradient p-8 hover:border-primary/40 hover:glow-sm transition-all duration-300"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-[100px] rounded-tr-2xl group-hover:bg-primary/10 transition-all duration-300" />

              <div className="relative space-y-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center text-xl group-hover:bg-primary/25 transition-all duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold text-foreground leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground font-body text-xs border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
