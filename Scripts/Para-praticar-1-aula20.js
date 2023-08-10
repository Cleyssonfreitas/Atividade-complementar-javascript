const nomes = [];
const idades = [];

function adicionarDados() {
    const nomeInput = document.getElementById("nome");
    const idadeInput = document.getElementById("idade");

    const nome = nomeInput.value;
    const idade = idadeInput.value;

    if (nome && idade) {
        nomes.push(nome);
        idades.push(idade);

        nomeInput.value = "";
        idadeInput.value = "";

        alert("Dados adicionados com sucesso!");
    } else {
        alert("Por favor, insira um nome e uma idade.");
    }
}

function visualizarDados() {
    console.log("Nomes:", nomes);
    console.log("Idades:", idades);
}