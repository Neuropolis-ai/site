"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isAuth, setIsAuth] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const auth = localStorage.getItem("admin_auth");
      if (auth === "1") setIsAuth(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
    if (input === adminPassword) {
      localStorage.setItem("admin_auth", "1");
      setIsAuth(true);
      setError("");
    } else {
      setError("Неверный пароль");
    }
  };

  if (!isAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <form
          onSubmit={handleLogin}
          className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-xs"
        >
          <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
            Вход в админку
          </h2>
          <input
            type="password"
            placeholder="Пароль"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-white"
          />
          {error && <div className="text-red-500 mb-2 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Войти
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-2.5 fixed w-full z-50">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center">
            <Link href="/admin" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-800 dark:text-white">
                Админ-панель
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              href="/"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium"
              target="_blank"
            >
              Перейти на сайт
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-16 flex">
        {/* Сайдбар */}
        <aside className="w-64 fixed h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
          <div className="px-3 py-4">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/admin"
                  className={`flex items-center p-2 text-base font-normal rounded-lg ${
                    pathname === "/admin"
                      ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <svg
                    className="w-6 h-6 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                  </svg>
                  <span className="ml-3">Обзор</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/blog"
                  className={`flex items-center p-2 text-base font-normal rounded-lg ${
                    pathname.startsWith("/admin/blog")
                      ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <svg
                    className="w-6 h-6 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18.75c0 1.036.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875V4.875C21.75 3.839 20.91 3 19.875 3H4.125zM12 18.75a.75.75 0 01-.75-.75V6a.75.75 0 011.5 0v12a.75.75 0 01-.75.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-3">Блог</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        {/* Основной контент */}
        <div className="ml-64 w-full">{children}</div>
      </div>
    </div>
  );
}
