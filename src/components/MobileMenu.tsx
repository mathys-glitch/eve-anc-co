"use client";

import { useState } from "react";

const links = [
  { href: "#produits", label: "Produits" },
  { href: "#impact", label: "Impact" },
  { href: "#quotidien", label: "Au quotidien" },
  { href: "#preuves", label: "Preuves" },
  { href: "#devis", label: "Devis" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-2 cursor-pointer hover:bg-white/10 rounded-full transition-colors duration-300"
        aria-label={open ? "Fermer" : "Menu"}
      >
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-[8px]" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${open ? "-rotate-45 -translate-y-[8px]" : ""}`} />
      </button>
      {open && (
        <div className="fixed inset-0 top-[72px] bg-background z-50 md:hidden flex flex-col items-center justify-center gap-12 px-6">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}
              className="text-2xl font-bold text-deep hover:text-terra transition-colors duration-300">{link.label}</a>
          ))}
        </div>
      )}
    </>
  );
}
