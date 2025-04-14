"use client";

// Встроенный критический CSS вместо импорта
export function ThemeScript() {
  // Критический CSS для быстрой загрузки
  const criticalCss = `
    /* Критический CSS для быстрой загрузки первого экрана */
    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
      background-color: var(--background);
      color: var(--foreground);
    }
    
    /* Базовые стили для темного и светлого режимов */
    :root {
      --background: #ffffff;
      --foreground: #050505;
      --text-primary: #111111;
      --text-secondary: #555555;
      --card-bg: #f8f8f8;
      --border-color: #e0e0e0;
      --shadow-color: rgba(0, 0, 0, 0.1);
    }
    
    [data-theme='dark'] {
      --background: #050505;
      --foreground: #ffffff;
      --text-primary: #f2f2f2;
      --text-secondary: #919191;
      --card-bg: #101010;
      --border-color: #262626;
      --shadow-color: rgba(0, 0, 0, 0.2);
    }
    
    /* Предотвращение мерцания при загрузке */
    html.no-transition * {
      transition: none !important;
    }
    
    /* Стили для плавного перехода между темами */
    body, html {
      transition: background-color 0.3s ease, color 0.3s ease;
    }
  `;

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function() {
            try {
              // Сначала устанавливаем базовую тему для избежания мерцания
              document.documentElement.classList.add('no-transition');
              
              const storedTheme = localStorage.getItem('theme');
              if (storedTheme) {
                document.documentElement.setAttribute('data-theme', storedTheme);
              } else {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const initialTheme = prefersDark ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', initialTheme);
                localStorage.setItem('theme', initialTheme);
              }
              
              // Удаляем класс после короткой задержки, чтобы CSS-переходы заработали снова
              setTimeout(function() {
                document.documentElement.classList.remove('no-transition');
              }, 50);
            } catch (e) {
              console.error('Error setting initial theme:', e);
              document.documentElement.setAttribute('data-theme', 'light');
            }
          })();
        `,
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
          html.no-transition * {
            transition: none !important;
          }
          
          /* Установка базовых цветов для предотвращения мерцания при загрузке */
          :root {
            color-scheme: light;
          }
          
          [data-theme='dark'] {
            color-scheme: dark;
          }
          
          @media (prefers-color-scheme: dark) {
            :root:not([data-theme='light']) {
              color-scheme: dark;
            }
          }
          
          ${criticalCss}
        `,
        }}
      />
    </>
  );
}
