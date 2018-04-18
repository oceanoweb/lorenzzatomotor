<?php 

$para = "lorenzzatomotor@hotmail.com";
$assunto = "Contato do Site";

$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$message = $_REQUEST['message'];

	$corpo = "<strong> Mensagem de Contato </strong><br><br>";
	$corpo .= "<strong> Nome: </strong> $name";
	$corpo .= "<br><strong> E-Mail: </strong> $email";
	$corpo .= "<br><strong> Mensagem: </strong> $message";

	$header = "Content-Type: text/html; charset= utf-8\n";
	$header .= "From: $email Reply-to: $email\n";
	

mail($para, $assunto, $corpo, $header);

header("location:index.php?msg=enviado");
?>