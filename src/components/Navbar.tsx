import MobileMenu from "./MobileMenu";

const links = [
  { href: "#impact", label: "IMPACT" },
  { href: "#quotidien", label: "AU QUOTIDIEN" },
  { href: "#preuves", label: "ARGUMENTS CODIR" },
];

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="/images/logo-white.png"
            alt="EVE AND CO"
            className="h-5 lg:h-6 w-auto"
          />
        </a>

        {/* Center Links */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-white/70 hover:text-white tracking-[0.15em] font-medium transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: CTA */}
        <div className="hidden md:block">
          <a
            href="#devis"
            className="bg-white/25 backdrop-blur-lg border border-white/35 text-white text-xs font-bold tracking-wider px-6 py-2.5 rounded-full hover:bg-white/40 hover:border-white/50 transition-all duration-300"
          >
            DEVIS GRATUIT
          </a>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
