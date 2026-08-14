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

// Prevent browser from restoring scroll position incorrectly on refresh due to dynamic content
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
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
            // Use a fixed offset for the header instead of section height which breaks for very tall sections
            if (scrollY >= sectionTop - 120) { 
                current = section.getAttribute("id");
            }
        });

        // Check if scrolled to the very bottom of the page
        if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
            if (sections.length > 0) {
                current = sections[sections.length - 1].getAttribute("id");
            }
        }
        
        // Update active class on nav links
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
});

