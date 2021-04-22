const topHeader = document.querySelector('.top__header');
const contentBlock = document.querySelector('.content');
const arrow = document.querySelector('.content__text-block_arrow');
const menu = document.querySelector('.menu');
const container = document.querySelector('.main__container');

arrow.addEventListener('click', () => {
	topHeader.classList.add('hidden-item');
	contentBlock.classList.add('hidden-item');
	menu.classList.add('fixedStyle');
	container.style.paddingTop = '96px';
})