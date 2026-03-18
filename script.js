// SLIDER
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(()=>{
slides[index].classList.remove("active");
index = (index + 1) % slides.length;
slides[index].classList.add("active");
},3000);

// SCROLL ANIMATION
window.addEventListener("scroll", ()=>{
document.querySelectorAll(".reveal").forEach(el=>{
let pos = el.getBoundingClientRect().top;
if(pos < window.innerHeight - 50){
el.classList.add("active");
}
});
});
