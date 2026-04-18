// Scroll reveal

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

});

document.querySelectorAll(".reveal").forEach(el=>{
observer.observe(el);
});


// Theme toggle

const toggle=document.getElementById("themeToggle");

toggle.addEventListener("click",()=>{

const html=document.documentElement;

if(html.dataset.theme==="dark"){

html.dataset.theme="light";
toggle.innerHTML="🌙";

}else{

html.dataset.theme="dark";
toggle.innerHTML="☀";

}

});


// Mobile menu

const hamburger=document.getElementById("hamburger");
const mobileMenu=document.getElementById("mobileMenu");

hamburger.addEventListener("click",()=>{

mobileMenu.classList.toggle("open");

});