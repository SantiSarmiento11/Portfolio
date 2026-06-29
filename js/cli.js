/**
 * SarmientoOS - CLI Command Parser, History, and Autocompletions
 */

let commandHistory = [];
let historyIndex = -1;

// Input elements caching
const terminalInput = document.getElementById("terminal-input");
const terminalHistory = document.getElementById("terminal-history");
const customCursor = document.getElementById("custom-cursor");

// Helper to align cursor box position
function updateCursorPosition() {
    if (!terminalInput || !customCursor) return;
    const length = terminalInput.value.length;
    const charWidth = 9.0; // JetBrains mono character width adjustment
    customCursor.style.left = (length * charWidth) + "px";
}

// Commands list dictionary
const commands = {
    help: {
        desc: "Muestra los comandos disponibles.",
        action: () => {
            return [
                "SarmientoOS developer-terminal v5.1-BASH",
                "========================================",
                "Escribe cualquiera de los siguientes comandos en la terminal:",
                "",
                "  <span class='highlight'>help</span>         - Ver este manual de ayuda.",
                "  <span class='highlight'>neofetch</span>     - Muestra el resumen del sistema y del desarrollador.",
                "  <span class='highlight'>about</span>        - Resumen profesional del desarrollador.",
                "  <span class='highlight'>skills</span>       - Lista de tecnologías y habilidades ordenadas.",
                "  <span class='highlight'>education</span>    - Muestra la formación académica.",
                "  <span class='highlight'>languages</span>    - Muestra los idiomas dominados.",
                "  <span class='highlight'>competencies</span> - Muestra competencias profesionales.",
                "  <span class='highlight'>projects</span>     - Lista los proyectos destacados con sus detalles.",
                "  <span class='highlight'>contact</span>      - Canales de contacto y enlaces de interés.",
                "  <span class='highlight'>theme</span>        - Alterna temas: <span class='highlight'>theme dracula</span>, <span class='highlight'>theme onedark</span>, <span class='highlight'>theme nord</span>.",
                "  <span class='highlight'>gui</span>          - Cambia a la interfaz visual de pestañas.",
                "  <span class='highlight'>clear</span>        - Limpia la pantalla de la terminal.",
                "",
                "Tip: Puedes hacer clic en 'Acciones' arriba para auto-escribir y ejecutar."
            ].join("<br>");
        }
    },
    neofetch: {
        desc: "Información de sistema en formato visual.",
        action: () => {
            const sysUptimeDom = document.getElementById("sys-uptime");
            const sysUptime = sysUptimeDom ? sysUptimeDom.textContent : "0h 0m 0s";
            const currentThemeName = currentTheme.toUpperCase();
            
            const asciiLogo = [
                "    ______   ",
                "   / ____/   ",
                "  / /___     ",
                "  \\___  \\    ",
                " ____/ /     ",
                "/_____/      "
            ];
            
            const info = [
                `<span class="highlight">sarmiento@fullstack</span>`,
                `-------------------`,
                `OS: SarmientoOS GNU/Linux x86_64`,
                `Host: local-runtime-env:latest`,
                `Uptime: ${sysUptime}`,
                `Shell: bash v5.1-compat`,
                `Theme: ${currentThemeName}`,
                `Terminal: xterm-256color`,
                `Container: Docker Engine 24.0.2`,
                `Memory: 6.5MB / 16.0MB`
            ];
            
            let out = '<div class="neofetch-layout"><pre class="neofetch-ascii">';
            asciiLogo.forEach(line => {
                out += line + "\n";
            });
            out += '</pre><div class="neofetch-info">';
            info.forEach(line => {
                out += line + "<br>";
            });
            out += '</div></div>';
            return out;
        }
    },
    about: {
        desc: "Perfil profesional y resumen sobre el desarrollador.",
        action: () => {
            return [
                "PERFIL PROFESIONAL",
                "------------------",
                `Nombre: ${developerData.bio.name}`,
                `Título: ${developerData.bio.title}`,
                "",
                developerData.bio.description,
                "",
                `Cita: "${developerData.bio.quote}"`,
                "",
                "Escribe <span class='highlight'>skills</span> para ver las tecnologías, <span class='highlight'>education</span> para formación, o <span class='highlight'>projects</span> para portafolio."
            ].join("<br>");
        }
    },
    skills: {
        desc: "Listado estructurado de tecnologías y conocimientos.",
        action: () => {
            return [
                "HABILIDADES TÉCNICAS",
                "--------------------",
                "",
                "<svg class='icon-svg' viewBox='0 0 24 24'><rect x='2' y='3' width='20' height='14' rx='2' ry='2'></rect><line x1='8' y1='21' x2='16' y2='21'></line><line x1='12' y1='17' x2='12' y2='21'></line></svg> FRONTEND:",
                developerData.skills.frontend.map(s => `  * ${s}`).join("<br>"),
                "",
                "<svg class='icon-svg' viewBox='0 0 24 24'><circle cx='12' cy='12' r='3'></circle><path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z'></path></svg> BACKEND &amp; APIs:",
                developerData.skills.backend.map(s => `  * ${s}`).join("<br>"),
                "",
                "<svg class='icon-svg' viewBox='0 0 24 24'><path d='M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z'></path><polyline points='17 21 17 13 7 13 7 21'></polyline><polyline points='7 3 7 8 15 8'></polyline></svg> DEVOPS &amp; TOOLS:",
                developerData.skills.devopsDb.map(s => `  * ${s}`).join("<br>"),
                ""
            ].join("<br>");
        }
    },
    education: {
        desc: "Formación académica del desarrollador.",
        action: () => {
            let out = [
                "FORMACIÓN ACADÉMICA",
                "-------------------",
                ""
            ];
            developerData.education.forEach(edu => {
                out.push(`  * <span class='highlight'>${edu.title}</span>`);
                out.push(`    Centro: ${edu.school}`);
                out.push(`    Periodo: ${edu.period}`);
                out.push("");
            });
            return out.join("<br>");
        }
    },
    languages: {
        desc: "Idiomas dominados por el desarrollador.",
        action: () => {
            let out = [
                "IDIOMAS",
                "-------",
                ""
            ];
            developerData.languages.forEach(lang => {
                out.push(`  * <span class='highlight'>${lang.language}</span> - Nivel: ${lang.level}`);
            });
            return out.join("<br>");
        }
    },
    competencies: {
        desc: "Competencias profesionales del desarrollador.",
        action: () => {
            let out = [
                "COMPETENCIAS",
                "------------",
                ""
            ];
            developerData.competencies.forEach(comp => {
                out.push(`  * ${comp}`);
            });
            return out.join("<br>");
        }
    },
    projects: {
        desc: "Proyectos de desarrollo full-stack.",
        action: () => {
            let out = [
                "EXPERIENCIA Y PROYECTOS DESTACADOS",
                "----------------------------------",
                ""
            ];
            
            developerData.projects.forEach((proj, idx) => {
                out.push(`[${idx + 1}] ${proj.title}`);
                out.push(`    Descripción: ${proj.desc}`);
                out.push(`    Tecnologías: ${proj.stack}`);
                out.push(`    Acceso:      <a href="${proj.demo}" class="retro-link-full"><svg class='icon-svg size-sm' viewBox='0 0 24 24'><path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path><polyline points='15 3 21 3 21 9'></polyline><line x1='10' y1='14' x2='21' y2='3'></line></svg> Demo</a> / <a href="${proj.code}" class="retro-link-full"><svg class='icon-svg size-sm' viewBox='0 0 24 24'><polyline points='16 18 22 12 16 6'></polyline><polyline points='8 6 2 12 8 18'></polyline></svg> Código</a>`);
                out.push("");
            });
            
            return out.join("<br>");
        }
    },
    contact: {
        desc: "Enlaces de contacto del desarrollador.",
        action: () => {
            return [
                "INFORMACIÓN DE CONTACTO",
                "-----------------------",
                "Si deseas iniciar un proyecto o conversar sobre tecnología, utiliza los siguientes medios:",
                "",
                `<svg class='icon-svg' viewBox='0 0 24 24'><path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path><polyline points='22,6 12,13 2,6'></polyline></svg> Email:    <a href="mailto:${developerData.contact.email}" class="retro-link-full">${developerData.contact.email}</a>`,
                `<svg class='icon-svg' viewBox='0 0 24 24'><path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37(CI/CD)c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path></svg> GitHub:   <a href="${developerData.contact.github}" target="_blank" class="retro-link-full">${developerData.contact.github}</a>`,
                `<svg class='icon-svg' viewBox='0 0 24 24'><path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path><rect x='2' y='9' width='4' height='12'></rect><circle cx='4' cy='4' r='2'></circle></svg> LinkedIn: <a href="${developerData.contact.linkedin}" target="_blank" class="retro-link-full">${developerData.contact.linkedin}</a>`,
                "",
                "Puedes usar el formulario visual en el Modo GUI escribiendo <span class='highlight'>gui</span>."
            ].join("<br>");
        }
    },
    theme: {
        desc: "Configura el tema: theme [dracula|onedark|nord].",
        action: (arg) => {
            if (!arg) {
                return "Uso: <span class='highlight'>theme dracula</span> | <span class='highlight'>theme onedark</span> | <span class='highlight'>theme nord</span>";
            }
            const normArg = arg.toLowerCase().trim();
            if (commands.theme.isValid(normArg)) {
                setTheme(normArg); // Declared globally in effects.js
                return `Tema cambiado a: ${normArg.toUpperCase()}`;
            } else {
                return `Tema desconocido: ${arg}. Opciones válidas: dracula, onedark, nord.`;
            }
        },
        isValid: (t) => ["dracula", "onedark", "nord"].includes(t)
    },
    gui: {
        desc: "Cambia a la interfaz visual de pestañas.",
        action: () => {
            toggleMode(); // Declared globally in gui.js or app.js
            return "Cargando panel visual...";
        }
    },
    clear: {
        desc: "Limpia la terminal.",
        action: () => {
            if (terminalHistory) terminalHistory.innerHTML = "";
            return "";
        }
    }
};

