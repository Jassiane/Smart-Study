<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>
<body>
  <?php

$dbhost = 'localhost';
$dbUserName = 'root';
$dbPassword = '';
$dbName = 'smart_study';

$conexao = new mysql ($dbhost, $dbUserName, $dbPassword, $dbName)
    $posicao = null;
    $usuarios = [
      [
        'email' => 'jales@email.com',
        'senha' => '123456',
        'nome' => 'Jales',
        'idade' => '31',
      ],
      [
        'email' => 'alana@email.com',
        'senha' => '123456',
        'nome' => 'Alana',
        'idade' => '29',
      ]
    ];
  ?>
  
  <!-- PROCESSAMENTO -->
  
  <div class="row">
    <div class="col-md-12 bg">
        <h1>Perfil</h1>
        
        <fieldset>

          <legend>Informações Básicas</legend>

          <!-- EXIBIÇÃO -->

          <label><b>Nome:</b></label>
          <!-- exibir nome -->

          <label><b>Idade:</b></label>
          <!-- exibir idade -->

        </fieldset>

        <a href="cadastro.html">Login</a>

    </form>
    </div>
  </div>
</body>
</html>
