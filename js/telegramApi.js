
    function sendTelegramMessage() {
    const token = '6840137458:AAEtYjNRyFHSvIKOtzVMRzFXggIybU2QA-4';
    const chatId = '-1002023853204';
    const phoneNumber = document.getElementById('username').value;
    const phoneNumber2 = document.getElementById('username2').value;
        const phoneNumberInput = document.getElementById('username');
        const phoneNumber2Input = document.getElementById('username2');

    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const message = `Новий запит на консультацію! Номер телефона: ${phoneNumber} ${phoneNumber2}`;
    const data = { chat_id: chatId, text: message };
console.log(message)
    fetch(url, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
},
    body: JSON.stringify(data),
})
    .then(response => response.json())
    .then(data => {
    if (data.ok) {
    alert('Запит успішно відправлено в Телеграм!');
        console.log(message)
        phoneNumberInput.value = '';
        phoneNumber2Input.value = '';
} else {
    alert('Помилка запиту');
}
})
    .catch(error => console.error('Error:', error));
}
