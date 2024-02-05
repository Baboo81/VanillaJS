//Nav hamburger:
const hamburgerToggler = document.querySelector(".hamburger");
const navLinkscontainer = document.querySelector(".navlinks-container");

const toggleNav = () => {
    hamburgerToggler.classList.toggle("open")

    const ariaToggle = hamburgerToggler.getAttribute("aria-expanded") === "true" ? "false" : "true";
    hamburgerToggler.setAttribute("aria-expanded", ariaToggle)

    navLinkscontainer.classList.toggle("open")
}

hamburgerToggler.addEventListener("click", toggleNav);

new ResizeObserver(entries => {
    if(entries[0].contentRect.width <= 900) {
        navLinkscontainer.style.transition = "transform 0.3s ease-out";
    } else {
        navLinkscontainer.style.transform = "none";
    }
}).observe(document.body)

//Slider:
const items = document.querySelectorAll('img');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

function slideSuivante() {
    items[count].classList.remove('active');

    if(count < nbSlide - 1) {
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active')
}
suivant.addEventListener('click', slideSuivante)

function slidePrecedente() {
    items[count].classList.remove('active');

    if(count > 0) {
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active')
}
precedent.addEventListener('click', slidePrecedente)

function keyPress(e){
    if(e.keyCode === 37) {
        slidePrecedente();
    } else if (e.keyCode === 39) {
        slideSuivante();
    }
}
document.addEventListener('keydown', keyPress)
