const header = document.querySelector('.header');
const nav = document.querySelector('.nav');

header.addEventListener('click', (e)=>{
	if(e.target.classList.contains('burger-menu')){
		nav.classList.add('nav-show');
	}
	if(e.target.classList.contains('cross-close')){
		nav.classList.remove('nav-show');
	}
});