// SAFE SCRIPT (NO CRASH)

// SMOOTH SCROLL
document.querySelectorAll("a").forEach(anchor => {
anchor.addEventListener("click", function(e) {
e.preventDefault();
document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior: "smooth"
});
});
});

// SCROLL REVEAL
window.addEventListener("scroll", () => {
document.querySelectorAll(".reveal").forEach(el => {
let pos = el.getBoundingClientRect().top;

if (pos < window.innerHeight - 50) {
el.classList.add("active");
}
});
});
