const productContainer = document.getElementById('productContainer');

fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(products => {
    productContainer.innerHTML = products.map(product => `
      <div class="card bg-base-100 shadow-md hover:shadow-lg p-4">
        <img src="${product.image}" alt="${product.title}" class="h-48 w-full object-contain mb-3">

        <div class="card-body p-0">
          <h3 class="text-md font-semibold line-clamp-2 mb-1">${product.title}</h3>
          <p class="text-[#0ea5a4] font-bold mb-1">$${product.price.toFixed(2)}</p>
          <p class="text-sm text-gray-500 flex items-center gap-1"><i class="fa-solid fa-star text-amber-400"></i> ${product.rating.rate} / 5</p>

          <div class="card-actions mt-3">
            <button class="btn btn-sm bg-[#0ea5a4] hover:bg-[#0c8f8c] text-white add-to-cart"
              data-id="${product.id}"
              data-title="${product.title}"
              data-price="${product.price}"
              data-image="${product.image}">
              <i class="fa-solid fa-cart-plus mr-2"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }).catch(err => {console.error('Error fetching products:', err);
    productContainer.innerHTML = `<p class="text-center text-red-500">Failed to load products.</p>`;
  });
