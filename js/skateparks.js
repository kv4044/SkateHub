function mostrarSkateparks(lista) {
    const container = document.getElementById("lista-skateparks");
    container.innerHTML = ""
    lista.forEach((s) => {
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
}

document.getElementById("pesquisa").addEventListener("input",aplicarFiltros);

mostrarSkateparks(skateparks);
atualizarContador(skateparks, "");