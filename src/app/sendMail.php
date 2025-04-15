<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");
        // Payload is not send to $_POST Variable,
        // is send to php:input as a text
        $json = file_get_contents('php://input');
        //parse the Payload from text format to Object
        $params = json_decode($json);

        $email = $params->email;
        $name = $params->name;
        $message = $params->message;

        $recipient = 'hamiduguinea@gmail.com';
        $subject = "Contact From <$email>";
        $message = "From:" . $name . "<br>" . $message;

        $headers   = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';

        // Additional headers
        $headers[] = "From: noreply@mywebsite.com";

        mail($recipient, $subject, $message, implode("\r\n", $headers));
        //echo json_encode(['success' => true]);  // das habe ich hinzugefügt   // Return a success response to the client  // Send a 200 OK response   
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}

// das hier ist neue code den ich hinzugefügt habe

// echo json_encode(['success' => true]);  // das habe ich hinzugefügt   // Return a success response to the client  // Send a 200 OK response   

/* 

error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

*/