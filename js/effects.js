/**
 * SarmientoOS - Window effects, Themes, and Session controls
 */

// Global State
let currentTheme = "dracula";
let isBlurActive = true;
let isSessionActive = true;
let currentMode = "BOOT"; // BOOT, CLI, GUI
let startTime = Date.now();

// DOM elements
const body = document.body;
const terminalWindow = document.querySelector(".terminal-window");
const themeLblActive = document.getElementById("theme-lbl-active");
const blurLblActive = document.getElementById("blur-lbl-active");

// Set Theme
function setTheme(theme) {
    body.classList.remove("theme-dracula", "theme-onedark", "theme-nord");
    if (theme === "dracula") {
        body.classList.add("theme-dracula");
        currentTheme = "dracula";
        themeLblActive.textContent = "Dracula";
    } else if (theme === "onedark") {
        body.classList.add("theme-onedark");
        currentTheme = "onedark";
        themeLblActive.textContent = "One Dark Pro";
    } else if (theme === "nord") {
        body.classList.add("theme-nord");
        currentTheme = "nord";
        themeLblActive.textContent = "Nord";
    }
}

// Cycle Themes
function cycleTheme() {
    if (currentTheme === "dracula") {
        setTheme("onedark");
    } else if (currentTheme === "onedark") {
        setTheme("nord");
    } else {
        setTheme("dracula");
    }
}

// Toggle Blur/Glassmorphism
function toggleBlur() {
    if (isBlurActive) {
        body.classList.remove("blur-active");
        blurLblActive.textContent = "NO";
        isBlurActive = false;
    } else {
        body.classList.add("blur-active");
        blurLblActive.textContent = "SI";
        isBlurActive = true;
    }
}

// Close Window (End Session)
function closeSession() {
    const cliMode = document.getElementById("cli-mode");
    const guiMode = document.getElementById("gui-mode");
    const bootSequence = document.getElementById("boot-sequence");
    const bootLogOutput = document.getElementById("boot-log-output");
    const bootPressKey = document.getElementById("boot-press-key");
    const currentModeLbl = document.getElementById("current-mode-lbl");
    
    if (isSessionActive) {
        isSessionActive = false;
        cliMode.style.display = "none";
        guiMode.style.display = "none";
        bootSequence.style.display = "flex";
        bootLogOutput.innerHTML = "<p class='ansi-warn'>[system] Terminal session local-tty0 closed by user request.</p><p>Click window action buttons or refresh page to restart container environment.</p>";
        bootPressKey.style.display = "none";
        currentMode = "CLOSED";
        currentModeLbl.textContent = "CLOSED";
    } else {
        // Restart Docker Container
        bootLogOutput.innerHTML = "";
        bootLogIdx = 0; // Declared globally in app.js
        isSessionActive = true;
        currentMode = "BOOT";
        printBootLogs(); // Declared globally in app.js
    }
}

// Minimize Window
function minimizeWindow() {
    terminalWindow.classList.toggle("is-minimized");
    if (terminalWindow.classList.contains("is-minimized")) {
        terminalWindow.style.transform = "scale(0.4) translateY(200px)";
        terminalWindow.style.opacity = "0.7";
    } else {
        terminalWindow.style.transform = "";
        terminalWindow.style.opacity = "";
    }
}

// Maximize Window
function maximizeWindow() {
    terminalWindow.classList.toggle("is-maximized");
    if (terminalWindow.classList.contains("is-maximized")) {
        terminalWindow.style.width = "100vw";
        terminalWindow.style.height = "100vh";
        terminalWindow.style.maxWidth = "100%";
        terminalWindow.style.maxHeight = "100%";
        terminalWindow.style.borderRadius = "0";
    } else {
        terminalWindow.style.width = "";
        terminalWindow.style.height = "";
        terminalWindow.style.maxWidth = "";
        terminalWindow.style.maxHeight = "";
        terminalWindow.style.borderRadius = "";
    }
    if (typeof updateCursorPosition === "function") {
        updateCursorPosition(); // Declared globally in cli.js
    }
}
