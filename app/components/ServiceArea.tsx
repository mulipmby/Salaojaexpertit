'use client';
import ScrollReveal from "./ScrollReveal";

const cities = [
  "Varkaus","Leppävirta","Juva","Joroinen","Pieksämäki","Rantasalmi",
  "Sulkava","Savonlinna","Kuopio","Joensuu","Iisalmi","Lapinlahti",
  "Kiuruvesi","Vieremä","Pielavesi","Tervo","Vesanto","Tuusniemi",
  "Suonenjoki","Riistavesi","Outokumpu","Liperi",
];

const ServiceArea = () => {
  return (
    <section id="toimialue" className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* OTSIKKO */}
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-12 max-w-xl mx-auto">

            <span className="text-[11px] md:text-[13px] font-semibold tracking-widest uppercase text-gray-500 mb-3 block">
              Toimialue
            </span>

            <h2 className="font-serif text-[28px] md:text-[36px] lg:text-[40px] text-black mb-3">
              Koko Savo-Karjalan alue
            </h2>

            <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed">
              Toimimme erityisesti Varkaudessa ja Leppävirralla, mutta palvelemme laajasti lähikunnissa.
            </p>
          </div>
        </ScrollReveal>

        {/* KAUPUNGIT */}
        <ScrollReveal delay={150}>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {cities.map((city) => (
              <span
                key={city}
                className="px-3 py-1.5 md:px-4 md:py-2 rounded-md bg-gray-100 text-gray-700 text-[13px] md:text-[14px] font-medium transition-all duration-200 hover:bg-blue-600 hover:text-white"
              >
                {city}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* LISÄTEKSTI */}
        <ScrollReveal delay={300}>
          <p className="text-center text-gray-500 text-[13px] md:text-[14px] mt-6 md:mt-8">
            Tarvittaessa tulemme myös muihin kohteisiin.
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default ServiceArea;