// Since we can't fetch external logos, we'll create elegant text-based logos
// with brand-appropriate styling
const clients = [
  {
    name: "EX.CO",
    description: "Video Technology Platform",
    style: "font-display font-bold text-2xl tracking-tight",
    accent: "hsl(330, 85%, 60%)",
  },
  {
    name: "MyHeritage",
    description: "Genealogy Platform",
    style: "font-display font-semibold text-xl",
    accent: "hsl(330, 70%, 65%)",
  },
  {
    name: "LabGuru",
    description: "Lab Management SaaS",
    style: "font-body font-bold text-xl tracking-wide",
    accent: "hsl(330, 80%, 60%)",
  },
  {
    name: "Startup Nation",
    description: "Innovation Media",
    style: "font-display font-semibold text-lg",
    accent: "hsl(300, 70%, 60%)",
  },
  {
    name: "eHouse",
    description: "Real Estate Tech",
    style: "font-body font-bold text-2xl tracking-tight",
    accent: "hsl(330, 85%, 60%)",
  },
  {
    name: "Singit",
    description: "Music Learning App",
    style: "font-display font-semibold text-xl italic",
    accent: "hsl(310, 75%, 60%)",
  },
];

export default function ClientsSection() {
  return (
    <section id="clients" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10">
            <span className="font-body text-xs text-primary font-medium tracking-widest uppercase">Clients</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Trusted by companies{" "}
            <span className="text-gradient italic">that grow</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            From fast-growing startups to established tech brands — I've helped
            them all unlock the power of paid search.
          </p>
        </div>

        {/* Client logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {clients.map((client, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-border bg-card-gradient p-8 flex flex-col items-center justify-center text-center gap-2 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 min-h-[120px]"
            >
              <div
                className={`${client.style} text-foreground/80 group-hover:text-foreground transition-colors duration-200`}
              >
                {client.name}
              </div>
              <div className="font-body text-xs text-muted-foreground">
                {client.description}
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${client.accent}, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-16 rounded-2xl border border-primary/20 bg-primary/5 p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 blur-[80px] rounded-full" />
          <div className="relative">
            <div className="text-4xl mb-4">❝</div>
            <blockquote className="font-display text-xl md:text-2xl font-semibold text-foreground italic leading-relaxed max-w-3xl">
              Working with Genies felt like having a seasoned CMO in-house — without the price tag. Our
              Google Ads ROI improved dramatically within the first month.
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center font-display font-bold text-primary text-sm">
                R
              </div>
              <div>
                <div className="font-body text-sm font-medium text-foreground">Ron M.</div>
                <div className="font-body text-xs text-muted-foreground">VP Marketing, Tech Startup</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
