"use client";
import { useState } from "react";

export default function TestTelegram() {
  const [name, setName] = useState("Тестовый пользователь");
  const [phone, setPhone] = useState("+7 (900) 123-45-67");
  const [email, setEmail] = useState("test@example.com");
  const [message, setMessage] = useState("Тестовое сообщение");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLogs((prev) => [
      ...prev,
      `[${new Date().toLocaleTimeString()}] ${message}`,
    ]);
  };

  const sendDirectTest = async () => {
    setLoading(true);
    setResult(null);
    addLog("Начинаем прямую отправку в Telegram API...");

    try {
      // Резервные значения для Telegram
      const botToken = "8020073798:AAHmXxi9XijA0z1k9JY2DzNpDI7j6ICqthI";
      const chatId = "-1002655068247";

      const text = `\n📩 ТЕСТОВОЕ СООБЩЕНИЕ:\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n✉️ Email: ${email}\n💬 Сообщение: ${message}\n`;
      addLog(`Подготовлено сообщение: ${text}`);

      const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
      addLog(`URL запроса: ${url.substring(0, 38)}***`);

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });

      addLog(`Статус ответа: ${response.status}`);
      const data = await response.json();
      addLog(`Данные ответа: ${JSON.stringify(data)}`);

      setResult({
        success: data.ok,
        data: data,
      });
    } catch (error) {
      addLog(`Ошибка: ${(error as Error).message}`);
      setResult({
        success: false,
        error: (error as Error).message,
      });
    } finally {
      setLoading(false);
    }
  };

  const sendViaApi = async () => {
    setLoading(true);
    setResult(null);
    addLog("Начинаем отправку через наш API...");

    try {
      const apiUrl = "/api/telegram";
      addLog(`Отправка запроса на: ${apiUrl}`);

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          message: `ТЕСТ API: ${message}`,
        }),
      });

      addLog(`Статус ответа: ${response.status}`);
      const data = await response.json();
      addLog(`Данные ответа: ${JSON.stringify(data)}`);

      setResult({
        success: response.ok,
        data: data,
      });
    } catch (error) {
      addLog(`Ошибка: ${(error as Error).message}`);
      setResult({
        success: false,
        error: (error as Error).message,
      });
    } finally {
      setLoading(false);
    }
  };

  const sendViaProxy = async () => {
    setLoading(true);
    setResult(null);
    addLog("Начинаем отправку через прокси-сервис...");

    try {
      // Резервные значения для Telegram
      const botToken = "8020073798:AAHmXxi9XijA0z1k9JY2DzNpDI7j6ICqthI";
      const chatId = "-1002655068247";

      const text = `\n📩 ТЕСТОВОЕ СООБЩЕНИЕ ЧЕРЕЗ ПРОКСИ:\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n✉️ Email: ${email}\n💬 Сообщение: ${message}\n`;
      addLog(`Подготовлено сообщение: ${text}`);

      const apiUrl = "https://n8n.neuropolis.ai/webhook/telegram-forwarder";
      addLog(`Отправка на резервный сервис: ${apiUrl}`);

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: botToken,
          chat_id: chatId,
          text: text,
        }),
      });

      addLog(`Статус ответа: ${response.status}`);

      let data;
      try {
        data = await response.json();
        addLog(`Данные ответа: ${JSON.stringify(data)}`);
      } catch (e) {
        const text = await response.text();
        addLog(`Текст ответа: ${text}`);
        data = { text };
      }

      setResult({
        success: response.ok,
        data: data,
      });
    } catch (error) {
      addLog(`Ошибка: ${(error as Error).message}`);
      setResult({
        success: false,
        error: (error as Error).message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Тестирование отправки в Telegram
      </h1>

      <div className="mb-4">
        <label className="block mb-2">Имя:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Телефон:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Сообщение:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          rows={3}
        />
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <button
          onClick={sendDirectTest}
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? "Отправка..." : "Прямой тест в Telegram"}
        </button>

        <button
          onClick={sendViaApi}
          disabled={loading}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
        >
          {loading ? "Отправка..." : "Тест через API"}
        </button>

        <button
          onClick={sendViaProxy}
          disabled={loading}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:opacity-50"
        >
          {loading ? "Отправка..." : "Тест через прокси-сервис"}
        </button>
      </div>

      {result && (
        <div
          className={`p-4 mb-6 rounded ${
            result.success
              ? "bg-green-100 dark:bg-green-800"
              : "bg-red-100 dark:bg-red-800"
          }`}
        >
          <h2 className="text-lg font-bold mb-2">Результат:</h2>
          <pre className="whitespace-pre-wrap overflow-auto max-h-40">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}

      <div className="mt-6">
        <h2 className="text-lg font-bold mb-2">Логи:</h2>
        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded max-h-60 overflow-auto">
          {logs.length === 0 ? (
            <p className="text-gray-500">Логи будут отображаться здесь...</p>
          ) : (
            <ul className="list-none">
              {logs.map((log, index) => (
                <li key={index} className="mb-1 font-mono text-sm">
                  {log}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
