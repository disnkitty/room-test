// firebase-service.js или ваш основной файл, например App.jsx

// 1. Импортируем необходимые функции из Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; // Только если вы планируете использовать Analytics
import { getDatabase, ref, child, get, set, push } from "firebase/database";

// 2. Ваша конфигурация веб-приложения Firebase
// Скопирована из ваших данных, включая databaseURL
const firebaseConfig = {
  apiKey: "AIzaSyDokN_y86VqvJnscGIGIIpDNv1qi0-cGCY",
  authDomain: "room-test-26eb3.firebaseapp.com",
  projectId: "room-test-26eb3",
  storageBucket: "room-test-26eb3.firebasestorage.app",
  messagingSenderId: "1051586679895",
  appId: "1:1051586679895:web:209409e1fb8d98ef15ff12",
  measurementId: "G-9WZ5NK9TXE", // Если не используете Analytics, эту строку можно удалить
  databaseURL: "https://room-test-26eb3-default-rtdb.europe-west1.firebasedatabase.app",
};

// 3. Инициализируем Firebase App
const app = initializeApp(firebaseConfig);

// 4. Инициализируем Google Analytics (если нужно)
// Если вы не используете Google Analytics, закомментируйте или удалите эту строку:
const analytics = getAnalytics(app); 

// 5. Получаем экземпляр Realtime Database
const database = getDatabase(app);

// ================================================================
// Функции для проверки работы Realtime Database
// ================================================================


// Если вы используете React/Vue/Angular, вы можете экспортировать
// app и database, чтобы использовать их в других компонентах.
export { app, database };
