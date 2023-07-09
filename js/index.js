let hamburgerItemEl = document.getElementById("hamburger-menu-items-mobile");
let hamburgerCancelEl = document.getElementById("hamburger-cancel");
let hamburgerEl = document.getElementById("hamburger-icon").addEventListener("click", openNav);
hamburgerCancelEl.addEventListener("click", closeNav);
let slideIndex = 0;
showSlides();
scrollToPrimaryNav();
function showSlides() {
    const slides = document.getElementsByClassName("slide");


    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;


    if (slideIndex > slides.length) {
        slideIndex = 1;
    }


    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
}

function openNav() {
    console.log('fsddd');
    hamburgerCancelEl.style.display = "block";
    hamburgerItemEl.style.display = "block";
}
function closeNav() {
    hamburgerCancelEl.style.display = "none";
    hamburgerItemEl.style.display = "none";

}

function scrollToPrimaryNav() {
    let sourceDiv = document.getElementById("hero-main-container");
    let scrollToDiv = document.getElementById("primary-header");
    sourceDiv.addEventListener("scroll", function() {
        console.log("hi")
        // Check if the source div has been scrolled vertically
        if (sourceDiv.scrollTop > 0) {
            console.log("hi")
          // Scroll the target div into view
          scrollToDiv.scrollIntoView();
        }
    });
}