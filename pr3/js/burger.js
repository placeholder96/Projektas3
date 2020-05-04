const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	
	//Toogle Nav
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
	
//Animate Links
navLinks.forEach((link, index) => {
if	(link.style.animation) {
link.style.animation = '';}	
else{link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4}s`;}
});
//Burger Animation
burger.classList.toggle('toogle');		
});		

}

navSlide();