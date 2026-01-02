import React from 'react';
import { Code } from 'lucide-react';
import { datosPersonales } from '../data/data';

const Skills = ({ theme, darkMode }) => {
    return (
        <section id="habilidades" className="py-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 justify-center md:justify-start">
                <Code className="text-purple-500" /> Stack Tecnológico
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {datosPersonales.habilidades.map((skill, index) => (
                    <div key={index} className={`
            group flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 cursor-default
            ${darkMode 
                ? 'bg-[#111827] border-gray-800 text-gray-200' 
                : 'bg-white border-gray-200 text-gray-700 shadow-sm'
            }
            hover:-translate-y-1 hover:shadow-md
            hover:border-purple-500/30 dark:hover:border-purple-500/50
          `}>
                        <div className={`
              p-3 rounded-lg transition-all duration-300 border
              ${darkMode 
                ? 'bg-purple-900/20 border-purple-500/20 text-purple-400'
                : 'bg-purple-50 border-purple-100 text-purple-600'
              }
              group-hover:bg-purple-600 group-hover:text-white group-hover:border-transparent
              group-hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]
            `}>
                            <skill.icon size={24} />
                        </div>
                        <div className="flex flex-col">
              <span className={`font-semibold text-sm transition-colors ${darkMode ? 'group-hover:text-purple-300' : 'group-hover:text-purple-700'}`}>
                {skill.name}
              </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;