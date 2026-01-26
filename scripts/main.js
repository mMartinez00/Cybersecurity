const navbar = document.querySelector(".navbar")
const SCROLL_TRIGGER = 16;


function onScroll() {
    if(!navbar) return;

    navbar.classList.toggle("is-scrolled", window.scrollY > SCROLL_TRIGGER);
}



onScroll()

window.addEventListener("scroll", onScroll, {
    passive: true
})