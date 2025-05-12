-- Схема для страницы автономных ИИ-агентов
-- Создание таблиц для хранения контента страницы в Supabase

-- Таблица для Hero-секции
CREATE TABLE IF NOT EXISTS public.autonomous_agents_hero (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  cta_text TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Таблица для метаданных страницы
CREATE TABLE IF NOT EXISTS public.autonomous_agents_metadata (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  keywords TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Таблица для проблем бизнеса
CREATE TABLE IF NOT EXISTS public.autonomous_agents_business_problems (
  id SERIAL PRIMARY KEY,
  problem TEXT NOT NULL,
  order_num INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Таблица для решений
CREATE TABLE IF NOT EXISTS public.autonomous_agents_solutions (
  id SERIAL PRIMARY KEY,
  solution TEXT NOT NULL,
  order_num INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Таблица для возможностей агентов
CREATE TABLE IF NOT EXISTS public.autonomous_agents_capabilities (
  id SERIAL PRIMARY KEY,
  title TEXT NULL,
  description TEXT NULL,
  icon TEXT NOT NULL,
  capability TEXT NOT NULL,
  order_num INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Таблица для областей применения
CREATE TABLE IF NOT EXISTS public.autonomous_agents_use_cases (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL,
  order_num INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Таблица для выгод
CREATE TABLE IF NOT EXISTS public.autonomous_agents_benefits (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL,
  order_num INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Таблица для кейсов
CREATE TABLE IF NOT EXISTS public.autonomous_agents_cases (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NULL,
  order_num INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Таблица для этапов внедрения
CREATE TABLE IF NOT EXISTS public.autonomous_agents_implementation_steps (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  order_num INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Таблица для FAQ
CREATE TABLE IF NOT EXISTS public.autonomous_agents_faq (
  id SERIAL PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  order_num INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Таблица для финального CTA
CREATE TABLE IF NOT EXISTS public.autonomous_agents_final_cta (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  button_text TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Заполнение тестовыми данными
INSERT INTO public.autonomous_agents_hero (title, subtitle, cta_text)
VALUES (
  'Автономные ИИ-агенты под задачи вашего бизнеса',
  'Разрабатываем интеллектуальных агентов, которые выполняют задачи, анализируют данные и принимают решения — как самостоятельные сотрудники',
  'Получить консультацию'
);

INSERT INTO public.autonomous_agents_metadata (title, description, keywords)
VALUES (
  'Автономные ИИ-агенты для бизнеса | Neuropolis.ai',
  'Разрабатываем интеллектуальных агентов, которые выполняют задачи, анализируют данные и принимают решения — как самостоятельные сотрудники.',
  'автономные агенты, ИИ-агенты, искусственный интеллект, бизнес-автоматизация, интеллектуальные системы'
);

INSERT INTO public.autonomous_agents_business_problems (problem, order_num) VALUES
('Сотрудники перегружены повторяющимися задачами', 1),
('Данные не анализируются вовремя', 2),
('Решения принимаются вручную и долго', 3),
('Процессы не масштабируются', 4);

INSERT INTO public.autonomous_agents_solutions (solution, order_num) VALUES
('Выполняет сложные задачи на основе логики и данных', 1),
('Сам принимает решения и инициирует действия', 2),
('Взаимодействует с другими системами и людьми', 3),
('Работает 24/7 без перерывов', 4);

INSERT INTO public.autonomous_agents_capabilities (capability, icon, order_num) VALUES
('Понимает цели, контекст и инструкции', '🧠', 1),
('Подключается к CRM, API, базе знаний, Supabase', '🔗', 2),
('Анализирует данные, выявляет закономерности', '📈', 3),
('Пишет отчёты, письма, резюме, планы', '✍️', 4),
('Запускает действия: создает задачи, отправляет письма, обновляет базы', '📤', 5),
('Общается с клиентами и сотрудниками через мессенджеры, e-mail, чаты', '💬', 6);

INSERT INTO public.autonomous_agents_use_cases (title, description, icon, order_num) VALUES
('Аналитика и отчётность', 'Собирают, анализируют, визуализируют данные', '📊', 1),
('Продажи и маркетинг', 'Создают лиды, шлют письма, готовят КП', '🛒', 2),
('Администрирование', 'Обновляют базы, формируют документы', '🧾', 3),
('Поддержка и сопровождение', 'Отвечают клиентам, закрывают тикеты, следят за качеством', '🤖', 4);

INSERT INTO public.autonomous_agents_benefits (title, description, icon, order_num) VALUES
('Скорость', 'Мгновенная реакция и выполнение задач', '⚡', 1),
('Экономия', 'Замена рутинной работы и сокращение затрат', '📉', 2),
('Масштабируемость', 'Можно запускать десятки агентов', '📈', 3),
('Минимум ошибок', 'Строго по логике и алгоритму', '🎯', 4),
('Доступность', '24/7 без отпусков и выгорания', '🕓', 5);

INSERT INTO public.autonomous_agents_cases (title, description, icon, order_num) VALUES
('Финансовый агент', 'Готовит отчёты, прогнозы, отправляет в Slack', '📈', 1),
('Агент по холодным письмам', 'Сам пишет и рассылает цепочки', '📬', 2),
('Агент-ассистент руководителя', 'Готовит заметки, встречи, письма', '🧠', 3);

INSERT INTO public.autonomous_agents_implementation_steps (title, description, order_num) VALUES
('Выявляем задачу и контекст', 'Анализируем ваши бизнес-процессы и определяем, где агент принесет максимальную пользу', 1),
('Проектируем логику и роли', 'Создаем архитектуру агента, определяем его возможности и точки интеграции', 2),
('Подключаем нужные источники и каналы', 'Интегрируем с вашими системами, API и базами данных', 3),
('Обучаем, тестируем, запускаем', 'Проверяем работу агента на реальных данных и оптимизируем его производительность', 4);

INSERT INTO public.autonomous_agents_faq (question, answer, order_num) VALUES
('Это чат-бот?', 'Нет, автономный ИИ-агент — это намного более продвинутая система. В отличие от чат-бота, который просто реагирует на сообщения, агент имеет собственную логику, память, может анализировать данные и самостоятельно инициировать действия. Он способен выполнять сложные последовательности задач без постоянного контроля человеком.', 1),
('Он работает без человека?', 'Да, агент работает автономно на основе заложенной логики и целей. При этом он может получать дополнительные инструкции от человека по мере необходимости, а также отправлять уведомления о своих действиях или запрашивать подтверждение для критически важных решений.', 2),
('Можно ли подключить к CRM/API?', 'Да, мы предусматриваем интеграцию с любыми внешними источниками данных и сервисами через API. Агент может работать с популярными CRM-системами, базами данных, мессенджерами, email-сервисами и другими инструментами вашего бизнеса.', 3),
('Как он учится?', 'Мы используем комбинацию современных больших языковых моделей, включая GPT, и специализированных баз знаний для обучения агента. Он может работать с информацией из Supabase и других источников, накапливать опыт и оптимизировать свои действия со временем.', 4),
('Где хостится?', 'В зависимости от ваших требований по безопасности и производительности, агент может быть развернут на нашем MCP-сервере или на вашей собственной инфраструктуре. Мы гарантируем безопасное хранение данных и высокую доступность сервиса.', 5);

INSERT INTO public.autonomous_agents_final_cta (title, subtitle, button_text)
VALUES (
  'Хотите делегировать задачи ИИ-агенту?',
  'Расскажите о задаче — мы предложим архитектуру и покажем примеры работающих агентов',
  'Получить консультацию'
); 