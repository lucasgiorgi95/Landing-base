export default function ContactCTA() {
  return (
    <section id="contact" className="bg-indigo-900 py-24 px-6 text-center text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-6 leading-tight">
          ¿Listo para llevar tu negocio al siguiente nivel?
        </h2>
        <p className="mb-10 text-lg max-w-xl mx-auto">
          Contáctanos hoy mismo y descubre cómo podemos ayudarte a crecer con un sitio web profesional, rápido y efectivo.
        </p>
        <a
          href="mailto:tunegocio@email.com"
          className="inline-block bg-white text-indigo-600 font-semibold px-10 py-4 rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          Contactar Ahora
        </a>
      </div>
    </section>
  );
}
