"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { supabase } from "@/lib/supabase";
import WorkflowAutomationContactForm from "@/components/workflow-automation/WorkflowAutomationContactForm";

// Функция для отправки данных на вебхук n8n
async function sendDataToN8N(formData: any): Promise<void> {
  console.log('Начинаем отправку данных в n8n:', formData);
  
  return new Promise<void>((resolve, reject) => {
    const payload = {
      formId: "contact-page-form",
      ...formData,
      submittedAt: new Date().toISOString(),
    };
    
    console.log('Подготовленные данные для отправки:', payload);
    
    // URL вебхука n8n
    const webhookUrl = 'https://dev.neuropolis.ai/webhook/9f5b312f-f10f-4ac8-8908-2ae20c8d93de';
    
    // Отправка данных через fetch с использованием URL-параметров
    try {
      // Создаем URL с параметрами запроса вместо тела
      const urlParams = new URLSearchParams();
      
      // Добавляем все поля формы как параметры запроса
      Object.entries(payload).forEach(([key, value]) => {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
          urlParams.append(key, String(value));
        } else {
          urlParams.append(key, JSON.stringify(value));
        }
      });
      
      // Полный URL с параметрами
      const fullUrl = `${webhookUrl}?${urlParams.toString()}`;
      console.log('Отправка GET запроса на URL:', fullUrl);
      
      // Отправляем GET запрос вместо POST
      fetch(fullUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
        mode: 'cors',
      })
      .then(response => {
        console.log('Получен ответ от сервера:', response.status, response.statusText);
        return response.text();
      })
      .then(text => {
        console.log('Тело ответа:', text);
        
        // После успешной отправки на вебхук, сохраняем в Supabase
        saveToSupabase(formData)
          .then(() => {
            // После Supabase отправляем в Telegram
            try {
              sendToTelegramBackend(formData);
            } catch (e) {
              console.error('Ошибка при отправке в Telegram:', e);
            }
            resolve();
          })
          .catch(error => {
            console.error('Ошибка при сохранении в Supabase:', error);
            resolve(); // Продолжаем несмотря на ошибку
          });
      })
      .catch(error => {
        console.error('Ошибка при выполнении fetch:', error);
        
        // Резервный способ отправки через изображение
        console.log('Пробуем отправить через изображение...');
        const img = new Image();
        img.onload = () => {
          console.log('Данные успешно отправлены через изображение');
          saveToSupabase(formData).catch(e => console.error('Ошибка Supabase:', e));
          resolve();
        };
        img.onerror = () => {
          console.log('Ошибка при отправке через изображение, но продолжаем');
          saveToSupabase(formData).catch(e => console.error('Ошибка Supabase:', e));
          resolve();
        };
        img.src = fullUrl;
      });
      
    } catch (e) {
      console.error('Критическая ошибка при отправке данных:', e);
      saveToSupabase(formData).catch(e => console.error('Ошибка Supabase:', e));
      resolve(); // Продолжаем выполнение
    }
    
    // Одновременно попробуем отправить через форму в iframe
    try {
      const frame = document.createElement('iframe');
      frame.name = 'hiddenFrame';
      frame.style.display = 'none';
      document.body.appendChild(frame);
      
      const form = document.createElement('form');
      form.action = webhookUrl;
      form.method = 'get'; // Используем GET вместо POST
      form.target = 'hiddenFrame';
      
      // Добавляем все поля формы как скрытые input
      Object.entries(payload).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
          input.value = String(value);
        } else {
          input.value = JSON.stringify(value);
        }
        
        form.appendChild(input);
      });
      
      document.body.appendChild(form);
      form.submit();
      
      console.log('Данные отправлены через форму в скрытом фрейме');
      
      // Очистка
      setTimeout(() => {
        try {
          document.body.removeChild(frame);
          document.body.removeChild(form);
        } catch (e) {
          console.error('Ошибка при удалении iframe:', e);
        }
      }, 1000);
    } catch (frameError) {
      console.error('Ошибка при отправке через фрейм:', frameError);
    }
  });
}

