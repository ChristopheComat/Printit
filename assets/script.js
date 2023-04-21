const slides = [
    {
        image: "slide1.jpg",
        tagLine:
            "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
        image: "slide2.jpg",
        tagLine:
            "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
        image: "slide3.jpg",
        tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
        image: "slide4.png",
        tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
];

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dot");
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");

let indexSlide = 0;

arrowLeft.addEventListener("click", () => {
    console.log("flèche gauche");
    imgPreview();
});

arrowRight.addEventListener("click", () => {
    console.log("flèche droite");
    imgNext();
});

function imgPreview() {
    indexSlide--;
    if (indexSlide < 0) {
        indexSlide = slides.length - 1;
    }
    updateSlide();
    updateDots();
}

function imgNext() {
    indexSlide++;
    if (indexSlide > slides.length - 1) {
        indexSlide = 0;
    }
    updateSlide();
    updateDots();
}

function updateSlide() {
    bannerImg.src = `./assets/images/slideshow/${slides[indexSlide].image}`;
    tagLine.innerHTML = slides[indexSlide].tagLine;
}

function updateDots() {
    dots.forEach((dot) => dot.classList.remove("dot_selected"));
    dots[indexSlide].classList.add("dot_selected");
}

updateSlide();
