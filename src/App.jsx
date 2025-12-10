import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Menu,
  Mail,
  Copy,
  Check,
  ExternalLink,
  Code,
  Terminal,
  Database,
  Moon,
  Sun,
  Briefcase,
} from 'lucide-react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiNestjs,
  SiTailwindcss,
  SiPostgresql,
  SiJsonwebtokens,
  SiDocker,
} from 'react-icons/si';
import { Box } from 'lucide-react'; // Icono genérico para arquitectura

// --- TUS DATOS (Puedes editarlos aquí) ---
const datosPersonales = {
  nombre: 'Kira Sayuri Patricio Uribe',
  foto: 'https://github.com/DEV-KIRA2021.png',
  titulo: 'Desarrollador Full Stack & UI Designer',
  resumen:
    'Apasionado por crear experiencias web intuitivas, escalables y visualmente impactantes. Especializado en conectar el backend robusto con interfaces de usuario modernas.',
  email: 'contacto@tuemail.com',
  links: {
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/',
  },

  // He actualizado tus habilidades basado en la imagen de tu entorno de trabajo (NestJS, TypeScript, Auth)
  habilidades: [
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'NestJS', icon: SiNestjs },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Auth (JWT)', icon: SiJsonwebtokens },
    { name: 'Arquitectura', icon: Box },
  ],
  experiencia: [
    {
      rol: 'Senior Full Stack Developer',
      empresa: 'Tech Solutions Inc.',
      periodo: '2022 - Presente',
      descripcion:
        'Diseño y desarrollo de arquitecturas escalables en NestJS. Migración del frontend a React con mejoras del 40% en rendimiento.',
    },
    {
      rol: 'Backend Developer',
      empresa: 'Agencia Digital',
      periodo: '2020 - 2022',
      descripcion:
        'Desarrollo de APIs RESTful seguras y gestión de bases de datos PostgreSQL para clientes internacionales.',
    },
  ],
  proyectos: [
    {
      titulo: 'Sistema de Gestión SaaS',
      descripcion:
        'Plataforma completa con autenticación multi-rol, pagos y dashboard en tiempo real.',
      tech: ['React', 'NestJS', 'PostgreSQL'],
      link: '#',
    },
    {
      titulo: 'API de Pagos Segura',
      descripcion:
        'Microservicio backend para procesamiento de transacciones con alta seguridad.',
      tech: ['Node.js', 'TypeScript', 'Redis'],
      link: '#',
    },
    {
      titulo: 'Portfolio Profesional',
      descripcion:
        'Este sitio web. Diseño moderno, responsivo y altamente optimizado.',
      tech: ['React', 'Tailwind CSS', 'Vite'],
      link: '#',
    },
  ],
};

