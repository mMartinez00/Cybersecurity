const navbar = document.querySelector(".navbar")
const SCROLL_TRIGGER = 16;

if(navbar) {

    function onScroll() {
        navbar.classList.toggle("is-scrolled", window.scrollY > SCROLL_TRIGGER);
    }

    onScroll()
}


window.addEventListener("scroll", onScroll, {
    passive: true
})