'use client';
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import ScrollReveal from "../components/ScrollReveal";

export default function TietosuojaPage() {
  return (
    <div className="bg-white">
      <main className="min-h-screen flex flex-col justify-between">
        <Header />
        
        <div className="flex-grow container mx-auto px-6 py-16 md:py-24 max-w-4xl">
          <ScrollReveal>
            <p className="text-[11px] md:text-[13px] font-semibold font-sans text-[#0049D0] mb-3 uppercase tracking-wide">
              Tietoturva & Luottamus
            </p>
            <h1 className="font-serif text-[32px] md:text-[48px] leading-tight text-slate-900 mb-10">
              Tietosuojaseloste
            </h1>
          </ScrollReveal>

          <ScrollReveal className="space-y-12 text-slate-700">
            {/* KOHTA 1 */}
            <section>
              <h2 className="font-serif text-[20px] md:text-[24px] text-slate-900 mb-4">
                1. Rekisterinpitäjä
              </h2>
              <div className="font-sans text-[15px] md:text-[17px] space-y-1">
                <p className="font-semibold text-slate-900">Salaojaexpertit Oy</p>
                <p>Y-tunnus: 3602049-2</p>
                <p>Sähköposti: info@salaojaexpertit.fi</p>
              </div>
            </section>

            {/* KOHTA 2 */}
            <section>
              <h2 className="font-serif text-[20px] md:text-[24px] text-slate-900 mb-4">
                2. Kerättävät tiedot
              </h2>
              <p className="font-sans text-[15px] md:text-[17px] mb-4">
                Keräämme verkkosivustomme yhteydenottolomakkeen kautta seuraavia tietoja:
              </p>
              <ul className="space-y-2 font-sans text-[15px] md:text-[17px]">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#0049D0] rounded-full"></div>
                  Nimi
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#0049D0] rounded-full"></div>
                  Sähköpostiosoite
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#0049D0] rounded-full"></div>
                  Puhelinnumero
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#0049D0] rounded-full"></div>
                  Viestin sisältö (esim. kohdetiedot)
                </li>
              </ul>
            </section>

            {/* KOHTA 3 */}
            <section>
              <h2 className="font-serif text-[20px] md:text-[24px] text-slate-900 mb-4">
                3. Tietojen käsittelyn tarkoitus
              </h2>
              <p className="font-sans text-[15px] md:text-[17px] leading-relaxed">
                Tietoja käytetään ainoastaan yhteydenottopyyntöihin vastaamiseen, tarjousten tekemiseen 
                sekä asiakassuhteen hoitamiseen. Tietoja ei käytetä suoramarkkinointiin ilman erillistä 
                suostumusta, eikä niitä koskaan myydä kolmansille osapuolille.
              </p>
            </section>

            {/* KOHTA 4 - 6 TIIVISTETTYNÄ TYKKIIN TYYLIIN */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-6 border-t border-slate-100">
              <section>
                <h3 className="font-serif text-[18px] text-slate-900 mb-2">Säilytysaika</h3>
                <p className="font-sans text-[14px] md:text-[15px] text-slate-600">
                  Säilytämme tietoja vain niin kauan kuin on tarpeen asiakaspalvelun tai lakisääteisten velvoitteiden täyttämiseksi.
                </p>
              </section>
              <section>
                <h3 className="font-serif text-[18px] text-slate-900 mb-2">Oikeutesi</h3>
                <p className="font-sans text-[14px] md:text-[15px] text-slate-600">
                  Sinulla on oikeus tarkistaa, korjata tai pyytää tietojesi poistamista lähettämällä sähköpostia osoitteeseen info@salaojaexpertit.fi.
                </p>
              </section>
            </div>
          </ScrollReveal>
        </div>

        <Footer />
      </main>
    </div>
  );
}