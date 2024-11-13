import React, { useState } from 'react';

function Form() {
  const [message, setMessage] = useState(null); // Стан для збереження повідомлення

  const onSubmit = async (event) => {
    event.preventDefault(); // Зупиняємо стандартну поведінку форми
    const formData = new FormData(event.target); // Отримуємо дані форми
    formData.append("access_key", "db29df5a-f7c3-49a5-9e6a-01d947b0f653"); // Додаємо ключ доступу

    const object = Object.fromEntries(formData); // Перетворюємо дані у об'єкт
    const json = JSON.stringify(object); // Конвертуємо об'єкт у JSON

    try {
      // Відправляємо дані на сервер
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      // Якщо відповідь успішна
      if (res.success) {
        setMessage("Форма успішно відправлена!"); // Встановлюємо повідомлення про успіх
      } else {
        setMessage("Помилка при відправці форми. Спробуйте ще раз."); // Встановлюємо повідомлення про помилку
      }
    } catch (error) {
      // Обробка помилок при з'єднанні
      setMessage("Помилка з'єднання. Спробуйте ще раз."); // Встановлюємо повідомлення про помилку
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Ваше замовлення</h2>

        {/* Повідомлення про статус */}
        {message && (
          <div className="mb-4 text-center text-white bg-green-500 rounded-md p-2">
            {message}
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-4">
          {/* Поля форми */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              Ім'я
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Ваше ім'я"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Прізвище
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Ваше прізвище"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Телефон
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+38 (0__) ___-__-__"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Повідомлення
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Що ви замовляєте?"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Кнопка відправлення */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-300"
          >
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
