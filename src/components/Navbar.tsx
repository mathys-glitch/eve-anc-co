import Link from "next/link";
import MobileMenu from "./MobileMenu";

const links = [
  { href: "/notre-offre", label: "Notre Offre" },
  { href: "/engagement-rse", label: "Engagement RSE" },
  { href: "/a-propos", label: "A propos" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-beige">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-[72px]">
        <Link
          href="/"
          className="text-xl tracking-[0.3em] uppercase font-light text-charcoal"
        >
          EVE & CO
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs tracking-[0.2em] uppercase text-text-light hover:text-charcoal transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 bg-charcoal text-white text-xs tracking-[0.2em] uppercase px-6 py-2.5 hover:bg-accent-dark transition-all duration-300"
          >
            Demander un devis
          </Link>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
