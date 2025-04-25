// Product data placeholders ypu can change it with the same schema to a context internal api 
// or any state management as you wish to stay in sync with the web
const products = [
	{
		id: 'HHa544',
		name: 'Wireless Headphones',
		price: 199.99,
		quantity: 1,
		image: 'https://placehold.co/150',
	},
	{
		id: 'ZZas15',
		name: 'Smart Fitness Watch',
		price: 149.5,
		quantity: 1,
		image: 'https://placehold.co/150',
	},
	{
		id: 'QQ45aa',
		name: '4K Action Camera',
		price: 299.0,
		quantity: 1,
		image: 'https://placehold.co/150',
	},
	{
		id: 'WA4533',
		name: 'Wireless Headphones',
		price: 199.99,
		quantity: 1,
		image: 'https://placehold.co/150',
	},
	{
		id: 'wzAA11',
		name: 'Smart Fitness Watch',
		price: 149.5,
		quantity: 1,
		image: 'https://placehold.co/150',
	},
	{
		id: 'HR11Qa',
		name: '4K Action Camera',
		price: 299.0,
		quantity: 1,
		image: 'https://placehold.co/150',
	},
];

// DOM elements
const productsContainer = document.getElementById('products');
const totalElement = document.getElementById('total');

function renderProducts() {
	productsContainer.innerHTML = products
		.map(
			(product) => `
			<div class="flex flex-col md:flex-row items-start md:items-center py-6 border-b last:border-b-0 w-full">
				<div class="flex flex-1 w-full mb-4 md:mb-0">
					<img src="${
						product.image
					}" class="w-20 h-20 object-cover rounded-lg mr-6 flex-shrink-0" alt="${
				product.name
			}" />
					<div class="flex-1 min-w-0">
						<h3 class="font-bold text-base mb-1 product-name">${product.name}</h3>
						<p class="text-xs text-gray-500">#${product.id}</p>
					</div>
				</div>
				<div class="flex justify-end items-center w-full md:w-auto">
					<div class="flex items-center">
						<button 
							class="w-8 h-8 bg-[#FF5722] text-white rounded hover:bg-[#ff4500] transition-colors duration-200"
							onclick="decreaseQuantity('${product.id}')"
						>-</button>
						<span class="mx-3">${product.quantity}</span>
						<button 
							class="w-8 h-8 bg-[#FF5722] text-white rounded hover:bg-[#ff4500] transition-colors duration-200"
							onclick="increaseQuantity('${product.id}')"
						>+</button>
					</div>
					<div class="flex items-center ml-4">
						<div class="w-24 text-right font-bold product-price mr-4">
							$${product.price.toFixed(2)}
						</div>
						<button 
							class="text-gray-400 hover:text-[#FF5722] text-2xl font-light"
							onclick="removeProduct('${product.id}')"
							aria-label="Remove"
						>&times;</button>
					</div>
				</div>
			</div>
		`
		)
		.join('');
}

// Add this function below your existing functions:
function removeProduct(productId) {
	const index = products.findIndex((p) => p.id === productId);
	if (index !== -1) {
		products.splice(index, 1);
		renderProducts();
		updateTotal();
	}
}

function updateTotal() {
	const total = products.reduce(
		(sum, product) => sum + product.price * product.quantity,
		0
	);
	totalElement.textContent = `$${total.toFixed(2)}`;
}

function increaseQuantity(productId) {
	const product = products.find((p) => p.id === productId);
	product.quantity++;
	renderProducts();
	updateTotal();
}

function decreaseQuantity(productId) {
	const product = products.find((p) => p.id === productId);
	if (product.quantity > 0) {
		product.quantity--;
		if (product.quantity === 0) {
			const index = products.findIndex((p) => p.id === productId);
			products.splice(index, 1);
		}
		renderProducts();
		updateTotal();
	}
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
	renderProducts();
	updateTotal();
});
