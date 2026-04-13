"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/notre-offre", label: "Nos culottes" },
  { href: "/engagement-rse", label: "Impact" },
  { href: "/a-propos", label: "Notre histoire" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
      >
        <span
          className={`block w-6 h-0.5 bg-navy rounded-full transition-all duration-300 ${
            open ? "rotate-45 translate-y-[4px]" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-navy rounded-full transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-navy rounded-full transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-[4px]" : ""
          }`}
        />
      </button>

      {open && (
        <div className="fixed inset-0 top-[72px] bg-background z-50 md:hidden">
          <nav className="flex flex-col items-center gap-8 pt-16">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-2xl font-bold transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-coral"
                    : "text-navy hover:text-coral"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
