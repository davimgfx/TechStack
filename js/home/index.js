import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword
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

const userEmailLogin = document.querySelector("#email_login");
const userPasswordLogin = document.querySelector("#password_login");
const buttonLogin = document.querySelector("#button_login");

const userLogin = async () => {
  const loginEmail = userEmailLogin.value;
  const loginPassword = userPasswordLogin.value;

  try{
    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    const user = userCredential.user;
    console.log(user)
    alert("Login com sucesso!")
    window.location.href = '/pages/app.html';
  } catch (error){
    alert("Senha ou email incorretos!")
    console.error(error);
  }
};

buttonLogin.addEventListener("click", userLogin);