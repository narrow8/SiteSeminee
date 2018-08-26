<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load composer's autoloader
require 'vendor/autoload.php';

$mail = new PHPMailer(true);    
                         
try {

    $number = str_split($_POST['number'], 16)[1];
    
    if ($number > 0){

        $mailSubject = '<html><body><h2>Comanda depozit seminee</h2><style>table {font-family: arial, sans-serif;border-collapse: collapse;';
        $mailSubject .= 'width: 100%;}td, th {border: 1px solid #afafaf;text-align: left;padding: 8px;}tr:nth-child(even) {background-color: #dddddd;}';
        $mailSubject .= '</style><table><tr><th>Cumparator  </th><th>Numar telefon  </th><th>Email  </th></tr><tr><td>';

        $mailSubject .= $_POST['fullName'];
        $mailSubject .= '</td><td>' . $_POST['phoneNumber'] . '</td><td>' . $_POST['email'] . '</td></tr></table><br><table><tr><th>Produs</th><th>Pret</th></tr><tr>';

        $mailSubject .= '<td>' . $_POST['semineu0'] . '</td><td>' . $_POST['pret0'] . '</td></tr>';

        for($i = 1; $i < $number; $i++)
        {
            $mailSubject .= '<tr><td>' . $_POST['semineu' . $i] . '</td><td>' . $_POST['pret' . $i] . '</td></tr>';
        }
        
        $mailSubject .= '</table></body></html>';

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
    }
    else
    {
        echo '<script type="text/javascript">
    window.location = "cos.html"
    </script>';
    }
    
    
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}

?>