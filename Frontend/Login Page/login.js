function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const newAccountDiv = document.querySelector('.newaccount');

    if (loginForm.style.display !== 'none') {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        newAccountDiv.innerHTML = 'Have an account? <a href="#" onclick="toggleForms()">Log in</a>';
    } else {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        newAccountDiv.innerHTML = 'Don\'t have an account? <a href="#" onclick="toggleForms()">Sign up</a>';
    }
}

function handleSignup(event) {
    event.preventDefault();

    const username = document.signupform.username.value;
    const password = document.signupform.password.value;
    const repassword = document.signupform.repassword.value;
    const age = document.signupform.age.value;
    const phone = document.signupform.phone.value;
    const errorElement = document.getElementById('signupError');

    if (password !== repassword) {
        errorElement.textContent = 'Passwords do not match';
        return false;
    }

    fetch('http://localhost:3001/register_user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: username,
            password: password,
            age: age,
            email: `${username}@example.com`,
            phone: phone
        }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'User Registered...') {
                alert('Signup successful! Please login.');
                toggleForms();
            } else {
                errorElement.textContent = data.message;
            }
        })
        .catch(error => {
            errorElement.textContent = 'An error occurred during signup';
            console.error(error);
        });
}

function validateLogin(event) {
    event.preventDefault();

    const username = document.loginform.uname.value;
    const password = document.loginform.pwd.value;

    fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: `${username}@example.com`,
            password: password,
        }),
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Invalid username or password');
            }
        })
        .then(data => {
            localStorage.setItem('currentUser', JSON.stringify(data.user));
            window.location.href = "../Home Page/index.html";
        })
        .catch(error => {
            document.getElementById('loginError').textContent = error.message;
            console.error(error);
        });
}