'use client';
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    step: "01",
    title: "Maksuton arviokäynti",
    description: "Tulemme paikan päälle tarkastamaan kiinteistön tilanteen.",
  },
  {
    step: "02",
    title: "Kiinteähintainen tarjous",
    description: "Saat selkeän tarjouksen ilman yllätyksiä.",
  },
  {
    step: "03",
    title: "Remontti sovittuna ajankohtana",
    description: "Hoidamme työn tehokkaasti ja ammattitaidolla.",
  },
  {
    step: "04",
    title: "Valmis järjestelmä",
    description: "Salaojat toimivat luotettavasti vielä vuosikymmenten päästä.",
  },
];

export const SalaojaProcess = () => {
  return (
    <section id="prosessi" className="w-full bg-[#161D27] py-20 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 px-6">
        
        {/* VASEN */}
        <ScrollReveal className="relative">
          <div className="md:sticky md:top-24">

            <p className="text-[11px] md:text-[13px] tracking-widest uppercase text-[#627084] font-semibold mb-3">
              Näin edetään
            </p>

            <h2 className="font-serif text-[28px] md:text-[36px] lg:text-[40px] text-white mb-8 leading-tight">
              Selkeä ja toimiva prosessi
            </h2>

            <div className="relative">
              {steps.map((item, index) => (
                <ScrollReveal key={item.step} delay={index * 150}>
                  <div className="flex gap-4 md:gap-6 items-start">

                    {/* NUMERO */}
                    <div className="flex flex-col items-center">
                      <div className="
                        w-9 h-9 md:w-10 md:h-10 min-w-[36px]
                        flex items-center justify-center 
                        rounded-full
                        text-[12px] md:text-sm font-semibold
                        text-[#0049D0]
                        bg-[#0049D0]/15
                        border border-[#0049D0]/40
                      ">
                        {item.step}
                      </div>

                      {index !== steps.length - 1 && (
                        <div className="w-px h-12 md:h-20 bg-gray-500/60"></div>
                      )}
                    </div>

                    {/* TEKSTI */}
                    <div>
                      <h3 className="font-serif text-[18px] md:text-[20px] text-white mb-1">
                        {item.title}
                      </h3>

                      <p className="font-sans text-[#8A97AB] text-[14px] md:text-[15px] leading-relaxed max-w-md">
                        {item.description}
                      </p>
                    </div>

                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* OIKEA */}
        <div className="space-y-6 md:space-y-10">
          <ScrollReveal delay={100}>
            <div className="w-full h-[260px] md:h-[420px] relative overflow-hidden rounded-xl">
              <Image
                src="/Kuva_3.jpg"
                alt="Salaojaremontti"
                fill
                sizes="100vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="w-full h-[260px] md:h-[420px] relative overflow-hidden rounded-xl">
              <Image
                src="/kuva_1.jpg"
                alt="Salaojatyömaa"
                fill
                sizes="100vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};