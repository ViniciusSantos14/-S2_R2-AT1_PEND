let nome = document.getElementById("nome");
let botao = document.querySelector("#botao");
let mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {
    mensagem.innerText = `Bem vindo ${nome.value}`;
});