// Parser execution engine
function runCommand(commandString) {
    if (!terminalHistory) return;
    
    const trimmed = commandString.trim();
    if (trimmed === "") return;
    
    const spaceIdx = trimmed.indexOf(" ");
    let cmd = trimmed;
    let arg = "";
    if (spaceIdx !== -1) {
        cmd = trimmed.slice(0, spaceIdx);
        arg = trimmed.slice(spaceIdx + 1);
    }
    
    commandHistory.push(trimmed);
    historyIndex = -1;
    
    const cmdLine = document.createElement("div");
    cmdLine.className = "terminal-command-echo";
    cmdLine.innerHTML = `<span class="prompt-user">guest@sarmiento-os</span><span class="prompt-separator">:</span><span class="prompt-path">~/portfolio</span><span class="prompt-char">$</span> <span>${commandString}</span>`;
    terminalHistory.appendChild(cmdLine);
    
    const pOutput = document.createElement("div");
    pOutput.className = "terminal-output-block";
    
    const commandDef = commands[cmd.toLowerCase()];
    if (commandDef) {
        const result = commandDef.action(arg);
        if (result !== "") {
            pOutput.innerHTML = result;
            terminalHistory.appendChild(pOutput);
        }
    } else {
        pOutput.innerHTML = `sarmiento-bash: ${cmd}: no se encontró el comando. Escribe <span class="highlight">help</span> para ayuda.`;
        terminalHistory.appendChild(pOutput);
    }
    
    terminalHistory.scrollTop = terminalHistory.scrollHeight;
}

