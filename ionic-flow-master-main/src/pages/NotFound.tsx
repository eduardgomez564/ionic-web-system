import { Home } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import StickyHeader from "@/components/StickyHeader";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <StickyHeader />
      <main className="flex min-h-screen items-center justify-center bg-background px-4 pt-20">
        <section className="mx-auto max-w-xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-ionic-orange">Error 404</p>
          <h1 className="mb-4 text-4xl font-extrabold text-foreground md:text-5xl">Page not found</h1>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            The page you are looking for may have been moved, renamed, or is temporarily unavailable.
          </p>
          <p className="mb-8 text-sm text-muted-foreground">
            Requested path: <span className="font-semibold text-foreground">{location.pathname}</span>
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg gradient-orange px-6 py-3 text-sm font-bold text-accent-foreground shadow-elevated transition-opacity hover:opacity-90"
          >
            <Home size={18} />
            Return Home
          </Link>
        </section>
      </main>
    </>
  );
};

export default NotFound;
