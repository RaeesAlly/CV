document.getElementById('contactMeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('formResponse').innerText = 'Thank you for your message, ' + name + '!';
    } else {
        document.getElementById('formResponse').innerText = 'Please fill out all fields.';
    }
});
