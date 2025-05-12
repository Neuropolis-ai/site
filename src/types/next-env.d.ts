/// <reference types="next" />
/// <reference types="node" />

// Объявление типов для модулей, используемых в middleware.ts
declare module 'next/server' {
  export * from 'next/dist/server/web/spec-extension/request';
  export * from 'next/dist/server/web/spec-extension/response';
  export * from 'next/dist/server/web/spec-extension/fetch-event';
}

// Объявляем процесс
declare namespace NodeJS {
  interface Process {
    cwd(): string;
  }
  
  var process: Process;
} 