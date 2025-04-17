// Скрипт для проверки настроек Telegram бота и чата
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

async function checkBotToken() {
  console.log("Проверка токена бота...");

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/getMe`
    );
    const data = await response.json();

    if (!data.ok) {
      console.error("Ошибка: недействительный токен бота.");
      console.error(`Сообщение от API: ${data.description}`);
      process.exit(1);
    }

    console.log(`✅ Токен бота действителен! Бот: @${data.result.username}`);
    return true;
  } catch (err) {
    console.error("Ошибка при проверке токена бота:", err);
    process.exit(1);
  }
}

async function checkChatId() {
  console.log("Проверка ID чата...");

  try {
    // Отправляем тестовое сообщение в указанный чат
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: "🔍 Проверка настроек для контактной формы сайта. Если вы видите это сообщение, значит настройки верны!",
        }),
      }
    );

    const data = await response.json();

    if (!data.ok) {
      console.error("Ошибка: невозможно отправить сообщение в указанный чат.");
      console.error(`Сообщение от API: ${data.description}`);
      console.error("Возможные причины:");
      console.error("1. Неверный ID чата");
      console.error("2. Бот не добавлен в указанный чат");
      console.error("3. У бота нет прав на отправку сообщений");
      process.exit(1);
    }

    console.log(
      "✅ ID чата действителен! Тестовое сообщение успешно отправлено."
    );
    return true;
  } catch (err) {
    console.error("Ошибка при проверке ID чата:", err);
    process.exit(1);
  }
}

async function runChecks() {
  console.log("Проверка настроек Telegram...");

  const botValid = await checkBotToken();
  if (botValid) {
    const chatValid = await checkChatId();
    if (chatValid) {
      console.log(
        "✅ Все настройки Telegram верны! Форма обратной связи должна работать корректно."
      );
    }
  }
}

runChecks();
