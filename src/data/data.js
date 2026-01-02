// src/data/data.js
import {
    SiReact, SiNextdotjs, SiAngular, SiHtml5, SiCss3, SiBootstrap, SiJavascript,
    SiSpringboot, SiNodedotjs, SiPython, SiMysql, SiGit, SiGithub, SiWordpress
} from 'react-icons/si';
import { Database, Code, Terminal, Hash, Users } from 'lucide-react';

export const datosPersonales = {
    nombre: 'Kira Patricio',
    foto: 'https://github.com/DEV-KIRA2021.png',
    titulo: 'Hola, soy Kira Sayuri.',
    subtitulo: 'Desarrolladora Full Stack en formación & Entusiasta de la Tecnología.',
    resumen: 'Apasionada por crear soluciones útiles con código limpio. Tengo experiencia en desarrollo web, aplicaciones de escritorio y soporte técnico, siempre enfocada en la resolución ágil de problemas.',
    sobreMi: "Soy una profesional apasionada por la programación y la tecnología con una gran capacidad de adaptación. Mi objetivo es crecer como Desarrolladora Full Stack, integrándome en equipos colaborativos donde pueda aportar soluciones eficientes. Cuento con una formación sólida en Ingeniería de Sistemas y Computación, complementada con experiencia práctica en la gestión de incidentes y el desarrollo de software utilizando tecnologías como React, Angular y Java.",
    email: 'kirasayuri74@gmail.com',
    telefono: '+51 983616291',
    ubicacion: 'Lima, Perú',
    links: {
        github: 'https://github.com/DEV-KIRA2021',
        linkedin: 'https://www.linkedin.com/in/kira-sayuri-b45962220',
    },

    habilidades: [
        // Frontend
        { name: 'React', icon: SiReact },
        { name: 'Angular', icon: SiAngular },
        { name: 'Nest.js', icon: SiNextdotjs },
        { name: 'HTML5', icon: SiHtml5 },
        { name: 'CSS3', icon: SiCss3 },
        { name: 'Bootstrap', icon: SiBootstrap },
        { name: 'JavaScript', icon: SiJavascript },
        // Backend
        { name: 'Java (Spring)', icon: SiSpringboot },
        { name: 'Python', icon: SiPython },
        { name: 'C#', icon: Hash },
        { name: 'Node.js', icon: SiNodedotjs },
        // Otros
        { name: 'Google Apps Script', icon: Code },
        { name: 'WordPress', icon: SiWordpress },
        // DB
        { name: 'MySQL', icon: SiMysql },
        { name: 'SQL', icon: Database },
        // Herramientas
        { name: 'Git', icon: SiGit },
        { name: 'GitHub', icon: SiGithub },
    ],
    educacion: [
        {
            titulo: "Ingeniería de Sistemas Computacionales",
            institucion: "Universidad Privada del Norte",
            periodo: "Agosto 2024 - Actualidad",
            estado: "En curso",
        },
        {
            titulo: "Computación e Informática",
            institucion: "I.S.T. Cibertec",
            periodo: "Agosto 2021 - Julio 2024",
            estado: "Décimo Superior",
        },
        {
            titulo: "Inglés Básico",
            institucion: "WeTalk UPC",
            periodo: "2022 - 2023",
            estado: "Culminado",
        }
    ],
    experiencia: [
        {
            rol: 'Practicante de Desarrollo Web',
            empresa: 'LETS GO',
            periodo: 'Octubre 2025 - Actualidad',
            descripcion: 'Desarrollo e implementación de nuevas funcionalidades en el sitio web corporativo con React. Construcción de app híbrida con Angular + Electron. Soporte Backend con Nest.js.',
        },
        {
            rol: 'Desarrolladora de Automatización y Software',
            empresa: 'Proyecto Propio (Bodega Sayuki)',
            periodo: 'Septiembre 2025 - Actualidad',
            descripcion: 'Diseño y desarrollo de un bot en Telegram para automatizar la gestión de ventas, inventario y deudas, integrando Google Sheets como base de datos y generando PDFs.',
        },
        {
            rol: 'Fundadora y Responsable de E-commerce',
            empresa: 'Sayuki - Tazas Personalizadas',
            periodo: 'Julio 2025 - Actualidad',
            descripcion: 'Liderazgo integral del emprendimiento. Desarrollo y mantenimiento del e-commerce con WordPress/WooCommerce. Gestión de estrategias SEO y atención al cliente.',
        },
        {
            rol: 'Soporte a Aulas y Laboratorio',
            empresa: 'Universidad de Lima',
            periodo: 'Septiembre 2024 - Marzo 2025',
            descripcion: 'Gestión eficiente de incidentes tecnológicos para docentes y estudiantes. Mantenimiento técnico (BIOS, virtualización).',
        }
    ],
    certificados: [
        {
            nombre: "IT Essentials",
            emisor: "Cisco Networking Academy",
            fecha: "2025",
            link: "https://www.credly.com/badges/bd1c206c-c540-46db-a5ce-b71c67621500/public_url"
        },
        {
            nombre: "Python Essentials 1",
            emisor: "Cisco Networking Academy",
            fecha: "2025",
            link: "https://www.credly.com/badges/00fb2e67-fbc6-49ba-9aeb-5ce765b124e8/public_url"
        },
        {
            nombre: "C++ Advanced Course",
            emisor: "Cisco Networking Academy",
            fecha: "2025",
            link: "https://www.credly.com/badges/149245b8-7428-4cbf-a835-3432654b3985/public_url"
        }
    ],
    proyectos: [
        {
            titulo: 'Bot de Gestión para Negocio',
            descripcion: 'Sistema automatizado para gestionar inventario, ventas y fiados de una bodega a través de un bot de Telegram, generando boletas en PDF.',
            tech: ['Google Apps Script', 'API Telegram', 'Google Sheets'],
            link: '#',
        },
        {
            titulo: 'Sayuki - Tazas Personalizadas',
            descripcion: 'E-commerce propio. Desarrollo y gestión de tienda online con WordPress/WooCommerce. Optimización SEO y experiencia de usuario.',
            tech: ['WordPress', 'WooCommerce', 'SEO'],
            link: '#',
        },
        {
            titulo: 'Sistema de Gestión de Biblioteca',
            descripcion: 'Aplicación web para gestionar préstamos, devoluciones y registro de libros. Calificación sobresaliente de 18/20.',
            tech: ['Java', 'Spring Boot', 'MySQL', 'Postman'],
            link: '#',
        },
        {
            titulo: 'Sitio Web Dress Freely',
            descripcion: 'Tienda virtual de ropa para damas. Diseño atractivo y funcional.',
            tech: ['HTML', 'CSS'],
            link: 'https://github.com/DEV-KIRA2021/Sitio_web_Dress_Freely',
        },
        {
            titulo: 'Sistema de Ventas',
            descripcion: 'Aplicación robusta para la gestión de ventas e inventario.',
            tech: ['Java'],
            link: 'https://github.com/DEV-KIRA2021/Sistema_de_Ventas',
        },
        {
            titulo: 'Sistema de Inventario',
            descripcion: 'Solución para el control y seguimiento de stock de productos.',
            tech: ['Java'],
            link: 'https://github.com/DEV-KIRA2021/Sistema_de_Inventario',
        },
    ],
};