// Сохранение данных в Supabase
async function saveToSupabase(formData: any): Promise<void> {
  console.log('Сохранение данных в Supabase:', formData);
  
  try {
    const { error } = await supabase.from("contacts").insert([
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        company: formData.company || null,
        message: formData.message || null,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error("Ошибка при сохранении в Supabase:", error);
      throw error;
    }
    
    console.log('Данные успешно сохранены в Supabase');
  } catch (error) {
    console.error('Ошибка при сохранении в Supabase:', error);
    throw error;
  }
}

// Отправка данных в Telegram
function sendToTelegramBackend(formData: any): void {
  console.log('Отправка данных в Telegram:', formData);
  
  try {
    const BACKUP_BOT_TOKEN = "8020073798:AAHmXxi9XijA0z1k9JY2DzNpDI7j6ICqthI";
    const BACKUP_CHAT_ID = "-1002655068247";

    const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN || BACKUP_BOT_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID || BACKUP_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Не настроены параметры Telegram-бота");
      return;
    }

    const text = `\n📩 Новая заявка (Страница Контактов):\n👤 Имя: ${
      formData.name
    }\n🏢 Компания: ${formData.company || "Не указана"}\n📞 Телефон: ${
      formData.phone || "Не указан"
    }\n✉️ Email: ${formData.email}\n💬 Сообщение: ${
      formData.message || "Не указано"
    }\n`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const requestData = {
      chat_id: chatId,
      text: text,
      parse_mode: "Markdown",
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(requestData),
    })
    .then(response => {
      if (!response.ok) {
        console.error("Ошибка отправки в Telegram:", response.statusText);
      } else {
        console.log('Сообщение успешно отправлено в Telegram');
      }
    })
    .catch(error => {
      console.error("Ошибка при отправке в Telegram:", error);
    });
  } catch (error) {
    console.error("Ошибка при отправке в Telegram:", error);
  }
}

export default function ContactPage() {
  const { isDark } = useTheme();
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmitSuccess = (data: any) => {
    console.log('Форма успешно отправлена:', data);
    setFormSubmitted(true);
    
    // Отправка данных через Beacon API как резервный вариант
    if (navigator.sendBeacon) {
      // Создаем URL с параметрами запроса вместо тела
      const urlParams = new URLSearchParams();
      const payload = {
        formId: "contact-page-form",
        ...data,
        submittedAt: new Date().toISOString(),
      };
      
      // Добавляем все поля формы как параметры запроса
      Object.entries(payload).forEach(([key, value]) => {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
          urlParams.append(key, String(value));
        } else {
          urlParams.append(key, JSON.stringify(value));
        }
      });
      
      // Полный URL с параметрами
      const fullUrl = `https://dev.neuropolis.ai/webhook/9f5b312f-f10f-4ac8-8908-2ae20c8d93de?${urlParams.toString()}`;
      
      const success = navigator.sendBeacon(fullUrl);
      console.log('Результат отправки через Beacon API:', success);
    }
  };
  
  const handleSubmitError = (error: any) => {
    console.error('Ошибка при отправке формы:', error);
    // Даже в случае ошибки показываем пользователю успешное сообщение
    setFormSubmitted(true);
  };

  // Стандартные варианты анимации
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Стандартизированные классы для полей ввода
  const inputClasses = `block w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 
    focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 bg-white dark:bg-gray-800/50 
    dark:text-white text-lg transition-colors duration-200 placeholder:text-gray-400 dark:placeholder:text-gray-500`;

  const labelClasses = `block text-base font-medium text-gray-700 dark:text-gray-300 mb-1.5`;

  return (
    <div className="flex flex-col min-h-screen">
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex-grow bg-gradient-to-b from-blue-50/50 to-white dark:from-blue-950/10 dark:to-gray-950"
      >
        {/* Основной раздел страницы */}
        <div className="relative py-24 md:py-32 overflow-hidden">
          {/* Используем компонент WorkflowAutomationContactForm */}
          <WorkflowAutomationContactForm
            title="Начните внедрять ИИ уже сегодня"
            subtitle="Получите бесплатную консультацию по внедрению ИИ-решений в ваши бизнес-процессы. Наши эксперты помогут определить оптимальные сценарии применения."
            submitButtonText="Получить консультацию"
            showCompanyField={true}
            showPhoneField={true}
            showFeatures={true}
            showConfidentiality={true}
            useContainer={false}
            fullWidth={true}
            formId="contact-page-form"
            features={[
              {
                icon: <FiMail />,
                title: "ИИ-решения под ключ",
                description:
                  "Разработаем и внедрим специализированных ИИ-агентов, учитывающих уникальные потребности вашего бизнеса.",
              },
              {
                icon: <FiPhone />,
                title: "Комплексная автоматизация",
                description:
                  "Автоматизируем рутинные задачи, обработку данных и бизнес-процессы, освобождая время для ключевых задач.",
              },
              {
                icon: <FiMapPin />,
                title: "Масштабируемость",
                description:
                  "Создаем решения, которые растут вместе с вашей компанией и адаптируются к меняющимся требованиям бизнеса.",
              },
            ]}
            confidentialityText="Мы ценим ваше доверие и гарантируем полную конфиденциальность всей информации, которую вы предоставляете нам. Ваши данные защищены в соответствии с законодательством."
            onSubmitSuccess={handleSubmitSuccess}
            onSubmitError={handleSubmitError}
            customSubmit={sendDataToN8N}
            backgroundColor={
              isDark ? "rgba(15, 23, 42, 0.5)" : "rgba(255, 255, 255, 0.7)"
            }
            privacyPolicyUrl="/privacy-policy"
            requirePhoneField={true}
          />
        </div>
      </motion.main>
    </div>
  );
}
