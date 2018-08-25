<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load composer's autoloader
require 'vendor/autoload.php';

$mail = new PHPMailer(true);    
                         
try {

    $number = str_split($_POST['number'], 16)[1];
    
    if ($number > 0){

        $mailSubject = $_POST['fullName'] . ', telefon: ' . $_POST['phoneNumber'] . ', email: ' . $_POST['email'] . ' a comandat : ';

        $mailSubject = $mailSubject . $_POST['0'];

        for($i = 1; $i < $number; $i++)
        {
            $mailSubject = $mailSubject  . ', ' . $_POST[$i];
        }
    }

    $mail->SMTPDebug = 2;                        
    $mail->isSMTP();                                  
    $mail->Host = 'smtp.gmail.com';  
    $mail->SMTPAuth = true;                        
    $mail->Username = 'reclaimer19mc@gmail.com';              
    $mail->Password = 'xxx';                          
    $mail->SMTPSecure = 'ssl';                            
    $mail->Port = 465;                                   

    
    $mail->setFrom('reclaimer19mc@gmail.com', 'Comanda');
    $mail->addAddress('reclaimer19mc@gmail.com', 'Joe User');    

    
    $mail->isHTML(true);                                 
    $mail->Subject = 'Comanda';
    $mail->Body    = $mailSubject;
    $mail->AltBody = $mailSubject;

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