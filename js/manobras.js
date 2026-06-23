let paginaAtual = 1
const porPagina = 10

function mostrarManobras(lista){
    const corpo = document.getElementById("corpo-tabela");
    const inicio = (paginaAtual - 1) * porPagina;
    const fim = inicio + porPagina;
    const paginados = lista.slice(inicio, fim);

    corpo.innerHTML = "";
    paginados.forEach((m) => {
        const indexOriginal = manobras.indexOf(m)
        corpo.innerHTML += `
        <tr onclick="abrirModal(${indexOriginal})">
            <td>${m.nome}</td>
            <td>${m.categoria}</td>
            <td class="dificuldade-${m.dificuldade.toLowerCase()}">${m.dificuldade}</td>
        </tr>`
    })
    mostrarPaginacao(lista)
}

function mostrarPaginacao(lista) {
    const total = Math.ceil(lista.length / porPagina);
    const container = document.getElementById("paginacao");
    container.innerHTML = ""

    for (let i = 1; i <= total; i++) {
        container.innerHTML += `<button class="${i === paginaAtual ? 'pagina-ativa' : ''}"
        onclick="irParaPagina(${i})">${i}</button>`
    }

}

function irParaPagina(pagina){
    paginaAtual = pagina
    aplicarFiltros()
    window.scrollTo(0, 0)
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
    paginaAtual = 1;
}

document.getElementById("pesquisa").addEventListener("input", aplicarFiltros);

mostrarManobras(manobras);
atualizarContador(manobras, "");