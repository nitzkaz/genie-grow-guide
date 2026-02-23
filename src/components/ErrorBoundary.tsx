import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div className="min-h-screen flex items-center justify-center bg-background px-6">
          <main className="text-center max-w-md" role="alert">
            <div className="text-5xl mb-4" aria-hidden="true">
              ✨
            </div>
            <h1 className="font-display text-2xl font-bold text-foreground mb-2">
              Something went wrong
            </h1>
            <p className="font-body text-muted-foreground text-sm mb-6">
              We've been notified. Please try refreshing the page.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-body font-medium text-sm hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Back to home
            </a>
          </main>
        </div>
      );
    }
    return this.props.children;
  }
}
