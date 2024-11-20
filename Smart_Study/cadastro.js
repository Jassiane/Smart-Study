// Adiciona restrição para que o campo de telefone aceite apenas números
document.getElementById('telefone').addEventListener('input', function (event) {
    this.value = this.value.replace(/\D/g, ''); // Remove todos os caracteres que não são dígitos
});

// Adiciona restrição para que o campo nome não aceite números
document.getElementById('nome').addEventListener('input', function (event) {
    this.value = this.value.replace(/[0-9]/g, ''); // Remove todos os números
});

document.getElementById('enviar').addEventListener('click', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const periodoEscolar = document.querySelector('input[name="periodoescolar"]:checked');
    const senha = prompt('Digite uma senha para o seu cadastro:');

    // Validação de campos obrigatórios
    if (!nome || !idade || !telefone || !email || !periodoEscolar || !senha) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Validação do formato de email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um email válido!');
        return;
    }

    // Validação do telefone
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
        periodoEscolar: periodoEscolar.value,
        senha: senha // Salva a senha (deve ser feito com segurança em um sistema real)
    };

    localStorage.setItem('usuario', JSON.stringify(usuario)); // Armazenando como string JSON

    // Redireciona para a página de login
    alert('Cadastro realizado com sucesso! Agora você pode fazer login.');
    window.location.href = 'login.html'; // Redireciona de volta para a tela de login
});
