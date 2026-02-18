import { useState, useEffect } from "react";
import genieLogo from "@/assets/genie-logo.png";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#clients", label: "Clients" },
  { href: "#process", label: "How I Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10">
            <img
              src={genieLogo}
              alt="Genies Ltd"
              className="relative w-10 h-10 object-contain drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-[0_0_12px_hsl(330_85%_55%_/_0.7)]"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-lg text-foreground tracking-wide">
              Genies
            </span>
            <span className="font-body text-xs text-muted-foreground tracking-widest uppercase">
              ltd
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-muted-foreground hover:text-foreground underline-animate transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-body text-sm font-medium hover:opacity-90 glow-sm transition-all duration-200"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-card border-b border-border px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-base text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-body text-sm font-medium text-center"
            onClick={() => setMenuOpen(false)}
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
}
