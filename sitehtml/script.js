function abrirAba(id) {
    // esconder todas as seções
    document.querySelectorAll('.conteudo').forEach(section => {
        section.classList.add('escondido');
    });

    // desativar todos os botões
    document.querySelectorAll('.aba').forEach(btn => {
        btn.classList.remove('active');
    });

    // mostrar a aba clicada
    document.getElementById(id).classList.remove('escondido');

    // ativar botão clicado
    event.target.classList.add('active');
}