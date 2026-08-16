export function Footer() {
  return (
    <footer className="bg-ink px-5 py-14 text-primary-foreground md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <p className="font-display text-3xl font-extrabold text-primary">Lumo</p>
          <p className="mt-3 max-w-xs text-sm opacity-70">
            A patient, personal teacher for early readers and mathematicians. Made with teachers,
            for families.
          </p>
        </div>
        {[
          { title: "Product", links: ["How it works", "What's included", "Pricing", "Download"] },
          { title: "Company", links: ["About us", "Careers", "Research", "Press"] },
          { title: "Support", links: ["Help center", "Contact", "Privacy", "Terms"] },
        ].map((col) => (
          <div key={col.title}>
            <p className="font-display text-sm font-bold tracking-wide uppercase opacity-60">
              {col.title}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#waitlist" className="opacity-80 transition-opacity hover:opacity-100">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-xs opacity-50">
        © {new Date().getFullYear()} Lumo Learning. All rights reserved.
      </div>
    </footer>
  );
}