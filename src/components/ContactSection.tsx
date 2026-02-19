import { useState } from "react";
import genieLogo from "@/assets/genie-logo.png";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/8 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10">
                <span className="font-body text-xs text-primary font-medium tracking-widest uppercase">Contact</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Your wish awaits —{" "}
                <span className="text-gradient italic">let's talk</span>
              </h2>
              <p className="font-body text-muted-foreground text-lg leading-relaxed">
                Send me a message and I'll get back to you within 24 hours.
                The first strategy call is always free — no strings attached.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              {[
                { icon: "📧", label: "Email", value: "hello@geniesltd.com" },
                { icon: "🌍", label: "Based in", value: "Remote — Available Globally" },
                { icon: "⏰", label: "Response time", value: "Within 24 hours" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center text-base flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-body text-xs text-muted-foreground">{item.label}</div>
                    <div className="font-body text-sm text-foreground font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Logo */}
            <div className="pt-4">
              <img
                src={genieLogo}
                alt="Genies Ltd"
                className="w-24 h-24 object-contain opacity-60 animate-float"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-2xl border border-border bg-card-gradient p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 space-y-4">
                <div className="text-6xl animate-float">✨</div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Your wish has been sent!
                </h3>
                <p className="font-body text-muted-foreground">
                  I'll get back to you within 24 hours. Looking forward to
                  making marketing magic together.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <label htmlFor="contact-name" className="font-body text-xs text-muted-foreground uppercase tracking-widest">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground font-body text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="contact-email" className="font-body text-xs text-muted-foreground uppercase tracking-widest">
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground font-body text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="contact-company" className="font-body text-xs text-muted-foreground uppercase tracking-widest">
                      Company
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground font-body text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="contact-message" className="font-body text-xs text-muted-foreground uppercase tracking-widest">
                    Tell me about your goals *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="What are you working on? What results are you looking to achieve?"
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground font-body text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl btn-shimmer text-primary-foreground font-body font-semibold text-base transition-all duration-200 hover:scale-[1.02] glow mt-2"
                >
                  ✨ Make a Wish
                </button>

                <p className="font-body text-xs text-muted-foreground text-center">
                  No spam, ever. Your info stays private.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
