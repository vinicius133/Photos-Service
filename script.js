// Abre o modal
function verificarAcesso() {
    document.getElementById("modal-overlay").style.display = "flex";
}

// Fecha o modal
function fecharModal() {
    document.getElementById("modal-overlay").style.display = "none";
}

// Checa o código
function processarAcesso() {
    let codigo = document.getElementById("input-codigo").value;
    
    if (codigo === "CLIENTE01") {
        window.location.href = "https://drive.google.com/sua-pasta-01";
    } else {
        alert("Código incorreto!");
    }
}