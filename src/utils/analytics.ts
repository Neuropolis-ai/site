// Типы для аналитики
type EventCategory = 
  | 'ab_testing' 
  | 'engagement' 
  | 'navigation' 
  | 'conversion' 
  | 'scroll_depth'
  | 'user_interaction';

interface AnalyticsEventOptions {
  event_category?: EventCategory;
  event_label?: string;
  value?: number;
  [key: string]: any; // Для любых дополнительных атрибутов
}

/**
 * Отправляет событие в Google Analytics и другие системы аналитики
 */
export const trackEvent = (
  action: string, 
  options: AnalyticsEventOptions = {}
): void => {
  // Проверка доступности Google Analytics
  if (typeof window !== 'undefined' && 'gtag' in window) {
    window.gtag('event', action, {
      event_category: options.event_category || 'general',
      event_label: options.event_label,
      value: options.value,
      ...options // Передаем дополнительные параметры
    });
    
    // Для отладки
    if (process.env.NODE_ENV === 'development') {
      console.log(`🔍 Analytics [${options.event_category || 'general'}]: ${action}`, options);
    }
  }
};

/**
 * Отслеживание выбора варианта в A/B тестировании
 */
export const trackABTestVariant = (
  testName: string, 
  variant: string, 
  variantIndex: number
): void => {
  trackEvent('variant_shown', {
    event_category: 'ab_testing',
    event_label: variant,
    value: variantIndex,
    test_name: testName
  });
  
  // Сохраняем в localStorage для постоянства
  if (typeof window !== 'undefined') {
    localStorage.setItem(`ab_test_${testName}`, JSON.stringify({
      variant,
      index: variantIndex,
      timestamp: new Date().toISOString()
    }));
  }
};

/**
 * Отслеживание конверсии в A/B тестировании
 */
export const trackABTestConversion = (
  testName: string, 
  action: string,
  options: AnalyticsEventOptions = {}
): void => {
  // Получаем сохраненный вариант
  let variantData = null;
  
  if (typeof window !== 'undefined') {
    const savedData = localStorage.getItem(`ab_test_${testName}`);
    if (savedData) {
      try {
        variantData = JSON.parse(savedData);
      } catch (e) {
        console.error('Failed to parse AB test data', e);
      }
    }
  }
  
  // Если есть данные о варианте, добавляем их к событию
  if (variantData) {
    trackEvent(`${testName}_conversion`, {
      event_category: 'ab_testing',
      event_label: variantData.variant,
      value: variantData.index,
      action,
      ...options
    });
  } else {
    // Если нет данных, все равно отслеживаем событие
    trackEvent(`${testName}_conversion`, {
      event_category: 'ab_testing',
      action,
      ...options
    });
  }
};

/**
 * Отслеживание глубины прокрутки
 */
export const setupScrollDepthTracking = (
  thresholds: number[] = [25, 50, 75, 90, 100],
  selector: string = 'body'
): void => {
  if (typeof window === 'undefined') return;
  
  // Хранит уже отправленные пороги
  const sentThresholds = new Set<number>();
  
  const calculateScrollPercentage = () => {
    const element = document.querySelector(selector);
    if (!element) return 0;
    
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;
    const elementHeight = element.scrollHeight;
    const visibleHeight = Math.min(windowHeight, elementHeight);
    
    // Вычисляем максимальную возможную прокрутку
    const maxScroll = elementHeight - visibleHeight;
    if (maxScroll <= 0) return 100;
    
    // Вычисляем процент прокрутки
    return Math.min(100, Math.floor((scrollTop / maxScroll) * 100));
  };
  
  const checkScrollDepth = () => {
    const scrollPercentage = calculateScrollPercentage();
    
    for (const threshold of thresholds) {
      if (scrollPercentage >= threshold && !sentThresholds.has(threshold)) {
        trackEvent('scroll_depth', {
          event_category: 'scroll_depth',
          event_label: `${threshold}%`,
          value: threshold
        });
        sentThresholds.add(threshold);
      }
    }
  };
  
  // Подписываемся на событие прокрутки с дебаунсингом
  let timeout: NodeJS.Timeout | null = null;
  
  window.addEventListener('scroll', () => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(checkScrollDepth, 250);
  });
  
  // Проверяем начальное состояние
  window.addEventListener('load', checkScrollDepth);
}; 