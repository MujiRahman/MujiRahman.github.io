// bagian nav bar
const slide = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

slide.addEventListener('click', function () {
    nav.classList.toggle('slide');
});