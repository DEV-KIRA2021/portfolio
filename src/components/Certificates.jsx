import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { datosPersonales } from '../data/data';

const Certificates = ({ theme, darkMode }) => {
    return (
        <section className="py-12">
            <div className="mb-10 text-center md:text-left">
                <h3 className="text-3xl font-bold flex items-center justify-center md:justify-start gap-3">
                    <Award className="text-purple-500" size={28} />
                    Certificaciones & Logros
                </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {datosPersonales.certificados.map((cert, index) => (
                    <a
                        key={index}
                        href={cert.link}
                        target="_blank"
                        rel="noreferrer"
                        className={`
              flex items-start gap-4 p-5 rounded-xl border transition-all h-full
              ${darkMode ? 'bg-[#111827] border-gray-800' : 'bg-white border-gray-100'}
              hover:border-purple-500 hover:shadow-md hover:-translate-y-1 group
            `}
                    >
                        <div className={`mt-1 p-3 rounded-lg transition-colors ${darkMode ? 'bg-purple-900/20 text-purple-400 group-hover:bg-purple-600 group-hover:text-white' : 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white'}`}>
                            <Award size={24} />
                        </div>

                        <div className="flex-1">
                            <h4 className={`font-bold text-base mb-1 transition-colors ${darkMode ? 'text-white group-hover:text-purple-400' : 'text-gray-900 group-hover:text-purple-600'}`}>
                                {cert.nombre}
                            </h4>
                            <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {cert.emisor}
                            </p>
                            <p className={`text-xs mt-2 ${theme.textMuted}`}>
                                Expedición: {cert.fecha}
                            </p>
                        </div>

                        <ExternalLink size={16} className="text-gray-300 group-hover:text-purple-500 opacity-0 group-hover:opacity-100 transition-all self-start" />
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Certificates;