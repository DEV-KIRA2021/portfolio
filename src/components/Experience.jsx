import React from 'react';
import { Briefcase } from 'lucide-react';
import { datosPersonales } from '../data/data';

const Experience = ({ theme, darkMode }) => {
    return (
        <section id="experiencia" className="py-12 relative">
            <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                    <Briefcase className="text-purple-500" size={32} />
                    <span className={theme.gradientText}>Trayectoria Profesional</span>
                </h3>
                <p className={`max-w-2xl mx-auto ${theme.textMuted}`}>
                    Mi camino construyendo software de alto impacto.
                </p>
            </div>

            <div className="max-w-3xl mx-auto px-4">
                <div className="space-y-12 relative">
                    <div className="absolute left-[27px] md:left-[27px] top-2 bottom-4 w-0.5 bg-gradient-to-b from-purple-500 via-purple-500/20 to-transparent"></div>

                    {datosPersonales.experiencia.map((exp, index) => (
                        <div key={index} className="relative pl-16 group">
                            <div className={`
                absolute left-[19px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 z-10
                ${darkMode ? 'bg-gray-900 border-purple-500' : 'bg-white border-purple-500'}
                group-hover:scale-125 group-hover:bg-purple-500 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.6)]
              `}></div>

                            <div className={`
                p-6 rounded-2xl border transition-all duration-300
                ${darkMode ? 'bg-[#111827] border-gray-800' : 'bg-white border-gray-100'}
                group-hover:-translate-x-1 group-hover:-translate-y-1
                group-hover:shadow-lg group-hover:border-purple-500/30 dark:group-hover:shadow-purple-900/10
              `}>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h4 className={`text-xl font-bold transition-colors ${darkMode ? 'text-white group-hover:text-purple-400' : 'text-gray-900 group-hover:text-purple-600'}`}>
                                        {exp.rol}
                                    </h4>
                                    <span className={`text-sm font-semibold px-3 py-1 rounded-full border ${darkMode ? 'bg-purple-900/30 text-purple-300 border-purple-800' : 'bg-purple-100 text-purple-700 border-purple-200'}`}>
                    {exp.periodo}
                  </span>
                                </div>
                                <p className={`text-base font-medium mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    {exp.empresa}
                                </p>
                                <p className={`text-sm leading-relaxed ${theme.textMuted}`}>
                                    {exp.descripcion}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;