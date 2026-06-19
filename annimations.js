// -------- CARD BREATHING ANIMATION --------

const cards = document.querySelectorAll(".card");

cards.forEach((card,index)=>{

let scale = 1;

setInterval(()=>{

card.animate(

[

{transform:`scale(${scale})`},

{transform:`scale(${scale+0.015})`},

{transform:`scale(${scale})`}

],

{

duration:3000+(index*500),

iterations:1,

easing:"ease-in-out"

}

);

},3500+(index*400));

});


// -------- RANDOM SPARKLES --------

setInterval(()=>{

const sparkle=document.createElement("div");

sparkle.innerHTML="✨";

sparkle.style.position="fixed";

sparkle.style.left=Math.random()*90+"vw";

sparkle.style.top=Math.random()*85+"vh";

sparkle.style.fontSize=

(12+Math.random()*12)+"px";

sparkle.style.opacity=".8";

sparkle.style.pointerEvents="none";

sparkle.style.zIndex="1";

sparkle.style.transition="all 2s ease";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.style.transform=

"translateY(-30px) scale(1.5)";

sparkle.style.opacity="0";

},100);

setTimeout(()=>{

sparkle.remove();

},2200);

},3500);


// -------- GOLDEN TITLE SHIMMER --------

const title=document.querySelector("h1");

setInterval(()=>{

title.animate(

[

{

filter:"brightness(1)"

},

{

filter:"brightness(1.2)"

},

{

filter:"brightness(1)"

}

],

{

duration:2000

}

);

},5000);


// -------- SUCCESS POPUP SCALE --------

const observer=new MutationObserver(()=>{

const success=

document.getElementById("success");

if(success.style.display==="flex"){

const card=

document.querySelector(".successCard");

card.animate(

[

{

transform:

"scale(.8)",

opacity:0

},

{

transform:

"scale(1.05)",

opacity:1

},

{

transform:

"scale(1)"

}

],

{

duration:600,

easing:"ease-out"

}

);

}

});

observer.observe(

document.getElementById("success"),

{

attributes:true,

attributeFilter:["style"]

}

);


// -------- SHARE BUTTON FLOAT --------

const shareBtn=

document.querySelector(".shareBtn");

setInterval(()=>{

shareBtn.animate(

[

{

transform:"translateY(0)"

},

{

transform:"translateY(-4px)"

},

{

transform:"translateY(0)"

}

],

{

duration:2500,

easing:"ease-in-out"

}

);

},3000);


// -------- SUBTLE PAGE ENTRY --------

document.addEventListener(

"DOMContentLoaded",

()=>{

document.body.animate(

[

{

opacity:0,

transform:

"translateY(20px)"

},

{

opacity:1,

transform:

"translateY(0)"

}

],

{

duration:900,

easing:"ease-out"

}

);

});
