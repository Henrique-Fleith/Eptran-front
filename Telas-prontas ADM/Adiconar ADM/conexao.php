<?php
$conn = mysqli_connect("localhost", "root", "root", "db_cadastro_pedroRebello");

if(!$conn){
    die("connection_failed." . mysqli_connect_error());
};

?>