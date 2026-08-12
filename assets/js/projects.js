// Project Filtering and Rendering Logic

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container || typeof projectsData === 'undefined') return;

    container.innerHTML = ''; // Clear container

    projectsData.forEach(project => {
        // Create the card element
        const card = document.createElement('article');
        card.className = 'app-store-card';
        card.setAttribute('data-date', project.date);
        
        // Determine current text based on language
        const lang = window.currentLang || 'en';
        const title = project.title;
        const shortDesc = project.desc_short[lang];

        // Generate images HTML
        let imagesHTML = '';
        if (project.images && project.images.length > 0) {
            project.images.forEach(imgSrc => {
                imagesHTML += `<img src="${imgSrc}" loading="lazy" alt="Screenshot">`;
            });
        }

        card.innerHTML = `
            <div class="card-header" onclick="window.location.href = 'project.html?id=${project.id}'">
                <img src="${project.logo}" alt="${title} Logo" class="app-logo" loading="lazy">
                <div class="app-info">
                    <h3>${title}</h3>
                    <p class="card-desc">${shortDesc}</p>
                </div>
                <button class="view-btn" data-i18n="btn_view_details">View Details</button>
            </div>
            <div class="card-gallery">
                ${imagesHTML}
            </div>
        `;
        
        container.appendChild(card);
    });

    // We must re-translate because we just injected new data-i18n elements (like View Details)
    if (typeof setLanguage === 'function') {
        setLanguage(window.currentLang || 'en');
    }
}

function sortProjectsChronological() {
    const selectElement = document.getElementById('sort-order');
    const container = document.getElementById('projects-container');
    
    if (!selectElement || !container) return;

    const order = selectElement.value;
    const cards = Array.from(container.children);
    
    // Fade out for visual effect
    container.style.opacity = '0';
    
    setTimeout(() => {
        cards.sort((a, b) => {
            const dateA = new Date(a.getAttribute('data-date'));
            const dateB = new Date(b.getAttribute('data-date'));
            return order === 'latest' ? dateB - dateA : dateA - dateB;
        });
        
        // Re-append sorted cards
        cards.forEach(card => container.appendChild(card));
        
        // Fade back in
        container.style.opacity = '1';
    }, 200);
}

window.addEventListener('DOMContentLoaded', () => {
    // Initial Render
    renderProjects();

    const selectElement = document.getElementById('sort-order');
    if (selectElement) {
        selectElement.value = 'latest';
        
        const container = document.getElementById('projects-container');
        if (container) {
            container.style.transition = 'opacity 0.2s ease-in-out';
        }
        
        // Sort initially if needed, though they render in order of data.js
        sortProjectsChronological();
        
        // Listen for changes
        selectElement.addEventListener('change', sortProjectsChronological);
    }
});
