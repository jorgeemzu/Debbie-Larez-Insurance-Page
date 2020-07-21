const nav = document.querySelector('.nav__menu');
const hambIcon = document.querySelector('.hamburger__menu');
const fader = document.querySelectorAll('.fade-in');

function displayMenu(e) {
	nav.classList.toggle('nav__menu--display');
}

hambIcon.addEventListener('click', displayMenu);

const apearOptions = {
	rootMargin: '0px 0px -100px 0px',
};

const apearOnScroll = new IntersectionObserver((entries, apearOnScroll) => {
	entries.forEach(entrie => {
		if (!entrie.isIntersecting) {
			return;
		} else {
			entrie.target.classList.add('apear');
			apearOnScroll.unobserve(entrie.target);
		}
	});
}, apearOptions);

fader.forEach(fader => {
	apearOnScroll.observe(fader);
});
