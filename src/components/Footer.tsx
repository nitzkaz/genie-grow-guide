import genieLogo from "@/assets/genie-logo.png";

export default function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border py-10 sm:py-12 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              src={genieLogo}
              alt="Genies Ltd"
              className="w-8 h-8 object-contain"
              width={32}
              height={32}
              loading="lazy"
            />
            <div>
              <span className="font-display font-bold text-base text-foreground">Genies</span>
              <span className="font-body text-xs text-muted-foreground ml-1">ltd</span>
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {[
              ["#about", "About"],
              ["#services", "Services"],
              ["#clients", "Clients"],
              ["#process", "Process"],
              ["#contact", "Contact"],
              ["https://www.genies.marketing/terms", "Terms"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-1"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Genies Ltd. All rights reserved.
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border text-center">
          <p className="font-display text-xs sm:text-sm text-muted-foreground italic px-2">
            "Your wish is our command" — 
            <span className="text-gradient ml-1">Genies Ltd</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
