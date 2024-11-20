function enviarMensagem(event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    if (mensagem.length < 20) {
        alert("A mensagem deve ter pelo menos 20 caracteres.");
        return;
    }

    // Salvar mensagem no localStorage
    salvarMensagem({ nome, email, mensagem });

    alert("Obrigado, " + nome + ". Sua mensagem foi entregue.");

    document.getElementById("contatoForm").reset();
}

function salvarMensagem(dados) {
    // Recupera mensagens existentes ou cria uma nova lista
    var mensagens = JSON.parse(localStorage.getItem("mensagens")) || [];
    mensagens.push(dados);

    // Salva no localStorage
    localStorage.setItem("mensagens", JSON.stringify(mensagens));
}
