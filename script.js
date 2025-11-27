function abrirAba(aba) {
    const secoes = document.querySelectorAll(".conteudo");
    const botoes = document.querySelectorAll(".aba");

    secoes.forEach(sec => sec.classList.add("escondido"));
    botoes.forEach(bt => bt.classList.remove("active"));

    document.getElementById(aba).classList.remove("escondido");
    event.target.classList.add("active");
}
