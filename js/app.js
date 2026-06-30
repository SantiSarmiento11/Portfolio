/**
 * SarmientoOS - Main Program Entry & Event Registries
 */

// Boot elements caching
const bootSequence = document.getElementById("boot-sequence");
const bootLogOutput = document.getElementById("boot-log-output");
const bootPressKey = document.getElementById("boot-press-key");

// Statusbar buttons
const toggleThemeBtn = document.getElementById("toggle-theme-btn");
const toggleBlurBtn = document.getElementById("toggle-blur-btn");
const toggleGuiBtn = document.getElementById("toggle-gui-btn");

// Window top dots
const windowCloseBtn = document.getElementById("window-close-btn");
const windowMinBtn = document.getElementById("window-min-btn");
const windowMaxBtn = document.getElementById("window-max-btn");

// Dropdown command palette
const dropdownBtn = document.getElementById("commands-dropdown-btn");
const dropdownMenu = document.getElementById("commands-menu");

// Docker pulling sequence simulation
const bootLogs = [
    "[docker] Pulling library/sarmiento-dev-env:latest from registry...",
    "[docker] Pulling fs layer [33ff33e56]... 12.3MB/12.3MB - Pull complete",
    "[docker] Pulling fs layer [ffb000b90]... 42.1MB/42.1MB - Pull complete",
    "[docker] Pulling fs layer [61afef781]... 8.4MB/8.4MB - Pull complete",
    "[docker] Digest: sha256:d48e1f2988c0d0a3be8c98c37976e18f222abf7535b1d...",
    "[docker] Status: Downloaded newer image for sarmiento-dev-env:latest",
    "[docker] Container local-runtime-env starting up...",
    "[system] Mounting shared workspace volume: /var/www/portfolio... OK",
    "[system] Initializing node v18.16.0 virtual ecosystem...",
    "[system] Running task: yarn install... Up-to-date (0.42s)",
    "[system] Launching developer dashboard hooks on port 3000...",
    "[system] Web server listening on http://localhost:3000",
    "[system] Attaching session local-tty0 to workspace terminal..."
];

let bootLogIdx = 0;
let bootTimer = null;

function printBootLogs() {
    if (!bootLogOutput || !bootSequence) return;
    
    if (bootLogIdx < bootLogs.length) {
        const p = document.createElement("p");
        p.textContent = bootLogs[bootLogIdx];
        if (bootLogs[bootLogIdx].includes("OK") || bootLogs[bootLogIdx].includes("complete")) {
            p.className = "ansi-success";
        } else if (bootLogs[bootLogIdx].includes("http")) {
            p.className = "ansi-info";
        }
        bootLogOutput.appendChild(p);
        bootSequence.scrollTop = bootSequence.scrollHeight;
        bootLogIdx++;
        bootTimer = setTimeout(printBootLogs, Math.random() * 120 + 30);
    } else {
        bootPressKey.style.display = "block";
        currentMode = "BOOT_WAIT"; // Declared globally in effects.js
    }
}

function skipBoot() {
    clearTimeout(bootTimer);
    if (!bootLogOutput || !bootSequence) return;
    
    while (bootLogIdx < bootLogs.length) {
        const p = document.createElement("p");
        p.textContent = bootLogs[bootLogIdx];
        if (bootLogs[bootLogIdx].includes("OK") || bootLogs[bootLogIdx].includes("complete")) {
            p.className = "ansi-success";
        } else if (bootLogs[bootLogIdx].includes("http")) {
            p.className = "ansi-info";
        }
        bootLogOutput.appendChild(p);
        bootLogIdx++;
    }
    bootSequence.scrollTop = bootSequence.scrollHeight;
    bootPressKey.style.display = "block";
    currentMode = "BOOT_WAIT";
}

