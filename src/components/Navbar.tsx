import MobileMenu from "./MobileMenu";

const links = [
  { href: "#produits", label: "Produits" },
  { href: "#calculateur", label: "Calculateur" },
  { href: "#comparatif", label: "Avec vs Sans" },
  { href: "#arguments", label: "Pourquoi" },
  { href: "#devis", label: "Devis" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-soft-white/90 backdrop-blur-xl border-b border-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-[72px]">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-forest rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">E</span>
          </div>
          <span className="text-lg font-bold text-navy tracking-tight">
            EVE & CO
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-light hover:text-navy transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#devis"
            className="ml-2 bg-forest text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-forest-light transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Demander un devis
          </a>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
