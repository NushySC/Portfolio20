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
const nombre = document.getElementsByClassName('name');
const lastName = document.getElementsByClassName('lastname');
const tl = new gsap.timeline({duration: 3, repeat: 0});

tl.from(nombre, 2, {x: 700, opacity: 0, scale: 4.5}, 0)
	.from(lastName, 2, {x: -700, opacity: 0, scale: 4.5}, 0)
	// .set(lastName, {x: 300, y: -150, opacity: 0})

	.to(nombre, 2, {x: -500, opacity: 0.5}, 0)
	.to(lastName, 2, {x: -900, opacity: 1}, 0)
	.to(nombre, 2, {x: 0, opacity: 1}, 0)
	.to(lastName, 2, {x: 0, opacity: 1, scale: 1}, 0);

// gsap.from(nombre, {y: -300, scale: 3});
// gsap.to(nombre, {duration: 4, y: 100, scale: 1});

// const polygon = document.querySelectorAll('.polygon');
// const path = document.querySelectorAll('.path');

// gsap.from(polygon, 1, {
// 	scale: 20,
// 	y: 900,
// 	x: 300,
// 	ease: true,
// 	stagger: {
// 		opacity: 1,
// 		each: 1,
// 		from: 'edges',
// 		amount: 1,
// 		yoyo: true,
// 	},
// });

// gsap.set(path, {
// 	opacity: 1,
// });
// gsap.from(path, 2, {
// 	scale: 30,
// 	y: -600,
// 	x: -500,
// 	ease: true,
// 	stagger: {
// 		each: 1,
// 		from: 'edges',
// 		amount: 1,
// 		yoyo: true,
// 	},
// });
