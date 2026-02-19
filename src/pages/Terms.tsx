import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          ← Back to Home
        </Link>

        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Terms &amp; Conditions{" "}
          <span className="text-gradient italic">&amp; Privacy Policy</span>
        </h1>
        <p className="font-body text-sm text-muted-foreground mb-12">
          Last Updated: February 19, 2026
        </p>

        <div className="space-y-10 font-body text-muted-foreground leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By using this website and submitting your information through our lead form, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-foreground">2. Use of the Site</h2>
            <p>
              You agree to provide accurate and current information when filling out our lead forms. You must be at least 18 years old (or the age of majority in your jurisdiction) to submit information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-foreground">3. Communications &amp; Marketing</h2>
            <p>By providing your email address, you grant us permission to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Contact you directly regarding your inquiry.</li>
              <li>Send you marketing emails, newsletters, or promotional offers.</li>
            </ul>
            <p>
              <strong className="text-foreground">Note:</strong> We do not sell or share your data with third-party marketers. You can opt out of marketing communications at any time by clicking the "Unsubscribe" link in our emails.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-foreground">4. Intellectual Property</h2>
            <p>
              All content on this site—including text, graphics, and logos—is our property and is protected by copyright laws. You may not use our content without express written permission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-foreground">5. Limitation of Liability</h2>
            <p>
              This site is provided on an "as-is" basis. We are not liable for any damages arising from your use of the site or any errors in the content provided.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold text-foreground">6. Changes to Terms</h2>
            <p>
              We reserve the right to update these terms at any time. Changes will be effective immediately upon posting to the site.
            </p>
          </section>

          <hr className="border-border" />

          <section className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-foreground">Privacy Policy</h2>

            <div className="space-y-3">
              <h3 className="font-display text-lg font-semibold text-foreground">What we collect</h3>
              <p>We only receive the information you voluntarily provide via our contact form (Name, Email, etc.).</p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-lg font-semibold text-foreground">How we use it</h3>
              <p>We use your email to respond to your inquiry and to send you occasional updates or marketing offers. We do not use automated databases to "track" you.</p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-lg font-semibold text-foreground">Third Parties</h3>
              <p>We do not sell, rent, or share your information with any 3rd parties.</p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-lg font-semibold text-foreground">Your Rights</h3>
              <p>You can ask us to delete our email conversation at any time or "Opt-Out" of future emails by just replying "Unsubscribe."</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
