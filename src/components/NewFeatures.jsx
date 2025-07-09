// components/Features.jsx
import {
  FaRocket,
  FaMobileAlt,
  FaShieldAlt,
  FaCogs,
} from 'react-icons/fa';

export default function Features() {
  const features = [
    {
      icon: <FaRocket className="text-gray-900 text-3xl" />,
      title: 'Velocidad profesional',
      desc: 'Tu sitio carga en segundos. Optimizado para que nadie abandone la página.',
    },
    {
      icon: <FaMobileAlt className="text-gray-900 text-3xl" />,
      title: 'Diseño adaptable',
      desc: 'Compatible con celulares, tablets y computadoras. Siempre visible y funcional.',
    },
    {
      icon: <FaShieldAlt className="text-gray-900 text-3xl" />,
      title: 'Seguridad y estabilidad',
      desc: 'Protección de datos y estructura robusta para evitar errores o caídas.',
    },
    {
      icon: <FaCogs className="text-gray-900 text-3xl" />,
      title: 'Fácilmente personalizable',
      desc: 'Cada parte puede adaptarse a tu marca y tus objetivos.',
    },
  ];

  return (
    <section id="features" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Título centrado */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            ¿Qué incluye tu sitio?
          </h2>
          <p className="text-lg text-gray-700">
            Cada landing está diseñada para ser rápida, atractiva y enfocada en resultados. Estas son las características principales:
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex-shrink-0 mt-1">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700 text-base">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
