<?php

    session_start();

    $timezone = date_default_timezone_set("America/Sao_Paulo");
    //https://www.php.net/manual/en/timezones.america.php

    $server = "localhost";
    $dbmaster = "root";
    $dbpass = "";
    $dbname = "piratefy";

    $con = mysqli_connect($server, $dbmaster, $dbpass, $dbname);

    if(mysqli_connect_errno()){
        echo "Falha ao conectar: " . mysqli_connect_errno();
    }
?>