fetch('../navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar-container').innerHTML = data;
        Time();
      })
      .catch(error => console.error('Error loading navbar:', error));

      function Time(){
        const clockElement = document.getElementById('clock');
        const timezoneSelect = document.getElementById('custom-timezone-dropdown');
        
        const timezones = {
        
          "India---": "Asia/Kolkata",

          "UK------": "America/New_York",

          "CEN/ IT-": "Europe/Berlin",

          "JP/ KR--": "Asia/Tokyo",

          "EU/ FR--": "Africa/Johannesburg",
        };
        
          
        function populateDropdown() {
        
          timezoneSelect.innerHTML = '';
          const now = new Date();
          for (const [label, zone] of Object.entries(timezones)) {
            const time = new Intl.DateTimeFormat('en-US', {
              hour: '2-digit',
              minute: '2-digit',
              timeZone: zone,
              hour12: true
            }).format(now);
            const option = document.createElement('option');
            option.value = zone;
            option.textContent = `${label} - ${time}`;
            timezoneSelect.appendChild(option);
          }
        }
        
        function updateClock() {
          const now = new Date();
          const timeZone = timezoneSelect.value;
          const timeString = new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
            timeZone: timeZone
          }).format(now);
          clockElement.textContent = timeString;
        }
        
        timezoneSelect.addEventListener('change', updateClock);
        setInterval(() => {
          populateDropdown();
          updateClock();
        }, 1000);
        
        populateDropdown();
        updateClock();
        }
      
        

  
  
    