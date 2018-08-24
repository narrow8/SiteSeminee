<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load composer's autoloader
require 'vendor/autoload.php';

$mail = new PHPMailer(true);    
                         
try {

    $mailSubject = $_POST['fullName'];

    $mail->SMTPDebug = 2;                        
    $mail->isSMTP();                                  
    $mail->Host = 'smtp.gmail.com';  
    $mail->SMTPAuth = true;                        
    $mail->Username = 'reclaimer19mc@gmail.com';              
    $mail->Password = 'Gaming12!';                          
    $mail->SMTPSecure = 'ssl';                            
    $mail->Port = 465;                                   

    
    $mail->setFrom('reclaimer19mc@gmail.com', 'Mailer');
    $mail->addAddress('reclaimer19mc@gmail.com', 'Joe User');    

    
    $mail->isHTML(true);                                 
    $mail->Subject = 'Here is the subject';
    $mail->Body    = $mailSubject;
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    echo '<script type="text/javascript">
    window.location = "cos.html"
    </script>';

    $mail->send();
    
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}

?>