const nav = document.querySelector('.nav__menu');
const hambIcon = document.querySelector('.hamburger__menu');
const fader = document.querySelectorAll('.fade-in');
const heroImge = document.querySelector('.hero__img img');
const btnNext = document.querySelector('.btn__next');
const btnPrev = document.querySelector('.btn__prev');
const heroText = document.querySelector('.hero__text');
const heroImgs = [
	{
		img: 'images/hero-img-family-min.jpg',
		texto:
			'<h1>La vida <span>no para</span> mientras estas haciendo planes</h1> <p>No esperes más para <span class="hero__span--green">Asegurarte</span></p> <a class="btn__green" href="#">Obten tu póliza</a>',
	},
	{
		img: 'images/hero-img-car-min.jpg',
		texto:
			'<h1>No esperes más <span>para Asegurar</span> tu auto</h1> <p>Es momento de proteger <span class="hero__span--green">Tu Inversion</span></p> <a class="btn__green" href="#">Obten tu póliza</a>',
	},
	{
		img: 'images/hero-img-house-min.jpg',
		texto:
			'<h1>Es momento de <span>Proteger</span> tus bienes <span>Más Valiosos</span> </h1> <p>Protege hoy mismo <span class="hero__span--green">Tu Casa</span></p> <a class="btn__green" href="#">Obten tu póliza</a>',
	},
];
let index = 0;
const sliderSpeed = 6500;
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

function nextImg() {
	if (index === heroImgs.length) {
		index = 0;
	}
	heroImge.src = `${heroImgs[index].img}`;
	heroText.innerHTML = `${heroImgs[index].texto}`;

	index++;
	setTimeout(nextImg, sliderSpeed);
	console.log(heroImge.style.opacity);
}

nextImg();

// function prevImg() {
// 	heroImge.src = `${heroImgs[index - 1].img}`;
// 	heroText.innerHTML = `${heroImgs[index - 1].texto}`;
// 	index--;
// }

// btnNext.addEventListener('click', e => {
// 	e.preventDefault();
// 	if (index === heroImgs.length - 1) {
// 		index = -1;
// 	}

// 	nextImg();
// });
// btnPrev.addEventListener('click', e => {
// 	e.preventDefault();
// 	if (index === 0) {
// 		index = heroImgs.length;
// 	}

// 	prevImg();
// });
