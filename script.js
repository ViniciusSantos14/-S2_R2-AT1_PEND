let item = document.querySelector("#item")
let botaoAdicionar = document.querySelector("#botaoAdicionar")
let listaItens = document.getElementById("listaItens")

botaoAdicionar.addEventListener("click", () => {

    let texto = item.value

    if (texto !== "") {

        let novoItem = document.createElement("li")
        novoItem.className = "list-group-item"

        let checkbox = document.createElement("input") 
        checkbox.type = "checkbox"

        let span = document.createElement("span")
        span.innerText = texto

        let botaoRemover = document.createElement("button")
        botaoRemover.innerText = "Remover"
        botaoRemover.style.marginLeft = "10px" 

        checkbox.addEventListener("change", () => { 
            if (checkbox.checked) { 
                span.style.textDecoration = "line-through"
            } else {
                span.style.textDecoration = "none"
            }
        })

        botaoRemover.addEventListener("click", () => {
            novoItem.remove()
        })

        novoItem.appendChild(checkbox)
        novoItem.appendChild(span)
        novoItem.appendChild(botaoRemover)

        listaItens.appendChild(novoItem)

        item.value = ""
    }

})
