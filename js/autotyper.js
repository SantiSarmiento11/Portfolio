/**
 * SarmientoOS - Dropdown actions Auto-Typer Helper
 */

let isAutoTyping = false;

function autoTypeAndRun(cmdText) {
    const terminalInput = document.getElementById("terminal-input");
    if (!terminalInput) return;
    
    isAutoTyping = true;
    terminalInput.value = "";
    terminalInput.disabled = true;
    updateCursorPosition(); // Declared globally in cli.js
    
    let index = 0;
    
    function typeNextChar() {
        if (index < cmdText.length) {
            terminalInput.value += cmdText[index];
            updateCursorPosition();
            index++;
            setTimeout(typeNextChar, Math.random() * 50 + 50);
        } else {
            setTimeout(() => {
                terminalInput.disabled = false;
                const cmdVal = terminalInput.value;
                terminalInput.value = "";
                updateCursorPosition();
                isAutoTyping = false;
                runCommand(cmdVal); // Declared globally in cli.js
                terminalInput.focus();
            }, 250);
        }
    }
    
    typeNextChar();
}
