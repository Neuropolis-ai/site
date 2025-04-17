import { createClient } from "@supabase/supabase-js";
import {
  AutonomousAgentsPageData,
  FAQItem,
  BusinessProblem,
  Solution,
  FeatureItem,
  UseCase,
  BenefitItem,
  CaseItem,
  StepItem,
} from "../types/autonomous-agents";

// Инициализация Supabase клиента
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Получение всех данных для страницы
export async function getAutonomousAgentsPageData(): Promise<AutonomousAgentsPageData | null> {
  try {
    // Получение данных Hero секции
    const { data: heroData, error: heroError } = await supabase
      .from("autonomous_agents_hero")
      .select("*")
      .single();

    if (heroError) throw heroError;

    // Получение метаданных
    const { data: metadataData, error: metadataError } = await supabase
      .from("autonomous_agents_metadata")
      .select("*")
      .single();

    if (metadataError) throw metadataError;

    // Получение проблем бизнеса
    const { data: businessProblemsData, error: businessProblemsError } =
      await supabase
        .from("autonomous_agents_business_problems")
        .select("*")
        .order("order_num", { ascending: true });

    if (businessProblemsError) throw businessProblemsError;

    // Получение решений
    const { data: solutionsData, error: solutionsError } = await supabase
      .from("autonomous_agents_solutions")
      .select("*")
      .order("order_num", { ascending: true });

    if (solutionsError) throw solutionsError;

    // Получение возможностей агентов
    const { data: capabilitiesData, error: capabilitiesError } = await supabase
      .from("autonomous_agents_capabilities")
      .select("*")
      .order("order_num", { ascending: true });

    if (capabilitiesError) throw capabilitiesError;

    // Получение областей применения
    const { data: useCasesData, error: useCasesError } = await supabase
      .from("autonomous_agents_use_cases")
      .select("*")
      .order("order_num", { ascending: true });

    if (useCasesError) throw useCasesError;

    // Получение выгод
    const { data: benefitsData, error: benefitsError } = await supabase
      .from("autonomous_agents_benefits")
      .select("*")
      .order("order_num", { ascending: true });

    if (benefitsError) throw benefitsError;

    // Получение кейсов
    const { data: casesData, error: casesError } = await supabase
      .from("autonomous_agents_cases")
      .select("*")
      .order("order_num", { ascending: true });

    if (casesError) throw casesError;

    // Получение этапов внедрения
    const { data: stepsData, error: stepsError } = await supabase
      .from("autonomous_agents_implementation_steps")
      .select("*")
      .order("order_num", { ascending: true });

    if (stepsError) throw stepsError;

    // Получение FAQ
    const { data: faqData, error: faqError } = await supabase
      .from("autonomous_agents_faq")
      .select("*")
      .order("order_num", { ascending: true });

    if (faqError) throw faqError;

    // Получение финального CTA
    const { data: ctaData, error: ctaError } = await supabase
      .from("autonomous_agents_final_cta")
      .select("*")
      .single();

    if (ctaError) throw ctaError;

    // Формирование итоговой структуры данных
    const pageData: AutonomousAgentsPageData = {
      hero: {
        title: heroData.title,
        subtitle: heroData.subtitle,
        cta_text: heroData.cta_text,
      },
      metadata: {
        title: metadataData.title,
        description: metadataData.description,
        keywords: metadataData.keywords,
      },
      business_problems: businessProblemsData as BusinessProblem[],
      solutions: solutionsData as Solution[],
      agent_capabilities: capabilitiesData.map((item) => ({
        id: item.id,
        title: item.title || "",
        description: item.description || "",
        icon: item.icon,
        capability: item.capability,
      })) as FeatureItem[],
      use_cases: useCasesData as UseCase[],
      benefits: benefitsData as BenefitItem[],
      cases: casesData as CaseItem[],
      implementation_steps: stepsData as StepItem[],
      faq_items: faqData as FAQItem[],
      final_cta: {
        title: ctaData.title,
        subtitle: ctaData.subtitle,
        button_text: ctaData.button_text,
      },
    };

    return pageData;
  } catch (error) {
    console.error("Error fetching autonomous agents page data:", error);
    return null;
  }
}

// Получение отдельных секций страницы

export async function getAgentCapabilities(): Promise<FeatureItem[]> {
  try {
    const { data, error } = await supabase
      .from("autonomous_agents_capabilities")
      .select("*")
      .order("order_num", { ascending: true });

    if (error) throw error;

    return data.map((item) => ({
      id: item.id,
      title: item.title || "",
      description: item.description || "",
      icon: item.icon,
      capability: item.capability,
    })) as FeatureItem[];
  } catch (error) {
    console.error("Error fetching agent capabilities:", error);
    return [];
  }
}

export async function getAgentUseCases(): Promise<UseCase[]> {
  try {
    const { data, error } = await supabase
      .from("autonomous_agents_use_cases")
      .select("*")
      .order("order_num", { ascending: true });

    if (error) throw error;

    return data as UseCase[];
  } catch (error) {
    console.error("Error fetching agent use cases:", error);
    return [];
  }
}

export async function getAgentBenefits(): Promise<BenefitItem[]> {
  try {
    const { data, error } = await supabase
      .from("autonomous_agents_benefits")
      .select("*")
      .order("order_num", { ascending: true });

    if (error) throw error;

    return data as BenefitItem[];
  } catch (error) {
    console.error("Error fetching agent benefits:", error);
    return [];
  }
}

export async function getAgentCases(): Promise<CaseItem[]> {
  try {
    const { data, error } = await supabase
      .from("autonomous_agents_cases")
      .select("*")
      .order("order_num", { ascending: true });

    if (error) throw error;

    return data as CaseItem[];
  } catch (error) {
    console.error("Error fetching agent cases:", error);
    return [];
  }
}

export async function getAgentImplementationSteps(): Promise<StepItem[]> {
  try {
    const { data, error } = await supabase
      .from("autonomous_agents_implementation_steps")
      .select("*")
      .order("order_num", { ascending: true });

    if (error) throw error;

    return data as StepItem[];
  } catch (error) {
    console.error("Error fetching agent implementation steps:", error);
    return [];
  }
}

export async function getAgentFAQ(): Promise<FAQItem[]> {
  try {
    const { data, error } = await supabase
      .from("autonomous_agents_faq")
      .select("*")
      .order("order_num", { ascending: true });

    if (error) throw error;

    return data as FAQItem[];
  } catch (error) {
    console.error("Error fetching agent FAQ:", error);
    return [];
  }
}
