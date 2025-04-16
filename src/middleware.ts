import { NextRequest, NextResponse } from "next/server";

// Массив защищенных путей, которые требуют аутентификации
const PROTECTED_PATHS = [
  "/services/autonomous-ai-agents",
  "/cases/ai-sales-agent",
];

// Простая функция для проверки базовой аутентификации
function isAuthenticated(request: NextRequest): boolean {
  const authHeader = request.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return false;
  }

  // Предполагаем, что пароль "neuropolis2025"
  // base64('neuropolis:neuropolis2025') = 'bmV1cm9wb2xpczpuZXVyb3BvbGlzMjAyNQ=='
  const expectedAuthValue = "Basic bmV1cm9wb2xpczpuZXVyb3BvbGlzMjAyNQ==";
  return authHeader === expectedAuthValue;
}

export function middleware(request: NextRequest) {
  // Получаем путь из URL
  const path = request.nextUrl.pathname;

  // Проверяем, требуется ли защита для данного пути
  const isProtectedPath = PROTECTED_PATHS.some(
    (protectedPath) =>
      path === protectedPath || path.startsWith(`${protectedPath}/`)
  );

  // Если путь защищен и пользователь не аутентифицирован
  if (isProtectedPath && !isAuthenticated(request)) {
    // Возвращаем ответ с запросом базовой аутентификации
    return new NextResponse("Требуется аутентификация", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Защищенный раздел Neuropolis.ai"',
      },
    });
  }

  // Продолжаем с запросом, если аутентификация пройдена или путь не защищен
  return NextResponse.next();
}

// Указываем для каких путей будет вызываться middleware
export const config = {
  matcher: [
    "/services/autonomous-ai-agents/:path*",
    "/cases/ai-sales-agent/:path*",
  ],
};
