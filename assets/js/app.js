// Global App Logic

// Contact Form Submission (Index Page)
function mailSent(e) {
    if (e) e.preventDefault();
    
    // Using the translations object from i18n.js
    if (typeof translations !== 'undefined' && typeof currentLang !== 'undefined') {
        alert(translations[currentLang].alert_sent);
    } else {
        alert('Your message has been sent!');
    }
    
    // Optional: Reset form after submit
    const form = document.getElementById('contactForm');
    if (form) form.reset();
    
    return false;
}

// Show More / Less Logic (About Page)
function showMore() {
    const fullText = document.getElementById('fullText');
    const moreLink = document.getElementById('moreLink');
    const lessLink = document.getElementById('lessLink');
    
    if (fullText) fullText.style.display = 'block';
    if (moreLink) moreLink.style.display = 'none';
    if (lessLink) lessLink.style.display = 'block';
}

function showLess() {
    const fullText = document.getElementById('fullText');
    const moreLink = document.getElementById('moreLink');
    const lessLink = document.getElementById('lessLink');
    
    if (fullText) fullText.style.display = 'none';
    if (lessLink) lessLink.style.display = 'none';
    if (moreLink) moreLink.style.display = 'block';
}

// Attach event listener to contact form if it exists
window.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', mailSent);
        // Remove inline onsubmit from HTML later
    }
});
