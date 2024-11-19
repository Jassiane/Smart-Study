document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('questionario');
    const mensagem = document.getElementById('mensagem');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Coleta os dados do formulário
        const nome = document.getElementById('nome').value;
        const vestibular = document.getElementById('vestibular').value;
        const telefone = document.getElementById('telefone').value;
        const email = document.getElementById('email').value;
        const periodoescolar = document.querySelector('input[name="periodoescolar"]:checked').value;

        // Armazena os dados no localStorage
        const usuario = {
            nome,
            vestibular,
            telefone,
            email,
            periodoescolar
        };

        localStorage.setItem('usuario', JSON.stringify(usuario));

        // Exibe mensagem de sucesso
        mensagem.style.display = 'block';
        mensagem.innerText = 'Informações enviadas com sucesso!';
        
        // Limpa o formulário
        form.reset();
    });
});
