<?php
  require './config.php';

  if (!isset($_SERVER['HTTP_X_REQUESTED_WITH']) || strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) !== 'xmlhttprequest') {
    header('Status: 403 Forbidden');
    header('Location: ' . Config::$_DOMAIN . '/');
    die();
  }

  if (strtoupper($_SERVER['REQUEST_METHOD']) != 'POST') {
    header('Status: 404 Not Found');
    die();
  }

  $contentType = trim($_SERVER['CONTENT_TYPE'] ?? '');
  
  if ($contentType !== 'application/json') {
    header('Status: 403 Forbidden');
    die(json_encode([
      'error' => 'Content-Type is not set as application/json'
    ]));
  }

  $config = Config::$_TELEGRAM_DATA;

  $content = trim(file_get_contents('php://input'));
  $decoded = json_decode($content, true);

  if(!is_array($decoded)) {
    header('Status: 400 Bad Request');
    die(json_encode([
      'error' => 'Received JSON is improperly formatted'
    ]));
  }

  function getApiUrl($url, $token) {
    return str_replace('{token}', $token, $url);
  }

  function sendMessage($url, $data) {
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true); 
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data)); 
  
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
      'Content-Type: application/json',
    ]);
  
    $response = curl_exec($ch);
  
    if (curl_errno($ch)) {
      die('Curl error: ' . curl_error($ch));
    }
  
    curl_close($ch);

    return $response;
  }

  $url = getApiUrl($config['API_URI'], $config['SECURITY_TOKEN']);
  $response = sendMessage($url, [
    'chat_id' => $config['CHAT_ID'],
    'text' => $decoded['message']
  ]);

  echo $response;