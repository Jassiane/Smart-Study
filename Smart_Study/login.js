document.getElementById('login-btn').addEventListener('click', function(event) {
    event.preventDefault();  // Previne o envio do formulário de login

    // Coletando os dados de login
    const usuarioLogin = document.getElementById('login-usuario').value;
    const senhaLogin = document.getElementById('login-senha').value;

    // Recuperando os dados do localStorage
    const usuarioSalvo = JSON.parse(localStorage.getItem('usuario'));

    // Verificando se os dados de login estão corretos
    if (usuarioSalvo && usuarioSalvo.nome === usuarioLogin && usuarioSalvo.senha === senhaLogin) {
        // Se o login for bem-sucedido, redireciona para a página de boas-vindas
        window.location.href = 'index.html'; // Página de boas-vindas
    } else {
        // Se as credenciais estiverem erradas
        document.getElementById('login-error').textContent = 'Nome de usuário ou senha incorretos!';
    }
});

// Redireciona para a página de cadastro
document.getElementById('novoCadastroLogin').addEventListener('click', function() {
    window.location.href = 'cadastro.html'; // Página de cadastro
});
