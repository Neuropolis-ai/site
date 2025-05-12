-- Исправление политик RLS для таблицы contacts

-- Сначала удалим существующие политики
DROP POLICY IF EXISTS "Public access to contacts" ON contacts;
DROP POLICY IF EXISTS "Public users can create contacts" ON contacts;
DROP POLICY IF EXISTS "Authenticated users can update contacts" ON contacts;
DROP POLICY IF EXISTS "Authenticated users can delete contacts" ON contacts;

-- Включаем Row Level Security и принудительно применяем для всех пользователей
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts FORCE ROW LEVEL SECURITY;

-- Создаем обновленные политики безопасности
CREATE POLICY "Public access to contacts" 
ON contacts FOR SELECT 
TO anon, authenticated
USING (true);

CREATE POLICY "Public users can create contacts" 
ON contacts FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update contacts" 
ON contacts FOR UPDATE 
TO authenticated
USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete contacts" 
ON contacts FOR DELETE 
TO authenticated
USING (auth.role() = 'authenticated');

-- Предоставляем явные разрешения
GRANT SELECT, INSERT ON contacts TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON contacts TO authenticated;

-- Дополнительное исправление для ситуации, если таблица требует последовательности
-- GRANT USAGE ON SEQUENCE contacts_id_seq TO anon, authenticated; 