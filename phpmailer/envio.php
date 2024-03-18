<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';


$usuario = filter_input(INPUT_POST, 'usuario');
$nome = filter_input(INPUT_POST, 'nome');
$email = filter_input(INPUT_POST, 'email');
$tel = filter_input(INPUT_POST, 'tel');
$msg = filter_input(INPUT_POST, 'msg');


if ($nome && $usuario && $email) {

  //Create an instance; passing `true` enables exceptions
  $mail = new PHPMailer(true);

  try {
    //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtpi.kinghost.net';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'contato@oniun.com.br';                     //SMTP username
    $mail->Password   = '5yG[POjkB6,4@x';                               //SMTP password
    $mail->SMTPSecure = 'ssl';            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('contato@oniun.com.br', 'Mailer');
    $mail->addAddress('contato@oniun.com.br', 'ERP Oniun');     //Add a recipient
    $mail->addReplyTo('contato@oniun.com.br', 'Information');
    

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Mensagem via Site - Oniun';


    $body = "Mensagem enviada através do site, segue informações abaixo:<br>
      Usuario: $usuario <br>
      Nome: $nome <br>
      E-mail: $email <br>
      Telefone: $tel <br>
      Mensagem: <br> $msg
    ";

    $mail->Body    = $body;

    $mail->send();
    header("Location: ../index.php");
  } catch (Exception $e) {
    echo "Erro ao enviar o email: {$mail->ErrorInfo}";
  }
} else {
  echo "Erro ao enviar e-mail, acesso nao foi via formulário";
}
