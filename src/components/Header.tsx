'use client';
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para agregar sombra más marcada
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Cerrar menú al hacer click en un link móvil
  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-lg' : 'shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 md:px-6 py-5 md:py-4">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center space-x-2 text-indigo-600 font-extrabold text-2xl"
            aria-label="Inicio"
          >
            {/* Ícono simple */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6" />
            </svg>
            <span>TuLogo</span>
          </a>

          {/* Menú escritorio */}
          <nav className="hidden md:flex space-x-10 text-gray-700 font-semibold tracking-wide text-lg">
            {['inicio', 'caracteristicas', 'planes', 'Nosotros',  'contacto'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="relative group hover:text-indigo-600 transition"
              >
                <span className="capitalize">{section === 'planes' ? 'Precios' : section}</span>
                {/* Underline animado */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Botón menú móvil */}
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="md:hidden focus:outline-none text-gray-700"
          >
            {isOpen ? (
              <HiX size={28} className="transition-transform duration-300" />
            ) : (
              <HiMenu size={28} className="transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Menú móvil - overlay + menu */}
        {isOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <nav
              id="mobile-menu"
              className="fixed top-[60px] left-0 right-0 bg-white shadow-lg z-50 py-6 px-8 space-y-6 text-center font-semibold text-gray-700 text-lg rounded-b-xl"
            >
              {['inicio', 'caracteristicas', 'planes', 'Nosotros',  'contacto'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={handleLinkClick}
                  className="block capitalize hover:text-indigo-600 transition"
                >
                  {section === 'planes' ? 'Precios' : section}
                </a>
              ))}
            </nav>
          </>
        )}
      </header>
    </>
  );
}
