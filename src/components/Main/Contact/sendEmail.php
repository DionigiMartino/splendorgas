<?php
    $nome = $_POST['nome'];
    $email= $_POST['email'];
    $telefono = $_POST['tel'];
    $msg = $_POST['msg'];
    $nomefile = $_FILES['allegato']['name'];
    $tipofile = $_FILES['allegato']['type'];
    $posizionefile = $_FILES['allegato']['tmp_name'];

    $numero_casuale = md5(time());
    $cod_delimitatore = "--=NextPart_$numero_casuale";

    $tipo_email="MIME-Version: 1.0\nContent-type: multipart/mixed;\n boundary=\"$cod_delimitatore\"\n\n";
    $mittente="From: $nome <$email>\n$tipo_email";
    $destinatario= "info@splendorgas.it";
    $oggetto="Modulo Contatto - Informazioni";
    $test_mail="Messaggio inviato da $nome , email: $email, telefono: $telefono, Messaggio: $msg";

    $messaggio_a="This is a multi-part message in MINE format.\n\n"."--$cod_delimitatore\n"."Content-Type:text/plain;charset=\"iso-8859-1\"\n"."Content-Transfer-Encoding:7bit\n\n"."$test_mail\n\n";

    $messaggio_b="--$cod_delimitatore\n"."Content-Type:$tipofile;name=\"$nomefile\"\n"."Content-Disposition:attachment;filename=\"$nomefile\"\n"."Content-Transfer-Encoding:base64\n\n"."$dati_allegato\n\n"."--$cod_delimitatore--\n";

    $messaggio="$messaggio_a $messaggio_b";


    if ( mail($destinatario,$oggetto,$messaggio,$mittente) ) {
        echo "Messaggio inviato con successo";
    }
    else {
        echo "Errore. Nessun messaggio inviato.";

    }
?>