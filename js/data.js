/**
 * SarmientoOS - Developer Data Store
 * Basado estrictamente en el CV oficial, repositorios de GitHub (SantiSarmiento11)
 * y activos verificados de la Meta AI Hackathon 2026.
 */

const developerData = {
    bio: {
        name: "Santiago Sarmiento",
        role: "Desarrollador de Software Full-Stack | Backend & IA",
        headline: "Creando soluciones escalables con Inteligencia Artificial y arquitecturas sólidas.",
        description: "Desarrollador de software full-stack enfocado en el backend con un correcto manejo de principios SOLID y sólida trayectoria en la creación e integración de soluciones basadas en Inteligencia Artificial. Perfil con aprendizaje continuo, orientación a resultados y trabajo en equipo en entornos colaborativos de alto rendimiento.",
        quote: "Escribir código eficiente hoy ahorra ciclos de reloj e infraestructura mañana.",
        location: "Floridablanca, Santander, Colombia",
        status: "Disponible para proyectos y retos backend / AI",
        avatar: "img/Foto Profesional.jpeg"
    },
    metaHackathon: {
        title: "Meta AI Hackaton — Muse Spark",
        period: "26/10/2026 – 04/11/2026",
        organization: "Meta",
        project: "Sleeply",
        repo: "https://github.com/SantiSarmiento11/meta-ai-hackaton",
        summary: "Sleeply explora cómo los agentes de IA pueden trabajar de forma autónoma durante la noche para avanzar tareas, organizar información y coordinar proyectos, optimizando la productividad humana sin reemplazar el descanso. Integra una interfaz UI/UX de oficina virtual 2D isométrica que visualiza en tiempo real la colaboración entre agentes.",
        stack: ["TypeScript", "Multi-Agent AI", "n8n", "PostgreSQL", "UI/UX Isométrico"],
        steps: [
            {
                id: 1,
                date: "26 Oct 2026",
                phase: "Convocatoria & Lanzamiento",
                title: "Anuncio Oficial Meta AI Muse Spark",
                desc: "Apertura oficial del certamen global organizado por Meta para el diseño de soluciones con inteligencia artificial de vanguardia.",
                img: "img/Meta AI Hackaton/Announcements Meta AI Hackaton.png",
                tag: "Inicio"
            },
            {
                id: 2,
                date: "28 Oct 2026",
                phase: "Mentoría de Élite",
                title: "Sesión Técnica con Sinan Ozdemir",
                desc: "Masterclass y retroalimentación técnica con Sinan Ozdemir, explorando agentes autónomos, flujos cognitivos y arquitecturas de LLMs.",
                img: "img/Meta AI Hackaton/Sinan Ozdenir Meta.png",
                tag: "Mentoría"
            },
            {
                id: 3,
                date: "01 Nov 2026",
                phase: "Prototipado & Arquitectura",
                title: "Sleeply: Prototipo & Oficina Virtual UI/UX",
                desc: "Desarrollo del concepto core de Sleeply: orquestación de agentes (Co-worker, Assistant, Manager) con entorno visual interactivo y portal de acceso.",
                img: "img/Meta AI Hackaton/Sleeply Login Meta AI Hackaton.png",
                tag: "Desarrollo"
            },
            {
                id: 4,
                date: "03 Nov 2026",
                phase: "Entrega Oficial",
                title: "Presentación de la Solución",
                desc: "Envío formal del repositorio de código, especificaciones del MVP y demostración funcional a la plataforma evaluadora de Meta.",
                img: "img/Meta AI Hackaton/Meta AI Hackaton Submission.png",
                tag: "Submission"
            },
            {
                id: 5,
                date: "04 Nov 2026",
                phase: "Evaluación & Arbitraje",
                title: "Revisión Técnica por Jurados",
                desc: "Revisión exhaustiva por parte del comité evaluador de Meta, analizando viabilidad, código, arquitectura distribuida y propuesta de valor.",
                img: "img/Meta AI Hackaton/Meta AI Hackaton Review Submission.png",
                tag: "Evaluación"
            },
            {
                id: 6,
                date: "04 Nov 2026",
                phase: "Validación Final",
                title: "Proyecto Aprobado y Certificado",
                desc: "Aprobación oficial del proyecto Sleeply en la Hackathon de Meta AI, validando su implementación técnica e impacto innovador.",
                img: "img/Meta AI Hackaton/Meta AI Hackaton Approved.png",
                tag: "Aprobado"
            }
        ]
    },
    skillsTree: {
        backend: {
            title: "Backend & Arquitectura",
            desc: "Diseño de APIs REST, buenas prácticas y principios SOLID.",
            skills: [
                { name: "Java", level: "Avanzado", detail: "Spring Boot, REST API, JWT, Arquitectura por Capas" },
                { name: "Python", level: "Avanzado", detail: "POO Avanzada, IA/ML, Procesamiento de datos" },
                { name: "PostgreSQL", level: "Avanzado", detail: "Relacional y Extensiones Vectoriales (pgvector)" },
                { name: "MySQL", level: "Intermedio", detail: "Modelado relacional, consultas y optimización" }
            ]
        },
        frontend: {
            title: "Frontend & Experiencia UI",
            desc: "Interfaces web reactivas, modulares y de alto rendimiento.",
            skills: [
                { name: "JavaScript", level: "Avanzado", detail: "ES6+, Manipulación avanzada del DOM, Web APIs" },
                { name: "HTML5 Semántico", level: "Avanzado", detail: "Accesibilidad (A11y), estructura SEO limpia" },
                { name: "CSS3 Moderno", level: "Avanzado", detail: "Grid, Flexbox, Custom Properties, Glassmorphism" }
            ]
        },
        automationCloud: {
            title: "DevOps, Automatización & IA",
            desc: "Contenerización, orquestación de agentes y pipelines.",
            skills: [
                { name: "Docker", level: "Intermedio", detail: "Contenerización de microservicios y despliegues" },
                { name: "Git & GitHub", level: "Avanzado", detail: "Control de versiones, ramas y GitHub Actions" },
                { name: "n8n", level: "Avanzado", detail: "Orquestación de workflows, Webhooks y agentes IA" },
                { name: "Linux / Ubuntu", level: "Intermedio", detail: "Administración de entornos, bash y servidores" },
                { name: "Scrum", level: "Avanzado", detail: "Metodologías ágiles y sprints colaborativos" }
            ]
        },
        learningRoadmap: {
            title: "En Aprendizaje Activo (Roadmap)",
            desc: "Tecnologías y herramientas que estoy profundizando activamente (GitHub: SantiSarmiento11).",
            skills: [
                { name: "Kubernetes", category: "Cloud & DevOps" },
                { name: "MongoDB", category: "NoSQL Database" },
                { name: "AWS (Cloud Deployments)", category: "Cloud Infrastructure" },
                { name: "Go", category: "High Performance Backend" },
                { name: "TypeScript", category: "Typed JavaScript" },
                { name: "React", category: "Frontend Framework" },
                { name: "Node.js", category: "Server-side Runtime" },
                { name: "Tailwind CSS", category: "Utility-first CSS" }
            ]
        },
        competencies: [
            { name: "Liderazgo", desc: "Capacidad para guiar equipos y coordinar objetivos de desarrollo." },
            { name: "Creatividad", desc: "Resolución innovadora de problemas técnicos y arquitecturas." },
            { name: "Eficiencia", desc: "Optimización de recursos de cómputo y código mantenible." },
            { name: "Disciplina", desc: "Constancia y rigor metodológico en buenas prácticas de ingeniería." },
            { name: "Resiliencia", desc: "Perseverancia ante retos complejos y depuración de errores críticos." },
            { name: "Comunicación", desc: "Transmisión clara de requerimientos, documentación y trabajo en equipo." },
            { name: "Paciencia", desc: "Análisis meticuloso en pruebas y arquitectura de software." },
            { name: "Adaptabilidad", desc: "Rápida asimilación de nuevas herramientas, stacks y paradigmas." }
        ]
    },
    projects: [
        {
            id: "PROY_01",
            title: "Sleeply — Meta AI Hackaton",
            badge: "Meta AI 2026",
            featured: true,
            desc: "Plataforma de trabajo colaborativo impulsada por agentes autónomos de IA que operan mientras el usuario descansa. Integra una oficina virtual interactiva isométrica 2D con roles de Co-worker, Assistant y Manager.",
            stack: ["TypeScript", "Multi-Agent AI", "n8n", "PostgreSQL", "Isometric UI"],
            repo: "https://github.com/SantiSarmiento11/meta-ai-hackaton",
            img: "img/Meta AI Hackaton/Sleeply Login Meta AI Hackaton.png"
        },
        {
            id: "PROY_02",
            title: "TechNova — Gestión de Helpdesk & SLA",
            badge: "Java / Spring Boot",
            featured: true,
            desc: "Plataforma empresarial de gestión de tickets de soporte técnico con cálculo de SLA, trazabilidad de incidentes y control de accesos basado en roles (RBAC) con JWT. Backend robusto en Spring Boot y PostgreSQL.",
            stack: ["Java", "Spring Boot", "PostgreSQL", "JWT", "REST API", "JavaScript", "HTML/CSS"],
            repo: "https://github.com/SantiSarmiento11/TechNova",
            img: null
        },
        {
            id: "PROY_03",
            title: "Inventra — Sistema RAG & Búsqueda Vectorial",
            badge: "AI & Vector DB",
            featured: true,
            desc: "Solución de inventario inteligente implementando Retrieval-Augmented Generation (RAG) y almacenamiento vectorial en PostgreSQL para consultas en lenguaje natural y recuperación semántica de datos.",
            stack: ["JavaScript", "PostgreSQL Vectorial", "RAG", "Embeddings", "Node.js"],
            repo: "https://github.com/SantiSarmiento11/Inventra-Rag-Proyecto",
            img: null
        },
        {
            id: "PROY_04",
            title: "Visual Agents — Hackaton Machine Learning",
            badge: "ML & Visión Artificial",
            featured: true,
            desc: "Software de prevención vial y detección de incidentes en tiempo real mediante visión por computadora y agentes de IA. Integra alertas automáticas y flujos de notificación en n8n.",
            stack: ["Python", "Computer Vision", "JavaScript", "HTML/CSS", "n8n"],
            repo: "https://github.com/SantiSarmiento11/Hackaton",
            diploma: "img/Hackaton Voxel 51 (Visual Agents)/diploma.jpg"
        },
        {
            id: "PROY_05",
            title: "Web Page Workflow to n8n",
            badge: "Automatización",
            featured: false,
            desc: "Arquitectura de integración web desacoplada para envío, captura y procesamiento reactivo de eventos hacia webhooks y flujos automatizados de n8n.",
            stack: ["HTML5", "CSS3", "JavaScript", "n8n API", "Webhooks"],
            repo: "https://github.com/SantiSarmiento11/Web-Page-WF-to-n8n-I-",
            img: null
        },
        {
            id: "PROY_06",
            title: "Dashboard Interactivo de Métricas",
            badge: "Frontend Modular",
            featured: false,
            desc: "Panel de control y analítica para monitoreo de métricas, consumo de recursos y visualización de datos con componentes modulares en JavaScript puro.",
            stack: ["JavaScript ES6+", "CSS3 Grid", "Data Visualization", "Modular UI"],
            repo: "https://github.com/SantiSarmiento11/PROYECTO-JS-DASHBOARD",
            img: null
        }
    ],
    timeline: [
        {
            period: "26 Oct 2026 – 04 Nov 2026",
            title: "Meta AI Hackaton — Muse Spark",
            institution: "Meta",
            type: "Hito / Logro",
            desc: "Desarrollo y aprobación del proyecto Sleeply. Creación de arquitectura multi-agente de IA y oficina virtual isométrica.",
            tag: "Meta AI"
        },
        {
            period: "Oct 2026",
            title: "Desarrollo Plataforma TechNova",
            institution: "Campuslands",
            type: "Proyecto Empresarial",
            desc: "Construcción completa de API REST segura con Spring Boot, PostgreSQL, JWT y frontend modular para soporte y SLA.",
            tag: "Backend"
        },
        {
            period: "Jun 2026 – Nov 2026",
            title: "Curso de Python Avanzado",
            institution: "Campuslands, Floridablanca",
            type: "Especialización Técnica",
            desc: "Profundización en estructuras de datos, programación orientada a objetos avanzada, procesamiento asíncrono y librerías de IA.",
            tag: "Certificación"
        },
        {
            period: "Dic 2025 – Nov 2026",
            title: "Técnico en Desarrollo de Software con IA",
            institution: "Campuslands, Floridablanca",
            type: "Formación Principal",
            desc: "Programa de formación intensiva en desarrollo full-stack, ingeniería de software, principios SOLID y aplicación de modelos de IA.",
            tag: "Académico"
        },
        {
            period: "2026",
            title: "Hackaton Machine Learning — Visual Agents",
            institution: "Voxel 51 / Hackathon ML",
            type: "Hito / Logro",
            desc: "Liderazgo técnico en el diseño de software para monitoreo vial con IA, visión artificial y automatización de alertas con n8n.",
            tag: "Hackathon"
        }
    ],
    education: [
        {
            title: "Técnico en desarrollo de software con IA",
            school: "Campuslands, Floridablanca",
            period: "Dic 2025 - Nov 2026"
        },
        {
            title: "Curso de Python Avanzado",
            school: "Campuslands, Floridablanca",
            period: "Jun 2026 - Nov 2026"
        }
    ],
    languages: [
        { language: "Español", level: "C2", desc: "Nativo" },
        { language: "Inglés", level: "B2", desc: "Competencia Profesional Intermedia-Avanzada" }
    ],
    contact: {
        email: "sansamablogers@gmail.com",
        github: "https://github.com/SantiSarmiento11",
        linkedin: "https://www.linkedin.com/in/santiago-andrés-sarmiento-martínez-91a035396/",
        location: "Floridablanca, Santander, Colombia"
    }
};
