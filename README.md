# SarmientoOS — Portafolio Profesional & Ecosistema de Desarrollo

Portafolio web moderno de alto impacto diseñado para **Santiago Sarmiento**, Desarrollador de Software Full-Stack enfocado en Backend y Soluciones de Inteligencia Artificial.

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E.svg?style=flat&logo=javascript&logoColor=black)]()
[![HTML5](https://img.shields.io/badge/HTML5-Semántico-E34F26.svg?style=flat&logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-Cyber_Neon_60--30--10-1572B6.svg?style=flat&logo=css3&logoColor=white)]()
[![Meta AI](https://img.shields.io/badge/Meta_AI-Hackathon_Approved-0081FB.svg?style=flat&logo=meta&logoColor=white)]()

---

## 1. Visión y Enfoque de Diseño UI/UX

El diseño fue concebido bajo un enfoque minimalista, profesional y claro, utilizando la paleta estricta **Cyber Neon 60-30-10**:
- **60% Negro Espacial (`#080B12`)**: Fondos principales, tarjetas elevadas y superficies con glassmorphism traslúcido.
- **30% Cyan Eléctrico (`#38E8FF`)**: Identidad visual, botones primarios, enlaces interactivos y resplandores (*glow*).
- **10% Verde Neón (`#B6FF00`)**: Badges de estado, hitos globales, llamados a la acción especiales y métricas activas.

### Principales Innovaciones:
- **Estructura Web Fluida y Creativa**: Se trasciende la ventana rígida de terminal para ofrecer una navegación moderna y scrolleable por secciones.
- **Terminal CLI Conservada & Elevada**: La consola CLI Unix/Bash sigue plenamente funcional como un cajón interactivo (*drawer*) tipo HUD, invocable desde el encabezado, el botón flotante inferior o el atajo `Ctrl + ~` / `F9`.
- **Énfasis Especial en la Meta AI Hackathon (26/10/2026 – 04/11/2026)**: Módulo dedicado al proyecto **Sleeply** con un flujo interactivo de 6 fases cronológicas y visor modal *Lightbox* en alta definición.
- **Árboles de Habilidades Minimalistas**: Estructura de árbol jerárquico con nodos interconectados (Backend SOLID, Frontend, DevOps/IA, Roadmap en Aprendizaje y Habilidades Blandas).
- **Línea de Tiempo Minimalista**: Eje vertical con nodos luminosos para trayectoria profesional y formación académica.
- **Integración con GitHub**: Enlaces directos a los repositorios oficiales de la cuenta de GitHub `SantiSarmiento11`.
- **Iconografía 100% SVG**: Eliminación de emojis para garantizar un acabado pulcro y corporativo.

---

## 2. Arquitectura de Archivos (`Portfolio/`)

```text
Portfolio/
├── index.html                   # Documento semántico principal (SPA)
├── README.md                    # Documentación técnica del portafolio
├── css/
│   ├── style.css                # Estilos maestros, componentes, layouts y responsividad
│   ├── themes.css               # Variables y tokens de la paleta Cyber Neon
│   └── terminal.css             # Estilos de la consola de comandos interactiva
├── js/
│   ├── data.js                  # Almacén de datos (CV, proyectos GitHub, roadmap, hackathon)
│   ├── cli.js                   # Parser de comandos de terminal, historial y autocompletado [Tab]
│   ├── effects.js               # Sintetizador de audio mecánico (Web Audio API) y controlador de Lightbox
│   ├── gui.js                   # Controladores de interfaz, navegación móvil y modales
│   └── app.js                   # Orquestador del ciclo de vida y scroll spy
└── img/
    ├── Foto Profesional.jpeg    # Fotografía profesional de alta resolución
    ├── Meta AI Hackaton/        # Capturas cronológicas de la Hackathon 2026
    │   ├── Announcements Meta AI Hackaton.png
    │   ├── Sinan Ozdenir Meta.png
    │   ├── Sleeply Login Meta AI Hackaton.png
    │   ├── Meta AI Hackaton Submission.png
    │   ├── Meta AI Hackaton Review Submission.png
    │   └── Meta AI Hackaton Approved.png
    └── Hackaton Voxel 51 (Visual Agents)/
        └── diploma.jpg          # Evidencia académica / diploma de Hackathon ML
```

---

## 3. Repositorios de Proyectos Vinculados

| Proyecto | Descripción | Stack Tecnológico | Repositorio GitHub |
| :--- | :--- | :--- | :--- |
| **Sleeply** | Multi-Agent AI System & Oficina Virtual 2D | TypeScript, Multi-Agent AI, n8n, PostgreSQL | [meta-ai-hackaton](https://github.com/SantiSarmiento11/meta-ai-hackaton) |
| **TechNova** | Plataforma de Helpdesk & Cálculo de SLA | Java, Spring Boot, PostgreSQL, JWT, REST API | [TechNova](https://github.com/SantiSarmiento11/TechNova) |
| **Inventra** | Inventario Inteligente con RAG & Búsqueda Vectorial | JavaScript, PostgreSQL Vectorial (pgvector), RAG | [Inventra-Rag-Proyecto](https://github.com/SantiSarmiento11/Inventra-Rag-Proyecto) |
| **Visual Agents** | Detección y Prevención de Accidentes Viales | Python, Machine Learning, JavaScript, n8n | [Hackaton](https://github.com/SantiSarmiento11/Hackaton) |
| **Web Page WF to n8n** | Integración Frontend desacoplada a Webhooks n8n | HTML5, CSS3, JavaScript, n8n API | [Web-Page-WF-to-n8n-I-](https://github.com/SantiSarmiento11/Web-Page-WF-to-n8n-I-) |
| **Dashboard JS** | Panel de Control de Analítica y Métricas | JavaScript ES6+, CSS Grid, Modular UI | [PROYECTO-JS-DASHBOARD](https://github.com/SantiSarmiento11/PROYECTO-JS-DASHBOARD) |

---

## 4. Tecnologías en Aprendizaje Activo (Roadmap)

Basado en las metas activas del perfil [SantiSarmiento11](https://github.com/SantiSarmiento11):
- **Kubernetes** (Orquestación Cloud)
- **MongoDB** (Bases de datos NoSQL)
- **AWS** (Cloud Deployments & Servicios Nube)
- **Go** (Backend de Alto Desempeño)
- **TypeScript** (JavaScript Tipado Estricto)
- **React** (Interfaces Componentizadas Reactivas)
- **Node.js** (Runtime Server-side)
- **Tailwind CSS** (Diseño Utility-first)

---

## 5. Comandos de la Terminal CLI

Al desplegar la terminal interactiva, se dispone de comandos UNIX/Bash emulados:
- `help`: Muestra la lista de comandos disponibles.
- `about`: Muestra el perfil profesional y descripción técnica.
- `hackathon`: Despliega los detalles y el flujo de la Meta AI Hackathon 2026.
- `projects`: Lista los proyectos con sus enlaces directos a GitHub.
- `skills`: Muestra el árbol de habilidades técnicas.
- `roadmap`: Muestra las tecnologías en aprendizaje activo.
- `timeline`: Muestra la trayectoria cronológica y formativa.
- `neofetch`: Visualización estética del sistema y perfil.
- `contact`: Enlaces y canales de contacto directo.
- `clear`: Limpia la pantalla de la terminal.
- `exit`: Oculta el drawer de la terminal.
