import React, { useState, useEffect } from 'react';
import { Terminal, Code, ExternalLink } from 'lucide-react';
import { datosPersonales } from '../data/data';

const Projects = ({ theme, darkMode }) => {
    const [currentProject, setCurrentProject] = useState(0);

    const nextProject = () => {
        setCurrentProject((prev) =>
            prev === datosPersonales.proyectos.length - 1 ? 0 : prev + 1
        );
    };

    useEffect(() => {
        const interval = setInterval(nextProject, 5000);
        return () => clearInterval(interval);
    }, [currentProject]);

    const goToProject = (index) => {
        setCurrentProject(index);
    };

    return (
        <section id="proyectos" className="py-12 relative">
            <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                    <Terminal className="text-purple-500" size={32} />
                    <span className={theme.gradientText}>Proyectos Destacados</span>
                </h3>
            </div>

            <div className="relative overflow-hidden p-4">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentProject * 100}%)` }}
                >
                    {datosPersonales.proyectos.map((proyecto, index) => (
                        <div key={index} className="w-full flex-shrink-0 px-4 md:px-12">
                            <a
                                href={proyecto.link}
                                className={`
                  block mx-auto max-w-4xl group p-8 rounded-3xl border transition-all duration-300 relative overflow-hidden
                  ${darkMode ? 'bg-[#111827] border-gray-800' : 'bg-white border-gray-200'}
                  hover:shadow-2xl hover:border-purple-500/30 dark:hover:border-purple-500/50
                  hover:shadow-purple-500/10
                `}
                            >
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className={`p-4 rounded-2xl group-hover:scale-110 transition-transform ${darkMode ? 'bg-purple-900/20 text-purple-400' : 'bg-purple-50 text-purple-600'}`}>
                                        <Code size={40} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className={`text-2xl font-bold transition-colors ${darkMode ? 'text-white group-hover:text-purple-400' : 'text-gray-900 group-hover:text-purple-600'}`}>
                                                {proyecto.titulo}
                                            </h4>
                                            <ExternalLink size={24} className="text-gray-400 group-hover:text-purple-500 transition-colors" />
                                        </div>
                                        <p className={`text-lg mb-6 leading-relaxed ${theme.textMuted}`}>
                                            {proyecto.descripcion}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {proyecto.tech.map((t, i) => (
                                                <span key={i} className={`
                          text-sm font-medium px-3 py-1.5 rounded-lg
                          ${darkMode ? 'bg-gray-800 text-gray-300 group-hover:bg-purple-900/30 group-hover:text-purple-300' : 'bg-gray-100 text-gray-600 group-hover:bg-purple-100 group-hover:text-purple-700'}
                        `}>
                          {t}
                        </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center gap-3 mt-8">
                {datosPersonales.proyectos.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToProject(index)}
                        className={`
              h-3 rounded-full transition-all duration-300
              ${currentProject === index
                            ? 'w-8 bg-purple-600'
                            : `w-3 ${darkMode ? 'bg-gray-700 hover:bg-purple-400' : 'bg-gray-300 hover:bg-purple-400'}`}
            `}
                        aria-label={`Ver proyecto ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;