// ---------------------------------------------------------
// DOM EVENT LISTENERS
// ---------------------------------------------------------
window.addEventListener("load", () => {
    // Iniciar directamente en modo visual (GUI), omitir boot logs inicialmente
    // printBootLogs();
    
    // Statusbar Toggles
    if (toggleThemeBtn) toggleThemeBtn.addEventListener("click", cycleTheme); // Declared globally in effects.js
    if (toggleBlurBtn) toggleBlurBtn.addEventListener("click", toggleBlur); // Declared globally in effects.js
    if (toggleGuiBtn) toggleGuiBtn.addEventListener("click", toggleMode); // Declared globally in gui.js
    
    // Window control buttons
    if (windowCloseBtn) windowCloseBtn.addEventListener("click", closeSession); // Declared globally in effects.js
    if (windowMinBtn) windowMinBtn.addEventListener("click", minimizeWindow); // Declared globally in effects.js
    if (windowMaxBtn) windowMaxBtn.addEventListener("click", maximizeWindow); // Declared globally in effects.js
    
    // Dropdown toggle
    if (dropdownBtn) {
        dropdownBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const isOpen = dropdownBtn.getAttribute("aria-expanded") === "true";
            dropdownBtn.setAttribute("aria-expanded", !isOpen);
            dropdownBtn.parentElement.classList.toggle("open");
            
            // Ocultar ayuda de celulares al abrir el menú de comandos
            const mobileTooltip = document.getElementById("mobile-helper-tooltip");
            if (mobileTooltip) {
                mobileTooltip.style.display = "none";
            }
        });
        
        document.addEventListener("click", () => {
            dropdownBtn.setAttribute("aria-expanded", "false");
            dropdownBtn.parentElement.classList.remove("open");
        });
    }
    
    // Command menu options click
    const cmdLinks = document.querySelectorAll(".cmd-link");
    cmdLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const cmd = link.getAttribute("data-cmd");
            
            if (dropdownBtn) {
                dropdownBtn.setAttribute("aria-expanded", "false");
                dropdownBtn.parentElement.classList.remove("open");
            }
            
            if (isAutoTyping || !isSessionActive) return; // Declared globally
            
            // Switch layout first if currently in GUI dashboard
            if (currentMode === "GUI") {
                toggleMode(); // Declared globally in gui.js
            }
            
            autoTypeAndRun(cmd); // Declared globally in autotyper.js
        });
    });
});

// Global Keyboard Hotkeys
document.addEventListener("keydown", (e) => {
    if (!isSessionActive) return;
    
    // Transición de BOOT_WAIT a CLI al presionar ENTER
    if (currentMode === "BOOT_WAIT" && e.key === "Enter") {
        e.preventDefault();
        
        const bootSequence = document.getElementById("boot-sequence");
        const cliMode = document.getElementById("cli-mode");
        const currentModeLbl = document.getElementById("current-mode-lbl");
        
        if (bootSequence && cliMode) {
            bootSequence.style.display = "none";
            cliMode.style.display = "flex";
            currentMode = "CLI";
            if (currentModeLbl) currentModeLbl.textContent = "CLI";
            
            // Enfocar la entrada del terminal
            const terminalInput = document.getElementById("terminal-input");
            if (terminalInput) {
                setTimeout(() => {
                    terminalInput.focus();
                    if (typeof updateCursorPosition === "function") {
                        updateCursorPosition();
                    }
                }, 50);
            }
        }
        return;
    }
    
    if (currentMode === "BOOT" || currentMode === "BOOT_WAIT") return;
    
    if (e.key === "F9") {
        e.preventDefault();
        toggleMode();
    }
    
    if (currentMode === "GUI") {
        if (e.key === "F1") { e.preventDefault(); document.getElementById("tab-btn-home").click(); }
        if (e.key === "F2") { e.preventDefault(); document.getElementById("tab-btn-sys").click(); }
        if (e.key === "F3") { e.preventDefault(); document.getElementById("tab-btn-about").click(); }
        if (e.key === "F4") { e.preventDefault(); document.getElementById("tab-btn-skills").click(); }
        if (e.key === "F5") { e.preventDefault(); document.getElementById("tab-btn-projects").click(); }
        if (e.key === "F6") { e.preventDefault(); document.getElementById("tab-btn-contact").click(); }
    }
});
