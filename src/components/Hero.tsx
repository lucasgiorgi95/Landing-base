// components/Hero.jsx
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div className="text-left">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Sitios web profesionales, rápidos y efectivos
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-md">
            Diseños modernos listos en 3 días. Tu presencia online sin complicaciones, desde $35.000 ARS.
          </p>
          <a
            href="https://wa.me/549XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg shadow hover:bg-gray-800 transition"
          >
            Solicitar por WhatsApp
          </a>
        </div>

        {/* Imagen */}
        <div className="flex justify-center">
          <Image
            src="/hero.jpg"
            alt="Mockup sitio web"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
