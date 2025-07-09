export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
          Sobre Nosotros
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed mb-6">
          Somos un equipo apasionado dedicado a crear soluciones digitales que potencian tu negocio.
          Nuestro objetivo es brindarte herramientas innovadoras, fáciles de usar y adaptadas a tus necesidades.
          Con años de experiencia en desarrollo web, diseño y marketing digital, estamos listos para acompañarte en tu crecimiento.
        </p>
        {/* Opcional: frase inspiradora */}
        <p className="text-indigo-600 font-semibold italic text-lg max-w-xl mx-auto">
          “Transformamos ideas en resultados reales para tu empresa.”
        </p>
      </div>
    </section>
  );
}
