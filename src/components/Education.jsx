import React from 'react';
import { GraduationCap } from 'lucide-react';
import { datosPersonales } from '../data/data';

const Education = ({ theme, darkMode }) => {
    return (
        <section id="educacion" className="py-12">
            <div className="mb-10 text-center md:text-left">
                <h3 className="text-3xl font-bold flex items-center justify-center md:justify-start gap-3">
                    <GraduationCap className="text-purple-500" size={28} />
                    Formación Académica
                </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {datosPersonales.educacion.map((edu, index) => (
                    <div key={index} className={`
            relative p-8 rounded-2xl border overflow-hidden group
            ${darkMode ? 'bg-[#111827] border-gray-800' : 'bg-white border-gray-100'}
            hover:border-purple-500/30 hover:shadow-lg transition-all
          `}>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150"></div>

                        <div className="relative z-10">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                                <div>
                                    <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{edu.institucion}</h4>
                                    <p className={`font-medium text-lg ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>{edu.titulo}</p>
                                </div>
                                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full border w-fit ${darkMode ? 'bg-purple-900/30 text-purple-300 border-purple-800' : 'bg-purple-100 text-purple-700 border-purple-200'}`}>
                  {edu.estado}
                </span>
                            </div>

                            <p className={`text-sm mb-4 flex items-center gap-2 ${theme.textMuted}`}>
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                                {edu.periodo}
                            </p>

                            <p className={`text-base leading-relaxed ${theme.textMuted}`}>
                                {edu.descripcion}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;