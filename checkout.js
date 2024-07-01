document.addEventListener("DOMContentLoaded", function() {
    const cartItemsContainer = document.getElementById("cart-items");
    const clearCartButton = document.getElementById("clear-cart");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");

        // Apply Flexbox to align items horizontally
        itemDiv.style.display = "flex";
        itemDiv.style.alignItems = "center"; // Align items vertically centered
        itemDiv.style.marginBottom = "10px"; // Add some space between items

        const itemImage = document.createElement("img");
        itemImage.src = item.name;
        itemImage.style.width = "400px";
        itemImage.style.height = "400px";
        itemImage.style.objectFit = "contain";

        const itemPrice = document.createElement("p");
        itemPrice.innerText = item.price;
        itemPrice.style.marginLeft = "20px"; // Add some space between image and price

        itemDiv.appendChild(itemImage);
        itemDiv.appendChild(itemPrice);

        cartItemsContainer.appendChild(itemDiv);
    });

    clearCartButton.addEventListener("click", function() {
        localStorage.removeItem("cart");
        cartItemsContainer.innerHTML = "";
    });
});
