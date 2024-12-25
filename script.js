     // Handle form submission and redirect
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      // Form will be submitted normally, no need to call preventDefault

      // Redirect after form submission
      setTimeout(function() {
       // alert('this is working');
        window.location.href = '#'; // Replace this with the page you want to redirect to
      }, 1000); // Delay redirect by 1 second to allow form submission
    });