document.getElementById('signup').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const code = document.getElementById('code').value;

    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    const loader = document.getElementById('loader');

    // Clear previous messages and show loader
    errorMessage.textContent = '';
    successMessage.textContent = '';
    loader.style.display = 'block';

    fetch('https://planner-b-tag7.onrender.com/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, code })
    })
    .then(res => {
      loader.style.display = 'none'; // Hide loader

      if (res.ok) {
        successMessage.textContent = "User registered successfully! Redirecting...";
        setTimeout(() => {
          window.location.href = '/signin.html';
        }, 1500);
      } else {
        errorMessage.textContent = "Please enter valid Code or contact team.";
      }
    })
    .catch(err => {
      loader.style.display = 'none'; // Hide loader
      console.error("Error:", err);
      errorMessage.textContent = "Something went wrong.";
    });
  });