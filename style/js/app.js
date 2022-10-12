const header = document.querySelector("header");

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelector(".counter span");
const progress_bars = document.querySelector(".skills svg circle");

const hamburguer = document.querySelector(".hamburger");

window.addEventListener("scroll", ()=>{
    // console.log("he;ll");
    skillsCounter();
});

/* ---------------- Sticky Navbar ---------------- */

function stickyNavbar(){
    header.classList.toggle("scrolled", window.pageYOffset > 0);
    // console.log(window.pageXOffset);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);
/* ---------------- Scroll Reveal ---------------- */

let sr = ScrollReveal({
    duration: 5000,
    distance: "60px"
});

// sr.reveal(".showcase-info", { delay:600});
// sr.reveal(".showcase-image", { origin:"top", delay:600});

/* ---------------- Skill Progress Bar Animation ---------------- */

function hasReached(el){
    let topPosition = el.getBoundingClientRect().top;
    // console.log(topPosition)
    if (window.innerHeight >= topPosition + el.offsetHeight) return true;
    return false;
}

function skillsCounter(){
    if(!hasReached(first_skill)) return;
    // console.log("topPosition")

    progress_bars.forEach((p) => (p.style.animation = "progress 2s ease-in-out"));
}



/* ---------------- Hamburger Open & close ---------------- */

hamburguer.addEventListener("click", () => {
    document.body.classList.toggle("open");
    document.body.classList.toggle("stopScrolling");
});

links.forEach(link => link.addEventListener("click", () => {
    document.body.classList.remove("open");
    document.body.classList.remove("stopScrolling");
}))


