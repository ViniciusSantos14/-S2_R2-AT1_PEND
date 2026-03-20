const botao = document.getElementById("btnAdd");
const input = document.getElementById("inputItem");
const lista = document.getElementById("lista");

botao.addEventListener("click", () => {
  const texto = input.value;

  if (texto.trim() === "") return;

  const li = document.createElement("li");
  li.className = "list-group-item";
  li.innerText = texto;

  lista.appendChild(li);

  input.value = "";
});