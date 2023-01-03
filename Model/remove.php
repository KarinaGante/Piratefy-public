<?php

include("Conexao.php");

$idMusica = mysqli_real_escape_string($con, $_GET['id']);
$_SESSION['idMusica'] = $idMusica;
$username = $_SESSION['usuarioLogado'];

$playlistQuery = mysqli_query($con, "SELECT * FROM playlists WHERE autor LIKE '$username' AND nome LIKE 'favoritas'");
$result = mysqli_fetch_array($playlistQuery);
$idPlaylist = $result['id'];

$removeQuery = mysqli_query($con, "DELETE FROM musicasPlaylists WHERE idMusica = $idMusica AND idPlaylist = $idPlaylist");

header("Location: ../View/favoritas.php");
?>