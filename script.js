function verificarAcesso() {
    document.getElementById("modal-overlay").style.display = "flex";
}

function fecharModal() {
    document.getElementById("modal-overlay").style.display = "none";
}

function processarAcesso() {
    const codigo = document.getElementById("input-codigo").value.trim();
    
    if (codigo !== "") {
        // Redireciona para uma URL que depende do código digitado
        // Se o código for 'FOTOS2024', ele tentará ir para bit.ly/FOTOS2024
        // Isso impede que alguém veja todos os seus links no código-fonte.
        window.open("https://bit.ly/" + codigo, '_blank');
        // fecharModal();
    } else {
        alert("Por favor, digite um código.");
    }
}