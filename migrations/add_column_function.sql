-- Функция для добавления колонки в таблицу
CREATE OR REPLACE FUNCTION alter_table_add_column(
  tablename text, 
  columnname text, 
  datatype text, 
  defaultvalue text DEFAULT NULL
) 
RETURNS boolean 
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  column_exists boolean;
  alter_query text;
BEGIN
  -- Проверяем, существует ли колонка
  EXECUTE format('
    SELECT EXISTS (
      SELECT 1 
      FROM information_schema.columns 
      WHERE table_name = %L AND column_name = %L
    )', tablename, columnname)
  INTO column_exists;
  
  -- Если колонка не существует, добавляем её
  IF NOT column_exists THEN
    alter_query := format('ALTER TABLE %I ADD COLUMN %I %s', 
                          tablename, columnname, datatype);
    
    -- Добавляем значение по умолчанию, если оно указано
    IF defaultvalue IS NOT NULL THEN
      alter_query := alter_query || ' DEFAULT ' || defaultvalue;
    END IF;
    
    -- Выполняем запрос
    EXECUTE alter_query;
    RAISE NOTICE 'Колонка % добавлена в таблицу %', columnname, tablename;
    RETURN true;
  ELSE
    RAISE NOTICE 'Колонка % уже существует в таблице %', columnname, tablename;
    RETURN false;
  END IF;
  
EXCEPTION
  WHEN OTHERS THEN
    RAISE NOTICE 'Ошибка при добавлении колонки %: %', columnname, SQLERRM;
    RETURN false;
END;
$$; 