"use client";
import { useState } from 'react';


const plans = [
  {
    id: 'starter',
    title: 'Starter',
    desc: 'Landing de 1 sección, ideal para mostrar tu negocio o perfil.',
    price: '$35.000 ARS',
    features: ['Responsive', 'Botón WhatsApp', 'Formulario funcional', 'Entrega en 3 días'],
  },
  {
    id: 'pro',
    title: 'Pro',
    desc: 'Hasta 4 secciones personalizadas para mostrar tus servicios.',
    price: '$55.000 ARS',
    features: ['Hasta 4 secciones', 'Diseño adaptable', 'Formulario + WhatsApp', 'Entrega en 5 días'],
    popular: true,
  },
  {
    id: 'premium',
    title: 'Premium',
    desc: 'Sitio completo con dominio, SEO y más secciones.',
    price: '$75.000 ARS',
    features: ['Hasta 6 secciones', 'Dominio incluido', 'Email personalizado', 'SEO y entrega en 7 días'],
  },
];

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <section id="planes" className="px-6 py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Planes disponibles</h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Elegí el plan que mejor se adapte a tu negocio. Sin sorpresas, con todo lo que necesitás para empezar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {plans.map((plan) => {
          const isSelected = selectedPlan === plan.id;
          return (
            <div
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setSelectedPlan(plan.id); }}
              className={`cursor-pointer rounded-xl p-8 flex flex-col items-center text-center border transition-shadow duration-300
                ${
                  isSelected
                    ? 'border-indigo-600 bg-white shadow-lg'
                    : 'border-gray-200 bg-white hover:shadow-md'
                }
              `}
            >
              <h3 className="text-xl font-semibold mb-4">
                {plan.title}
                {plan.popular && (
                  <span className="ml-2 px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                    Más popular
                  </span>
                )}
              </h3>
              <p className="mb-6 text-gray-600 flex-grow">{plan.desc}</p>
              <p className="text-3xl font-extrabold text-gray-900 mb-8">{plan.price}</p>
              <ul className="text-sm mb-8 list-disc list-inside text-left max-w-xs">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <a
                href="https://wa.me/549XXXXXXXXXX"
                onClick={(e) => !isSelected && e.preventDefault()}
                className={`inline-block px-8 py-3 rounded-lg shadow transition
                  ${isSelected
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none'
                  }
                `}
              >
                Elegir plan
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
