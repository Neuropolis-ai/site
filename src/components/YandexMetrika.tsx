"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function YandexMetrika() {
  useEffect(() => {
    // Этот код выполнится только на стороне клиента
    const attachYandexMetrika = () => {
      // Убедимся, что этот скрипт не был загружен ранее
      if ((window as any).ym) return;

      (window as any).ym =
        (window as any).ym ||
        function () {
          ((window as any).ym.a = (window as any).ym.a || []).push(arguments);
        };
      (window as any).ym.l = 1 * new Date().getTime();
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
