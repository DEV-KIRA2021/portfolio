import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { datosPersonales } from '../data/data';

const Navbar = ({ darkMode, toggleTheme, theme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Habilidades', href: '#habilidades' },
        { name: 'Experiencia', href: '#experiencia' },
        { name: 'Proyectos', href: '#proyectos' },
        { name: 'Contacto', href: '#contacto' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 border-b backdrop-blur-md transition-colors duration-300 ${darkMode ? 'bg-gray-950/80 border-gray-800' : 'bg-white/80 border-purple-100'}`}>
            <div className="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center">
                <a href="#inicio" className={`text-lg font-bold tracking-tight ${theme.gradientText}`}>
                    {datosPersonales.nombre.split(' ')[0]}.dev
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className={`text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400 ${theme.textMuted}`}>
                            {link.name}
                        </a>
                    ))}
                    <button onClick={toggleTheme} className={`p-2 rounded-full border transition-all ${darkMode ? 'border-gray-700 hover:bg-gray-800 text-yellow-400' : 'border-purple-100 hover:bg-purple-50 text-purple-700'}`}>
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                </div>

                <div className="md:hidden flex items-center gap-4">
                    <button onClick={toggleTheme} className={`p-2 rounded-full border transition-all ${darkMode ? 'border-gray-700 text-yellow-400' : 'border-purple-100 text-purple-700'}`}>
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 ${theme.textMain}`}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className={`md:hidden absolute w-full border-b ${darkMode ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-100'}`}>
                    <div className="flex flex-col px-6 py-4 space-y-4">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className={`text-sm font-medium ${theme.textMuted} hover:text-purple-500`}>
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;