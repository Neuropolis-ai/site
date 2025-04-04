"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    tinymce: any;
  }
}

// Компонент для настройки путей TinyMCE
export default function TinyMCEConfig() {
  useEffect(() => {
    // Настройка путей к статическим файлам TinyMCE
    if (typeof window !== "undefined" && window.tinymce) {
      window.tinymce.baseURL = "/tinymce";
      window.tinymce.suffix = ".min";
    }
  }, []);

  return null;
}
