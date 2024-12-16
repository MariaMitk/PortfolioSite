/*JavaScript for Form Validation (Lab 3) -->
JavaScript for Form Validation and Displaying Thank You Message*/
document.getElementById('contactForm').addEventListener('submit', function(event) {
event.preventDefault(); // Prevent the default form submission

// Retrieve values from the fields
const name = document.querySelector('input[name="fullname"]').value.trim();
const email = document.querySelector('input[name="email"]').value.trim();
const message = document.querySelector('textarea[name="message"]').value.trim();

// Regular expression for email validation
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Check for empty fields and email format
if (!name) {
    alert('Please enter your full name.');
    return;
}

if (!email) {
    alert('Please enter your email address.');
    return;
}

if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
}

if (!message) {
    alert('Please enter your message.');
    return;
}

// Εμφάνιση σύνοψης στοιχείων
const summary = `
                    Name: ${name}
                    Email: ${email}
                    Message: ${message}
                `;
const userChoice = confirm(`Please confirm your details:\n\n${summary}\n\nDo you want to proceed?`);

if (userChoice) {
   // Δημιουργία του `mailto` συνδέσμου
   const mailtoLink = `mailto:${email}?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0A%0AMessage:%20${encodeURIComponent(message)}`;
   // Άνοιγμα του συνδέσμου
   window.location.href = mailtoLink;
} else {
    alert('Submission canceled.');
}

// Submit the form
this.submit();

// Hide the form and display the thank you message
document.getElementById('contactForm').style.display = 'none';
document.getElementById('thankYouMessage').style.display = 'block';

// Reload the page after 5 seconds
setTimeout(function() {
    location.reload();
}, 5000);
});