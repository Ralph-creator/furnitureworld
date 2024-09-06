document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Submitted');
    this.reset();
});