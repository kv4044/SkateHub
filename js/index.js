function mostrarDestaque(lista, containerId, linkBase) {
    const container = document.getElementById(containerId);
    const destaque = lista.filter(item => item.destaque === true);
    container.innerHTML = ""
    destaque.forEach(item => {
        container.innerHTML += `
        <div class="card" onclick="window.location.href='${linkBase}'">
            <img src="${item.imagem || item.foto}" alt="${item.nome}">
            <div>
                <h3>${item.nome}</h3>
                <p>${item.cidade || item.pais}</p>
                <p>${item.modalidade || item.dificuldade}</p>
            </div>
        </div>`
    })
}

mostrarDestaque(skatistas, "lista-destaque-skatistas", "pages/skatistas.html");
mostrarDestaque(skateparks, "lista-destaque-skateparks", "pages/skateparks.html");
