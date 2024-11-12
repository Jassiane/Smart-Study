<?php 
session_start();
if(empty($_POST["nome"] or (empty($_POST["senha"]))))

$nome = $_POST['nome'];
$senha = $_POST['senha'];

$sql = "SELECT * FROM usarios
WHERE usuario = '{nome}'
 AND senha = '{senha}'
?>
