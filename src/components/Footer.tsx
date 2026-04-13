import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-xl tracking-[0.3em] uppercase font-light"
            >
              EVE & CO
            </Link>
            <p className="mt-4 text-white/60 font-light leading-relaxed max-w-sm">
              Culottes menstruelles pour entreprises engagees. Ensemble, transformons le bien-etre au travail.
            </p>
            <span className="inline-block mt-4 text-xs tracking-[0.2em] uppercase text-accent border border-accent px-3 py-1">
              Certifie B Corp
            </span>
          </div>

          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase mb-6 text-white/40">
              Navigation
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/notre-offre", label: "Notre Offre" },
                { href: "/engagement-rse", label: "Engagement RSE" },
                { href: "/a-propos", label: "A propos" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase mb-6 text-white/40">
              Contact
            </h3>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <p>contact@eveandco.fr</p>
              <p>+33 1 23 45 67 89</p>
              <p>Paris, France</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} EVE & CO. Tous droits reserves.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-white/40 hover:text-white/60 transition-colors"
            >
              Mentions legales
            </Link>
            <Link
              href="#"
              className="text-xs text-white/40 hover:text-white/60 transition-colors"
            >
              Politique de confidentialite
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
