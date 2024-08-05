const elMenuBtn = document.querySelectorAll('.menu__link');
const elTop = document.querySelectorAll('.fax__top');

elMenuBtn.forEach(item => {
	item.addEventListener('click', e => {
		e.target.classList.toggle('menu__link-active');
	});
});

//eltop

elTop.forEach(item => {
	item.addEventListener('click', e => {
		console.log(item.nextElementSibling);
		item.nextElementSibling.classList.toggle('visable');
	});
});

// next

const elTitle = document.querySelectorAll('.fax__title');

elTop.forEach(item => {
	item.addEventListener('click', e => {
		console.log(item.nextElementSibling);
		item.nextElementSibling.classList.toggle('title__img');
	});
});
