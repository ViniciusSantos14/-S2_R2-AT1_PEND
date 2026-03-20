const botao = document.getElementById("btn");
const texto = document.getElementById("texto");

botao.addEventListener("click", () => {
  texto.innerText = "Texto alterado com JavaScript!";
});