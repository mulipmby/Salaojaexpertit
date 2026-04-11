'use client';

import { useState } from "react";
import Link from "next/link";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Etusivu", href: "#" },
    { label: "Palvelut", href: "#palvelut" },
    { label: "Prosessi", href: "#prosessi" },
    { label: "Toimialue", href: "#toimialue" },
    { label: "Yhteystiedot", href: "#yhteystiedot" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* TEXT LOGO */}
        <Link href="#" className="flex items-center">
          <span className="font-serif text-[18px] md:text-[20px] text-black tracking-tight">
            Salaojaexpertit Oy
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-gray-700 hover:text-blue-600 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA (desktop) */}
        <div className="hidden md:block">
          <Link
            href="#yhteystiedot"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition"
          >
            Pyydä tarjous
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 flex flex-col gap-4">

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 text-sm hover:text-blue-600 transition"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="#yhteystiedot"
              onClick={() => setOpen(false)}
              className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg text-center"
            >
              Pyydä tarjous
            </Link>

          </div>
        </div>
      )}

    </header>
  );
};