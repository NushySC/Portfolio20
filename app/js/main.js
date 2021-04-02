// HIDES NAVBAR WHEN SCROLLING

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	let currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById('navbar').style.top = '0';
	} else {
		document.getElementById('navbar').style.top = '-50px';
	}
	prevScrollpos = currentScrollPos;
};

// CHANGES BACKGROUND WHEN SCROLLING

window.sections = [...document.querySelectorAll('.section')];

window.lastScrollTop = window.pageYOffset;

document.body.style.background = window.sections[0].getAttribute('data-bg');
document.body.style.color = window.sections[0].getAttribute('data-text');

window.addEventListener('scroll', onScroll);

function onScroll() {
	// const scrollTop = window.pageYOffset;

	const section = window.sections
		.map((section) => {
			const el = section;
			const rect = el.getBoundingClientRect();
			return {el, rect};
		})

		.find((section) => section.rect.bottom >= window.innerHeight * 0.7);
	document.body.style.background = section.el.getAttribute('data-bg');
	document.body.style.color = section.el.getAttribute('data-text');
}

//Responsive Navbar
const classToggle = () => {
	const navs = document.querySelectorAll('.navbar__items');

	navs.forEach((nav) => nav.classList.toggle('navbar__toggleShow'));
};

document.querySelector('.toggle').addEventListener('click', classToggle);

// GSAP

const polygon = document.querySelectorAll('.polygon');
const path = document.querySelectorAll('.path');

// gsap.from(path, 1, {
// 	scale: 0,
// 	y: 600,
// 	x: 1000,
// 	ease: Bounce.easeIn,
// 	stagger: {
// 		from: 'edges',
// 		amount: 1,
// 		yoyo: true,
// 	},
// });

gsap.from(polygon, 1, {
	scale: 20,
	y: 900,
	x: 300,
	ease: true,
	stagger: {
		opacity: 1,
		each: 1,
		from: 'edges',
		amount: 1,
		yoyo: true,
	},
});

gsap.set(path, {
	opacity: 1,
});
gsap.from(path, 2, {
	scale: 30,
	y: -600,
	x: -500,
	ease: true,
	stagger: {
		each: 1,
		from: 'edges',
		amount: 1,
		yoyo: true,
	},
});
