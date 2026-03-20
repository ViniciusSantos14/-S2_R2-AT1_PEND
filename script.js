let item = document.querySelector("#item")
let botaoAdicionar = document.querySelector("#botaoAdicionar")
let listaItens = document.getElementById("listaItens")

botaoAdicionar.addEventListener("click", () => {

    let texto = item.value

    if (texto !== "") {

        let novoItem = document.createElement("li")
        novoItem.className = "list-group-item"

        let span = document.createElement("span")
        span.innerText = texto

        let botaoRemover = document.createElement("button")
        botaoRemover.innerText = "Remover"

        botaoRemover.addEventListener("click", () => {
            novoItem.remove() 
        })

        novoItem.appendChild(span)
        novoItem.appendChild(botaoRemover)

        listaItens.appendChild(novoItem)

        item.value = ""
    }

})