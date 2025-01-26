document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвратить отправку формы по умолчанию
  
    // Получаем данные формы
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Имитация отправки данных (можно заменить на реальный запрос)
    setTimeout(() => {
      const responseDiv = document.getElementById('response');
      responseDiv.innerHTML = `<p>Спасибо, ${name}! Ваше сообщение было отправлено.</p>`;
      responseDiv.style.color = 'green';
    }, 1000); // Эмулируем задержку для отправки данных
  });