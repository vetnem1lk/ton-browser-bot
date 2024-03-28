const form = document.getElementById('searchForm');

// Обработчик события отправки формы
form.addEventListener('submit', async (event) => {
    // Предотвращаем стандартное поведение формы (перезагрузку страницы)
    event.preventDefault();

    // Получаем значения полей формы
    const query = (document.getElementById('query') as HTMLInputElement).value;
    const searchEngine = (document.getElementById('searchEngine') as HTMLSelectElement).value;

    try {
        // Выполняем запрос к бэкенду с помощью fetch
        const response = await fetch(`/search?query=${query}&searchEngine=${searchEngine}`);
        if (!response.ok) {
            throw new Error('Ошибка выполнения запроса');
        }

        // Получаем JSON-ответ от сервера
        const data = await response.json();

        // Очищаем результаты предыдущего поиска
        const searchResultsDiv = document.getElementById('searchResults');
        searchResultsDiv.innerHTML = '';

        // Выводим результаты поиска
        if (data.results && data.results.length > 0) {
            data.results.forEach((result: any, index: number) => {
                const resultDiv = document.createElement('div');
                resultDiv.innerHTML = `<p><strong>${index + 1}. <a href="${result.link}" target="_blank">${result.title}</a></strong></p>`;
                searchResultsDiv.appendChild(resultDiv);
            });
        } else {
            searchResultsDiv.innerHTML = '<p>По вашему запросу ничего не найдено.</p>';
        }
    } catch (error) {
        console.error('Ошибка:', error.message);
        // Обработка ошибок
        const searchResultsDiv = document.getElementById('searchResults');
        searchResultsDiv.innerHTML = `<p>Произошла ошибка: ${error.message}</p>`;
    }
});