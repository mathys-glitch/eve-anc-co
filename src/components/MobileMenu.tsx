"use client";

import { useState } from "react";

const links = [
  { href: "#produits", label: "Produits" },
  { href: "#calculateur", label: "Calculateur" },
  { href: "#comparatif", label: "Avec vs Sans" },
  { href: "#arguments", label: "Pourquoi" },
  { href: "#devis", label: "Devis" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
      >
        <span className={`block w-6 h-0.5 bg-navy rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-[4px]" : ""}`} />
        <span className={`block w-6 h-0.5 bg-navy rounded-full transition-all duration-300 ${open ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-navy rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-[4px]" : ""}`} />
      </button>

      {open && (
        <div className="fixed inset-0 top-[72px] bg-soft-white z-50 md:hidden">
          <nav className="flex flex-col items-center gap-8 pt-16">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-bold text-navy hover:text-forest transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
