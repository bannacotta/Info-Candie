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

let amountElement = document.getElementById('amount');
let amount = amountElement.value;
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let render = (amount) => {
	amountElement.value = amount;
}

minus.addEventListener('click', function(){
	if(amount > 1){
		amount--;
		render(amount);
	}
	return(0);
}); 

plus.addEventListener('click', function(){
	if(amount < 20){
		amount++;
		render(amount);
	}
});

amountElement.addEventListener('input', function(){
	amount = amountElement.value;
	amount = parseInt (amount);
	amount = (isNaN(amount)||amount == 0)?1:amount;
	render(amount);
});
