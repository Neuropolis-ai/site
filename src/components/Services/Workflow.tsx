"use client";

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Workflow = () => {
  const { isDark } = useTheme();
  const [isWorkflowVisible, setIsWorkflowVisible] = useState(false);
  const workflowRef = useRef(null);
  const chatRef = useRef(null);
  const aiAgentRef = useRef(null);

  // Workflow animation visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsWorkflowVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = workflowRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Чат-анимация
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Когда чат становится видимым, запускаем анимацию
        if (entry.isIntersecting) {
          // Implementation handled separately
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = chatRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // AI линии анимация
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Когда AI-агент становится видимым, запускаем анимацию линий
        if (entry.isIntersecting) {
          // Implementation handled separately
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = aiAgentRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Набор иконок для первого ряда (верхний ряд - движется влево)
  const topRowIcons = [
    "https://framerusercontent.com/images/7ccIrhplk721bhbtvb1UCavI.svg",
    "https://framerusercontent.com/images/qc6WiaOLMJCgLjRA2nE1Poq3zLk.svg",
    "https://framerusercontent.com/images/8y8OLtsq3aj0TJnWcRwlcPqvWE.svg",
    "https://framerusercontent.com/images/ScGavdIdTjHTgHXBhFQXusFFEn4.svg",
  ];

  // Набор иконок для второго ряда (нижний ряд - движется вправо)
  const bottomRowIcons = [
    "https://framerusercontent.com/images/hvfBGbwc1AsKFtdq8R2VcwHAv0A.svg",
    "https://framerusercontent.com/images/YcyG9QsC7RV1Onc50wyEXquv1k.svg",
    "https://framerusercontent.com/images/ZokCuPJkR8AKgTToaXlDYY95I.svg",
    "https://framerusercontent.com/images/Kjci2ZiHnCXWVjKZxU9rwu3GSfI.svg",
  ];

  // Функция для создания элемента иконки с соединительными линиями
  const renderIcon = (src: string, index: number | string) => (
    <React.Fragment key={`icon-${index}`}>
      <div className="flex items-center gap-[10px] ml-[10px]">
        <div className="flex-shrink-0 w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] icon-box">
          <Image
            src={src}
            alt="workflow icon"
            width={28}
            height={28}
            className="sm:w-[36px] sm:h-[36px] object-contain"
          />
        </div>
        <div className="flex-shrink-0 circle-container">
          <span className="circle"></span>
          <span className="line"></span>
          <span className="circle"></span>
        </div>
      </div>
    </React.Fragment>
  );

  return (
    <div>
      {/* Workflow Automation Card */}
      <div
        className={`w-full lg:w-[523px] p-[20px] rounded-xl border border-[#262626] overflow-hidden ${
          isDark ? "process-card" : "bg-gray-50 border-gray-200"
        }`}
      >
        {/* Icons container */}
        <div
          ref={workflowRef}
          className={`py-[30px] sm:py-[50px] flex flex-col items-center gap-[20px] sm:gap-[30px] overflow-hidden w-full ${
            isDark ? "ai-card" : "bg-white rounded-xl border border-gray-100"
          } ${isWorkflowVisible ? "workflow-animation workflow-visible" : ""}`}
        >
          {/* Top row scrolling left */}
          <div
            className="w-full overflow-hidden"
            style={{
              mask: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 90%, rgba(0, 0, 0, 0) 100%)",
            }}
          >
            <div
              className={`scroll-container-left workflow-row ${
                !isWorkflowVisible ? "pause-animation" : ""
              }`}
            >
              {/* First set of icons for seamless scrolling */}
              <div className="scroll-content">
                {Array(5)
                  .fill(0)
                  .map((_, setIndex) =>
                    topRowIcons.map((icon, index) =>
                      renderIcon(icon, `top-${setIndex}-${index}`)
                    )
                  )}
              </div>
              {/* Duplicated set for continuous loop */}
              <div className="scroll-content">
                {Array(5)
                  .fill(0)
                  .map((_, setIndex) =>
                    topRowIcons.map((icon, index) =>
                      renderIcon(icon, `top-dup-${setIndex}-${index}`)
                    )
                  )}
              </div>
            </div>
          </div>

          {/* Bottom row scrolling right */}
          <div
            className="w-full overflow-hidden"
            style={{
              mask: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 90%, rgba(0, 0, 0, 0) 100%)",
            }}
          >
            <div
              className={`scroll-container-right workflow-row ${
                !isWorkflowVisible ? "pause-animation" : ""
              }`}
            >
              {/* First set of icons for seamless scrolling */}
              <div className="scroll-content">
                {Array(5)
                  .fill(0)
                  .map((_, setIndex) =>
                    bottomRowIcons.map((icon, index) =>
                      renderIcon(icon, `bottom-${setIndex}-${index}`)
                    )
                  )}
              </div>
              {/* Duplicated set for continuous loop */}
              <div className="scroll-content">
                {Array(5)
                  .fill(0)
                  .map((_, setIndex) =>
                    bottomRowIcons.map((icon, index) =>
                      renderIcon(icon, `bottom-dup-${setIndex}-${index}`)
                    )
                  )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[30px]">
          <h4 className="font-medium text-base sm:text-lg mb-1 sm:mb-2 dark:text-white text-gray-800">
            Автоматизация рабочих процессов
          </h4>
          <p className="dark:text-[#919191] text-gray-600 text-sm sm:text-base">
            Мы помогаем компаниям интегрировать инструменты ИИ в существующие
            программные платформы, CRM-системы или маркетинговые каналы.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
