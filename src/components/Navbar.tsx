import Link from "next/link";
import MobileMenu from "./MobileMenu";

const links = [
  { href: "/notre-offre", label: "Nos culottes" },
  { href: "/engagement-rse", label: "Impact" },
  { href: "/a-propos", label: "Notre histoire" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-[72px]">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-coral rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">E</span>
          </div>
          <span className="text-lg font-bold text-navy tracking-tight">
            eve&co
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-light hover:text-navy transition-colors duration-300 font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 bg-coral text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-accent-dark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Demander un devis
          </Link>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
