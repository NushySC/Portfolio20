// HIDES NAVBAR WHEN SCROLLING

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	let currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById('navbar').style.top = '0';
	} else {
		document.getElementById('navbar').style.top = '-60px';
	}
	prevScrollpos = currentScrollPos;
};

// CHANGES BACKGROUND WHEN SCROLLING
//FIX: THE TEXT doest change

window.sections = [...document.querySelectorAll('.section')];
// window.texts = [...document.querySelectorAll('.container__title')];

window.lastScrollTop = window.pageYOffset;

document.body.style.background = window.sections[0].getAttribute('data-bg');
// document.body.style.color = window.texts[0].getAttribute('data-color');

window.addEventListener('scroll', onScroll);

function onScroll() {
	// const scrollTop = window.pageYOffset;

	const section = window.sections
		.map((section) => {
			const el = section;
			const rect = el.getBoundingClientRect();
			return {el, rect};
		})

		.find((section) => section.rect.bottom >= window.innerHeight * 0.5);
	document.body.style.background = section.el.getAttribute('data-bg');
}

//Responsive Navbar
const classToggle = () => {
	const navs = document.querySelectorAll('.navbar__items');

	navs.forEach((nav) => nav.classList.toggle('navbar__toggleShow'));
};

document.querySelector('.toggle').addEventListener('click', classToggle);
