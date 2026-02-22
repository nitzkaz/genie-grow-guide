import { useState } from "react";
import genieLogo from "@/assets/genie-logo.png";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_NAME_LENGTH = 2;
const MIN_MESSAGE_LENGTH = 20;

type FieldErrors = Partial<Record<"name" | "email" | "message" | "consent", string>>;

function validateForm(form: { name: string; email: string; message: string; consent: boolean }): FieldErrors {
  const errors: FieldErrors = {};
  const name = form.name.trim();
  if (name.length < MIN_NAME_LENGTH) {
    errors.name = "Please enter at least 2 characters.";
  }
  if (!EMAIL_REGEX.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (form.message.trim().length < MIN_MESSAGE_LENGTH) {
    errors.message = `Please write at least ${MIN_MESSAGE_LENGTH} characters so I can help you better.`;
  }
  if (!form.consent) {
    errors.consent = "Please agree to the terms and consent to continue.";
  }
  return errors;
}

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const value = target.type === "checkbox" ? (target as HTMLInputElement).checked : target.value;
    setForm({ ...form, [target.name]: value });
    setError(null);
    if (fieldErrors[target.name as keyof FieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [target.name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const errors = validateForm(form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
    setIsSubmitting(true);

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

      if (!accessKey) {
        throw new Error("Web3Forms access key is missing. Please check your environment variables.");
      }

      const formData = new FormData(e.currentTarget);
      formData.append("access_key", accessKey);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || "Failed to send message. Please try again.");
      }

      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        company: "",
        message: "",
        consent: false,
      });
    } catch (err) {
      console.error("Web3Forms error:", err);
      setError(
        err instanceof Error 
          ? err.message 
          : "Failed to send message. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden" aria-labelledby="contact-heading">
      {/* Glow - decorative */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/8 blur-[100px] pointer-events-none rounded-full" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10">
                <span className="font-body text-xs text-primary font-medium tracking-widest uppercase">Contact</span>
              </div>
              <h2 id="contact-heading" className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
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
                loading="lazy"
                width={96}
                height={96}
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
                    aria-invalid={!!fieldErrors.name}
                    aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-muted border text-foreground font-body text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all duration-200 ${
                      fieldErrors.name ? "border-destructive focus:border-destructive" : "border-border focus:border-primary/60"
                    }`}
                  />
                  {fieldErrors.name && (
                    <p id="contact-name-error" className="font-body text-xs text-destructive" role="alert">
                      {fieldErrors.name}
                    </p>
                  )}
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
                      aria-invalid={!!fieldErrors.email}
                      aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-muted border text-foreground font-body text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all duration-200 ${
                        fieldErrors.email ? "border-destructive focus:border-destructive" : "border-border focus:border-primary/60"
                      }`}
                    />
                    {fieldErrors.email && (
                      <p id="contact-email-error" className="font-body text-xs text-destructive" role="alert">
                        {fieldErrors.email}
                      </p>
                    )}
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
                    aria-invalid={!!fieldErrors.message}
                    aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-muted border text-foreground font-body text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all duration-200 resize-none ${
                      fieldErrors.message ? "border-destructive focus:border-destructive" : "border-border focus:border-primary/60"
                    }`}
                  />
                  {fieldErrors.message && (
                    <p id="contact-message-error" className="font-body text-xs text-destructive" role="alert">
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="contact-consent"
                    type="checkbox"
                    name="consent"
                    required
                    checked={form.consent}
                    onChange={handleChange}
                    aria-invalid={!!fieldErrors.consent}
                    aria-describedby={fieldErrors.consent ? "contact-consent-error" : undefined}
                    className={`mt-1 h-4 w-4 rounded border accent-primary flex-shrink-0 ${
                      fieldErrors.consent ? "border-destructive" : "border-border"
                    }`}
                  />
                  <label htmlFor="contact-consent" className="font-body text-xs text-muted-foreground leading-relaxed">
                    I agree to the{" "}
                    <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded">
                      Terms and Conditions and Privacy Policy
                    </a>
                    , and I consent to receive marketing communications.
                  </label>
                  {fieldErrors.consent && (
                    <p id="contact-consent-error" className="font-body text-xs text-destructive mt-1" role="alert">
                      {fieldErrors.consent}
                    </p>
                  )}
                </div>

                {error && (
                  <div role="alert" aria-live="assertive" className="p-4 rounded-xl bg-destructive/10 border border-destructive/30">
                    <p className="font-body text-sm text-destructive">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="w-full py-4 rounded-xl btn-shimmer text-primary-foreground font-body font-semibold text-base transition-all duration-200 hover:scale-[1.02] glow mt-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {isSubmitting ? "Sending..." : "✨ Make a Wish"}
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
