/**
 * SarmientoOS - Audio Synthesis & UI Effects
 * Cyber Neon Portfolio & Web Audio Engine
 */

let audioCtx = null;

// Inicializador de Web Audio API bajo interacción del usuario
function initAudio() {
    if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
            audioCtx = new AudioContext();
        }
    }
}

// Reproducción de sonido de tipeo mecánico sintético
function playKeySound() {
    try {
        initAudio();
        if (!audioCtx || audioCtx.state !== "running") return;

        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        // Frecuencia sutil para simular switch mecánico
        const freq = 380 + (Math.random() * 80 - 40);
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        osc.type = "sine";

        gain.gain.setValueAtTime(0.015, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.04);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + 0.04);
    } catch (e) {
        // Silencio en navegadores con restricciones de audio
    }
}

// Desplegar / Ocultar la Terminal Drawer
function toggleTerminalDrawer(forceState) {
    initAudio();
    const drawer = document.getElementById("terminal-drawer");
    const terminalInput = document.getElementById("terminal-input");
    
    if (!drawer) return;

    const isOpen = drawer.classList.contains("open");
    const shouldOpen = (typeof forceState === "boolean") ? forceState : !isOpen;

    if (shouldOpen) {
        drawer.classList.add("open");
        if (terminalInput) {
            setTimeout(() => {
                terminalInput.focus();
                if (typeof updateCursorPosition === "function") {
                    updateCursorPosition();
                }
            }, 100);
        }
    } else {
        drawer.classList.remove("open");
    }
}

// Universal Lightbox Modal
function openLightbox(imgSrc, title, caption) {
    const lightbox = document.getElementById("universal-lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxTitle = document.getElementById("lightbox-title");
    const lightboxCaption = document.getElementById("lightbox-caption");

    if (!lightbox || !lightboxImg) return;

    lightboxImg.src = imgSrc;
    lightboxImg.alt = title || "Captura del proyecto";
    if (lightboxTitle) lightboxTitle.textContent = title || "Visualización en Alta Resolución";
    if (lightboxCaption) lightboxCaption.textContent = caption || "";

    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    const lightbox = document.getElementById("universal-lightbox");
    if (!lightbox) return;

    lightbox.classList.remove("active");
    document.body.style.overflow = "";
}

// Global Event Listeners para Lightbox y Atajos
window.addEventListener("DOMContentLoaded", () => {
    // Cerrar lightbox con tecla ESC
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeLightbox();
            const drawer = document.getElementById("terminal-drawer");
            if (drawer && drawer.classList.contains("open")) {
                toggleTerminalDrawer(false);
            }
        }
        
        // Atajo para abrir la terminal con Ctrl + ` o F9
        if ((e.ctrlKey && e.key === "`") || e.key === "F9") {
            e.preventDefault();
            toggleTerminalDrawer();
        }
    });

    // Cerrar haciendo clic fuera del modal
    const lightbox = document.getElementById("universal-lightbox");
    if (lightbox) {
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    const lightboxCloseBtn = document.getElementById("lightbox-close-btn");
    if (lightboxCloseBtn) {
        lightboxCloseBtn.addEventListener("click", closeLightbox);
    }
});
