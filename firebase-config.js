import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyB39QAyq-fQj4QMpIFEhnnhkYpaVzNgHB8",
  authDomain: "schoolhub-72ad9.firebaseapp.com",
  projectId: "schoolhub-72ad9",
  storageBucket: "schoolhub-72ad9.firebasestorage.app",
  messagingSenderId: "328444642318",
  appId: "1:328444642318:web:b7371e557f55407a9f685f"
};

// This connects your website to the database
export const app = initializeApp(firebaseConfig);

