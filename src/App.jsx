import React from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Gallery from "./components/sections/Gallery";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Gallery /> {/* ← Nueva sección */}
      <Contact />
      <Footer />
      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/5804120336537"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition z-50"
      >
        💬
      </a>
    </div>
  );
}

export default App;
