// Project Filtering Logic

function sortProjectsChronological() {
    const selectElement = document.getElementById('sort-order');
    if (!selectElement) return;

    const order = selectElement.value;
    const projects = Array.from(document.querySelectorAll('.project'));
    
    // Fade out projects before sorting for visual effect
    const container = document.querySelector('.projects-grid') || document.querySelector('.content-section');
    
    container.style.opacity = '0';
    
    setTimeout(() => {
        projects.sort((a, b) => {
            const dateA = new Date(a.getAttribute('data-date'));
            const dateB = new Date(b.getAttribute('data-date'));
            return order === 'latest' ? dateB - dateA : dateA - dateB;
        });
        
        projects.forEach(project => container.appendChild(project));
        
        // Fade back in
        container.style.opacity = '1';
    }, 200);
}

window.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('sort-order');
    if (selectElement) {
        selectElement.value = 'latest';
        
        // Setup transition for smooth fading
        const container = document.querySelector('.projects-grid') || document.querySelector('.content-section');
        if (container) {
            container.style.transition = 'opacity 0.2s ease-in-out';
        }
        
        sortProjectsChronological();
    }
});
