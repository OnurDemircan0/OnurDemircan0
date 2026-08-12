// Project Detail Logic

let currentProjectImages = [];
let currentImageIndex = 0;

function loadProjectDetails() {
    // Get ID from URL
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');

    if (!projectId || typeof projectsData === 'undefined') {
        showError();
        return;
    }

    // Find project
    const project = projectsData.find(p => p.id === projectId);
    
    if (!project) {
        showError();
        return;
    }

    // Display project container
    document.getElementById('project-detail-container').style.display = 'block';

    // Set Data
    document.getElementById('proj-title').innerText = project.title;
    
    // Links
    document.getElementById('store-link').href = project.storeLink;
    document.getElementById('privacy-link').href = project.privacyLink;

    // Gallery Setup
    currentProjectImages = project.images || [project.thumbnail];
    currentImageIndex = 0;
    
    const mainImg = document.getElementById('main-gallery-img');
    mainImg.src = currentProjectImages[currentImageIndex];

    const controls = document.getElementById('gallery-controls');
    const thumbnailsContainer = document.getElementById('gallery-thumbnails');
    
    if (currentProjectImages.length > 1) {
        controls.style.display = 'flex';
        
        // Generate thumbnails
        thumbnailsContainer.innerHTML = '';
        currentProjectImages.forEach((src, index) => {
            const thumb = document.createElement('img');
            thumb.src = src;
            thumb.className = index === 0 ? 'thumb active' : 'thumb';
            thumb.onclick = () => setImage(index);
            thumbnailsContainer.appendChild(thumb);
        });
    } else {
        controls.style.display = 'none';
        thumbnailsContainer.innerHTML = '';
    }

    // Update translations
    updateProjectText(project);
    
    // Store project globally to re-translate when language changes
    window.currentLoadedProject = project;
}

function updateProjectText(project) {
    const lang = window.currentLang || 'en';
    const descEl = document.getElementById('proj-desc');
    if (descEl) {
        descEl.innerText = project.desc_long[lang];
    }
}

// Intercept language changes
const originalSetLanguage = window.setLanguage;
if (typeof originalSetLanguage === 'function') {
    window.setLanguage = function(lang) {
        originalSetLanguage(lang); // Call standard translation
        
        // Custom update for dynamic project text
        if (window.currentLoadedProject) {
            updateProjectText(window.currentLoadedProject);
        }
    };
}

function setImage(index) {
    currentImageIndex = index;
    const mainImg = document.getElementById('main-gallery-img');
    mainImg.style.opacity = 0; // Fade out
    
    setTimeout(() => {
        mainImg.src = currentProjectImages[currentImageIndex];
        mainImg.style.opacity = 1; // Fade in
    }, 200);

    // Update active thumbnail
    const thumbs = document.querySelectorAll('.gallery-thumbnails .thumb');
    thumbs.forEach((t, i) => {
        if (i === index) t.classList.add('active');
        else t.classList.remove('active');
    });
}

function nextImage() {
    let nextIndex = currentImageIndex + 1;
    if (nextIndex >= currentProjectImages.length) nextIndex = 0;
    setImage(nextIndex);
}

function prevImage() {
    let prevIndex = currentImageIndex - 1;
    if (prevIndex < 0) prevIndex = currentProjectImages.length - 1;
    setImage(prevIndex);
}

function showError() {
    document.getElementById('error-container').style.display = 'block';
}

window.addEventListener('DOMContentLoaded', () => {
    loadProjectDetails();

    const nextBtn = document.getElementById('next-img');
    const prevBtn = document.getElementById('prev-img');

    if (nextBtn) nextBtn.addEventListener('click', nextImage);
    if (prevBtn) prevBtn.addEventListener('click', prevImage);
});
