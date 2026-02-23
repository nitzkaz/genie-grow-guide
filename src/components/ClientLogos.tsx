const clients = [
  { name: "MYHERITAGE" },
  { name: "EX.CO" },
  { name: "LABGURU" },
  { name: "START-UP NATION" },
  { name: "eHOUSE" },
  { name: "PAPAYA GLOBAL" },
];

export default function ClientLogos() {
  const doubled = [...clients, ...clients];

  return (
    <section id="client-logos" className="py-10 sm:py-14 md:py-16 border-t border-b border-border overflow-hidden" aria-label="Client logos">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-6 sm:mb-10">
        <p className="text-center text-muted-foreground text-sm font-display uppercase tracking-[0.2em]">
          Trusted by innovative companies
        </p>
      </div>

      <div className="relative">
        <div className="flex animate-scroll-left gap-16 w-max">
          {doubled.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[120px] sm:min-w-[160px] px-4 sm:px-6"
            >
              <span className="text-lg sm:text-xl md:text-2xl font-display font-bold text-muted-foreground/60 whitespace-nowrap hover:text-primary transition-colors cursor-default">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
