const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Директории с изображениями
const imageDirectories = [
  path.join(__dirname, '../public/assets/images')
];

// Поддерживаемые форматы
const supportedFormats = ['.jpg', '.jpeg', '.png'];

// Функция для обработки файла
async function processImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!supportedFormats.includes(ext)) return;
  
  const filename = path.basename(filePath, ext);
  const dirPath = path.dirname(filePath);
  const outputPath = path.join(dirPath, `${filename}.webp`);
  
  // Пропускаем, если файл WebP уже существует
  if (fs.existsSync(outputPath)) {
    console.log(`${outputPath} already exists. Skipping.`);
    return;
  }
  
  try {
    await sharp(filePath)
      .webp({ quality: 80 }) // Настройки качества
      .toFile(outputPath);
    
    console.log(`Converted ${filePath} to WebP`);
    
    // Получаем размеры изображения
    const metadata = await sharp(filePath).metadata();
    console.log(`Image dimensions: ${metadata.width}x${metadata.height}`);
    
    // Сравниваем размеры файлов
    const originalSize = fs.statSync(filePath).size;
    const webpSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(2);
    
    console.log(`Original: ${(originalSize / 1024).toFixed(2)} KB`);
    console.log(`WebP: ${(webpSize / 1024).toFixed(2)} KB`);
    console.log(`Savings: ${savings}%`);
    console.log('-----------------------------------');
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

// Функция для рекурсивного сканирования директории
async function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      await processDirectory(filePath);
    } else {
      await processImage(filePath);
    }
  }
}

// Основная функция
async function optimizeImages() {
  console.log('Starting image optimization...');
  
  for (const directory of imageDirectories) {
    if (fs.existsSync(directory)) {
      console.log(`Processing directory: ${directory}`);
      await processDirectory(directory);
    } else {
      console.log(`Directory not found: ${directory}`);
    }
  }
  
  console.log('Image optimization complete!');
}

optimizeImages(); 