import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Массив защищенных путей, которые требуют аутентификации
const PROTECTED_PATHS: string[] = [
  // Временно убрано для разработки
  // "/services/autonomous-ai-agents",
  // "/cases/ai-sales-agent", // Убрана защита с кейса
];

// Пути, требующие доступа администратора
const ADMIN_PATHS = ["/test-telegram", "/admin"];

// Массив путей, которые нужно кешировать
const STATIC_PATHS = [
  '/grid-pattern.svg',
  '/assets/images/grid-pattern.svg',
  '/assets/images/workflow-marketing.png',
  '/assets/images/workflow-sales.png',
  '/assets/images/workflow-finance.png',
  // Добавьте другие статические ресурсы
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
  const pathname = request.nextUrl.pathname;

  // Редирект с /ai-agents на /ai-agent
  if (pathname === "/ai-agents" || pathname.startsWith("/ai-agents/")) {
    const newPath = pathname.replace("/ai-agents", "/ai-agent");
    return NextResponse.redirect(new URL(newPath, request.url));
  }

  // Проверяем, является ли путь защищенным
  if (ADMIN_PATHS.some((adminPath) => pathname.startsWith(adminPath))) {
    // Для страницы test-telegram пропускаем запросы без дополнительной проверки,
    // так как аутентификация реализована на клиенте

    // Если в будущем требуется дополнительная защита на уровне сервера,
    // здесь можно добавить проверку cookie или заголовков

    // В данный момент разрешаем доступ, но дальнейшая проверка будет на клиенте
    return NextResponse.next();
  }

  // Проверяем, требуется ли защита для данного пути
  const isProtectedPath = PROTECTED_PATHS.some(
    (protectedPath) =>
      pathname === protectedPath || pathname.startsWith(`${protectedPath}/`)
  );

  // Если путь защищен и пользователь не аутентифицирован
  if (isProtectedPath && !isAuthenticated(request)) {
    // Возвращаем ответ с запросом базовой аутентификации
    return new NextResponse("Authentication Required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Neuropolis.ai Protected Area"',
      },
    });
  }

  // Продолжаем с запросом, если аутентификация пройдена или путь не защищен
  const response = NextResponse.next();

  // Добавляем заголовки безопасности
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );

  // Устанавливаем правильные заголовки для RSS
  if (pathname === "/rss.xml" || pathname === "/rss-new.xml") {
    response.headers.set("Content-Type", "application/rss+xml; charset=UTF-8");
    response.headers.set(
      "Cache-Control",
      "no-cache, no-store, must-revalidate"
    );
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");

    // Добавляем Last-Modified
    try {
      const rssPath = path.join(
        process.cwd(),
        "public",
        request.nextUrl.pathname
      );
      const stats = fs.statSync(rssPath);
      response.headers.set("Last-Modified", stats.mtime.toUTCString());
    } catch (error) {
      console.warn("Could not get RSS file modification date:", error);
    }
  }

  // Настройка кеширования для статических ресурсов
  if (STATIC_PATHS.includes(pathname)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }

  // Настройка кеширования для страницы workflow-automation
  if (pathname === '/services/workflow-automation') {
    response.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=7200');
  }

  return response;
}

// Указываем для каких путей будет вызываться middleware
export const config = {
  matcher: [
    "/services/autonomous-ai-agents/:path*",
    "/ai-agents",
    "/ai-agents/:path*",
    // "/cases/ai-sales-agent/:path*", // Убран из matcher
    "/test-telegram/:path*",
    "/admin/:path*",
    "/rss.xml",
    "/rss-new.xml",
    '/services/workflow-automation',
    '/grid-pattern.svg',
    '/assets/images/grid-pattern.svg',
    '/assets/images/workflow-marketing.png',
    '/assets/images/workflow-sales.png',
    '/assets/images/workflow-finance.png',
  ],
};
