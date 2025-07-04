
document.getElementById('login').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');
 const loader = document.getElementById('loader');

  errorMessage.textContent = '';
  loader.style.display = 'block'; // Show loader

  fetch('https://planner-b-tag7.onrender.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Invalid credentials');
      }
      return res.text();
    })
    .then(token => {
      localStorage.setItem('token', token);
      setTimeout(() => {
        window.location.href = '/Home.html';
      }, 1000); // Delay to show loader
    })
    .catch(error => {
      console.error('Login error:', error);
      errorMessage.textContent = 'Wrong username or password.';
      loader.style.display = 'none'; // Hide loader on error
    });
});
