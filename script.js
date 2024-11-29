document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("modo-tema");

    // Função para alternar o tema
    button.addEventListener("click", () => {
        // Alternar a classe "claro" em elementos principais
        document.body.classList.toggle("claro");
        document.querySelector("header").classList.toggle("claro");
        document.querySelector("footer").classList.toggle("claro");

        // Atualizar o texto do botão com base no tema atual
        if (document.body.classList.contains("claro")) {
            button.textContent = "Modo Escuro";
        } else {
            button.textContent = "Modo Claro";
        }
    });
});
