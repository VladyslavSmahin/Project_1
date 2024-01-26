
    function sendTelegramMessage() {
    const token = '6840137458:AAEtYjNRyFHSvIKOtzVMRzFXggIybU2QA-4';
    const chatId = '-1002023853204';
    const phoneNumber = document.getElementById('username').value;

    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const message = `Новий запит на консультацію! Номер телефона: ${phoneNumber}`;
    const data = { chat_id: chatId, text: message };
console.log(phoneNumber)
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
    // Дополнительные действия после успешной отправки...
} else {
    alert('Помилка запиту');
}
})
    .catch(error => console.error('Error:', error));
}
