'use client'

import MainPage from "@/pages/main-page/MainPage";
import { useEffect } from "react";

// Определяем базовый URL в зависимости от окружения
const BASE_URL = (process.env.NODE_ENV === 'production')
    ? '/Elfen-lied'
    : '';

// Функция для обновления всех изображений на странице
function updateImageSources() {
    const images = document.querySelectorAll('img'); // Находим все изображения
    images.forEach(img => {
        // Проверяем, есть ли уже базовый URL в src
        if (img.src && !img.src.startsWith(BASE_URL)) {
            // Обновляем src с базовым URL
            img.src = `${BASE_URL}${img.src}`;
        }
    });
}

export default function Page() {

  // Вызываем функцию для обновления всех изображений на странице
  useEffect(() => {
    updateImageSources();
  },[])

  return (
    <MainPage />
  );
}
