// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCxHUm0tzBPH78-Qr4x7eLsWT6oFiNezY",
  authDomain: "fitnesstracker-1072d.firebaseapp.com",
  projectId: "fitnesstracker-1072d",
  storageBucket: "fitnesstracker-1072d.firebasestorage.app",
  messagingSenderId: "471246146884",
  appId: "1:471246146884:web:c79d14346a081f1ea09b11",
  measurementId: "G-C7LH9JYLH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';

// Set up Google authentication
const provider = new GoogleAuthProvider();

// Handle Google Sign-In button click
document.getElementById('googleSignInButton').addEventListener('click', () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // User successfully signed in
      const user = result.user;
      alert(`Welcome, ${user.displayName}! You are now signed in with Google.`);
      // Redirect after login
      window.location.href = "Home.html"; 
    })
    .catch((error) => {
      alert("Error during sign-in: " + error.message);
    });
});

// Handle Email and Password Sign-In
document.getElementById('signInForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('signInEmail').value;
  const password = document.getElementById('signInPassword').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert(`Welcome, ${user.email}! You are now signed in.`);
      window.location.href = "Home.html"; 
    })
    .catch((error) => {
      alert("Error during sign-in: " + error.message);
    });
});

// Handle Email and Password Sign-Up
document.getElementById('signUpForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('signUpEmail').value;
  const password = document.getElementById('signUpPassword').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert(`Account created successfully for ${user.email}.`);
      window.location.href = "home.html"; 
    })
    .catch((error) => {
      alert("Error during sign-up: " + error.message);
    });
});
