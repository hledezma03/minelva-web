import React from "react";
import { empresa } from "../../data";
import FadeInSection from "../ui/FadeInSection";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center text-white"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay oscuro para que el texto se lea mejor */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <FadeInSection>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            TU SALUD DEPENDE
            <br />
            DEL AGUA QUE TOMAS
          </h1>
        </FadeInSection>

        <FadeInSection delay={200}>
          <p className="text-xl md:text-2xl mt-6 text-blue-100">
            {empresa.esloganSecundario}
          </p>
        </FadeInSection>

        <FadeInSection delay={400}>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/58${empresa.telefono}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0077B6] hover:bg-[#005f8f] px-8 py-3 rounded-lg font-semibold transition text-white"
            >
              📲 Solicitar Delivery
            </a>
            <a
              href="#productos"
              className="border-2 border-white hover:bg-white hover:text-[#0077B6] px-8 py-3 rounded-lg font-semibold transition"
            >
              Ver Productos
            </a>
          </div>
        </FadeInSection>

        <FadeInSection delay={600}>
          <div className="mt-12 flex flex-wrap gap-6 justify-center text-sm text-blue-200">
            <span className="flex items-center gap-2">
              💧 Agua de manantial
            </span>
            <span className="flex items-center gap-2">🚫 Libre de sodio</span>
            <span className="flex items-center gap-2">🚚 Delivery activo</span>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Hero;
