"use client";

import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import { ReactNode } from "react";
import "../../style/dot-grid.css";
import { Heading } from "@/components/ui/heading";
import Subheading from "@/components/ui/subheading";
import Badge from "@/components/ui/Badge";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
  icon?: ReactNode;
}

export interface ProcessSectionProps {
  processSteps: ProcessStep[];
  title: string;
  subtitle: string;
  badge?: string;
  sectionId: string;
  resultTitle?: string;
  resultIcon?: ReactNode;
  resultText?: string;
  gradientTitlePart?: string;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({
  processSteps,
  title,
  subtitle,
  badge = "Как мы работаем",
  sectionId,
  resultTitle = "Результат нашей работы",
  resultIcon,
  resultText,
  gradientTitlePart,
}) => {
  const { theme } = useTheme();

  function renderTitle() {
    if (!gradientTitlePart) {
      return <span className="text-gray-900">{title}</span>;
    }

    const parts = title.split(gradientTitlePart);
    return (
      <>
        <span className="text-gray-900">{parts[0]}</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
          {gradientTitlePart}
        </span>
        {parts.length > 1 && parts[1] && (
          <span className="text-gray-900">{parts[1]}</span>
        )}
      </>
    );
  }

  return (
    <section
      id={sectionId}
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Статический градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 -z-10"></div>
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/20 to-blue-400/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 rounded-full blur-3xl -z-10"></div>

      {/* Сетка-фон */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] -z-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url('/grid-pattern.svg')",
            backgroundSize: "24px 24px",
            backgroundRepeat: "repeat",
          }}
        ></div>
      </div>

      <Container>
        <div className="text-center mb-16">
          <Badge>{badge}</Badge>
          <Heading
            level={2}
            align="center"
            className="mb-6"
          >
            Процесс{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
              {gradientTitlePart}
            </span>
          </Heading>
          <Subheading
            align="center"
            className="max-w-3xl mx-auto"
          >
            {subtitle}
          </Subheading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative group p-7 rounded-2xl transition-all duration-500 overflow-hidden bg-white hover:shadow-xl border border-gray-200"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-primary-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-5"></div>
              <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-primary/10 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="flex flex-col relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
                    {step.number}
                  </div>
                  <Heading
                    level={3}
                    className="font-semibold text-gray-900"
                  >
                    {step.title}
                  </Heading>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>
                <div className="pt-3 border-t border-gray-200">
                  <ul className="space-y-2 list-text">
                    {step.details.map((detail: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <div className="min-w-[14px] h-[14px]">
                          <div className="w-[14px] h-[14px] rounded-full bg-gradient-to-r from-primary to-primary-light flex items-center justify-center">
                            <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
                          </div>
                        </div>
                        <span className="text-sm list-text">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProcessSection;
