let item = document.querySelector("#item")
let botaoAdicionar = document.querySelector("#botaoAdicionar")
let listaItens = document.getElementById("listaItens")
let mensagem = document.getElementById("mensagem")

botaoAdicionar.addEventListener("click", () => {

    let texto = item.value.trim()

    if (texto === "") {

        mensagem.innerHTML = '<div class="alert alert-danger">Tarefa vazia!</div>' // 🔸 NOVO

    } else {

        let novoItem = document.createElement("li")
        novoItem.innerText = texto
        novoItem.className = "list-group-item"

        listaItens.appendChild(novoItem)

        item.value = ""

        mensagem.innerHTML = '<div class="alert alert-success">Tarefa adicionada!</div>' // 🔸 NOVO
    }

})