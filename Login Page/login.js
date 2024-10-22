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
    const errorElement = document.getElementById('signupError');
    if (!username || !password || !repassword) {
        errorElement.textContent = 'All fields are required';
        return false;
    }
    if (password !== repassword) {
        errorElement.textContent = 'Passwords do not match';
        return false;
    }
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some(user => user.username === username)) {
        errorElement.textContent = 'Username already exists';
        return false;
    }
    const newUser = {
        username,
        password
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    document.signupform.reset();
    alert('Signup successful! Please login.');
    toggleForms();
    return false;
}

function validateLogin(event) {
    event.preventDefault();
    
    const username = document.loginform.uname.value;
    const password = document.loginform.pwd.value;

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'index.html';
        return true;
    } else {
        document.getElementById('loginError').textContent = 'Invalid username or password';
        return false;
    }
}