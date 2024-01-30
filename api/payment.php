<?php
  require './config.php';

  if (strtoupper($_SERVER['REQUEST_METHOD']) != 'GET') {
    header('Status: 404 Not Found');
    die();
  }

  if (!isset($_SERVER['HTTP_X_REQUESTED_WITH']) || strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) !== 'xmlhttprequest') {
    header('Status: 403 Forbidden');
    header('Location: ' . Config::$_DOMAIN . '/');
    die();
  }

  $config = Config::$_PAYMENTS_DATA;

  function getOrderId($prefix) {
    return $prefix . (string)uniqid(rand(), false);
  }

  function getSignature($merchantId, $password, $params = array()) {
    $params['merchant_id'] = $merchantId;
    $params = array_filter($params, 'strlen');
    ksort($params);
    $params = array_values($params);
    array_unshift($params, $password);
    $params = join('|', $params);

    return(sha1($params));
  }

  function getToken($url, $data) {
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

  $params = [
    'order_id' => getOrderId($config['ORDER_PREFIX']),
    'order_desc' => $config['ORDER_DESCRIPTION'],
    'amount' => $config['ITEM_AMOUNT'],
    'currency' => $config['ITEM_CURRENCY'],
    'lifetime' => 36000,
    'lang' => 'uk',
    'response_url' => $config['REDIRECT_URI_SUCCESS']
  ];

  $signature = getSignature($config['MERCHANT_ID'], $config['SECRET_KEY'], $params);

  $response = getToken($config['API_URI'], [
    'request' => array_merge($params, [
      'merchant_id' => $config['MERCHANT_ID'],
      'signature' => $signature
    ])
  ]);

  echo $response;