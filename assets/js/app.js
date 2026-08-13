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

// ScrollSpy Logic
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    // Add scroll event listener
    window.addEventListener("scroll", () => {
        let current = "";
        
        // Find the current section
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Trigger threshold is roughly 1/3 down the viewport
            if (scrollY >= (sectionTop - sectionHeight / 3) - 100) { 
                current = section.getAttribute("id");
            }
        });
        
        // Update active class on nav links
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
});

