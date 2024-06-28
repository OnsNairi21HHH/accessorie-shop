document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.querySelector('.cart-container');
    const totalPriceElement = document.getElementById('total');
    let cart = JSON.parse(localStorage.getItem('cart')) || {};

    const updateCartDisplay = () => {
        cartContainer.innerHTML = '<h1>Shopping Cart</h1>';
        let total = 0;

        for (let item in cart) {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.setAttribute('data-price', cart[item].price);

            itemElement.innerHTML = `
                <div class="item-info">
                    <h2>${item}</h2>
                    <button class="delete-btn">Delete</button>
                </div>
                <div class="quantity-controls">
                    <button class="minus-btn">-</button>
                    <span class="quantity">${cart[item].quantity}</span>
                    <button class="plus-btn">+</button>
                </div>
                <div class="item-price">${(cart[item].price * cart[item].quantity).toFixed(2)} DT</div>
            `;

            cartContainer.appendChild(itemElement);
            total += cart[item].price * cart[item].quantity;
        }

        const totalElement = document.createElement('div');
        totalElement.className = 'total-price';
        totalElement.innerHTML = `Total: DT<span id="total">${total.toFixed(2)}</span>`;
        cartContainer.appendChild(totalElement);

        document.querySelectorAll('.plus-btn').forEach(btn => {
            btn.addEventListener('click', increaseQuantity);
        });

        document.querySelectorAll('.minus-btn').forEach(btn => {
            btn.addEventListener('click', decreaseQuantity);
        });

        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', deleteItem);
        });

        totalPriceElement.textContent = total.toFixed(2);
    };

    const increaseQuantity = (e) => {
        const itemElement = e.target.closest('.cart-item');
        const itemName = itemElement.querySelector('h2').textContent;
        cart[itemName].quantity++;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    };

    const decreaseQuantity = (e) => {
        const itemElement = e.target.closest('.cart-item');
        const itemName = itemElement.querySelector('h2').textContent;
        if (cart[itemName].quantity > 1) {
            cart[itemName].quantity--;
        } else {
            delete cart[itemName];
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    };

    const deleteItem = (e) => {
        const itemElement = e.target.closest('.cart-item');
        const itemName = itemElement.querySelector('h2').textContent;
        delete cart[itemName];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    };

    updateCartDisplay();
