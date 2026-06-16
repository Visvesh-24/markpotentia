import Logo from './ui/Logo';
import { company, nav, products } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-ink">
      <div className="shell-wide py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-fg-muted">
              Power infrastructure and energy solutions engineered, manufactured and supported
              in India since 1996. Diesel generating systems from 5 to 750 KVA, built to
              original-equipment standard.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={company.phoneHref} className="btn-ghost text-sm !py-2.5">
                {company.phone}
              </a>
              <a href={`mailto:${company.emails[0]}`} className="btn-ghost text-sm !py-2.5">
                {company.emails[0]}
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-label text-fg-dim">Company</div>
              <ul className="mt-4 space-y-3">
                {nav.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="text-sm text-fg-muted transition-colors hover:text-fg">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-label text-fg-dim">Solutions</div>
              <ul className="mt-4 space-y-3">
                {products.slice(0, 6).map((p) => (
                  <li key={p.id}>
                    <a href="#products" className="text-sm text-fg-muted transition-colors hover:text-fg">
                      {p.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-label text-fg-dim">Reach us</div>
              <ul className="mt-4 space-y-3 text-sm text-fg-muted">
                <li>{company.address}</li>
                <li>{company.hours}</li>
                {company.emails.map((e) => (
                  <li key={e}>
                    <a href={`mailto:${e}`} className="transition-colors hover:text-fg">
                      {e}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-7 text-xs text-fg-dim sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</span>
          <span className="font-mono uppercase tracking-label">{company.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
