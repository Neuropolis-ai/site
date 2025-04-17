// Это серверный компонент, не используем "use client"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import dynamic from "next/dynamic";

// Загружаем клиентский компонент динамически без SSR
const AutonomousAIAgentsClient = dynamic(() => import("./client"), {
  ssr: false,
});

// Пароль для доступа к странице (в реальном проекте следует использовать более безопасный метод)
const ACCESS_PASSWORD = "neuropolis2024";
const COOKIE_NAME = "autonomous_agents_access";

export default function AutonomousAIAgentsPage({
  searchParams,
}: {
  searchParams: { password?: string };
}) {
  const cookieStore = cookies();
  const hasAccess = cookieStore.has(COOKIE_NAME);
  const passwordParam = searchParams.password;

  // Если пользователь предоставил правильный пароль через URL,
  // устанавливаем куки (в реальном проекте следует использовать form submit с CSRF-защитой)
  if (passwordParam === ACCESS_PASSWORD) {
    // Ставим куки и редиректим на чистый URL без параметра пароля
    cookies().set(COOKIE_NAME, "true", {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7, // 7 дней
      path: "/",
    });
    return redirect("/services/autonomous-ai-agents");
  }

  // Если у пользователя нет доступа, показываем экран с запросом пароля
  if (!hasAccess) {
    return (
      <div className="min-h-screen dark:bg-black bg-white flex items-center justify-center p-4">
        <div className="max-w-md w-full dark:bg-[#0B132B] bg-gray-50 rounded-lg p-8 shadow-lg">
          <h1 className="text-2xl font-bold dark:text-white text-black mb-6 text-center">
            Страница в разработке
          </h1>
          <p className="dark:text-gray-300 text-gray-700 mb-6 text-center">
            Эта страница доступна только для разработчиков и администраторов.
          </p>
          <form method="get" className="space-y-4">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1"
              >
                Пароль для доступа:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border dark:border-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#050A1B] bg-white"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#0167F3] to-[#399AFC] text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
            >
              Получить доступ
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Если пользователь имеет доступ, показываем страницу
  return <AutonomousAIAgentsClient />;
}
