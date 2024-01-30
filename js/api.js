const sendTelegramMessage = async (phoneNumber) => {
  if (!phoneNumber || phoneNumber.value.length <= 0) {
    phoneNumber.classList.add('invalid');
    return false;
  }

  phoneNumber.classList.remove('invalid');
  const message = `Новий запит на консультацію! Номер телефона: ${phoneNumber.value}`;

  try {
    const response = await fetch('api/telegram.php', {
      method: 'POST',
      headers: {
        'X-Requested-With': 'xmlhttprequest',
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        message,
      }),
    });

    const data = await response.json();

    if (!data.ok) {
      throw 'Request failed';
    }

    phoneNumber.value = '';

    return true;
  } catch (err) {
    console.error(`Error while sending message: ${err}`);

    return false;
  }
};

const createPayment = async () => {
  try {
    const response = await fetch('api/payment.php', {
      method: 'GET',
      headers: {
        'X-Requested-With': 'xmlhttprequest',
        Accept: 'application/json',
      },
    });
    const data = await response.json();

    if (!data.response || data.response.response_status !== 'success') {
      throw 'Request failed';
    }

    if (!data.response.checkout_url) {
      throw 'No checkout url returned';
    }

    window.location.href = data.response.checkout_url;
  } catch (err) {
    console.error(`Error while sending payment: ${err}`);
  }
};

const initializePayments = () => {
  const paymentButton = document.querySelector('.telegramButton_pay');

  if (!paymentButton) {
    console.log('Initializing error. Payment button not found');
    return;
  }

  const phoneNumber = paymentButton.parentNode.querySelector('input[name=phone_number]');

  paymentButton.addEventListener('click', async (e) => {
    e.preventDefault();

    const result = await sendTelegramMessage(phoneNumber);

    if (!result) {
      return;
    }

    createPayment();
  });
};

const initializeMessages = () => {
  const telegramButton = document.querySelector('.telegramButton');

  if (!telegramButton) {
    console.log('Initializing error. Telegram button not found');
    return;
  }

  const phoneNumber = telegramButton.parentNode.querySelector('input[name=phone_number]');

  telegramButton.addEventListener('click', (e) => {
    e.preventDefault();

    sendTelegramMessage(phoneNumber);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initializePayments();
  initializeMessages();
});
