import {
initializeApp
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getDatabase,
ref,
push,
onValue
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";


// ---------------- FIREBASE ----------------

const firebaseConfig = {

apiKey: "AIzaSyD92xb3tkfLadzWZlFaFvCc2YNkanahKRI",

authDomain: "mine-17cc2.firebaseapp.com",

databaseURL: "https://mine-17cc2-default-rtdb.firebaseio.com",

projectId: "mine-17cc2",

storageBucket: "mine-17cc2.firebasestorage.app",

messagingSenderId: "313011904243",

appId: "1:313011904243:web:6f8dc035058efb182aa186"

};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);


// ---------------- GLOBALS ----------------

let selectedVote = "";

const sheet = document.getElementById("sheet");

const overlay = document.getElementById("overlay");

const success = document.getElementById("success");


// ---------------- OPEN VOTE ----------------

window.openVote = (vote) => {

if(localStorage.getItem("babyPredictionVote")){

alert(
"💌 You have already shared your prediction ❤️"
);

return;

}

selectedVote = vote;

sheet.classList.add("open");

overlay.style.display = "block";

};


// ---------------- CLOSE SHEET ----------------

overlay.addEventListener(

"click",

()=>{

sheet.classList.remove("open");

overlay.style.display = "none";

}

);


// ---------------- SUBMIT ----------------

window.submitVote = ()=>{

const name = document
.getElementById("guestName")
.value
.trim();

const blessing = document
.getElementById("guestMessage")
.value
.trim();


if(!name){

alert(
"Please enter your name ❤️"
);

return;

}


push(

ref(db,"votes"),

{

name,

vote:selectedVote,

blessing,

createdAt:Date.now()

}

);


// Prevent another vote

localStorage.setItem(

"babyPredictionVote",

"true"

);


// Close sheet

sheet.classList.remove("open");

overlay.style.display="none";


// Success popup

success.style.display="flex";


// Confetti

confetti({

particleCount:120,

spread:90,

origin:{y:0.7}

});


// Hide success popup

setTimeout(()=>{

success.style.display="none";

},3000);


// Reset fields

document.getElementById(

"guestName"

).value="";


document.getElementById(

"guestMessage"

).value="";

};


// ---------------- LIVE RESULTS ----------------

onValue(

ref(db,"votes"),

(snapshot)=>{

const data = snapshot.val() || {};

let boy = 0;

let girl = 0;


Object.values(data)

.forEach(v=>{

if(v.vote==="boy")

boy++;

if(v.vote==="girl")

girl++;

});


const total = boy + girl;


let boyPercentage = 0;

let girlPercentage = 0;


if(total>0){

boyPercentage = Math.round(

(boy/total)*100

);


girlPercentage = Math.round(

(girl/total)*100

);

}


document.getElementById(

"boyPercentage"

).innerText =

boyPercentage+"%";


document.getElementById(

"girlPercentage"

).innerText =

girlPercentage+"%";


document.getElementById(

"totalVotes"

).innerText =

total;

});


// ---------------- SHARE ----------------

window.shareSite = ()=>{

const url = window.location.href;

const text =

`👶✨ Anish ❤️ Abiniya's little miracle is on the way!\n\nCast your prediction and leave us a blessing 💛\n\n${url}`;


if(navigator.share){

navigator.share({

title:

"Baby Prediction",

text,

url

});

}

else{

window.open(

`https://wa.me/?text=${encodeURIComponent(text)}`,

"_blank"

);

}

};
