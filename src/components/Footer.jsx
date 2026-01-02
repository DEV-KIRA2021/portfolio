import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { datosPersonales } from '../data/data';

const Footer = ({ theme, darkMode }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`py-12 border-t ${darkMode ? 'bg-gray-950 border-gray-800' : 'bg-slate-50 border-purple-100'}`}>
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            {datosPersonales.nombre}
                        </h3>
                        <p className={`text-sm leading-relaxed ${theme.textMuted}`}>
                            Desarrolladora apasionada por crear soluciones digitales innovadoras y eficientes.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <h4 className={`font-semibold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                            Explorar
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#inicio" className={`hover:text-purple-500 transition-colors ${theme.textMuted}`}>Inicio</a></li>
                            <li><a href="#experiencia" className={`hover:text-purple-500 transition-colors ${theme.textMuted}`}>Experiencia</a></li>
                            <li><a href="#proyectos" className={`hover:text-purple-500 transition-colors ${theme.textMuted}`}>Proyectos</a></li>
                            <li><a href="#contacto" className={`hover:text-purple-500 transition-colors ${theme.textMuted}`}>Contacto</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center md:items-end text-center md:text-right">
                        <h4 className={`font-semibold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                            Sígueme
                        </h4>
                        <div className="flex gap-4 mb-4">
                            <a href={datosPersonales.links.github} target="_blank" rel="noreferrer" className={`transition-colors hover:text-purple-500 ${theme.textMuted}`}>
                                <Github size={22} />
                            </a>
                            <a href={datosPersonales.links.linkedin} target="_blank" rel="noreferrer" className={`transition-colors hover:text-purple-500 ${theme.textMuted}`}>
                                <Linkedin size={22} />
                            </a>
                            <a href={`mailto:${datosPersonales.email}`} className={`transition-colors hover:text-purple-500 ${theme.textMuted}`}>
                                <Mail size={22} />
                            </a>
                        </div>
                        <p className={`text-sm ${theme.textMuted}`}>
                            {datosPersonales.email}
                        </p>
                    </div>
                </div>

                <div className={`pt-8 border-t text-center text-sm ${darkMode ? 'border-gray-800 text-gray-500' : 'border-gray-200 text-gray-500'}`}>
                    <p>&copy; {currentYear} Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;