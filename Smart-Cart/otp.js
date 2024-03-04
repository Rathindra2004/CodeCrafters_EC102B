document.addEventListener("DOMContentLoaded", function() {
    var countdown = 60; // seconds
  
    var timerElement = document.getElementById('timer');
  
    var timer = setInterval(function() {
      countdown--;
      timerElement.textContent = "Resend OTP in " + countdown + " seconds";
  
      if (countdown <= 0) {
        clearInterval(timer);
        timerElement.textContent = "Resend OTP";
        timerElement.classList.add('resend');
        timerElement.addEventListener('click', function() {
          // Add functionality to resend OTP here
          console.log("Resending OTP...");
          countdown = 60; // Reset countdown
          timerElement.textContent = "Resend OTP in " + countdown + " seconds";
          timerElement.classList.remove('resend');
          timer = setInterval(arguments.callee, 1000);
        });
      }
    }, 1000);
  });