// Общие типы для проекта

export interface Article {
  id?: number;
  title: string;
  slug: string;
  description: string;
  content: string;
  category: string;
  created_at?: string;
  image_url?: string;
  published?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
