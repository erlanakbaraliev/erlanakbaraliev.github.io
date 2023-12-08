// form_validation.js

document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        var emailInput = document.getElementById('email');
        var emailValue = emailInput.value.trim();

        if (!isValidGmail(emailValue)) {
            event.preventDefault(); // Prevent form submission
            alert('Please enter a valid Gmail address.');
        }
    });

    function isValidGmail(email) {
        // Regular expression to check if the email is a Gmail address
        var gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        return gmailRegex.test(email);
    }
});
