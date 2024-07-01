document.addEventListener("DOMContentLoaded", function() {
    const buyButtons = document.querySelectorAll(".buy");

    buyButtons.forEach(button => {
        button.addEventListener("click", function() {
            const item = this.parentElement;
            const itemName = item.querySelector("img").src;
            const itemPrice = item.querySelector("p").innerText;

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            cart.push({ name: itemName, price: itemPrice });

            localStorage.setItem("cart", JSON.stringify(cart));
        });
    });
});
