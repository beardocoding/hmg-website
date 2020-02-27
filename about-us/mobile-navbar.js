var hamburger = document.getElementById('hamburger');
const mobileLinks = document.getElementById('mobile-links');
var clicked = false;

function hamburgerclick() {
    if (clicked == false) {
        mobileLinks.style.display = 'flex';
        clicked = true;
        hamburger.classList.remove('fa-bars');
        hamburger.classList.add('fa-times');
    }
    else {
        mobileLinks.style.display = 'none';
        clicked = false;
        hamburger.classList.add('fa-bars');
        hamburger.classList.remove('fa-times');
    }
}