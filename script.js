function verificarAcesso() {
    document.getElementById("modal-overlay").style.display = "flex";
}

function fecharModal() {
    document.getElementById("modal-overlay").style.display = "none";
}

function processarAcesso() {
    const codigo = document.getElementById("input-codigo").value.trim();
    
    if (codigo !== "") {
        const urlFinal = "https://t.ly/" + codigo;
        
        window.open(urlFinal, '_blank');
        
        fecharModal();
        document.getElementById("input-codigo").value = "";
    } else {
        alert("Por favor, digite um código!");
    }
}