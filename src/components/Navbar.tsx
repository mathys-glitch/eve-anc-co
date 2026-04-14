import MobileMenu from "./MobileMenu";

const links = [
  { href: "#impact", label: "IMPACT" },
  { href: "#quotidien", label: "AU QUOTIDIEN" },
  { href: "#preuves", label: "ARGUMENTS CODIR" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F4F1EE]">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#" className="text-deep font-bold text-xl tracking-wide font-poppins">
          EVE AND CO
        </a>

        {/* Center Links */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-deep/70 hover:text-deep tracking-[0.15em] font-medium transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: CTA */}
        <div className="hidden md:block">
          <a
            href="#devis"
            className="bg-deep text-white text-xs font-semibold tracking-wider px-6 py-2.5 rounded-full hover:bg-deep/80 transition-all duration-300"
          >
            DEVIS GRATUIT
          </a>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
