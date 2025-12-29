// Initialize Netlify Identity
if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
        if (!user) {
            window.netlifyIdentity.on("login", () => {
                document.location.href = "/admin/";
            });
        }
    });
}

// Load and display products
async function loadProducts() {
    const grid = document.getElementById('products-grid');
    
    try {
        // Fetch products from the CMS-generated JSON
        const response = await fetch('/products/products.json');
        
        if (!response.ok) {
            throw new Error('Produits non disponibles');
        }
        
        const data = await response.json();
        const products = data.products || [];
        
        if (products.length === 0) {
            grid.innerHTML = `
                <div class="loading">
                    <p>Aucun produit disponible pour le moment.</p>
                </div>
            `;
            return;
        }
        
        // Clear loading state
        grid.innerHTML = '';
        
        // Create product cards
        products.forEach(product => {
            const card = createProductCard(product);
            grid.appendChild(card);
        });
        
    } catch (error) {
        console.error('Erreur de chargement:', error);
        grid.innerHTML = `
            <div class="loading">
                <p>Erreur lors du chargement des produits.</p>
                <p style="font-size: 0.9rem; color: #999; margin-top: 0.5rem;">
                    Les produits seront disponibles après le premier déploiement.
                </p>
            </div>
        `;
    }
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const imageUrl = product.image || 'https://via.placeholder.com/400x300?text=Produit';
    const price = typeof product.price === 'number' 
        ? product.price.toFixed(2) 
        : parseFloat(product.price).toFixed(2);
    
    card.innerHTML = `
        <img src="${imageUrl}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/400x300?text=Image+non+disponible'">
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">${price} €</p>
            <p class="product-description">${product.description || ''}</p>
        </div>
    `;
    
    return card;
}

// Load products when page loads
document.addEventListener('DOMContentLoaded', loadProducts);