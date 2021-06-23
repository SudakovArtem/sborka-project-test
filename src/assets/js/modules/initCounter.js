const initCounter = () => {
	const counters = document.querySelectorAll('.js-product');

	if (!counters.length) {
		return;
	}

	const aside = document.querySelector('.aside');
	const subtotal = document.querySelector('.js-subtotal');
	const total = document.querySelector('.js-total');
	const cartCounter = document.querySelector('.user-menu__counter');
	let sum = 0;

	counters.forEach(counter => {
		const btnMinus = counter.querySelector('.js-minus');
		const btnPlus = counter.querySelector('.js-plus');
		const count = counter.querySelector('span');
		const price = +counter.querySelector('.js-price').innerText;
		const deleteBtn = counter.querySelector('.js-delete');
		let current = +count.innerText;
		sum += price;

		btnMinus.addEventListener('click', evt => {
			evt.preventDefault();
			if (current > 1) {
				current--;
				count.innerText = current.toString();
				sum -= price;
				subtotal.innerText = sum.toLocaleString();
				total.innerText = (sum + 250).toLocaleString();
			}
		});

		btnPlus.addEventListener('click', evt => {
			evt.preventDefault();
			current++;
			count.innerText = current.toString();
			sum += price;
			subtotal.innerText = sum.toLocaleString();
			total.innerText = (sum + 250).toLocaleString();
		});

		deleteBtn.addEventListener('click', evt => {
			evt.preventDefault();
			counter.remove();
			sum -= price * current;
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
