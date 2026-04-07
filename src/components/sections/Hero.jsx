import React from "react";
import { empresa } from "../../data";
import FadeInSection from "../ui/FadeInSection";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="bg-gradient-to-r from-[#0077B6] to-[#00B4D8] text-white py-24"
    >
      <div className="container mx-auto px-4 text-center">
        <FadeInSection>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            TU SALUD DEPENDE
            <br />
            DEL AGUA QUE TOMAS
          </h1>
        </FadeInSection>
        <FadeInSection delay={200}>
          <p className="text-xl md:text-2xl mt-4">
            {empresa.esloganSecundario}
          </p>
        </FadeInSection>
        <FadeInSection delay={400}>
          <div className="mt-8 flex gap-4 justify-center">
            <a
              href={`https://wa.me/58${empresa.telefono}`}
              target="_blank"
              className="bg-white text-[#0077B6] px-6 py-3 rounded-lg font-semibold"
            >
              📲 Solicitar Delivery
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Hero;
