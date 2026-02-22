import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <a href="#not-found-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main
        id="not-found-content"
        className="flex flex-1 items-center justify-center px-6 py-24"
        tabIndex={-1}
        aria-labelledby="not-found-heading"
      >
        <div className="text-center max-w-md">
          <p className="font-display text-8xl font-bold text-primary/30 mb-4" aria-hidden="true">
            404
          </p>
          <h1 id="not-found-heading" className="font-display text-3xl font-bold text-foreground mb-2">
            Page not found
          </h1>
          <p className="font-body text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-body font-medium text-sm hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span aria-hidden="true">←</span> Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
