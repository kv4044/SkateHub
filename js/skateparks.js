let paginaAtual = 1
const porPagina = 4


function mostrarSkateparks(lista) {
    const container = document.getElementById("lista-skateparks");
    const inicio = (paginaAtual - 1) * porPagina;
    const fim = inicio + porPagina;
    const paginados = lista.slice(inicio, fim);

    container.innerHTML = ""
    paginados.forEach((s) => {
        const indexOriginal = skateparks.indexOf(s)
        container.innerHTML += `
        <div class="card" onclick="abrirModal(${indexOriginal})">
            <img src="${s.imagem}" alt="${s.nome}">
            <div class="card-info">
                <h3>${s.nome}</h3>
                <p>${s.cidade}</p>
                <p>${s.dificuldade}</p>
            </div>
        </div>`
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

}function irParaPagina(pagina){
    paginaAtual = pagina
    aplicarFiltros()
    window.scrollTo(0, 0)
}

function abrirModal(index) {
    const s = skateparks[index]
    document.getElementById("modal-foto").src = s.imagem;
    document.getElementById("modal-foto").alt = s.nome;
    document.getElementById("modal-nome").textContent = s.nome;
    document.getElementById("modal-cidade").innerHTML = "<strong>Cidade:</strong> " + s.cidade;
    document.getElementById("modal-dificuldade").innerHTML = "<strong>Dificuldade:</strong> " + s.dificuldade
    document.getElementById("modal-tipo").innerHTML = "<strong>Tipo: </strong>"+s.tipo;
    document.getElementById("modal-obstaculo").innerHTML ="<strong>Principais obstáculos:</strong> " +
        "<ul>"+s.obstaculos.map(c => `<li>${c}</li>`).join("") + "</ul>";
    document.getElementById("modal").classList.add("aberto");
}

function fecharModal() {
    document.getElementById("modal").classList.remove("aberto");
}


function atualizarContador(lista, texto) {
    const contador = document.getElementById("contador");
    if (texto === "") {
        contador.textContent = lista.length + " skateparks encontrados";
    } else {
        contador.textContent = lista.length + " resultados para '" + texto + "'";
    }
}

let tipoAtiva = "Todos"
let dificuldadeAtiva = "Todas"

function setTipo(valor) {
    tipoAtiva = valor;
    aplicarFiltros()
}

function setDificuldade(valor) {
    dificuldadeAtiva = valor;
    aplicarFiltros()
}

function aplicarFiltros() {
    const texto = document.getElementById("pesquisa").value.toLowerCase();
    const filtradas = skateparks.filter(s =>
        (tipoAtiva === "Todos" || s.tipo === tipoAtiva) &&
        (dificuldadeAtiva === "Todas" || s.dificuldade === dificuldadeAtiva) &&
        (texto === "" || s.nome.toLowerCase().includes(texto))
    )
    mostrarSkateparks(filtradas);
    atualizarContador(filtradas, texto);
    paginaAtual = 1;
}

document.getElementById("pesquisa").addEventListener("input",aplicarFiltros);

document.addEventListener("DOMContentLoaded", function () {
    mostrarSkateparks(skateparks);
    atualizarContador(skateparks, "");

    document.getElementById("demo").innerHTML = "HTML is loaded!";
});