'use client';

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#161D27] text-white/70 py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Yritys */}
          <div className="text-center md:text-left">
            <p className="text-xl font-serif text-white">
              Salaojaexpertit Oy
            </p>
            <p className="text-sm text-gray-400">Leppävirta | Savo ja Karjala</p>
          </div>

          {/* Yhteystiedot */}
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-center md:text-right">
            <a
              href="mailto:info@salaojaexpertit.fi"
              className="hover:text-white transition"
            >
              info@salaojaexpertit.fi
            </a>
            <a
              href="tel:044335253"
              className="hover:text-white transition"
            >
              044 335 253
            </a>
            <a
              href="tel:04578749401"
              className="hover:text-white transition"
            >
              045 787 49401
            </a>
          </div>

        </div>

        {/* Alatunniste */}
        <div className="flex flex-col md:flex-row justify-between gap-2 border-t border-white/10 mt-8 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} Salaojaexpertit Oy. Kaikki oikeudet pidätetään.
          <Link href="/tietosuojalauseke" className="hover:text-white transition">
            Tietosuojalauseke
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;