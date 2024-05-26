document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.querySelector('.cart-items');
    const totalPriceElement = document.getElementById('total');

    // Function to update the total price based on the quantities and prices of all items
    function updateTotal() {
        let total = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const price = parseFloat(item.dataset.price);
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            total += price * quantity;
        });
        totalPriceElement.textContent = total.toFixed(2);
    }

    cartItems.addEventListener('click', function (e) {
        if (e.target.classList.contains('plus')) {
            const quantityElement = e.target.previousElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateTotal();
        } else if (e.target.classList.contains('minus')) {
            const quantityElement = e.target.nextElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotal();
            }
        } else if (e.target.classList.contains('delete')) {
            e.target.closest('.cart-item').remove();
            updateTotal();
        } else if (e.target.classList.contains('like')) {
            e.target.classList.toggle('liked');
        }
    });

    // Initial total calculation
    updateTotal();
});
