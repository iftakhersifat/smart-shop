const productSearch = document.getElementById('productSearch');

productSearch.addEventListener('input', () => {
  const searchTerm = productSearch.value.toLowerCase();
  const container = document.getElementById('productContainer');
  const productCards = container.querySelectorAll('div');

  productCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = title.includes(searchTerm) ? 'block' : 'none';
  });
});
