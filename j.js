document.getElementById('donor-signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get form values
    var name = document.getElementById('donor-name').value;
    var email = document.getElementById('donor-email').value;
    var password = document.getElementById('donor-password').value;
  
    // Perform donor sign up logic
    // ...
  
    // Clear form fields
    document.getElementById('donor-name').value = '';
    document.getElementById('donor-email').value = '';
    document.getElementById('donor-password').value = '';
  });
  
  document.getElementById('ngo-signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get form values
    var name = document.getElementById('ngo-name').value;
    var email = document.getElementById('ngo-email').value;
    var password = document.getElementById('ngo-password').value;
  
    // Perform NGO sign up logic
    // ...
  
    // Clear form fields
    document.getElementById('ngo-name').value = '';
    document.getElementById('ngo-email').value = '';
    document.getElementById('ngo-password').value = '';
  });
  
  document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get form values
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;
    var userType = document.getElementById('user-type').value;
  
    // Perform login logic based on user type
    if (userType === 'donor') {
      // Perform donor login logic
      // ...
  
      // Redirect to donation page upon successful login
      window.location.href = 'donation.html';
    } else if (userType === 'ngo') {
      // Perform NGO login logic
      // ...
  
      // Redirect to NGO page upon successful login
      window.location.href = 'ngo.html';
    }
  
    // Clear form fields
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';
  });
  