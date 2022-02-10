
// login file

document.getElementById('login-button').addEventListener('click', function (e) {
    // get user email
    const emailField = document.getElementById('email-field');
    const userEmail = emailField.value;
    // get user password
    const passField = document.getElementById('pass-field');
    const userPass = passField.value;
    // validation
    if (userEmail == 'gorib24h@gmail.com' && userPass == 'secret') {
        window.location.href = 'banking.html';
    }
})

