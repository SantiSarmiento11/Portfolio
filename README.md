# SarmientoOS - Portafolio Interactivo y Consola CLI para Desarrollador de Software

Experiencia web interactiva que simula un entorno de consola UNIX y sistema de ventanas de escritorio para explorar proyectos, habilidades tecnicas y trayectoria profesional.

[![Dominio](https://img.shields.io/badge/Dominio-Portafolio%20Interactivo%20CLI-0052CC.svg)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)]()
[![CSS3](https://img.shields.io/badge/CSS3-Modern%20Glassmorphism-blue.svg)]()
[![HTML5](https://img.shields.io/badge/HTML5-Semantico-orange.svg)]()

## Resumen Ejecutivo

Los portafolios estaticos convencionales a menudo carecen de interactividad y fallan al transmitir las capacidades tecnicas de un desarrollador de software. SarmientoOS reimagina la presentacion profesional ofreciendo un entorno inmersivo dual: una consola CLI con comandos tipo bash completamente funcionales para entusiastas de la terminal, combinada con una interfaz gráfica asistida por controles visuales, temas dinámicos e integración fluida.

## Alcance y Objetivos de Negocio

- Demostracion practica de competencias avanzadas en JavaScript vanilla, manipulacion del DOM y animaciones basadas en CSS moderno.
- Soporte dual de interaccion: terminal textual por comandos e interfaz grafica asistida por clics (GUI).
- Motor de temas visuales en tiempo real (Dracula, Nord, Monokai, Matrix, Cyberpunk).
- Simulador de ejecucion de comandos con autocompletado mediante tecla Tab y navegacion de historial con flechas Arriba/Abajo.
- Respaldo de configuracion y preferencias de sesion mediante LocalStorage.

## Arquitectura del Sistema

La aplicacion se estructura como una aplicacion web de una sola pagina (SPA) completamente modular sin dependencias pesadas de frameworks:
1. Capa de Presentacion (`index.html`, modulos CSS desacoplados).
2. Capa de Logica de Terminal y Parser de Comandos (`cli.js`, `autotyper.js`).
3. Capa de Gestion de Interfaz y Ventanas (`gui.js`, `effects.js`).
4. Capa de Datos Estructurados (`data.js`) y Controlador Principal (`app.js`).
