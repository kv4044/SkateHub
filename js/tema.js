function mudaTema() {
    document.body.classList.toggle('claro');

    const temaAtual = document.body.classList.contains("claro") ? "claro" : "escuro"

    localStorage.setItem("tema", temaAtual)

    document.getElementById("btn-tema").textContent = temaAtual === "claro" ? "⏾" : "☀︎️"
}

if (localStorage.getItem("tema") === "claro") {
    document.body.classList.add("claro")
}

document.getElementById("btn-tema").textContent =
    localStorage.getItem("tema") === "claro" ? "⏾" : "☀"
