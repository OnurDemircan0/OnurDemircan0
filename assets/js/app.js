// Global App Logic

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

