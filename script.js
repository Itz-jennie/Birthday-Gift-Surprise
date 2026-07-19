/* ==========================
ELEMENTS
========================== */

const loading = document.getElementById("loading");
const startBtn = document.getElementById("startBtn");

const giftWrap = document.getElementById("giftWrap");
const envelopeSection = document.getElementById("envelopeSection");
const giftSection = document.getElementById("giftSection");
const cdSection = document.getElementById("cdSection");
const gardenSection = document.getElementById("gardenSection");
const finalSection = document.getElementById("finalSection");
const secretSection = document.getElementById("secretSection");

const typedText = document.getElementById("typedText");
const bgMusic = document.getElementById("bgMusic");

const giftBoxes = document.querySelectorAll(".giftBox");

const giftTitle = document.getElementById("giftTitle");
const giftMessage = document.getElementById("giftMessage");
const giftContent = document.getElementById("giftContent");

const lastButton = document.getElementById("lastButton");

/* ==========================
LOADING SCREEN
========================== */

window.addEventListener("load", () => {

setTimeout(() => {

loading.style.opacity = "0";

setTimeout(() => {

loading.style.display = "none";

},1000);

},1800);

});

/* ==========================
START
========================== */

startBtn.addEventListener("click",()=>{

bgMusic.play().catch(()=>{});

document.querySelector(".hero").style.display="none";

giftWrap.classList.remove("hidden");

});

/* ==========================
OPEN GIFT
========================== */

document.querySelector(".gift-cloth").addEventListener("click",()=>{

giftWrap.style.display="none";

envelopeSection.classList.remove("hidden");

startTyping();

});

/* ==========================
LETTER
========================== */

const message=

`Happy Birthday, Kaku 🤍

I just wanted to make something that could make you smile today.

Thank you for being the amazing person you are.

I hope this little gift reminds you how appreciated you are.

Enjoy every little surprise waiting ahead.

🌸`;

let i=0;

function startTyping(){

typedText.innerHTML="";

const interval=setInterval(()=>{

typedText.innerHTML+=message.charAt(i);

i++;

if(i>=message.length){

clearInterval(interval);

setTimeout(()=>{

envelopeSection.style.display="none";

giftSection.classList.remove("hidden");

},1200);

}

},35);

}
/* ==========================
GIFT BOXES
========================== */

const gifts = {

1:{

title:"🤍 Things I Like About You",

text:`• Your smile

• Your kindness

• Your sense of humour

• The way you care about people

• Simply... you.`

},

2:{

title:"🌸 Little Memories",

text:`Every conversation,
every laugh,
every little moment...

They're all memories
I'll always treasure.`

},

3:{

title:"✨ Birthday Wish",

text:`I hope this year brings you

🤍 Happiness

🌸 Peace

✨ Success

🎂 Lots of cake

🇯🇵 And maybe...

Japan someday.`

}

};

giftBoxes.forEach((box,index)=>{

box.addEventListener("click",()=>{

const gift=gifts[index+1];

giftTitle.textContent=gift.title;

giftMessage.innerText=gift.text;

giftContent.classList.remove("hidden");

if(index===2){

setTimeout(()=>{

giftSection.style.display="none";

cdSection.classList.remove("hidden");

window.scrollTo({

top:0,

behavior:"smooth"

});

},1800);

}

});

});

/* ==========================
SPOTIFY
========================== */

const spotifyButton=document.querySelector(".spotifyButton");

spotifyButton.addEventListener("click",()=>{

spotifyButton.innerHTML="🎵 Opening Playlist...";

});

/* ==========================
CD SECTION
========================== */

const cd=document.querySelector(".cd");

cd.addEventListener("click",()=>{

cd.style.animationDuration="3s";

setTimeout(()=>{

gardenSection.classList.remove("hidden");

gardenSection.scrollIntoView({

behavior:"smooth"

});

},1200);

});
/* ==========================
JAPANESE GARDEN
========================== */

gardenSection.addEventListener("click",()=>{

gardenSection.style.display="none";

finalSection.classList.remove("hidden");

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* ==========================
SECRET ENDING
========================== */

lastButton.addEventListener("click",()=>{

finalSection.style.display="none";

secretSection.classList.remove("hidden");

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* ==========================
SPARKLES
========================== */

for(let i=0;i<40;i++){

const sparkle=document.createElement("div");

sparkle.className="sparkle";

sparkle.style.left=Math.random()*100+"vw";

sparkle.style.top=Math.random()*100+"vh";

sparkle.style.animationDelay=Math.random()*3+"s";

sparkle.style.animationDuration=(2+Math.random()*3)+"s";

document.body.appendChild(sparkle);

}

/* ==========================
SAKURA PETALS
========================== */

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(6+Math.random()*6)+"s";

petal.style.opacity=Math.random();

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},12000);

}

setInterval(createPetal,350);

/* ==========================
FLOATING HEARTS
========================== */

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="🤍";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(6+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,2500);

/* ==========================
CONFETTI
========================== */

function celebrate(){

for(let i=0;i<120;i++){

const piece=document.createElement("div");

piece.style.position="fixed";

piece.style.width="8px";

piece.style.height="14px";

piece.style.left=Math.random()*100+"vw";

piece.style.top="-20px";

piece.style.background=
["#ffd6e8","#ffffff","#ffb7d5","#ffeef6"]
[Math.floor(Math.random()*4)];

piece.style.opacity=".9";

piece.style.pointerEvents="none";

piece.style.zIndex="9999";

piece.style.transition="4s linear";

document.body.appendChild(piece);

setTimeout(()=>{

piece.style.transform=
`translateY(${window.innerHeight+100}px)
rotate(${Math.random()*720}deg)`;

},50);

setTimeout(()=>{

piece.remove();

},4200);

}

}

/* Run confetti when final page appears */

const observer=new MutationObserver(()=>{

if(!finalSection.classList.contains("hidden")){

celebrate();

}

});

observer.observe(finalSection,{
attributes:true,
attributeFilter:["class"]
});

/* ==========================
THE END
========================== */

console.log("🌸 A Gift Wrapped in Sakura loaded successfully!");
