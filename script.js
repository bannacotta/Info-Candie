let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
	searchForm.classList.remove('active');
	navbar.classList.toggle('active');
	cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
	searchForm.classList.toggle('active');
	navbar.classList.remove('active');
	cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-item-container');

document.querySelector('#cart-btn').onclick = () => {
	searchForm.classList.remove('active');
	navbar.classList.remove('active');
	cartItem.classList.toggle('active');
}

window.onscroll = () =>{
	navbar.classList.remove('active');
	searchForm.classList.remove('active');
	cartItem.classList.remove('active');
} 