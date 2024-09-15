document.addEventListener('DOMContentLoaded', () => {
    const cartButton = document.querySelectorAll('button');
    
    cartButton.forEach(button => {
        button.addEventListener('click', () => {
            alert('Added to cart!');
        });
    });
});

