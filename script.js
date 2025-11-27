/* ===== SISTEMA DE ABAS ===== */
function abrirAba(aba) {
    const secoes = document.querySelectorAll(".conteudo");
    const botoes = document.querySelectorAll(".aba");

    secoes.forEach(sec => sec.classList.add("escondido"));
    botoes.forEach(btn => btn.classList.remove("active"));

    document.getElementById(aba).classList.remove("escondido");
    event.target.classList.add("active");
}


/* ===== EFEITO MATRIX NO FUNDO ===== */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00eaff";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 40);
