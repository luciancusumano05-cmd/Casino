function verifyAge() {
    // Hide the age verification overlay
    document.getElementById('age-verification').style.display = 'none';
    // Show the main website content
    document.getElementById('main-content').classList.remove('hidden');
    // Optional: Set a cookie or localStorage to remember the verification
    localStorage.setItem('ageVerified', 'true');
}

function rejectAge() {
    // Redirect away from the site if the user is underage
    window.location.href = "https://www.google.com";
}

// Check if user is already verified (optional, for returning visitors)
window.onload = function() {
    if (localStorage.getItem('ageVerified') === 'true') {
        document.getElementById('age-verification').style.display = 'none';
        document.getElementById('main-content').classList.remove('hidden');
    }
};
