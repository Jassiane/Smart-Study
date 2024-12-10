document.addEventListener("DOMContentLoaded", () => {
    exibirMensagens();
});

function exibirMensagens() {
    var mensagens = JSON.parse(localStorage.getItem("mensagens")) || [];
    var mensagensList = document.getElementById("mensagensList");
 
    if (mensagens.length === 0) {
        mensagensList.innerHTML = "<li>Nenhuma mensagem encontrada.</li>";
    } else {
        mensagensList.innerHTML = mensagens
            .map(
                (mensagem) => `
                <li>
                    <strong>Nome:</strong> ${mensagem.nome}<br>
                    <strong>E-mail:</strong> ${mensagem.email}<br>
                    <strong>Mensagem:</strong> ${mensagem.mensagem}
                </li>`
            )
            .join("");
    }
}
