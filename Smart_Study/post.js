function fazPost(url, body) {
    console.log("Body", body);
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Contennt-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }
    return request.responseText
}

function cadastroUsuario(event) {
    event.preventDefault(); // Chama preventDefault no evento

    const url = "http://127.0.0.1:5000/users";

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    console.log(nome);
    console.log(email);

    const body = {
        "name": nome, // Adicionada a vírgula aqui
        "email": email
    };

    fazPost(url, body); // Chama a função fazPost para enviar os dados
}
