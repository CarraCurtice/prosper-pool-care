import Link from "next/link";
import { SITE, NAV_LINKS } from "../lib/config";

export function Header() {
  return (
    <header>
      <div className="topbar">
        <div className="wrap topbar-inner">
          <span>Serving Prosper, Texas</span>
          <a href={`tel:${SITE.phoneTel}`} className="topbar-phone">
            {SITE.phone}
          </a>
        </div>
      </div>
      <div className="navbar">
        <div className="wrap navbar-inner">
          <Link href="/" className="brand">
            {SITE.name}
          </Link>
          <nav aria-label="Main">
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <p className="footer-brand">{SITE.name}</p>
        <p>{SITE.legalLine}</p>
        <p>
          <a href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a> · {SITE.hours}
        </p>
        <nav aria-label="Footer">
          <ul className="footer-nav">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="footer-fine">
          © {new Date().getFullYear()} {SITE.name} · Prosper, TX — Windsong
          Ranch, Star Trail, Whitley Place, Lakes of La Cima, Gentle Creek, and
          surrounding neighborhoods.
        </p>
      </div>
    </footer>
  );
}
