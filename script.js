document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);
    var mensagem = document.getElementById("mensagem");

    if (campoB > campoA) {
    mensagem.textContent = "Formulário válido!";
    mensagem.className = "messageValid";
    } else {
    mensagem.textContent = "Formulário inválido!";
    mensagem.className = "messageInvalid";
    }
});
