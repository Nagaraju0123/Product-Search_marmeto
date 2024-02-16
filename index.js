async function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value;
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = 'Loading...';

    try {
        const response = await fetch(`https://products-api-2ttf.onrender.com/api/products?search=${searchTerm}`);
        const data = await response.json();
        resultsContainer.innerHTML = '';

        if (data.length === 0) {
            resultsContainer.innerHTML = 'No results found.';
            return;
        }

        data.forEach(product => {
            const productElement = document.createElement('div');
            productElement.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Price: ${product.price}</p>
      `;
            resultsContainer.appendChild(productElement);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        resultsContainer.innerHTML = 'An error occurred while fetching data.';
    }
}
