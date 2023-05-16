const toggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const overlay = document.querySelector('.overlay');

const slider = function(){
    navMenu.classList.toggle('nav-slide');
    overlay.classList.toggle('overlay-active');
};

toggle.addEventListener('click', slider);
overlay.addEventListener('click', slider);