<?php

$dbhost = 'localhost';
$dbUserName = 'root';
$dbPassword = '';
$dbName = '';

$conexao = new mysql ($dbhost, $dbUserName, $dbPassword, $dbName)

//if ($conexao -> conect_errno)
//{
    //echo "Erro";
//}
//else{
  //  echo "Conexão efetuada";
//}
if (isset($_POST["submit"]))
$nome = ($_POST['nome']);
$idade = ($_POST['idade']);
$telefone = ($_POST['telefone']);
$email = ($_POST['email']);

?>
