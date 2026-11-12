/**
 * SarmientoOS - CLI Command Parser, History, and Autocompletions
 * Totalmente sincronizado con el CV, repositorios de GitHub (SantiSarmiento11)
 * y la experiencia de la Meta AI Hackathon 2026.
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
    const charWidth = 8.2; // Monospace character width adjustment
    customCursor.style.left = (length * charWidth) + "px";
}

// Commands list dictionary
const commands = {
    help: {
        desc: "Muestra la lista de comandos disponibles.",
        action: () => {
            return [
                "<span class='highlight'>SarmientoOS developer-terminal v6.0-BASH</span>",
                "========================================================",
                "Escribe cualquiera de los siguientes comandos en la consola:",
                "",
                "  <span class='highlight'>about</span>        - Perfil profesional y resumen técnico.",
                "  <span class='highlight'>hackathon</span>    - Detalles y flujo de la Meta AI Hackathon 2026 (Sleeply).",
                "  <span class='highlight'>projects</span>     - Proyectos destacados con enlaces directos a GitHub.",
                "  <span class='highlight'>skills</span>       - Árbol de habilidades técnicas dominadas.",
                "  <span class='highlight'>roadmap</span>      - Tecnologías en aprendizaje activo (SantiSarmiento11).",
                "  <span class='highlight'>timeline</span>     - Línea de tiempo de trayectoria y formación.",
                "  <span class='highlight'>neofetch</span>     - Información del sistema y entorno de desarrollo.",
                "  <span class='highlight'>contact</span>      - Medios de contacto directo (GitHub, LinkedIn, Email).",
                "  <span class='highlight'>clear</span>        - Limpia la pantalla de la terminal.",
                "  <span class='highlight'>exit</span>         - Cierra la consola interactiva CLI.",
                "",
                "Tip: Usa la tecla [TAB] para autocompletar comandos y las flechas [↑/↓] para navegar el historial."
            ].join("<br>");
        }
    },
    neofetch: {
        desc: "Información de sistema en formato visual neofetch.",
        action: () => {
            const asciiLogo = [
                "    ______   ",
                "   / ____/   ",
                "  / /___     ",
                "  \\___  \\    ",
                " ____/ /     ",
                "/_____/      "
            ];
            
            const info = [
                `<span class="highlight">sarmiento@fullstack-ai</span>`,
                `-----------------------------------`,
                `OS: SarmientoOS GNU/Linux x86_64`,
                `Host: Campuslands Floridablanca / Meta AI Lab`,
                `Stack: Java, Spring Boot, Python, PostgreSQL, n8n`,
                `Roadmap: Kubernetes, AWS, Go, React, TypeScript`,
                `Cert: Meta AI Hackathon (Approved), Visual Agents ML`,
                `Shell: bash v5.2-interactive`,
                `Theme: Cyber Neon (60% Black, 30% Cyan, 10% Green)`
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
        desc: "Perfil profesional y resumen técnico.",
        action: () => {
            return [
                "<span class='highlight'>PERFIL PROFESIONAL // SANTIAGO SARMIENTO</span>",
                "--------------------------------------------------------",
                `Rol: ${developerData.bio.role}`,
                `Ubicación: ${developerData.bio.location}`,
                `Estado: <span class='ansi-success'>${developerData.bio.status}</span>`,
                "",
                developerData.bio.description,
                "",
                `Cita: "${developerData.bio.quote}"`,
                "",
                `Idiomas: Español (${developerData.languages[0].level} - Nativo) | Inglés (${developerData.languages[1].level} - Intermedio B2)`
            ].join("<br>");
        }
    },
    hackathon: {
        desc: "Detalles y etapas de la Meta AI Hackathon 2026.",
        action: () => {
            const h = developerData.metaHackathon;
            let out = [
                `<span class='highlight'>${h.title.toUpperCase()}</span>`,
                `Periodo: ${h.period} | Organización: ${h.organization}`,
                `Proyecto: <span class='ansi-success'>${h.project}</span>`,
                `Repositorio: <a href="${h.repo}" target="_blank" class="highlight">${h.repo}</a>`,
                "",
                h.summary,
                "",
                "Flujo cronológico del proceso:",
                "------------------------------"
            ];
            h.steps.forEach(s => {
                out.push(`  [Fase ${s.id}] <span class='highlight'>${s.date}</span> - ${s.title}`);
                out.push(`          ${s.desc}`);
            });
            return out.join("<br>");
        }
    },
    skills: {
        desc: "Árbol de tecnologías y habilidades técnicas.",
        action: () => {
            let out = [
                "<span class='highlight'>ÁRBOL DE HABILIDADES TÉCNICAS</span>",
                "----------------------------------------",
                "",
                "<span class='highlight'>[BACKEND & ARQUITECTURA (SOLID)]:</span>"
            ];
            developerData.skillsTree.backend.skills.forEach(s => {
                out.push(`  * <span class='highlight'>${s.name}</span> (${s.level}) - ${s.detail}`);
            });

            out.push("");
            out.push("<span class='highlight'>[FRONTEND & EXPERIENCIA WEB]:</span>");
            developerData.skillsTree.frontend.skills.forEach(s => {
                out.push(`  * <span class='highlight'>${s.name}</span> (${s.level}) - ${s.detail}`);
            });

            out.push("");
            out.push("<span class='highlight'>[DEVOPS, AUTOMATIZACIÓN & IA]:</span>");
            developerData.skillsTree.automationCloud.skills.forEach(s => {
                out.push(`  * <span class='highlight'>${s.name}</span> (${s.level}) - ${s.detail}`);
            });

            out.push("");
            out.push("Escribe <span class='highlight'>roadmap</span> para ver las tecnologías en aprendizaje activo.");
            return out.join("<br>");
        }
    },
    roadmap: {
        desc: "Tecnologías en aprendizaje activo (Repositorio: SantiSarmiento11).",
        action: () => {
            let out = [
                "<span class='highlight'>ROADMAP // EN APRENDIZAJE ACTIVO (SantiSarmiento11)</span>",
                "----------------------------------------------------------------",
                developerData.skillsTree.learningRoadmap.desc,
                ""
            ];
            developerData.skillsTree.learningRoadmap.skills.forEach(s => {
                out.push(`  * <span class='ansi-success'>${s.name}</span> &rarr; Área: ${s.category}`);
            });
            return out.join("<br>");
        }
    },
    projects: {
        desc: "Proyectos y repositorios en GitHub.",
        action: () => {
            let out = [
                "<span class='highlight'>PROYECTOS DESTACADOS // GITHUB REPOSITORIES</span>",
                "---------------------------------------------------------",
                ""
            ];
            developerData.projects.forEach((proj, idx) => {
                out.push(`[${idx + 1}] <span class='highlight'>${proj.title}</span> [${proj.badge}]`);
                out.push(`    Descripción: ${proj.desc}`);
                out.push(`    Stack:       ${proj.stack.join(", ")}`);
                out.push(`    GitHub:      <a href="${proj.repo}" target="_blank" class="highlight">${proj.repo}</a>`);
                out.push("");
            });
            return out.join("<br>");
        }
    },
    timeline: {
        desc: "Línea de tiempo de trayectoria y formación.",
        action: () => {
            let out = [
                "<span class='highlight'>LÍNEA DE TIEMPO & FORMACIÓN ACADÉMICA</span>",
                "------------------------------------------------",
                ""
            ];
            developerData.timeline.forEach(t => {
                out.push(`  * <span class='highlight'>${t.period}</span> [${t.tag}]`);
                out.push(`    ${t.title} - ${t.institution}`);
                out.push(`    ${t.desc}`);
                out.push("");
            });
            return out.join("<br>");
        }
    },
    contact: {
        desc: "Enlaces y medios de contacto profesional.",
        action: () => {
            return [
                "<span class='highlight'>CANALES DE CONTACTO PROFESIONAL</span>",
                "-----------------------------------------",
                `Email:    <a href="mailto:${developerData.contact.email}" class="highlight">${developerData.contact.email}</a>`,
                `GitHub:   <a href="${developerData.contact.github}" target="_blank" class="highlight">${developerData.contact.github}</a>`,
                `LinkedIn: <a href="${developerData.contact.linkedin}" target="_blank" class="highlight">${developerData.contact.linkedin}</a>`,
                `Lugar:    ${developerData.contact.location}`
            ].join("<br>");
        }
    },
    clear: {
        desc: "Limpia la pantalla de la terminal.",
        action: () => {
            if (terminalHistory) terminalHistory.innerHTML = "";
            return "";
        }
    },
    exit: {
        desc: "Cierra la ventana de la terminal interactiva.",
        action: () => {
            if (typeof toggleTerminalDrawer === "function") {
                toggleTerminalDrawer(false);
            }
            return "Cerrando terminal...";
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
    
    const normCmd = cmd.toLowerCase();
    
    // Create command line entry in history
    const cmdLine = document.createElement("div");
    cmdLine.className = "terminal-cmd-entry";
    cmdLine.innerHTML = `
        <span class="prompt-user">guest@sarmiento</span><span class="prompt-separator">:</span><span class="prompt-path">~/portfolio</span><span class="prompt-char">$</span> <span class="cmd-run-text">${escapeHtml(trimmed)}</span>
    `;
    terminalHistory.appendChild(cmdLine);
    
    // Process response
    const respLine = document.createElement("div");
    respLine.className = "terminal-resp-entry";
    
    if (commands[normCmd]) {
        try {
            const out = commands[normCmd].action(arg);
            if (out !== "") {
                respLine.innerHTML = out;
                terminalHistory.appendChild(respLine);
            }
        } catch (e) {
            respLine.innerHTML = `<span class="ansi-warn">Error ejecutando comando: ${e.message}</span>`;
            terminalHistory.appendChild(respLine);
        }
    } else {
        respLine.innerHTML = `Comando no reconocido: <span class="ansi-warn">${escapeHtml(cmd)}</span>. Escribe <span class="highlight">help</span> para ver los comandos válidos.`;
        terminalHistory.appendChild(respLine);
    }
    
    // Auto-scroll to bottom
    terminalHistory.scrollTop = terminalHistory.scrollHeight;
    
    // Save in session history
    commandHistory.push(trimmed);
    historyIndex = commandHistory.length;
}

// Escape HTML utility
function escapeHtml(text) {
    const div = document.createElement("div");
    div.innerText = text;
    return div.innerHTML;
}

// Event Listeners for Terminal Input
if (terminalInput) {
    terminalInput.addEventListener("keydown", (e) => {
        // Reproducir sonido sintético de teclado si está disponible
        if (typeof playKeySound === "function") {
            playKeySound();
        }

        if (e.key === "Enter") {
            e.preventDefault();
            const val = terminalInput.value;
            terminalInput.value = "";
            updateCursorPosition();
            runCommand(val);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (commandHistory.length > 0 && historyIndex > 0) {
                historyIndex--;
                terminalInput.value = commandHistory[historyIndex];
                updateCursorPosition();
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                terminalInput.value = commandHistory[historyIndex];
                updateCursorPosition();
            } else {
                historyIndex = commandHistory.length;
                terminalInput.value = "";
                updateCursorPosition();
            }
        } else if (e.key === "Tab") {
            e.preventDefault();
            const currentVal = terminalInput.value.toLowerCase().trim();
            if (currentVal) {
                const keys = Object.keys(commands);
                const matches = keys.filter(k => k.startsWith(currentVal));
                if (matches.length === 1) {
                    terminalInput.value = matches[0];
                    updateCursorPosition();
                } else if (matches.length > 1) {
                    const matchLine = document.createElement("div");
                    matchLine.innerHTML = `<span class="highlight">Coincidencias:</span> ${matches.join("  ")}`;
                    terminalHistory.appendChild(matchLine);
                    terminalHistory.scrollTop = terminalHistory.scrollHeight;
                }
            }
        }
    });

    terminalInput.addEventListener("input", updateCursorPosition);
}
