/**
 * SarmientoOS - Developer Portfolio Orchestrator
 * Arquitectura Minimalista Cyber Neon
 */

window.addEventListener("DOMContentLoaded", () => {
    console.log("SarmientoOS Developer Portfolio initialized.");

    // Resaltar navegación activa al hacer scroll
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    function highlightNavOnScroll() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", highlightNavOnScroll);

    // Saludo inicial en la consola CLI
    const terminalHistory = document.getElementById("terminal-history");
    if (terminalHistory && terminalHistory.children.length === 0) {
        const welcome = document.createElement("div");
        welcome.className = "system-welcome";
        welcome.innerHTML = `
            <p class="ansi-success">[OK] Entorno SarmientoOS inicializado en modo Cyber Neon.</p>
            <p>Escribe <span class="highlight">help</span> para consultar los comandos disponibles o <span class="highlight">hackathon</span> para ver el caso Meta AI.</p>
            <p class="text-dim" style="font-size: 11.5px; margin-top: 4px;">Atajo: Presiona [ESC] para cerrar esta ventana o [Ctrl + ~] para volver a abrirla.</p>
            <br>
        `;
        terminalHistory.appendChild(welcome);
    }
});
