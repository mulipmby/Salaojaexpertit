'use client';
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    title: "Omakotitalot",
    desc: "Täydelliset salaoja- ja hulevesiremontit omakotitaloihin. Suojaa talosi perustukset kosteudelta.",
  },
  {
    title: "Taloyhtiöt",
    desc: "Ammattitaitoinen salaojaremontti taloyhtiöille. Kiinteähintainen tarjous ilman yllätyksiä.",
  },
  {
    title: "Vapaa-ajan asunnot",
    desc: "Mökkien ja loma-asuntojen salaojitukset kestävästi ja luotettavasti.",
  },
  {
    title: "Nykyaikainen kalusto",
    desc: "Käytössämme on tehokas ja tarkoituksenmukainen kalusto kaikenlaisiin kohteisiin.",
  },
];

const Services = () => {
  return (
    <section id="palvelut" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* OTSIKKO */}
        <ScrollReveal>
          <div className="text-center max-w-xl mx-auto mb-12 md:mb-16">
            <p className="text-[11px] md:text-[13px] font-semibold tracking-widest uppercase text-gray-500 mb-2">
              Palvelut
            </p>

            <h2 className="font-serif text-[28px] md:text-[36px] lg:text-[40px] text-black mb-3">
              Täyden palvelun salaojaremontit
            </h2>

            <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed">
              Tarjoamme salaoja- ja hulevesiremontit omakotitaloihin, taloyhtiöille ja vapaa-ajan asunnoille.
            </p>
          </div>
        </ScrollReveal>

        {/* PALVELUT */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 100}>
              <div className="group rounded-xl p-5 md:p-6 h-full border border-gray-200 bg-white hover:border-blue-600/40 hover:shadow-md hover:shadow-blue-100/50 transition-all duration-300">

                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 md:mb-5 transition-colors duration-300 group-hover:bg-blue-600">
                  {/* Icon placeholder */}
                </div>

                <h3 className="font-serif text-[18px] md:text-[20px] text-black mb-2">
                  {s.title}
                </h3>

                <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* KOTITALOUSVÄHENNYS */}
        <ScrollReveal delay={400}>
          <div className="mt-12 md:mt-16 flex items-start gap-4 md:gap-5 bg-gray-100 rounded-xl p-5 md:p-6 max-w-xl mx-auto">

            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
              {/* Icon placeholder */}
            </div>

            <div>
              <p className="font-serif text-[16px] md:text-[18px] text-black mb-1">
                Kotitalousvähennys
              </p>

              <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed">
                Muista hyödyntää verottajan tarjoama kotitalousvähennys työn osuudesta.
              </p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Services;