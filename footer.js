function submitForm() {
    const emailInput = document.querySelector('.email-input');
    if (emailInput.value) {
        alert('Thank you for subscribing!');
        emailInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a valid email address.');
    }
}