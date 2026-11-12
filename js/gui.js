/**
 * SarmientoOS - GUI Interactions, Modal Lightbox, and Mobile Navigation
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Menu Toggle
    const mobileToggle = document.getElementById("mobile-nav-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener("click", () => {
            const isFlex = navMenu.style.display === "flex";
            navMenu.style.display = isFlex ? "none" : "flex";
            if (!isFlex) {
                navMenu.style.flexDirection = "column";
                navMenu.style.position = "absolute";
                navMenu.style.top = "70px";
                navMenu.style.left = "0";
                navMenu.style.right = "0";
                navMenu.style.background = "var(--bg-surface-glass)";
                navMenu.style.padding = "20px";
                navMenu.style.borderBottom = "1px solid var(--cyan-border)";
            }
        });

        // Close mobile nav when clicking a link
        const navLinks = navMenu.querySelectorAll(".nav-link");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                if (window.innerWidth <= 768) {
                    navMenu.style.display = "none";
                }
            });
        });
    }

    // 2. Terminal Trigger Buttons
    const terminalTriggers = document.querySelectorAll(".js-trigger-terminal");
    terminalTriggers.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            toggleTerminalDrawer(true);
        });
    });

    const terminalDrawerClose = document.getElementById("drawer-close-btn");
    const terminalDotClose = document.getElementById("terminal-dot-close");
    if (terminalDrawerClose) {
        terminalDrawerClose.addEventListener("click", () => toggleTerminalDrawer(false));
    }
    if (terminalDotClose) {
        terminalDotClose.addEventListener("click", () => toggleTerminalDrawer(false));
    }

    // 3. Meta AI Hackathon Story Flow - Lightbox Hooks
    const flowCards = document.querySelectorAll(".js-flow-step");
    flowCards.forEach(card => {
        card.addEventListener("click", () => {
            const imgSrc = card.getAttribute("data-img");
            const title = card.getAttribute("data-title");
            const desc = card.getAttribute("data-desc");
            if (imgSrc) {
                openLightbox(imgSrc, title, desc);
            }
        });
    });

    // 4. Diploma Lightbox Trigger (Voxel 51 Hackathon)
    const diplomaTriggers = document.querySelectorAll(".js-view-diploma");
    diplomaTriggers.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const imgSrc = btn.getAttribute("data-diploma") || "img/Hackaton Voxel 51 (Visual Agents)/diploma.jpg";
            openLightbox(
                imgSrc,
                "Certificado de Hackaton — Visual Agents (Voxel 51)",
                "Evidencia verificable de participación y liderazgo en desarrollo de software de monitoreo y prevención vial con IA."
            );
        });
    });

    // 5. Contact Form Simulation
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector("button[type='submit']");
            const originalText = submitBtn.innerHTML;

            submitBtn.disabled = true;
            submitBtn.innerHTML = `<svg class="icon-svg size-sm" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg> Enviando...`;

            setTimeout(() => {
                submitBtn.innerHTML = `<svg class="icon-svg size-sm" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> ¡Mensaje Enviado con Éxito!`;
                submitBtn.style.background = "var(--neon-green)";
                submitBtn.style.color = "var(--bg-space)";
                contactForm.reset();

                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = "";
                    submitBtn.style.color = "";
                }, 4000);
            }, 900);
        });
    }
});
