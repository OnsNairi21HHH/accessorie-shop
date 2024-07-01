document.addEventListener("DOMContentLoaded", function() {
    const cartItemsContainer = document.getElementById("cart-items");
    const clearCartButton = document.getElementById("clear-cart");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");
        
        const itemImage = document.createElement("img");
        itemImage.src = item.name;
        itemImage.style.width = "400px";
        itemImage.style.height = "400px";
        itemImage.style.objectFit = "contain";
        
        const itemPrice = document.createElement("p");
        itemPrice.innerText = item.price;
        
        itemDiv.appendChild(itemImage);
        itemDiv.appendChild(itemPrice);
        
        cartItemsContainer.appendChild(itemDiv);
    });

    clearCartButton.addEventListener("click", function() {
        localStorage.removeItem("cart");
        cartItemsContainer.innerHTML = "";
    });
});
