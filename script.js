
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
nav.classList.toggle('menu-active');
var navbar = document.querySelector('.nav');
var isVisible = window.getComputedStyle(navbar).display !== 'none';
if (isVisible) {
    navbar.style.display = 'none';
} else {
    navbar.style.display = 'flex';
}
});