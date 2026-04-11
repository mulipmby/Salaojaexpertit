'use client';
import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const InputField = ({
  label,
  value,
  onChange,
  placeholder,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) => (
  <div className="flex flex-col">
    <label className="text-[12px] md:text-[13px] font-medium text-black mb-1">
      {label}
    </label>

    <input
      type="text"
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="border border-gray-300 rounded-lg p-3 md:p-4 text-black text-[14px] md:text-[15px] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    />
  </div>
);

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="yhteystiedot" className="scroll-mt-24 py-20 md:py-24 bg-[#F3F5F6]">
      <div className="max-w-6xl mx-auto px-6">

        {/* OTSIKKO */}
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-16 max-w-xl mx-auto">

            <h2 className="font-serif text-[28px] md:text-[36px] lg:text-[40px] text-black mb-3">
              Pyydä maksuton arviokäynti
            </h2>

            <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed">
              Tulemme paikan päälle tarkastamaan kiinteistösi tilanteen ja annamme selkeän, kiinteähintaisen tarjouksen.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-10 md:gap-12 max-w-5xl mx-auto">

          {/* YHTEYSTIEDOT */}
          <ScrollReveal className="lg:col-span-2">
            <div className="space-y-6">

              <h3 className="font-serif text-[18px] md:text-xl text-black">
                Ota yhteyttä
              </h3>

              <div className="space-y-5 text-gray-700">

                <a href="tel:044335253" className="block hover:text-blue-600 transition">
                  <p className="font-semibold text-[14px] text-black">Mikael Tissari</p>
                  <p className="text-[13px] md:text-sm">044 335 253</p>
                </a>

                <a href="tel:04578749401" className="block hover:text-blue-600 transition">
                  <p className="font-semibold text-[14px] text-black">Samu Kauhanen</p>
                  <p className="text-[13px] md:text-sm">045 787 49401</p>
                </a>

                <a href="mailto:info@salaojaexpertit.fi" className="block hover:text-blue-600 transition">
                  <p className="font-semibold text-[14px] text-black">Sähköposti</p>
                  <p className="text-[13px] md:text-sm">info@salaojaexpertit.fi</p>
                </a>

                <div>
                  <p className="font-semibold text-[14px] text-black">Kotipaikka</p>
                  <p className="text-[13px] md:text-sm text-gray-700">
                    Leppävirta | Savo ja Karjala
                  </p>
                </div>

              </div>
            </div>
          </ScrollReveal>

          {/* LOMAKE */}
          <ScrollReveal className="lg:col-span-3" delay={150}>
            
            {/* 🔥 WRAPPER LOGOLLE */}
            <div className="relative bg-white rounded-xl p-5 md:p-8 shadow-sm border border-gray-200 overflow-hidden">

              {/* LOGO TAUSTALLE */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Image
                  src="/logo-valkoinen.jpeg"
                  alt="Logo taustalla"
                  width={300}
                  height={300}
                  className="opacity-[0.26] w-[80%] h-auto"
                />
              </div>

              {/* SISÄLTÖ PÄÄLLE */}
              <div className="relative z-10">

                {submitted ? (
                  <div className="text-center py-10 md:py-12">
                    <h3 className="font-serif text-[18px] md:text-xl mb-2 text-black">
                      Kiitos yhteydenotostasi!
                    </h3>
                    <p className="text-gray-600 text-[14px] md:text-sm">
                      Palaamme asiaan mahdollisimman pian.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">

                    <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                      <InputField
                        label="Nimi *"
                        required
                        value={form.name}
                        onChange={(v) => setForm({ ...form, name: v })}
                        placeholder="Matti Meikäläinen"
                      />
                      <InputField
                        label="Puhelinnumero *"
                        required
                        value={form.phone}
                        onChange={(v) => setForm({ ...form, phone: v })}
                        placeholder="040 123 4567"
                      />
                    </div>

                    <InputField
                      label="Sähköposti"
                      value={form.email}
                      onChange={(v) => setForm({ ...form, email: v })}
                      placeholder="matti@esimerkki.fi"
                    />

                    <div className="flex flex-col">
                      <label className="text-[12px] md:text-[13px] font-medium text-black mb-1">
                        Viesti
                      </label>

                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        placeholder="Kerro kohteestasi..."
                        className="border border-gray-300 rounded-lg p-3 md:p-4 text-black text-[14px] md:text-[15px] placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition text-[14px] md:text-base"
                    >
                      Lähetä yhteydenotto
                    </button>

                  </form>
                )}

              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default Contact;