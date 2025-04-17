// Скрипт для проверки отправки реального сообщения в Telegram с эмодзи и форматированием
require("dotenv").config();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

// Получаем данные для подключения из .env файла
const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

if (!botToken || !chatId) {
  console.error("Ошибка: отсутствуют переменные окружения для Telegram.");
  console.error("Убедитесь, что в файле .env или .env.local настроены:");
  console.error(
    "NEXT_PUBLIC_TELEGRAM_BOT_TOKEN и NEXT_PUBLIC_TELEGRAM_CHAT_ID"
  );
  process.exit(1);
}

// Тестовые данные для формы
const testFormData = {
  name: "Тестовый пользователь",
  email: "test@example.com",
  phone: "+7 (999) 123-45-67",
  message: "Это тестовое сообщение из формы обратной связи.",
};

// Форматируем сообщение как в основном приложении
const text = `\n📩 Новая заявка:\n👤 Имя: ${testFormData.name}\n📞 Телефон: ${testFormData.phone}\n✉️ Email: ${testFormData.email}\n💬 Сообщение: ${testFormData.message}\n    `;

// Функция для тестирования отправки простого сообщения без разметки
async function testPlainMessage() {
  console.log("Тест 1: Отправка простого сообщения без разметки...");

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: "Тестовое сообщение без эмодзи и разметки",
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ Ошибка отправки простого сообщения:", data);
      return false;
    }

    console.log("✅ Простое сообщение успешно отправлено!");
    return true;
  } catch (error) {
    console.error("❌ Ошибка при отправке простого сообщения:", error);
    return false;
  }
}

// Функция для тестирования отправки сообщения с эмодзи без разметки
async function testEmojiMessage() {
  console.log("Тест 2: Отправка сообщения с эмодзи без разметки...");

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ Ошибка отправки сообщения с эмодзи:", data);
      return false;
    }

    console.log("✅ Сообщение с эмодзи успешно отправлено!");
    return true;
  } catch (error) {
    console.error("❌ Ошибка при отправке сообщения с эмодзи:", error);
    return false;
  }
}

// Функция для тестирования отправки сообщения с эмодзи и Markdown разметкой
async function testMarkdownMessage() {
  console.log("Тест 3: Отправка сообщения с эмодзи и Markdown разметкой...");

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: "Markdown",
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ Ошибка отправки сообщения с Markdown:", data);
      return false;
    }

    console.log("✅ Сообщение с Markdown успешно отправлено!");
    return true;
  } catch (error) {
    console.error("❌ Ошибка при отправке сообщения с Markdown:", error);
    return false;
  }
}

// Функция для тестирования отправки сообщения с эмодзи и HTML разметкой
async function testHtmlMessage() {
  console.log("Тест 4: Отправка сообщения с эмодзи и HTML разметкой...");

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: "HTML",
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ Ошибка отправки сообщения с HTML:", data);
      return false;
    }

    console.log("✅ Сообщение с HTML успешно отправлено!");
    return true;
  } catch (error) {
    console.error("❌ Ошибка при отправке сообщения с HTML:", error);
    return false;
  }
}

async function runTests() {
  console.log("=== Начало тестирования отправки сообщений в Telegram ===");
  console.log("Тестовое сообщение:\n", text);

  await testPlainMessage();
  await testEmojiMessage();
  await testMarkdownMessage();
  await testHtmlMessage();

  console.log("=== Тестирование завершено ===");
}

runTests();
