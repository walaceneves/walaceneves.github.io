document.addEventListener("DOMContentLoaded", () => {
    console.log("Site de Astronomia carregado com sucesso!");
});


document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("modo-tema");

    button.addEventListener("click", () => {
        // Alterna a classe "claro" no body
        document.body.classList.toggle("claro");
        document.querySelector("header").classList.toggle("claro");
        document.querySelector("footer").classList.toggle("claro");

        // Atualiza o texto do botão
        if (document.body.classList.contains("claro")) {
            button.textContent = "Modo Escuro";
        } else {
            button.textContent = "Modo Claro";
        }
    });
});
