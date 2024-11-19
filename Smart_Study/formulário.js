document.getElementById('enviar').addEventListener('click', function(event) {
    event.preventDefault();  // Previne o envio do formulário para não recarregar a página
  
    // Coletando os valores dos campos
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const periodoEscolar = document.querySelector('input[name="periodoescolar"]:checked');  // Corrigido aqui
  
    // Validação de campos obrigatórios
    if (!nome || !idade || !telefone || !email || !periodoEscolar) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
  
    // Validação do formato de email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um email válido!');
        return;
    }
    if (!/^\d+$/.test(telefone)) {
        alert('Por favor, insira um número de telefone válido!');
        return;
    }
  
    // Armazenando os dados no localStorage
    const usuario = {
        nome: nome,
        idade: idade,
        telefone: telefone,
        email: email,
        periodoEscolar: periodoEscolar.value
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));  // Armazenando como string JSON
  
    // Se todos os campos estiverem preenchidos e o email for válido, exibe a mensagem
    const mensagemUsuario = document.getElementById('mensagemUsuario');
    mensagemUsuario.innerHTML = ` 
        <strong>Nome:</strong> ${nome}<br>
        <strong>Idade:</strong> ${idade} anos<br>
        <strong>Telefone:</strong> ${telefone}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Período Escolar:</strong> ${periodoEscolar.value}
    `;
  
    // Esconde o formulário e exibe a mensagem de boas-vindas
    document.getElementById('formulario').style.display = 'none';
    document.getElementById('mensagem').style.display = 'block';
});
  
// Feedback ao digitar o nome
document.getElementById('nome').addEventListener('input', function() {
    const nome = document.getElementById('nome').value;
    const feedbackNome = document.getElementById('feedback-nome');
    
    if (nome.length < 3) {
        feedbackNome.textContent = "O nome deve ter pelo menos 3 caracteres.";
        feedbackNome.style.color = "red";
    } else {
        feedbackNome.textContent = "";
    }
});
  
// Função para recuperar os dados do localStorage e exibir na página, caso existam
window.addEventListener('load', function() {
    const usuarioStorage = localStorage.getItem('usuario');
    if (usuarioStorage) {
        const usuario = JSON.parse(usuarioStorage);  // Recuperando e convertendo de volta para objeto

        // Preenche os campos com os dados armazenados
        document.getElementById('nome').value = usuario.nome;
        document.getElementById('idade').value = usuario.idade;
        document.getElementById('telefone').value = usuario.telefone;
        document.getElementById('email').value = usuario.email;
        const periodoEscolar = document.querySelector(`input[name="periodoescolar"][value="${usuario.periodoEscolar}"]`);
        if (periodoEscolar) {
            periodoEscolar.checked = true;
        }
      
        // Exibe a mensagem com os dados recuperados
        const mensagemUsuario = document.getElementById('mensagemUsuario');
        mensagemUsuario.innerHTML = ` 
            <strong>Nome:</strong> ${usuario.nome}<br>
            <strong>Idade:</strong> ${usuario.idade} anos<br>
            <strong>Telefone:</strong> ${usuario.telefone}<br>
            <strong>Email:</strong> ${usuario.email}<br>
            <strong>Período Escolar:</strong> ${usuario.periodoEscolar}
        `;
      
        // Esconde o formulário e exibe a mensagem de boas-vindas
        document.getElementById('formulario').style.display = 'none';
        document.getElementById('mensagem').style.display = 'block';
    }
});
