/* =====================================
        FATI WORLD ENGINE 🌙💜
===================================== */


console.log("💜 FATI WORLD CONNECTED");



document.addEventListener(
"DOMContentLoaded",
()=>{

    startLoading();

});







/* =====================================
        LOADING SCREEN
===================================== */


function startLoading(){


let bar =
document.getElementById("bar");


let intro =
document.getElementById("intro");


let website =
document.getElementById("website");


let progress = 0;



let loading =
setInterval(()=>{


progress += 2;


bar.style.width =
progress + "%";



if(progress >= 100){


clearInterval(loading);



setTimeout(()=>{


intro.style.display="none";


website.classList.remove("hidden");



startTyping();


},800);



}



},40);



}









/* =====================================
        BIRTHDAY MESSAGE
===================================== */


let message =

"hi queen amtlk site heda💜 " +

"Welcome bitchh. " +

"This website contains memories, laughs and moments that will always stay special. " +

"I’m so grateful to have you in my life. Thank you for all the laughs, the memories, and the moments we shared together. I want to thank you for always standing beside me, supporting me, and being there through the good and bad times. Your kindness, your personality, and your unique way of making things better mean a lot to me. You bring happiness and a special energy that makes every moment more memorable. I hope you always stay the amazing person you are and that life gives you all the happiness, success, and beautiful memories you deserve. Happy Birthday bitch 🌙✨";



let index=0;



function startTyping(){


let text =
document.getElementById("typing");



let typing =
setInterval(()=>{


text.innerHTML +=
message[index];


index++;



if(index >= message.length){

clearInterval(typing);

}



},50);



}









/* =====================================
        MUSIC PLAYER
===================================== */


/* =====================================
        MUSIC PLAYER 🎸
===================================== */


let audio =
document.getElementById("audio");


let songSource =
document.getElementById("songSource");



function changeSong(song){


songSource.src = song;


audio.load();


audio.play();


}



function playMusic(){

audio.play();

}



function pauseMusic(){

audio.pause();

}




/* =====================================
        SMOOTH SCROLL
===================================== */


function scrollMemories(){


document
.getElementById("memories")
.scrollIntoView(
{
behavior:"smooth"
}
);


}









/* =====================================
        FLOATING STARS EFFECT
===================================== */


function createStars(){



for(let i=0;i<80;i++){


let star =
document.createElement("span");



star.className="star";



star.style.left =
Math.random()*100+"vw";



star.style.top =
Math.random()*100+"vh";



star.style.animationDelay =
Math.random()*5+"s";



document.body.appendChild(star);



}



}



createStars();









/* =====================================
        SECRET MESSAGE EFFECT
===================================== */


console.log(
"🔒 Secret galaxy is waiting..."
);
function unlockSite(){

let password =
document.getElementById("sitePassword").value;


let correctPassword =
"fatamtam0708"; // change this


if(password === correctPassword){

document.getElementById("siteLock").style.display="none";

}

else{

document.getElementById("lockError").innerHTML =
"Wrong password 🌙";

}

}