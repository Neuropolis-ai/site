import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type BlogCategory = {
  id: string;
  name: string;
  slug: string;
  created_at: string;
};

export type BlogPost = {
  id: string;
  title: string;
  content: string;
  category_id: string;
  slug: string;
  created_at: string;
  updated_at: string;
};

// Типы для статей блога
export type Article = {
  id: string;
  title: string;
  content: string;
  description: string | null;
  image_url: string | null;
  source: string | null;
  published_at: string;
  created_at: string;
  slug: string;
};

// Функции для работы с данными блога
export async function getBlogCategories(): Promise<BlogCategory[]> {
  const { data, error } = await supabase
    .from("blog_categories")
    .select("*")
    .order("name");

  if (error) {
    console.error("Ошибка при получении категорий блога:", error);
    return [];
  }

  return data || [];
}

export async function getBlogPostsByCategory(
  categoryId: string
): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("category_id", categoryId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Ошибка при получении статей по категории:", error);
    return [];
  }

  return data || [];
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Ошибка при получении статьи по slug:", error);
    return null;
  }

  return data;
}

export async function getLatestBlogPosts(limit = 6): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Ошибка при получении последних статей:", error);
    return [];
  }

  return data || [];
}
