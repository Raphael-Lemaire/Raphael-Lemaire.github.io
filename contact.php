<?php

    $name = $_POST['name'];
    $mail_guest = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mail_dest = "raphael28@outlook.fr";
    $headers = "Message de: ".$name; 
    $text = "E-Mail reçu: ".$mail_guest.".\n\n".$message;

    mail($mail_dest, $subject, $text, $headers);

    header("Location: index.html?envoyé");

?>