const toggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

toggle.addEventListener('click', function(){
    navMenu.classList.toggle('nav-slide')
});

console.log(toggle)
console.log(navMenu)