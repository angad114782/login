function toggleForm() {
    const registerContainer = document.getElementById('register-container');
    const loginContainer = document.getElementById('login-container');
    if (registerContainer.style.display === 'none') {
        registerContainer.style.display = 'block';
        loginContainer.style.display = 'none';
    } else {
        registerContainer.style.display = 'none';
        loginContainer.style.display = 'block';
    }
}

async function register() {
    const form = document.getElementById('register-form');
    const formData = new FormData(form);
    const data = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        password: formData.get('password')
    };

    try {
        console.log('Registering user:', data);
        const response = await fetch('http://localhost:5454/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log('Response:', result);
        if (response.ok) {
            alert(result.message);
            window.location.href = '/logintest/frontend/welcome.html';
        } else {
            alert(result.message || 'Registration failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
}

async function login() {
    const form = document.getElementById('login-form');
    const formData = new FormData(form);
    const data = {
        email: formData.get('email'),
        password: formData.get('password')
    };

    try {
        console.log('Logging in user:', data);
        const response = await fetch('http://localhost:5454/api/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log('Response:', result);
        if (response.ok) {
            alert(result.message);
            window.location.href = '/logintest/frontend/welcome.html';
        } else {
            alert(result.message || 'Login failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
}

