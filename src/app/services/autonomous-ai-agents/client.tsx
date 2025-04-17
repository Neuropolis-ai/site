"use client";

import React, { useState, useEffect } from "react";
import { getAutonomousAgentsPageData } from "@/lib/supabase/autonomous-agents-api";
import { AutonomousAgentsPageData } from "@/lib/types/autonomous-agents";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function AutonomousAIAgentsClient() {
  const [pageData, setPageData] = useState<AutonomousAgentsPageData | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAutonomousAgentsPageData();
        setPageData(data);
      } catch (err) {
        console.error("Ошибка при загрузке данных:", err);
        setError("Не удалось загрузить данные страницы");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold text-red-600 mb-2">
            Произошла ошибка
          </h2>
          <p className="text-gray-700 dark:text-gray-300">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Попробовать снова
          </button>
        </div>
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">Данные не найдены</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Информация для страницы автономных ИИ-агентов не найдена в базе
            данных.
          </p>
        </div>
      </div>
    );
  }

  // Временное отображение структуры данных для разработки
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Страница автономных ИИ-агентов (в разработке)
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Hero секция</h2>
        <pre className="whitespace-pre-wrap bg-gray-100 dark:bg-gray-900 p-4 rounded">
          {JSON.stringify(pageData.hero, null, 2)}
        </pre>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Бизнес-проблемы</h2>
        <pre className="whitespace-pre-wrap bg-gray-100 dark:bg-gray-900 p-4 rounded">
          {JSON.stringify(pageData.business_problems, null, 2)}
        </pre>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Решения</h2>
        <pre className="whitespace-pre-wrap bg-gray-100 dark:bg-gray-900 p-4 rounded">
          {JSON.stringify(pageData.solutions, null, 2)}
        </pre>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Возможности агентов</h2>
        <pre className="whitespace-pre-wrap bg-gray-100 dark:bg-gray-900 p-4 rounded">
          {JSON.stringify(pageData.agent_capabilities, null, 2)}
        </pre>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Примеры использования</h2>
        <pre className="whitespace-pre-wrap bg-gray-100 dark:bg-gray-900 p-4 rounded">
          {JSON.stringify(pageData.use_cases, null, 2)}
        </pre>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Преимущества</h2>
        <pre className="whitespace-pre-wrap bg-gray-100 dark:bg-gray-900 p-4 rounded">
          {JSON.stringify(pageData.benefits, null, 2)}
        </pre>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Кейсы</h2>
        <pre className="whitespace-pre-wrap bg-gray-100 dark:bg-gray-900 p-4 rounded">
          {JSON.stringify(pageData.cases, null, 2)}
        </pre>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Этапы внедрения</h2>
        <pre className="whitespace-pre-wrap bg-gray-100 dark:bg-gray-900 p-4 rounded">
          {JSON.stringify(pageData.implementation_steps, null, 2)}
        </pre>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
        <pre className="whitespace-pre-wrap bg-gray-100 dark:bg-gray-900 p-4 rounded">
          {JSON.stringify(pageData.faq_items, null, 2)}
        </pre>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Призыв к действию</h2>
        <pre className="whitespace-pre-wrap bg-gray-100 dark:bg-gray-900 p-4 rounded">
          {JSON.stringify(pageData.final_cta, null, 2)}
        </pre>
      </div>
    </div>
  );
}
