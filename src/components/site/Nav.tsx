import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
        <Link to="/" className="font-display text-3xl leading-none font-extrabold text-primary">
          Lumo
        </Link>
        <div className="hidden items-center gap-8 font-display text-sm font-bold text-ink md:flex">
          <a href="#how-it-works" className="transition-opacity hover:opacity-60">
            How it works
          </a>
          <a href="#included" className="transition-opacity hover:opacity-60">
            Our teaching approach
          </a>
          <a href="#parents" className="transition-opacity hover:opacity-60">
            About us
          </a>
        </div>
        <a
          href="#waitlist"
          className="btn-pill btn-primary hover:btn-primary-hover px-6 py-3 text-sm md:text-base"
        >
          Join the waitlist
        </a>
      </nav>
    </header>
  );
}