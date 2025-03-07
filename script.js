// DOM Elements
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');
const signUpButton = document.getElementById('signUpButton');
const backToSignInButton = document.getElementById('backToSignInButton');

// Toggle between sign-in and sign-up
signUpButton.addEventListener('click', () => {
  signInForm.style.display = "none";
  signUpForm.style.display = "block";
});

backToSignInButton.addEventListener('click', () => {
  signUpForm.style.display = "none";
  signInForm.style.display = "block";
});
