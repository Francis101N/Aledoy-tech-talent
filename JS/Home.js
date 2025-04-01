// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Select Elements
const sectionOne = document.querySelectorAll('.secOne');
const sectionTwo = document.querySelectorAll('.secTwo');
const sectionThree = document.querySelectorAll('.secThree');
const article = document.querySelectorAll('article');
const footer = document.querySelectorAll('footer div');

// Function to add the slide-in class when elements are in viewport
function slideInElements() {
    // Handle h2 elements
    sectionOne.forEach(function(cont) {
        if (isInViewport(cont)) {
            cont.classList.add('slideInForContOne');
        }
    });
    sectionTwo.forEach(function(cont) {
        if (isInViewport(cont)) {
            cont.classList.add('slideInSecTwo');
        }
    });
    sectionThree.forEach(function(cont) {
        if (isInViewport(cont)) {
            cont.classList.add('slideInForSecThree');
        }
    });
    article.forEach(function(cont) {
        if (isInViewport(cont)) {
            cont.classList.add('slideInForArtCont');
        }
    });
    footer.forEach(function(cont) {
        if (isInViewport(cont)) {
            cont.classList.add('slideInForFooter');
        }
    });
    
}
// Check for scrolling and initial page load
window.addEventListener('scroll', slideInElements);
window.addEventListener('DOMContentLoaded', slideInElements);
