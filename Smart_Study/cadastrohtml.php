<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Login</title>
  <link href="cadastro.css" rel="stylesheet" type="text/css" />
</head>
<body>
  <div class="row">
    <div class="col-md-12">
      <form id="form-api">
        <h1> Login </h1>
        
        <fieldset>
          <input placeholder="usuario" name="usuario" type="text">
          <input placeholder="senha" name="senha" type="password">
          <input placeholder="usuario" name="usuario" type="text">
        
        
        <button type="submit">Acessar</button>
      
      </form>
      <script>
        const formEl = document.getElementById('form-api')
        formEl.addEventListener('submit', evento => {

          const formData = new FormData(formEl);
          const data = Object.fromEntries(formData);

          console.log(data)
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