// --- EL COMPONENTE PRINCIPAL CON EL NUEVO DISEÑO ---

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  // Colores temáticos: Morado principal
  const theme = {
    textMain: darkMode ? 'text-gray-100' : 'text-gray-900',
    textMuted: darkMode ? 'text-gray-400' : 'text-gray-600',
    bgMain: darkMode ? 'bg-gray-950' : 'bg-slate-50',
    cardBg: darkMode
      ? 'bg-gray-900/50 border-gray-800'
      : 'bg-white border-purple-100',
    purpleText: 'text-purple-600 dark:text-purple-400',
    purpleBgLight: 'bg-purple-50 dark:bg-gray-800',
    purpleBorder: 'border-purple-200 dark:border-purple-900/50',
    gradientText:
      'bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-indigo-400',
  };
  // Estado para el menú móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lista de enlaces (Más fácil de mantener)
  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
  ];
  // Estado para el botón de copiar correo
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(datosPersonales.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Vuelve al estado normal después de 2s
  };
  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 selection:bg-purple-200 dark:selection:bg-purple-900 ${theme.bgMain} ${theme.textMain}`}
    >
      {/* Navegación Sticky y Profesional */}
      {/* Navegación Sticky Mejorada */}
      <nav
        className={`fixed top-0 w-full z-50 border-b backdrop-blur-md transition-colors duration-300 ${
          darkMode
            ? 'bg-gray-950/80 border-gray-800'
            : 'bg-white/80 border-purple-100'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#inicio"
            className={`text-lg font-bold tracking-tight ${theme.gradientText}`}
          >
            {datosPersonales.nombre.split(' ')[0]}.dev
          </a>

          {/* Menú Escritorio (Hidden en móvil) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400 ${theme.textMuted}`}
              >
                {link.name}
              </a>
            ))}

            {/* Botón Tema (Escritorio) */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition-all ${
                darkMode
                  ? 'border-gray-700 hover:bg-gray-800 text-yellow-400'
                  : 'border-purple-100 hover:bg-purple-50 text-purple-700'
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Botón Menú Móvil (Visible solo en móvil) */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition-all ${
                darkMode
                  ? 'border-gray-700 text-yellow-400'
                  : 'border-purple-100 text-purple-700'
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 ${theme.textMain}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menú Desplegable Móvil */}
        {isMenuOpen && (
          <div
            className={`md:hidden absolute w-full border-b ${
              darkMode
                ? 'bg-gray-950 border-gray-800'
                : 'bg-white border-gray-100'
            }`}
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer click
                  className={`text-sm font-medium ${theme.textMuted} hover:text-purple-500`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section (Centrada y con impacto) */}
        {/* Hero Section (Centrada y con impacto) */}
        <header className="text-center py-20 md:py-32 relative overflow-hidden">
          {/* --- CÓDIGO NUEVO: FOTO DE PERFIL --- */}
          <div className="mb-8 relative inline-block">
            <div
              className={`absolute inset-0 rounded-full blur-xl opacity-50 ${
                darkMode ? 'bg-purple-600' : 'bg-purple-400'
              }`}
            ></div>
            <img
              src={datosPersonales.foto}
              alt={datosPersonales.nombre}
              className={`relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 shadow-2xl ${
                darkMode ? 'border-gray-800' : 'border-white'
              }`}
            />
            <div
              className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-4 border-white dark:border-gray-900"
              title="Disponible"
            ></div>
          </div>
          {/* ------------------------------------ */}

          <div className="block mb-6">
            {' '}
            {/* Envolví el badge en un div para separarlo */}
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-purple-100/80 text-purple-800 text-sm font-semibold border border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800/50 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-600"></span>
              </span>
              Disponible para nuevos retos
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
            <span className={theme.gradientText}>{datosPersonales.titulo}</span>
          </h1>

          <p
            className={`text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl mx-auto ${theme.textMuted}`}
          >
            {datosPersonales.resumen}
          </p>

          {/* Redes Sociales */}
          <div className="flex justify-center gap-5">
            {[
              {
                icon: Github,
                link: datosPersonales.links.github,
                label: 'Github',
              },
              {
                icon: Linkedin,
                link: datosPersonales.links.linkedin,
                label: 'LinkedIn',
              },
              {
                icon: Mail,
                link: `mailto:${datosPersonales.email}`,
                label: 'Email',
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className={`p-4 rounded-2xl border-2 transition-all duration-300 group hover:-translate-y-1 ${
                  darkMode
                    ? 'border-gray-700 bg-gray-800/50 hover:border-purple-500 hover:text-purple-400'
                    : 'border-purple-100 bg-white shadow-sm hover:border-purple-400 hover:shadow-md hover:text-purple-700'
                } ${theme.textMuted}`}
              >
                <item.icon
                  size={26}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
            ))}
          </div>
        </header>

        {/* Sección Stack Tecnológico - Dinámico (Día Blanco / Noche Oscuro) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {datosPersonales.habilidades.map((skill, index) => (
            <div
              key={index}
              className={`
        group flex items-center gap-3 p-4 rounded-xl border transition-all duration-300
        
        /* --- ESTILO DE DÍA (Blanco) --- */
        bg-white border-gray-200 text-gray-700 shadow-sm
        
        /* --- ESTILO DE NOCHE (Oscuro Pro) --- */
        dark:bg-[#111827] dark:border-gray-800 dark:text-gray-200
        
        /* --- INTERACCIÓN (Hover) --- */
        hover:border-purple-500 dark:hover:border-purple-500/50
        hover:shadow-lg hover:shadow-purple-500/10 dark:hover:shadow-purple-900/20
        hover:-translate-y-1
      `}
            >
              {/* Caja del Icono */}
              <div
                className={`
        p-2.5 rounded-lg transition-all duration-300 border
        
        /* Día: Fondo morado muy clarito */
        bg-purple-50 text-purple-600 border-purple-100
        
        /* Noche: Fondo oscuro transparente */
        dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-900/30
        
        /* Hover: Se pone sólido en ambos modos */
        group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600
      `}
              >
                <skill.icon size={26} />
              </div>

              {/* Nombre de la tecnología */}
              <div className="flex flex-col">
                <span className="font-semibold text-sm transition-colors group-hover:text-purple-700 dark:group-hover:text-purple-300">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 py-16">
          {/* Experiencia (Línea de tiempo) */}
          <section>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className={theme.purpleText} />
              Trayectoria
            </h3>
            <div className="space-y-8 pl-2">
              {datosPersonales.experiencia.map((exp, index) => (
                <div
                  key={index}
                  className="relative border-l-2 border-purple-200 dark:border-purple-900 pl-8 pb-4 last:pb-0"
                >
                  <div
                    className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-white dark:border-gray-950 bg-purple-600`}
                  ></div>
                  <h4 className="text-xl font-bold">{exp.rol}</h4>
                  <p className={`text-sm font-medium mb-3 ${theme.purpleText}`}>
                    {exp.empresa} • {exp.periodo}
                  </p>
                  <p className={`leading-relaxed ${theme.textMuted}`}>
                    {exp.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Proyectos (Tarjetas con estilo) */}
          <section>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Terminal className={theme.purpleText} />
              Proyectos Clave
            </h3>
            <div className="grid gap-6">
              {datosPersonales.proyectos.map((proyecto, index) => (
                <a
                  key={index}
                  href={proyecto.link}
                  className={`group block p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${theme.cardBg} shadow-sm hover:border-purple-300 dark:hover:border-purple-700 relative overflow-hidden`}
                >
                  <div
                    className={`absolute top-0 right-0 p-4 ${theme.textMuted} group-hover:text-purple-600 transition-colors`}
                  >
                    <ExternalLink size={20} />
                  </div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                    {proyecto.titulo}
                  </h4>
                  <p className={`text-sm mb-4 ${theme.textMuted}`}>
                    {proyecto.descripcion}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {proyecto.tech.map((t, i) => (
                      <span
                        key={i}
                        className={`text-xs px-2.5 py-1 rounded-md font-medium ${
                          darkMode
                            ? 'bg-purple-900/30 text-purple-300'
                            : 'bg-purple-100 text-purple-800'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
      {/* Sección de Contacto CTA */}
      <section id="contacto" className="py-24 text-center">
        <div
          className={`
    max-w-4xl mx-auto rounded-3xl p-8 md:p-12 border relative overflow-hidden
    ${theme.cardBg}
    /* Efecto de brillo ambiental */
    before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-full before:h-full before:bg-gradient-to-b before:from-purple-500/10 before:to-transparent before:pointer-events-none
  `}
        >
          <div className="relative z-10 flex flex-col items-center">
            <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 mb-6">
              <Mail size={32} />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Tienes un proyecto en mente?
            </h2>

            <p className={`text-lg mb-8 max-w-xl mx-auto ${theme.textMuted}`}>
              Actualmente estoy disponible para unirme a nuevos equipos y
              colaborar en proyectos desafiantes. ¡Hagamos que suceda!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
              {/* Botón Principal: Enviar Correo */}
              <a
                href={`mailto:${datosPersonales.email}`}
                className="px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all hover:-translate-y-1 w-full sm:w-auto"
              >
                Enviar Mensaje
              </a>

              {/* Botón Secundario: Copiar Correo */}
              <button
                onClick={handleCopyEmail}
                className={`
            px-8 py-4 rounded-xl font-semibold border flex items-center gap-2 transition-all w-full sm:w-auto justify-center
            ${
              darkMode
                ? 'bg-gray-800 border-gray-700 hover:bg-gray-700'
                : 'bg-white border-gray-200 hover:bg-gray-50'
            }
          `}
              >
                {copied ? (
                  <>
                    <Check size={20} className="text-green-500" />
                    <span className="text-green-600 dark:text-green-400">
                      ¡Copiado!
                    </span>
                  </>
                ) : (
                  <>
                    <Copy size={20} className={theme.textMuted} />
                    <span>{datosPersonales.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer
        className={`py-8 text-center border-t ${
          darkMode ? 'border-gray-800' : 'border-purple-100/50'
        }`}
      >
        <p className={`text-sm ${theme.textMuted}`}>
          © {new Date().getFullYear()} {datosPersonales.nombre}. Creado con
          precisión y React.
        </p>
      </footer>
    </div>
  );
};

export default App;
