import { NextResponse } from "next/server";

// Резервные значения для Telegram
const BACKUP_BOT_TOKEN = "8020073798:AAHmXxi9XijA0z1k9JY2DzNpDI7j6ICqthI";
const BACKUP_CHAT_ID = "-1002655068247";

export async function POST(request: Request) {
  try {
    // Получаем данные из тела запроса
    const body = await request.json();
    const { name, email, phone, message } = body;

    console.log("API получил данные:", { name, phone, email });

    if (!name || !phone) {
      console.log("Ошибка: обязательные поля не заполнены");
      return NextResponse.json(
        { error: "Имя и телефон обязательны" },
        { status: 400 }
      );
    }

    // Получаем токен и ID чата из переменных окружения или используем резервные
    const botToken = process.env.TELEGRAM_BOT_TOKEN || BACKUP_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID || BACKUP_CHAT_ID;

    console.log("Диагностика переменных Telegram:");
    console.log(
      "- Токен из env:",
      process.env.TELEGRAM_BOT_TOKEN ? "Установлен" : "Отсутствует"
    );
    console.log(
      "- ID чата из env:",
      process.env.TELEGRAM_CHAT_ID ? "Установлен" : "Отсутствует"
    );
    console.log(
      "- Используем резервный токен:",
      !process.env.TELEGRAM_BOT_TOKEN
    );
    console.log(
      "- Используем резервный ID чата:",
      !process.env.TELEGRAM_CHAT_ID
    );
    console.log(
      "- Итоговый токен (первые 5 символов):",
      botToken.substring(0, 5) + "***"
    );
    console.log("- Итоговый ID чата:", chatId);

    if (!botToken || !chatId) {
      console.error("Не настроены параметры для Telegram");
      return NextResponse.json(
        { error: "Ошибка конфигурации сервера" },
        { status: 500 }
      );
    }

    // Формируем сообщение
    const text = `\n📩 Новая заявка:\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n✉️ Email: ${
      email || "Не указан"
    }\n💬 Сообщение: ${message || "Не указано"}\n`;

    console.log("Подготовлено сообщение:", text);

    // Используем прокси-сервис для обхода блокировок Telegram API
    // Вместо прямого запроса к api.telegram.org используем наш API для отправки
    const telegramUrl =
      "https://api.telegram.org/bot" + botToken + "/sendMessage";
    const proxyUrl = "https://cors-anywhere.herokuapp.com/" + telegramUrl;

    console.log(
      "URL запроса:",
      telegramUrl.replace(botToken, botToken.substring(0, 5) + "***")
    );

    const requestBody = {
      chat_id: chatId,
      text: text,
      parse_mode: "HTML",
    };
    console.log(
      "Данные запроса:",
      JSON.stringify(requestBody).replace(chatId, "***")
    );

    // Отправляем запрос к API Telegram
    console.log("Отправка запроса в Telegram...");

    // Метод 1: Стандартный запрос через API Telegram
    const telegramResponse = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    console.log("Получен ответ со статусом:", telegramResponse.status);

    // Пробуем получить текст ответа для диагностики
    let responseText = "";
    try {
      responseText = await telegramResponse.text();
      console.log("Ответ от API Telegram (текст):", responseText);
    } catch (error) {
      console.error("Не удалось получить текст ответа:", error);
    }

    // Парсим JSON
    let telegramData;
    try {
      telegramData = JSON.parse(responseText);
      console.log("Ответ от API Telegram (объект):", telegramData);
    } catch (error) {
      console.error("Ошибка парсинга JSON:", error);

      // Если не удалось распарсить JSON или произошла ошибка запроса,
      // отправляем запрос на резервный бекенд
      try {
        // Метод 2: Используем сервис Telegram Bot API через HTTP запрос
        const response = await fetch(
          "https://n8n.neuropolis.ai/webhook/telegram-forwarder",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              token: botToken,
              chat_id: chatId,
              text: text,
            }),
          }
        );

        if (response.ok) {
          console.log("Отправлено через резервный сервис!");
          return NextResponse.json({
            success: true,
            message: "Сообщение отправлено через резервный сервис",
          });
        } else {
          throw new Error("Резервный сервис вернул ошибку: " + response.status);
        }
      } catch (backupError) {
        console.error(
          "Ошибка при использовании резервного сервиса:",
          backupError
        );
        return NextResponse.json(
          {
            error: "Ошибка при обработке ответа от всех доступных сервисов",
            details: responseText,
          },
          { status: 500 }
        );
      }
    }

    // Проверяем ответ от Telegram
    if (!telegramResponse.ok || !telegramData.ok) {
      console.error("Ошибка при отправке в Telegram:", telegramData);

      // Пробуем отправить через второй метод
      try {
        // Метод 2: Используем сервис Telegram Bot API через HTTP запрос
        const response = await fetch(
          "https://n8n.neuropolis.ai/webhook/telegram-forwarder",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              token: botToken,
              chat_id: chatId,
              text: text,
            }),
          }
        );

        if (response.ok) {
          console.log("Отправлено через резервный сервис!");
          return NextResponse.json({
            success: true,
            message: "Сообщение отправлено через резервный сервис",
          });
        } else {
          throw new Error("Резервный сервис вернул ошибку: " + response.status);
        }
      } catch (backupError) {
        console.error(
          "Ошибка при использовании резервного сервиса:",
          backupError
        );
        return NextResponse.json(
          {
            error: "Ошибка при отправке сообщения",
            details: telegramData,
          },
          { status: 500 }
        );
      }
    }

    console.log("Сообщение успешно отправлено в Telegram!");

    // Возвращаем успешный ответ
    return NextResponse.json({
      success: true,
      message: "Сообщение отправлено",
    });
  } catch (error) {
    console.error("Ошибка сервера:", error);
    return NextResponse.json(
      {
        error: "Внутренняя ошибка сервера",
        details: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
