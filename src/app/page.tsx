'use client'

import MainPage from "@/pages/main-page/MainPage";
import { useEffect } from "react";

// Определяем базовый URL в зависимости от окружения
// const BASE_URL = (process.env.NODE_ENV === 'production')
//     ? '/Elfen-lied'
//     : '';

// const BASE_URL = '/Elfen-lied'

// Функция для обновления всех изображений на странице
function updateImageSources() {
    const images = document.querySelectorAll('img'); // Находим все изображения
    images.forEach(img => {
        if (img.src && img.src.startsWith('https://1337herman228.github.io/')) {
          img.src = (img.src).replace('https://1337herman228.github.io/','');  
          // img.src = `${'/Elfen-lied'}${img.src}`;
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
