import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBHN3yu9e16kusdD13PUEUa0tKQyo1IawI",
  authDomain: "techstack-baf06.firebaseapp.com",
  projectId: "techstack-baf06",
  storageBucket: "techstack-baf06.appspot.com",
  messagingSenderId: "92840814045",
  appId: "1:92840814045:web:b505ca835d2f3f60174234",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const userEmailRegister = document.querySelector("#email_register");
const userPasswordRegister = document.querySelector("#password_register");
const buttonRegister = document.querySelector("#button_register");

const userRegister = async () => {
  const registerEmail = userEmailRegister.value;
  const registerPassword = userPasswordRegister.value;
  createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Cadastro com sucesso!");
      window.location.href = "/pages/app.html";
    })
    .catch((error) => {
      console.log(error);
      alert(error.message);
    });
};

buttonRegister.addEventListener("click", userRegister);
