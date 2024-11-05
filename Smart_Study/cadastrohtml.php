<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário com JavaScript</title>
    <link rel="stylesheet" href="cadastro (1).css">
</head>
<body>
    <div class="container">
        <h1>Realize seu cadastro</h1>
    </div>

<div id="formulario">
    <label for="nome">Nome:</label>
    <input type="text" id="nome">
    <br>
    <label for="idade">Idade:</label>
    <input type="number" id="idade">
    <br>
    <label for="telefone">Telefone:</label>
    <input type="tel" id="telefone">
    <br>
    <label for="email">Email:</label>
    <input type="email" id="email">
    <br>

    <button onclick="exibirMensagem()">Enviar</button>
</div>

<div id="mensagem" style="display: none;">
    <h2>Bem-vindo!</h2>
    <p id="mensagemUsuario"></p>
</div>

<script>
    function exibirMensagem() {
        var nome = document.getElementById('nome').value;
        var idade = document.getElementById('idade').value;
        var telefone = document.getElementById('telefone').value;
        var email = document.getElementById('email').value;



        // Verifica se ambos os campos foram preenchidos
        if (nome === '' || idade === '' || telefone === '' || email === '') {
            alert('Por favor, preencha todos os campos.');
        } else {
            // Oculta o formulário
            document.getElementById('formulario').style.display = 'none';

            // Exibe a mensagem de boas-vindas
            document.getElementById('mensagemUsuario').innerText = 'Olá, ' + nome + '! Estudante, aqui você terá uma experiência incrível que te ajudará em sua vida academica, boa sorte nessa jornada';
            
            document.getElementById('mensagem').style.display = 'block';
        }
    }
      </script>
    </div>
  </div>
  <?php

$dbhost = 'localhost';
$dbUserName = 'root';
$dbPassword = '';
$dbName = 'smart_study';

$conexao = new mysql ($dbhost, $dbUserName, $dbPassword, $dbName)
  ?>
</body>
</html>
