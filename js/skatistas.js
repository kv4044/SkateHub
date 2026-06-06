function mostrarSkatistas(lista) {
    const container = document.getElementById("lista-skatistas");
    container.innerHTML = ""
    lista.forEach((s, index) => {
        const indexOriginal = skatistas.indexOf(s)
        container.innerHTML += `
        <div class="card" onclick="abrirModal(${indexOriginal})">
            <img src="${s.foto}" alt="${s.nome}">
            <div class="card-info">
                <h3>${s.nome}</h3>
                <p>${s.pais}</p>
                <p>${s.modalidade}</p>
                
            </div>
        </div>`
    })
}

function abrirModal(index) {
    const s = skatistas[index]
    document.getElementById("modal-foto").src = s.foto;
    document.getElementById("modal-foto").alt = s.nome;
    document.getElementById("modal-nome").textContent = s.nome;
    document.getElementById("modal-pais").innerHTML = "<strong>País:</strong> " + s.pais;
    document.getElementById("modal-modalidade").innerHTML = "<strong>Modalidade:</strong> " + s.modalidade
    document.getElementById("modal-bio").innerHTML = "<strong>Biografia: </strong>"+s.bio;
    document.getElementById("modal-conquistas").innerHTML ="<strong>Principais conquistas:</strong> " +
        "<ul>"+s.conquistas.map(c => `<li>${c}</li>`).join("") + "</ul>";
    document.getElementById("modal").classList.add("aberto");
}

function fecharModal() {
    document.getElementById("modal").classList.remove("aberto");
}

function atualizarContador(lista, texto) {
    const contador = document.getElementById("contador");
    if (texto === "") {
        contador.textContent = lista.length + " skatistas encontrados";
    } else {
        contador.textContent = lista.length + " resultados para '" + texto + "'";
    }
}

document.getElementById("pesquisa").addEventListener("input", function() {
    const texto = this.value.toLowerCase();
    const filtrados = skatistas.filter(s =>
    s.nome.toLowerCase().includes(texto) ||
    s.modalidade.toLowerCase().includes(texto) ||
    s.pais.toLowerCase().includes(texto)
    )
    mostrarSkatistas(filtrados)
    atualizarContador(filtrados, this.value);
})


mostrarSkatistas(skatistas)
atualizarContador(skatistas, "")