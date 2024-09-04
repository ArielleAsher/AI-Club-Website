document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function () {
        const currentlyActive = document.querySelector('.accordion-item.active');
        if (currentlyActive && currentlyActive !== this.parentNode) {
            currentlyActive.classList.remove('active');
        }
        this.parentNode.classList.toggle('active');
    });
});

document.getElementById('join-us-button').addEventListener('click', function() {
    alert('Welcome to the AI Club! 🚀');
});

