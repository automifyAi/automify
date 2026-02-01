import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

window.signup = function() {
  createUserWithEmailAndPassword(auth,
    email.value,
    password.value
  ).then(() => {
    window.location = "dashboard.html";
  });
}

window.login = function() {
  signInWithEmailAndPassword(auth,
    email.value,
    password.value
  ).then(() => {
    window.location = "dashboard.html";
  });
}
