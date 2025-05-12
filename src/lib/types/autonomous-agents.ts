// Типы данных для страницы автономных ИИ-агентов
// Используются для типизации данных, которые могут быть получены из Supabase

export type FAQItem = {
  id: number;
  question: string;
  answer: string;
  order?: number;
};

export type CaseItem = {
  id: number;
  title: string;
  description: string;
  icon?: string;
  order?: number;
};

export type FeatureItem = {
  id: number;
  title: string;
  description: string;
  icon: string;
  order?: number;
};

export type BenefitItem = {
  id: number;
  title: string;
  description: string;
  icon: string;
  order?: number;
};

export type StepItem = {
  id: number;
  title: string;
  description: string;
  order?: number;
};

export type UseCase = {
  id: number;
  title: string;
  description: string;
  icon: string;
  order?: number;
};

export type BusinessProblem = {
  id: number;
  problem: string;
  order?: number;
};

export type Solution = {
  id: number;
  solution: string;
  order?: number;
};

export type HeroContent = {
  title: string;
  subtitle: string;
  cta_text: string;
};

export type PageMetadata = {
  title: string;
  description: string;
  keywords: string;
};

// Полная структура данных для страницы
export type AutonomousAgentsPageData = {
  hero: HeroContent;
  metadata: PageMetadata;
  business_problems: BusinessProblem[];
  solutions: Solution[];
  agent_capabilities: FeatureItem[];
  use_cases: UseCase[];
  benefits: BenefitItem[];
  cases: CaseItem[];
  implementation_steps: StepItem[];
  faq_items: FAQItem[];
  final_cta: {
    title: string;
    subtitle: string;
    button_text: string;
  };
};
