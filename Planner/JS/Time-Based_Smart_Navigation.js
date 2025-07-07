window.onload = function () {
      if (!sessionStorage.getItem("redirected")) {
        const now = new Date();
        const hour = now.getHours();
        const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  
  
        // Saturday
        if (day === 6 && hour >= 6 && hour < 14) {
        window.location.href = "/Saturday/saturady_shift1.html";
        } else if (day === 6 && hour >= 14 && hour < 22) {
        window.location.href = "/Saturday/saturady_shift2.html";
        } else if (day === 6 && hour >= 22) {
        window.location.href = "/Saturday/saturady_shift3.html";
        } else if (day === 0 && hour >= 0 && hour < 6) {
        window.location.href = "/Saturday/saturady_shift3.html";
        }

        // Sunday
        else if (day === 0 && hour >= 6 && hour < 14) {
        window.location.href = "/Sunday/sunday_shift1.html";
        } else if (day === 0 && hour >= 14 && hour < 22) {
        window.location.href = "/Sunday/sunday_shift2.html";
        } else if (day === 0 && hour >= 22) {
        window.location.href = "/Sunday/sunday_shift3.html";
        } else if (day === 1 && hour >= 0 && hour < 6) {
        window.location.href = "/Sunday/sunday_shift3.html";
        }

        // Monday
        else if (day === 1 && hour >= 6 && hour < 14) {
        window.location.href = "/Monday/monday_shift1.html";
        } else if (day === 1 && hour >= 14 && hour < 22) {
        window.location.href = "/Monday/monday_shift2.html";
        } else if (day === 1 && hour >= 22) {
        window.location.href = "/Monday/monday_shift3.html";
        } else if (day === 2 && hour >= 0 && hour < 6) {
        window.location.href = "/Monday/monday_shift3.html";
        }

        // Tuesday
        else if (day === 2 && hour >= 6 && hour < 14) {
        window.location.href = "/Tuesday/tuesday_shift1.html";
        } else if (day === 2 && hour >= 14 && hour < 22) {
        window.location.href = "/Tuesday/tuesday_shift2.html";
        } else if (day === 2 && hour >= 22) {
        window.location.href = "/Tuesday/tuesday_shift3.html";
        } else if (day === 3 && hour >= 0 && hour < 6) {
        window.location.href = "/Tuesday/tuesday_shift3.html";
        }

        // Wednesday
        else if (day === 3 && hour >= 6 && hour < 14) {
        window.location.href = "/Wednesday/wednesday_shift1.html";
        } else if (day === 3 && hour >= 14 && hour < 22) {
        window.location.href = "/Wednesday/wednesday_shift2.html";
        } else if (day === 3 && hour >= 22) {
        window.location.href = "/Wednesday/wednesday_shift3.html";
        } else if (day === 4 && hour >= 0 && hour < 6) {
        window.location.href = "/Wednesday/wednesday_shift3.html";
        }

        // Thursday
        else if (day === 4 && hour >= 6 && hour < 14) {
        window.location.href = "/Thursday/thursday_shift1.html";
        } else if (day === 4 && hour >= 14 && hour < 22) {
        window.location.href = "/Thursday/thursday_shift2.html";
        } else if (day === 4 && hour >= 22) {
        window.location.href = "/Thursday/thursday_shift3.html";
        } else if (day === 5 && hour >= 0 && hour < 6) {
        window.location.href = "/Thursday/thursday_shift3.html";
        }

        // Friday
        else if (day === 5 && hour >= 6 && hour < 14) {
        window.location.href = "/Friday/friday_shift1.html";
        } else if (day === 5 && hour >= 14 && hour < 22) {
        window.location.href = "/Friday/friday_shift2.html";
        } else if (day === 5 && hour >= 22) {
        window.location.href = "/Friday/friday_shift3.html";
        } else if (day === 6 && hour >= 0 && hour < 6) {
        window.location.href = "/Friday/friday_shift3.html";
        }

              
        
  
        sessionStorage.setItem("redirected", "true");
      }
    };
  