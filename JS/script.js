fetch('../navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar-container').innerHTML = data;
      })
      .catch(error => console.error('Error loading navbar:', error));
      
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('clock').textContent = timeString;
  }

  setInterval(updateClock, 1000);
  updateClock(); // initial call