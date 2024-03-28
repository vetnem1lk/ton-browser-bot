window.Telegram.WebApp.expand()

const textField = document.getElementById('query');
const saveButton = document.getElementById('searchButton');
let savedText = '';

// Добавляем обработчик события 'click' к кнопке
saveButton.addEventListener('click', function() {
    // Сохраняем текст из текстового поля в переменную
    savedText = textField.value;
    // Выводим сохраненный текст в консоль (для проверки)

    console.log(savedText);
});