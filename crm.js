import { db } from "./firebase.js";
import { collection, addDoc, getDocs } 
from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

window.addLead = async function () {
  await addDoc(collection(db, "leads"), {
    name: name.value,
    phone: phone.value,
    created: Date.now()
  });
  loadLeads();
}

async function loadLeads() {
  const querySnapshot = await getDocs(collection(db, "leads"));
  leadList.innerHTML = "";
  querySnapshot.forEach((doc) => {
    leadList.innerHTML += `<li>${doc.data().name} - ${doc.data().phone}</li>`;
  });
}

loadLeads();
