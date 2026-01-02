import React, { useState } from 'react';
import { Mail, Check, Copy, Send } from 'lucide-react';
import { datosPersonales } from '../data/data';

const Contact = ({ theme, darkMode }) => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(datosPersonales.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contacto" className="py-24">
            <div className={`max-w-4xl mx-auto rounded-3xl p-8 md:p-12 border relative overflow-hidden ${theme.cardBg}`}>
                <div className="relative z-10 flex flex-col items-center text-center mb-10">
                    <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 mb-6">
                        <Mail size={32} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Tienes un proyecto en mente?</h2>
                    <p className={`text-lg max-w-xl mx-auto ${theme.textMuted}`}>
                        Actualmente estoy disponible para unirme a nuevos equipos y colaborar en proyectos desafiantes. ¡Hagamos que suceda!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-start">
                    {/* Información de Contacto */}
                    <div className="flex flex-col gap-6 text-center md:text-left">
                        <div>
                            <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Contáctame</h3>
                            <p className={`text-sm ${theme.textMuted}`}>
                                Estoy lista para escuchar tus ideas. Envíame un mensaje y te responderé lo antes posible.
                            </p>
                        </div>
                        
                        <div className="flex flex-col gap-4">
                            <div className={`p-4 rounded-xl border flex items-center gap-4 ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                                <Mail className="text-purple-500" size={24} />
                                <div className="flex-1 text-left">
                                    <p className={`text-xs font-semibold uppercase tracking-wider ${theme.textMuted}`}>Email</p>
                                    <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{datosPersonales.email}</p>
                                </div>
                                <button onClick={handleCopyEmail} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors" title="Copiar email">
                                    {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} className="text-gray-400" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    <form action="https://formspree.io/f/mojqbwqq" method="POST" className="flex flex-col gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Tu Nombre" 
                                required 
                                className={`w-full p-4 rounded-xl border outline-none transition-all focus:ring-2 focus:ring-purple-500/50 ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'}`}
                            />
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Tu Email" 
                                required 
                                className={`w-full p-4 rounded-xl border outline-none transition-all focus:ring-2 focus:ring-purple-500/50 ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'}`}
                            />
                        </div>
                        <textarea 
                            name="message" 
                            rows="4" 
                            placeholder="¿Cómo puedo ayudarte?" 
                            required 
                            className={`w-full p-4 rounded-xl border outline-none transition-all focus:ring-2 focus:ring-purple-500/50 resize-none ${darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'}`}
                        ></textarea>
                        
                        <button type="submit" className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                            <Send size={20} />
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;