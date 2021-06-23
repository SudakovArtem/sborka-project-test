const initCounter = () => {
	const products = document.querySelectorAll('.js-product');

	if (!products.length) {
		return;
	}

	const aside = document.querySelector('.aside');
	const subtotal = document.querySelector('.js-subtotal');
	const total = document.querySelector('.js-total');
	const cartCounter = document.querySelector('.user-menu__counter');
	let sum = 0;

	products.forEach(product => {
		const btnMinus = product.querySelector('.js-minus');
		const btnPlus = product.querySelector('.js-plus');
		const counter = product.querySelector('span');
		const price = +product.querySelector('.js-price').innerText;
		const deleteBtn = product.querySelector('.js-delete');
		let currentCount = +counter.innerText;
		sum += price;

		btnMinus.addEventListener('click', evt => {
			evt.preventDefault();
			evt.stopPropagation();
			if (currentCount > 1) {
				currentCount--;
				counter.innerText = currentCount.toString();
				sum -= price;
				subtotal.innerText = sum.toLocaleString();
				total.innerText = (sum + 250).toLocaleString();
			}
		});

		btnPlus.addEventListener('click', evt => {
			evt.preventDefault();
			evt.stopPropagation();
			currentCount++;
			counter.innerText = currentCount.toString();
			sum += price;
			subtotal.innerText = sum.toLocaleString();
			total.innerText = (sum + 250).toLocaleString();
		});

		deleteBtn.addEventListener('click', evt => {
			evt.preventDefault();
			evt.stopPropagation();
			product.remove();
			sum -= price * currentCount;
			subtotal.innerText = sum.toLocaleString();
			total.innerText = (sum + 250).toLocaleString();
			const productsLength = document.querySelectorAll('.js-product').length;
			if (!productsLength) {
				aside.classList.add('empty');
				aside.innerHTML = `<h2 class="h2">Cart empty</h2>`;
				cartCounter.remove();
			} else {
				cartCounter.innerText = productsLength;
			}
		});
	});
};

export default initCounter;
