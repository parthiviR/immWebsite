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
    let isScrolling = false;
    let originalTop = scrollToDiv.offsetTop;

    sourceDiv.addEventListener("mousewheel", function (event) {
        // Prevent default scrolling behavior
        event.preventDefault();

        // Check if the source div has been scrolled vertically
        if (sourceDiv && !isScrolling) {
            isScrolling = true;

            // Scroll the target div into view after a delay
            setTimeout(function () {
                if (window.scrollY > originalTop) {
                    scrollToDiv.style.position = "fixed";
                    scrollToDiv.style.top = "0";
                } else {
                    scrollToDiv.style.position = "static";
                }

                // Scroll the target div into view
                scrollToDiv.scrollIntoView({
                    behavior: "smooth", // Add a smooth scroll transition
                    block: "start" // Scroll to the top of the target div
                });

                // Reset isScrolling flag after the scroll animation completes
                setTimeout(function () {
                    isScrolling = false;
                }, 1000); // Add a delay before resetting the flag (adjust the duration as needed)
            }, 500); // Add a delay before scrolling (adjust the duration as needed)
        }
    });
}
