document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    // Validation du champ "name"
    var nameField = document.getElementById('name');
    var nameError = document.getElementById('name-error');
    if (nameField.value.trim() === '') {
        nameError.textContent = nameField.placeholder + " can't be empty";
        nameError.hidden = false;
    } else if (nameField.value.trim().length < 3) {
        nameError.textContent = nameField.placeholder + " doit contenir au moins 3 caractères";
        nameError.hidden = false;
    } else {
        nameError.hidden = true;
    }

    // Validation du champ "email"
    var emailField = document.getElementById('email');
    var emailError = document.getElementById('email-error');
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailField.value.trim())) {
        emailError.textContent = "Invalid email format";
        emailError.hidden = false;
    } else {
        emailError.hidden = true;
    }

    // Validation du champ "phone"
    var phoneField = document.getElementById('phone');
    var phoneError = document.getElementById('phone-error');
    var phonePattern = /^[0-9]*$/;
    if (phoneField.value.trim() === '') {
        phoneError.textContent = phoneField.placeholder + " can't be empty";
        phoneError.hidden = false;
    } else if (!phonePattern.test(phoneField.value.trim())) {
        phoneError.textContent = "Invalid phone number format";
        phoneError.hidden = false;
    } else {
        phoneError.hidden = true;
    }

    // Validation du champ "message"
    var messageField = document.getElementById('message');
    var messageError = document.getElementById('message-error');
    if (messageField.value.trim() === '') {
        messageError.textContent = messageField.placeholder + " can't be empty";
        messageError.hidden = false;
    } else {
        messageError.hidden = true;
    }

    // Si tous les champs sont valides, soumettre le formulaire
    if (!nameError.hidden || !emailError.hidden || !phoneError.hidden || !messageError.hidden) {
        return false; // Empêche l'envoi du formulaire si des erreurs sont présentes
    } else {
        this.submit(); // Soumettre le formulaire si tout est valide
    }
});
