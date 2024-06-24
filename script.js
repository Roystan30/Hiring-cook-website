// script.js

document.getElementById('cookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Fetch form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    // Example: send form data to server (replace with actual backend integration)
    console.log(`Form submitted: Name - ${name}, Email - ${email}, Phone - ${phone}`);
    
    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
  
    // Optionally, show a success message or redirect to another page
  });
  
  