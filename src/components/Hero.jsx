import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { datosPersonales } from '../data/data';

const Hero = ({ theme, darkMode }) => {
    return (
        <header id="inicio" className="text-center py-20 md:py-32 relative overflow-hidden">
            {/* Estilos para las animaciones personalizadas */}
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }
                @keyframes pulse-glow {
                    0%, 100% { opacity: 0.4; transform: scale(1); }
                    50% { opacity: 0.6; transform: scale(1.1); }
                }
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-pulse-glow {
                    animation: pulse-glow 4s ease-in-out infinite;
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                    opacity: 0;
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>

            {/* Fondo con patrón de cuadrícula y Orbes Ambientales */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                {/* Grid */}
                <div className={`absolute h-full w-full ${darkMode ? 'bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]' : 'bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]'} bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]`}></div>
                
                {/* Orbes flotantes */}
                <div className={`absolute top-0 -left-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob ${darkMode ? 'bg-purple-700' : 'bg-purple-300'}`}></div>
                <div className={`absolute top-0 -right-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 ${darkMode ? 'bg-indigo-700' : 'bg-indigo-300'}`}></div>
                <div className={`absolute -bottom-8 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 ${darkMode ? 'bg-pink-700' : 'bg-pink-300'}`}></div>
            </div>

            <div className="mb-8 relative inline-block animate-float">
                {/* Resplandor con efecto de respiración */}
                <div className={`absolute inset-0 rounded-3xl blur-2xl animate-pulse-glow ${darkMode ? 'bg-purple-600' : 'bg-purple-400'} -inset-1`}></div>
                <img 
                    src={datosPersonales.foto} 
                    alt={datosPersonales.nombre} 
                    className={`relative w-48 h-48 md:w-60 md:h-60 rounded-3xl object-cover border-4 shadow-2xl ${darkMode ? 'border-gray-800' : 'border-white'}`} 
                />
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight relative z-10">
                <span className={theme.gradientText}>
                    {datosPersonales.titulo}
                </span>
            </h1>
            <p className={`text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl mx-auto relative z-10 ${theme.textMuted}`}>
                {datosPersonales.resumen}
            </p>

            <div className="flex justify-center gap-5 relative z-10">
                {[
                    { icon: Github, link: datosPersonales.links.github, label: 'Github' },
                    { icon: Linkedin, link: datosPersonales.links.linkedin, label: 'LinkedIn' },
                    { icon: Mail, link: `mailto:${datosPersonales.email}`, label: 'Email' },
                ].map((item, index) => (
                    <a 
                        key={index} 
                        href={item.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        aria-label={item.label} 
                        className={`p-4 rounded-2xl border-2 transition-all duration-300 group hover:-translate-y-1 animate-fade-in-up ${darkMode ? 'border-gray-700 bg-gray-800/50 hover:border-purple-500 hover:text-purple-400' : 'border-purple-100 bg-white shadow-sm hover:border-purple-400 hover:shadow-md hover:text-purple-700'} ${theme.textMuted}`}
                        style={{ animationDelay: `${index * 150 + 500}ms` }}
                    >
                        <item.icon size={26} className="group-hover:scale-110 transition-transform" />
                    </a>
                ))}
            </div>
        </header>
    );
};

export default Hero;