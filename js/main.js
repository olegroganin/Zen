document.addEventListener('DOMContentLoaded', function () {
	const headerBurger = document.querySelector('.header__burger');
	const navMobile = document.querySelector('.nav__links-mobile');
	const body = document.querySelector('body');
	const scrollToTop = document.querySelector('.scroll-to-top');

	navMobile.addEventListener('click', () => {
		navMobile.classList.remove('active');
		headerBurger.classList.remove('active');
		body.classList.remove('lock');
	});

   headerBurger.addEventListener('click', () => {
		headerBurger.classList.toggle('active');
		navMobile.classList.toggle('active');
		body.classList.toggle('lock');
	});

   window.addEventListener('scroll', () => {
		if (window.pageYOffset > 300) {
			scrollToTop.classList.remove('hidden2');
		} else {
			scrollToTop.classList.add('hidden2');
		}
	});
	
	window.addEventListener('resize', () => {
		let windowSize = window.innerWidth;
		if(windowSize > 767){
			navMobile.classList.remove('active');
			headerBurger.classList.remove('active');
		}
	})
});

