let texto = document.getElementById("texto")
let btnMudar = document.querySelector("#btnMudar")

btnMudar.addEventListener("click", () => {
    texto.innerText = "texto alterado"
})
