import Image from 'next/image';

const Hero = () => {
  return (
    <section id='home' className="bg-gray-50 py-32 px-6"> {/* Más alto */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div className="text-left">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight"> {/* Texto más grande */}
            Sitios web profesionales, rápidos y efectivos
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-md"> {/* Párrafo más grande */}
            Diseños modernos listos en 3 días. Tu presencia online sin complicaciones, desde $35.000 ARS.
          </p>
          <a
            href="https://wa.me/549XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 text-white px-10 py-4 rounded-lg shadow hover:bg-indigo-700 transition" /* Botón más grande */
          >
            Solicitar por WhatsApp
          </a>
        </div>

        {/* Imagen */}
        <div className="flex justify-center">
          <Image
            src="/hero.jpg"
            alt="Mockup sitio web"
            width={700} /* Imagen más grande */
            height={466} 
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
