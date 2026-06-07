function mostrarManobras(lista){
    const corpo = document.getElementById("corpo-tabela");
    corpo.innerHTML = "";
    lista.forEach((m) => {
        const indexOriginal = manobras.indexOf(m)
        corpo.innerHTML += `
        <tr onclick="abrirModal(${indexOriginal})">
            <td>${m.nome}</td>
            <td>${m.categoria}</td>
            <td class="dificuldade-${m.dificuldade.toLowerCase()}">${m.dificuldade}</td>
        </tr>`
    })
}

function abrirModal(index){
    const m = manobras[index];
    document.getElementById("modal-nome").innerHTML = m.nome
    document.getElementById("modal-categoria").innerHTML = "<strong>Categoria:</strong> " + m.categoria
    document.getElementById("modal-dificuldade").innerHTML = "<strong>Dificuldade:</strong> " + m.dificuldade
    document.getElementById("modal-descricao").innerHTML = m.descricao
    document.getElementById("modal-video").src = m.video
    document.getElementById("modal").classList.add("aberto")
}

function fecharModal(){
    document.getElementById("modal-video").src = ""
    document.getElementById("modal").classList.remove("aberto")
}

function atualizarContador(lista, texto){
    const contador = document.getElementById("contador");
    if (texto === ""){
        contador.textContent = lista.length + " manobras encontradas"
    } else {
        contador.textContent = lista.length + " resultado para '" + texto + "'"
    }
}


let categoriaAtiva = "Todos"
let dificuldadeAtiva = "Todas"

function setCategoria(valor){
    categoriaAtiva = valor
    aplicarFiltros()
}

function setDificuldade(valor){
    dificuldadeAtiva = valor
    aplicarFiltros()
}

function aplicarFiltros(){
    const texto = document.getElementById("pesquisa").value.toLowerCase();
    const filtradas = manobras.filter(m  =>
        (categoriaAtiva === "Todos" || m.categoria === categoriaAtiva) &&
        (dificuldadeAtiva === "Todas" || m.dificuldade === dificuldadeAtiva) &&
        (texto === "" || m.nome.toLowerCase().includes(texto))
    )
    mostrarManobras(filtradas);
    atualizarContador(filtradas, texto);
}

document.getElementById("pesquisa").addEventListener("input", aplicarFiltros);

mostrarManobras(manobras);
atualizarContador(manobras, "");