const nav = document.querySelector('.nav__menu');
const hambIcon = document.querySelector('.hamburger__menu');

function displayMenu(e) {
	nav.classList.toggle('nav__menu--display');
}

hambIcon.addEventListener('click', displayMenu);
