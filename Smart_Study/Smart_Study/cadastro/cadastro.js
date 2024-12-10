document.getElementById('enviar').addEventListener('click', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value; 
    const confirmarSenha = document.getElementById('confirmar-senha').value;

    const erroSenha = document.getElementById('erro-senha');
    
    erroSenha.style.display = 'none';  

    if (!nome || !idade || !telefone || !email || !senha || !confirmarSenha ) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    if (senha !== confirmarSenha) {
        erroSenha.textContent = 'As senhas não coincidem. Tente novamente.';
        erroSenha.style.display = 'block'; 
        return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um email válido!');
        return;
    }

    if (!/^\d{10,11}$/.test(telefone)) {
        alert('Por favor, insira um número de telefone válido com 10 ou 11 dígitos!');
        return;
    }

    const usuario = {
        nome: nome,
        idade: idade,
        telefone: telefone,
        email: email,
        senha: senha
    };
    
    localStorage.setItem('usuario', JSON.stringify(usuario));

    alert('Cadastro realizado com sucesso! Agora você pode fazer login.');
    window.location.href = '../perfil.html'; 
});

document.getElementById('telefone').addEventListener('input', function(event) {
    let inputValue = event.target.value;
    
    inputValue = inputValue.replace(/\D/g, '');
    
    event.target.value = inputValue;
});
