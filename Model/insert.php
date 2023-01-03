<?php

include("Conexao.php");

$idMusica = mysqli_real_escape_string($con, $_GET['id']);
$_SESSION['idMusica'] = $idMusica;

$username = $_SESSION['usuarioLogado'];

$playlistQuery = mysqli_query($con, "SELECT * FROM playlists WHERE autor LIKE '$username' AND nome LIKE 'favoritas'");
$result = mysqli_fetch_array($playlistQuery);
$idPlaylist = $result['id'];

$insertQuery = mysqli_query($con, "INSERT INTO musicasPlaylists (idMusica, idPlaylist) VALUES ($idMusica, $idPlaylist)");

header("Location: ../View/favoritas.php");
?>