// Attach input and keydown event listeners for terminal interaction
if (terminalInput) {
    terminalInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const commandVal = terminalInput.value;
            terminalInput.value = "";
            updateCursorPosition();
            runCommand(commandVal);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (commandHistory.length > 0) {
                if (historyIndex === -1) {
                    historyIndex = commandHistory.length - 1;
                } else if (historyIndex > 0) {
                    historyIndex--;
                }
                terminalInput.value = commandHistory[historyIndex];
                updateCursorPosition();
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex !== -1) {
                if (historyIndex < commandHistory.length - 1) {
                    historyIndex++;
                    terminalInput.value = commandHistory[historyIndex];
                } else {
                    historyIndex = -1;
                    terminalInput.value = "";
                }
                updateCursorPosition();
            }
        }
    });

    terminalInput.addEventListener("input", updateCursorPosition);
    terminalInput.addEventListener("keyup", updateCursorPosition);
    terminalInput.addEventListener("click", updateCursorPosition);
    terminalInput.addEventListener("focus", updateCursorPosition);
    
    // Maintain focus on terminal input if session is active and mode is CLI
    document.addEventListener("click", (e) => {
        if (currentMode === "CLI" && isSessionActive) {
            // Check if clicking inside terminal container but not on menus/links
            if (e.target.closest(".system-container") && !e.target.closest("a") && !e.target.closest("button")) {
                terminalInput.focus();
                updateCursorPosition();
            }
        }
    });
}

