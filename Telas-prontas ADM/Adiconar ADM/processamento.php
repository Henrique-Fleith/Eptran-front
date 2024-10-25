<?php

include("conexao.php");

if (!empty($_POST['id'])) {
    $id = $_POST['id'];
} 

if (!empty($_POST['email'])) {
    $email = $_POST['email'];
} 

if (!empty($_POST['enviar'])) {
    $enviar = $_POST['enviar'];
} 

echo"<br>" . $email . "<br>" . $enviar;

if ($enviar == "Gravar") {
    $insert = "INSERT INTO cadastro VALUES(null, '$email')";
    $execute_insert = mysqli_query($conn,$insert);
    echo "<br>Cadastro concluido";
} else if ($enviar == "Excluir") {
    $delete = "DELETE FROM cadastro WHERE email = '$email'";
    $execute_insert = mysqli_query($conn,$delete);
    echo "<br>Cadastro excluido";
}

?>