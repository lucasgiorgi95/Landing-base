const Pricing = () => {
  return (
    <section id="planes" className="px-6 py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Planes disponibles</h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Elegí el plan que mejor se adapte a tu negocio. Sin sorpresas, con todo lo que necesitás para empezar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Starter */}
        <div className="bg-white rounded-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2">
            <span className="text-green-600">🟢</span> Starter
          </h3>
          <p className="mb-6 text-gray-600 flex-grow">
            Landing de 1 sección, ideal para mostrar tu negocio o perfil.
          </p>
          <p className="text-3xl font-extrabold text-gray-900 mb-8">$35.000 ARS</p>
          <ul className="text-sm mb-8 list-disc list-inside text-left max-w-xs">
            <li>Responsive</li>
            <li>Botón WhatsApp</li>
            <li>Formulario funcional</li>
            <li>Entrega en 3 días</li>
          </ul>
          <a
            href="https://wa.me/549XXXXXXXXXX"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg shadow hover:bg-gray-800 transition"
          >
            Elegir plan
          </a>
        </div>

        {/* Pro */}
        <div className="bg-white rounded-xl p-8 flex flex-col items-center text-center border-2 border-blue-600 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2">
            <span className="text-yellow-500">🟡</span> Pro
            <span className="ml-2 px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
              Más popular
            </span>
          </h3>
          <p className="mb-6 text-gray-600 flex-grow">
            Hasta 4 secciones personalizadas para mostrar tus servicios.
          </p>
          <p className="text-3xl font-extrabold text-gray-900 mb-8">$55.000 ARS</p>
          <ul className="text-sm mb-8 list-disc list-inside text-left max-w-xs">
            <li>Hasta 4 secciones</li>
            <li>Diseño adaptable</li>
            <li>Formulario + WhatsApp</li>
            <li>Entrega en 5 días</li>
          </ul>
          <a
            href="https://wa.me/549XXXXXXXXXX"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg shadow hover:bg-gray-800 transition"
          >
            Elegir plan
          </a>
        </div>

        {/* Premium */}
        <div className="bg-white rounded-xl p-8 flex flex-col items-center text-center border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2">
            <span className="text-red-600">🔴</span> Premium
          </h3>
          <p className="mb-6 text-gray-600 flex-grow">
            Sitio completo con dominio, SEO y más secciones.
          </p>
          <p className="text-3xl font-extrabold text-gray-900 mb-8">$75.000 ARS</p>
          <ul className="text-sm mb-8 list-disc list-inside text-left max-w-xs">
            <li>Hasta 6 secciones</li>
            <li>Dominio incluido</li>
            <li>Email personalizado</li>
            <li>SEO y entrega en 7 días</li>
          </ul>
          <a
            href="https://wa.me/549XXXXXXXXXX"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg shadow hover:bg-gray-800 transition"
          >
            Elegir plan
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
