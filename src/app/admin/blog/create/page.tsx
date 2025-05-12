"use client";

import React, { useState } from 'react';
import ArticleForm from '@/components/admin/ArticleForm';

export default function CreateArticlePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (data: any) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      // В реальном приложении здесь будет API-запрос для сохранения статьи
      console.log('Отправка данных статьи:', data);
      
      // Имитируем задержку сохранения
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess(true);
    } catch (err) {
      console.error('Ошибка при создании статьи:', err);
      setError(err instanceof Error ? err.message : 'Произошла ошибка при создании статьи');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Создание новой статьи
      </h1>
      
      {success ? (
        <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-800 p-4 rounded-lg mb-6">
          <p className="text-green-800 dark:text-green-200">
            Статья успешно создана!
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="mt-2 text-sm text-green-700 dark:text-green-300 hover:underline"
          >
            Создать еще одну статью
          </button>
        </div>
      ) : (
        <>
          {error && (
            <div className="bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-800 p-4 rounded-lg mb-6">
              <p className="text-red-800 dark:text-red-200">{error}</p>
            </div>
          )}
          
          <ArticleForm 
            onSubmit={handleSubmit} 
            isEditing={false}
          />
        </>
      )}
    </div>
  );
}
