'use client';
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
      
      {/* TAUSTAKUVA */}
      <Image
        src="/kuva_2.jpg"
        alt="Salaojaremontti"
        fill
        className="object-cover"
        priority
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* SISÄLTÖ */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2">

          {/* TEKSTI */}
          <ScrollReveal className="max-w-lg">
            <p className="text-[11px] md:text-[13px] font-semibold font-sans text-[#F9F8F6]/80 mb-3 uppercase tracking-wide">
              Savo-Karjalan luotettava tekijä
            </p>

            <h1 className="font-serif text-[28px] md:text-[40px] lg:text-[48px] leading-tight text-white mb-5">
              Salaoja- ja hulevesiremontit{" "}
              <span className="text-[#0049D0]">avaimet käteen</span>
            </h1>

            <p className="font-sans text-[15px] md:text-[17px] text-[#F9F8F6]/80 mb-6">
              Olemme paikallinen, asiantunteva kaksikko, jolle laatu on kunnia-asia. 
              Hoidamme homman alusta loppuun itse — ei aliurakoitsijoita.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="#yhteystiedot"
                className="bg-[#0049D0] hover:bg-[#003aa3] text-white py-3 px-5 rounded-lg transition duration-300 text-sm md:text-base font-sans text-center"
              >
                Pyydä ilmainen arviokäynti
              </Link>

              {/* 🔥 PAREMPI HOVER */}
              <Link
                href="tel:044335253"
                className="group bg-black/20 border border-white text-white py-3 px-5 rounded-lg transition-all duration-300 text-sm md:text-base font-sans text-center hover:bg-white hover:text-black hover:border-white"
              >
                <span className="inline-flex items-center gap-2">
                  Soita meille
              
                </span>
              </Link>
            </div>
          </ScrollReveal>

          {/* OIKEA */}
          <div />

        </div>
      </div>

      {/* 🔥 ALAPALKKI */}
      <div className="relative z-10 w-full">
        <div className="bg-[#161D27]/95 backdrop-blur">
          <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              "Pitkä kokemus maarakentamisesta",
              "Omat tekijät & oma kalusto",
              "Kiinteähintaiset tarjoukset",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 justify-start md:justify-center">
                <div className="w-2 h-2 bg-[#0049D0] rounded-full"></div>
                <p className="text-white text-[13px] md:text-[14px] font-sans">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};