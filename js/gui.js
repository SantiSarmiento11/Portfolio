/**
 * SarmientoOS - GUI/TUI tab navigation and CPU metrics fluctuation updates
 */

const tuiTabs = document.querySelectorAll(".tui-tab");
const tuiPanels = document.querySelectorAll(".tui-panel");
const cliMode = document.getElementById("cli-mode");
const guiMode = document.getElementById("gui-mode");
const currentModeLbl = document.getElementById("current-mode-lbl");

// Tabs selection handler
tuiTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const targetPanelId = tab.getAttribute("aria-controls");
        
        tuiTabs.forEach(t => {
            t.classList.remove("active");
            t.setAttribute("aria-selected", "false");
        });
        tuiPanels.forEach(p => {
            p.classList.remove("active");
            p.style.display = "none";
        });
        
        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");
        const activePanel = document.getElementById(targetPanelId);
        if (activePanel) {
            activePanel.classList.add("active");
            activePanel.style.display = "block";
        }
    });
});

// Switch layouts (Terminal CLI vs Visual TUI)
function toggleMode() {
    if (!isSessionActive) return; // Declared globally in effects.js
    
    if (currentMode === "CLI") {
        cliMode.style.display = "none";
        guiMode.style.display = "flex";
        currentMode = "GUI";
        currentModeLbl.textContent = "VISUAL";
        
        fluctuateCpuStats();
    } else if (currentMode === "GUI") {
        guiMode.style.display = "none";
        cliMode.style.display = "flex";
        currentMode = "CLI";
        currentModeLbl.textContent = "CLI";
        
        const terminalInput = document.getElementById("terminal-input");
        if (terminalInput) {
            setTimeout(() => {
                terminalInput.focus();
                updateCursorPosition();
            }, 50);
        }
    }
}

// Fluctuar el gráfico de CPU de la GUI para darle dinamismo
function fluctuateCpuStats() {
    if (currentMode !== "GUI") return;
    const cpu0Fill = document.querySelector("#panel-sys .sys-bar:nth-child(1) .bar-fill");
    const cpu0Lbl = document.querySelector("#panel-sys .sys-bar:nth-child(1) .bar-lbl");
    const cpu1Fill = document.querySelector("#panel-sys .sys-bar:nth-child(2) .bar-fill");
    const cpu1Lbl = document.querySelector("#panel-sys .sys-bar:nth-child(2) .bar-lbl");
    
    if (cpu0Fill && cpu1Fill) {
        const val0 = Math.floor(Math.random() * 40) + 15; // 15% - 55%
        const val1 = Math.floor(Math.random() * 50) + 10; // 10% - 60%
        
        cpu0Fill.style.width = val0 + "%";
        cpu1Fill.style.width = val1 + "%";
        
        cpu0Lbl.textContent = `CPU 0: ${val0}%`;
        cpu1Lbl.textContent = `CPU 1: ${val1}%`;
    }
}
setInterval(fluctuateCpuStats, 2000);
