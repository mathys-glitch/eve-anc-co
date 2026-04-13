import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-coral rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">E</span>
              </div>
              <span className="text-lg font-bold tracking-tight">eve&co</span>
            </div>
            <p className="text-white/50 leading-relaxed max-w-sm">
              On croit que le confort menstruel au travail, ca devrait etre aussi normal que la machine a cafe. Rejoignez le mouvement.
            </p>
            <div className="flex gap-3 mt-6">
              <span className="bg-coral/20 text-coral text-xs font-bold px-3 py-1 rounded-full">
                B Corp
              </span>
              <span className="bg-sage/20 text-sage text-xs font-bold px-3 py-1 rounded-full">
                Made in France
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-6 text-white/40 uppercase tracking-wider">
              Explorer
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/notre-offre", label: "Nos culottes" },
                { href: "/engagement-rse", label: "Notre impact" },
                { href: "/a-propos", label: "Notre histoire" },
                { href: "/contact", label: "Demander un devis" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/50 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-6 text-white/40 uppercase tracking-wider">
              Contact
            </h3>
            <div className="flex flex-col gap-3 text-sm text-white/50">
              <p>hello@eveandco.fr</p>
              <p>+33 1 23 45 67 89</p>
              <p>Paris, France</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} eve&co — Avec amour et convictions
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-white/30 hover:text-white/50 transition-colors">
              Mentions legales
            </Link>
            <Link href="#" className="text-xs text-white/30 hover:text-white/50 transition-colors">
              Confidentialite
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
