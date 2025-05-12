"use client";

import Script from "next/script";
import { useEffect } from "react";

interface YandexMetrikaWindow extends Window {
  ym?: (
    counterId: number,
    method: string,
    options?: Record<string, unknown>
  ) => void;
}

export default function YandexMetrika() {
  useEffect(() => {
    // Этот код выполнится только на стороне клиента
    const attachYandexMetrika = () => {
      // Убедимся, что этот скрипт не был загружен ранее
      if ((window as YandexMetrikaWindow).ym) return;

      (window as YandexMetrikaWindow).ym =
        (window as YandexMetrikaWindow).ym ||
        function (...params: unknown[]) {
          (((window as YandexMetrikaWindow).ym as any).a =
            ((window as YandexMetrikaWindow).ym as any).a || []).push(params);
        };
      ((window as YandexMetrikaWindow).ym as any).l = 1 * new Date().getTime();
    };

    attachYandexMetrika();
  }, []);

  return (
    <>
      <Script
        id="yandex-metrika"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            
            ym(100875330, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
            });
          `,
        }}
      />
      <noscript>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://mc.yandex.ru/watch/100875330"
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
}
