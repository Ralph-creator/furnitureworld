let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach((cartItem) => {
        const li = document.createElement('li');
        li.className = 'item';
        li.textContent = `${cartItem.item} - $${cartItem.price}`;
        cartItems.appendChild(li);
    });
    document.getElementById('total').textContent = `Total: $${total}`;
    document.getElementById('cart').style.display = 'block';
}

document.getElementById('checkout').onclick = function() {
    alert(`Checking out with total: $${total}`);
    resetCart();
};

document.getElementById('cancel').onclick = function() {
    resetCart();
};

function resetCart() {
    cart = [];
    total = 0;
    updateCart();
    document.getElementById('cart').style.display = 'none';
}