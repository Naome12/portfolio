import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: route not found:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 text-foreground">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="relative max-w-md text-center">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Error 404
        </p>
        <p className="mb-4 font-display text-7xl font-bold text-gradient sm:text-8xl">404</p>
        <h1 className="mb-2 font-display text-2xl font-semibold">Page not found</h1>
        <p className="mb-8 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03] active:scale-[0.97]"
        >
          <Home className="h-4 w-4" aria-hidden />
          Back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
