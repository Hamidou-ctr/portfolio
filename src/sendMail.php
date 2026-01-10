<?php

// Whitelist of allowed domains
$allowedOrigins = [
    'https://www.hamidoudiallo.de',
    'https://hamidoudiallo.de',
    'http://localhost:4200' // for local development
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins)) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    header("HTTP/1.1 403 Forbidden");
    exit;
}

header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // check Content-Type
    $contentType = $_SERVER['CONTENT_TYPE'] ?? '';
    if (strpos($contentType, 'application/json') === false) {
        header("HTTP/1.1 400 Bad Request");
        echo json_encode(['error' => 'Invalid Content-Type']);
        exit;
    }

    // input data 
    $json = file_get_contents('php://input');
    $params = json_decode($json);

    if (json_last_error() !== JSON_ERROR_NONE || !$params) {
        header("HTTP/1.1 400 Bad Request");
        echo json_encode(['error' => 'Invalid JSON']);
        exit;
    }

    // validate and sanitize fields
    $email = filter_var($params->email ?? '', FILTER_VALIDATE_EMAIL);
    $name = htmlspecialchars(strip_tags($params->name ?? ''), ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars(strip_tags($params->message ?? ''), ENT_QUOTES, 'UTF-8');

    if (!$email || empty($name) || empty($message)) {
        header("HTTP/1.1 400 Bad Request");
        echo json_encode(['error' => 'Missing or invalid fields']);
        exit;
    }

    // input length check 
    if (strlen($message) > 5000 || strlen($name) > 100) {
        header("HTTP/1.1 400 Bad Request");
        echo json_encode(['error' => 'Message too long']);
        exit;
    }

    // send email
    $recipient = 'hamiduguinea@gmail.com';
    $subject = "Contact From " . $name . " <" . $email . ">";

    $headers = [
        'MIME-Version: 1.0',
        'Content-type: text/html; charset=utf-8',
        'From: website@hamidoudiallo.de',
        'Reply-To: ' . $email,
        'X-Mailer: PHP/' . phpversion()
    ];

    if (mail($recipient, $subject, $message, implode("\r\n", $headers))) {
        header("HTTP/1.1 200 OK");
        echo json_encode(['success' => true]);
    } else {
        header("HTTP/1.1 500 Internal Server Error");
        echo json_encode(['error' => 'Failed to send email']);
    }
    exit;
}

// If not POST or OPTIONS request 
header("HTTP/1.1 405 Method Not Allowed");
header("Allow: POST, OPTIONS");
exit;
