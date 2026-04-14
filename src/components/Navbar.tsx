import MobileMenu from "./MobileMenu";

const links = [
  { href: "#produits", label: "Produits" },
  { href: "#impact", label: "Impact" },
  { href: "#quotidien", label: "Au quotidien" },
  { href: "#preuves", label: "Preuves" },
  { href: "#devis", label: "Devis" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-warm-gray/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">
        <a href="#" className="text-deep font-bold text-xl tracking-tight">
          EVE <span className="text-terra">AND</span> CO
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-light hover:text-terra transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#devis"
            className="ml-4 bg-terra text-white text-sm font-semibold px-8 py-2.5 rounded-full hover:bg-terra-light transition-all duration-300 hover:shadow-lg"
          >
            Devis gratuit
          </a>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
