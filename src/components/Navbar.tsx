import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-[64px] md:h-[72px]">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="/images/logo-white.png"
            alt="EVE AND CO"
            className="h-5 lg:h-6 w-auto"
          />
        </a>

        {/* Right: CTA */}
        <div className="hidden md:block">
          <a
            href="#devis"
            className="bg-transparent border border-white/40 text-white text-xs font-bold tracking-wider px-6 py-2.5 rounded-full hover:bg-white/10 hover:border-white/60 transition-all duration-300"
          >
            DEVIS GRATUIT
          </a>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
