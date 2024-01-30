<?php
  class Config {
    public static $_DOMAIN = 'https://pavlovskaiasexolog.lovestoblog.com';
    public static $_TELEGRAM_DATA = [
      'API_URI' => 'https://api.telegram.org/bot{token}/sendMessage',
      'SECURITY_TOKEN' => '6840137458:AAEtYjNRyFHSvIKOtzVMRzFXggIybU2QA-4',
      'CHAT_ID' => '-1002023853204'
    ];
    public static $_PAYMENTS_DATA = [
      'API_URI' => 'https://pay.fondy.eu/api/checkout/url/',
      'MERCHANT_ID' => 1396424,
      'SECRET_KEY' => 'test',
      'ITEM_AMOUNT' => 42500,
      'ITEM_CURRENCY' => 'UAH',
      'ORDER_PREFIX' => 'order_',
      'ORDER_DESCRIPTION' => 'Example order description',
      'REDIRECT_URI_SUCCESS' => 'action=payment&status=success'
    ];
  }