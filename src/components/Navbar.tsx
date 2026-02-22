import { useState, useEffect, useCallback } from "react";
import genieLogo from "@/assets/genie-logo.png";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#clients", label: "Clients" },
  { href: "#process", label: "How I Work" },
  { href: "#contact", label: "Contact" },
];

const MOBILE_MENU_ID = "main-nav-menu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [menuOpen, closeMenu]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg">
          <div className="relative w-10 h-10">
            <img
              src={genieLogo}
              alt="Genies Ltd"
              width={40}
              height={40}
              className="relative w-10 h-10 object-contain drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-[0_0_12px_hsl(330_85%_55%_/_0.7)]"
              style={{ mixBlendMode: 'screen' }}
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
              className="font-body text-sm text-muted-foreground hover:text-foreground underline-animate transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-body text-sm font-medium hover:opacity-90 glow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls={MOBILE_MENU_ID}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
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
      <div
        id={MOBILE_MENU_ID}
        className="md:hidden bg-card border-b border-border px-6 py-6 flex flex-col gap-4"
        hidden={!menuOpen}
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-body text-base text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded py-1"
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="mt-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-body text-sm font-medium text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          onClick={closeMenu}
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
}
