import React from "react";
import { empresa } from "../../data";

const Header = () => {
  return (
    <header className="bg-[#0077B6] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-[#0077B6] text-xl font-bold">M</span>
          </div>
          <div>
            <div className="font-bold text-lg">Minelva</div>
            <div className="text-xs text-blue-200">Los Morros C.A.</div>
          </div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#inicio" className="hover:text-[#00B4D8]">
            Inicio
          </a>
          <a href="#servicios" className="hover:text-[#00B4D8]">
            Servicios
          </a>
          <a href="#productos" className="hover:text-[#00B4D8]">
            Productos
          </a>
          <a href="#contacto" className="hover:text-[#00B4D8]">
            Contacto
          </a>
        </nav>
        <a
          href={`https://wa.me/58${empresa.telefono}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex bg-green-600 px-4 py-2 rounded-lg text-sm hover:bg-green-700"
        >
          📲 WhatsApp
        </a>
      </div>
    </header>
  );
};

export default Header;
