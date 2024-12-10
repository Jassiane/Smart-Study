document.getElementById('login-btn').addEventListener('click', function(event) {
    event.preventDefault(); 

    const usuarioLogin = document.getElementById('login-email').value;
    const senhaLogin = document.getElementById('login-senha').value;

    const usuarioSalvo = JSON.parse(localStorage.getItem('usuario'));

    if (usuarioSalvo && usuarioSalvo.email === usuarioLogin && usuarioSalvo.senha === senhaLogin) {
        document.getElementById('login-error').textContent = 'Login efetuado!';
        document.getElementById('login-error').style.color = 'green'; 


       setTimeout(function() {
            window.location.href = '../perfil.html';
        }, 2000);
    } else {
        document.getElementById('login-error').textContent = 'Email do usuário ou senha incorretos!';
        document.getElementById('login-error').style.color = 'red'; 
    }
        const alterarSenha = confirm('Senha incorreta, deseja altera-la?');
        if (alterarSenha) {
            const novaSenha = prompt('Por favor, insira a nova senha:');
            if (novaSenha) {
                usuarioSalvo.senha = novaSenha;
                localStorage.setItem('usuario', JSON.stringify(usuarioSalvo));
                alert('Senha alterada com sucesso!');

                document.getElementById('login-error').textContent = 'Senha alterada. Por favor, insira sua nova senha:';
                document.getElementById('login-error').style.color = 'green'; 
            } else {
                alert('Senha não pode ser vazia.');
            }
        }
    
});

document.getElementById('novoCadastroLogin').addEventListener('click', function() {
    window.location.href = 'cadastro.html'; 
});