document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("alterar-cor");
    const texto = document.getElementById("texto");

    // Função para mudar a cor do texto
    button.addEventListener("click", function() {
        const cores = ["blue", "green", "yellow"];
        const corAtual = texto.style.color;
        let novaCor = cores[(cores.indexOf(corAtual) + 1) % cores.length];
        texto.style.color = novaCor;
    });
});
