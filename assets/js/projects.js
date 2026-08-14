// Project Filtering and Rendering Logic

function scrollGallery(id, direction) {
    const gallery = document.getElementById(`gallery-${id}`);
    if (gallery) {
        // Scroll 2 image widths + gaps
        const scrollAmount = (gallery.querySelector('img').clientWidth + 16) * 2; 
        gallery.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
}

function updateGalleryArrows(gallery) {
    if (!gallery) return;
    const wrapper = gallery.closest('.card-gallery-wrapper');
    if (!wrapper) return;

    const leftArrow = wrapper.querySelector('.scroll-arrow.left');
    const rightArrow = wrapper.querySelector('.scroll-arrow.right');

    if (leftArrow) {
        leftArrow.style.display = gallery.scrollLeft <= 5 ? 'none' : 'flex';
    }
    if (rightArrow) {
        // scrollWidth is total scrollable content, clientWidth is visible area
        const maxScroll = gallery.scrollWidth - gallery.clientWidth;
        // if we are within 5px of the right edge, hide the right arrow
        rightArrow.style.display = gallery.scrollLeft >= maxScroll - 5 ? 'none' : 'flex';
    }
}

function makeDraggableScroll(slider) {
    let isDown = false;
    let startX;
    let scrollLeft;
    let isDragging = false;

    const onMouseMove = (e) => {
        if (!isDown) return;
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX); // exactly 1:1 with mouse movement
        if (Math.abs(walk) > 6) {
            isDragging = true; // flag as dragging to prevent click
        }
        slider.scrollLeft = scrollLeft - walk;
    };

    const onMouseUp = () => {
        isDown = false;
        slider.style.cursor = 'grab';
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
    };

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        isDragging = false;
        slider.style.cursor = 'grabbing';
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        // prevent native image drag
        if (e.target.tagName.toLowerCase() === 'img') {
            e.preventDefault();
        }
        
        // Listen on window so drag continues even if mouse leaves the gallery area
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    });

    // Intercept clicks on images to prevent navigation if dragging
    slider.addEventListener('click', (e) => {
        if (isDragging) {
            e.preventDefault();
            e.stopPropagation();
        } else if (e.target.tagName.toLowerCase() === 'img') {
            const url = e.target.getAttribute('data-href');
            if (url) window.location.href = url;
        }
    }, true);
}

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
        const title = typeof project.title === 'string' ? project.title : (project.title[lang] || project.title.en);
        const shortDesc = project.desc_short[lang];

        // Generate images HTML
        let imagesHTML = '';
        if (project.images && project.images.length > 0) {
            project.images.forEach(imgSrc => {
                imagesHTML += `<div class="gallery-img-wrapper"><img src="${imgSrc}" loading="lazy" alt="Screenshot" class="image-fade" onload="this.classList.add('loaded')" data-href="project.html?id=${project.id}"></div>`;
            });
        }

        // Only show arrows if there are more than 3 images
        const showArrows = project.images && project.images.length > 3;

        card.innerHTML = `
            <div class="card-header" onclick="window.location.href = 'project.html?id=${project.id}'">
                <div class="profile-image-container" style="border-radius: 15px; overflow: hidden; width: 60px; height: 60px; flex-shrink: 0;">
                    <img src="${project.logo}" alt="${title} Logo" class="app-logo image-fade" loading="lazy" onload="this.classList.add('loaded')" style="width: 100%; height: 100%;">
                </div>
                <div class="app-info">
                    <h3>${title}</h3>
                    <p class="card-desc">${shortDesc}</p>
                </div>
                <button class="view-btn" data-i18n="btn_view_details">View Details</button>
            </div>
            <div class="card-gallery-wrapper">
                ${showArrows ? `<button class="scroll-arrow left" onclick="scrollGallery('${project.id}', -1)">❮</button>` : ''}
                <div class="card-gallery" id="gallery-${project.id}">
                    ${imagesHTML}
                </div>
                ${showArrows ? `<button class="scroll-arrow right" onclick="scrollGallery('${project.id}', 1)">❯</button>` : ''}
            </div>
        `;
        
        container.appendChild(card);

        // Make gallery draggable
        const gallery = card.querySelector('.card-gallery');
        if (gallery) {
            gallery.style.cursor = 'grab';
            makeDraggableScroll(gallery);
            
            // Update arrows on scroll
            if (showArrows) {
                gallery.addEventListener('scroll', () => updateGalleryArrows(gallery));
                // Initial check after a short delay to allow layout to compute
                setTimeout(() => updateGalleryArrows(gallery), 100);
            }
        }
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
