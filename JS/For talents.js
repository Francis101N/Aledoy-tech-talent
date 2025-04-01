// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Select Elements
const sectionContOne = document.querySelectorAll('.contOne');
const sectionContTwo = document.querySelectorAll('.contTwo');
const sectionTwo = document.querySelectorAll('.secTwo');
const sectionThree = document.querySelectorAll('.secThree');
const sectionFour = document.querySelectorAll('.secFour');
const footer = document.querySelectorAll('footer div');


// Function to add the slide-in class when elements are in viewport
function slideInElements() {
    // Handle h2 elements
    sectionContOne.forEach(function(cont) {
        if (isInViewport(cont)) {
            cont.classList.add('slideInForContOne');
        }
    });
    sectionContTwo.forEach(function(cont) {
        if (isInViewport(cont)) {
            cont.classList.add('slideInForContTwo');
        }
    });
    sectionTwo.forEach(function(cont) {
        if (isInViewport(cont)) {
            cont.classList.add('slideInForSecTwo');
        }
    });
    sectionThree.forEach(function(cont) {
        if (isInViewport(cont)) {
            cont.classList.add('slideInForSecThree');
        }
    });
    sectionFour.forEach(function(cont) {
        if (isInViewport(cont)) {
            cont.classList.add('slideInForSecFour');
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
