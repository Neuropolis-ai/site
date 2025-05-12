// Добавляем объявление для JSX.IntrinsicElements
namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
} 