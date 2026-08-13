// Project Detail Logic

let currentProjectImages = [];
let currentImageIndex = 0;

function makeDraggableScroll(slider) {
    let isDown = false;
    let startX;
    let scrollLeft;
    let isDragging = false;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        isDragging = false;
        slider.style.cursor = 'grabbing';
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        if (e.target.tagName.toLowerCase() === 'img') e.preventDefault();
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.style.cursor = 'grab';
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.style.cursor = 'grab';
    });
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        if (Math.abs(walk) > 6) isDragging = true;
        slider.scrollLeft = scrollLeft - walk;
    });
    slider.addEventListener('click', (e) => {
        if (isDragging) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, true); // Capture phase to prevent thumbnail clicks
}

function makeSwipeable(imgElement, onSwipeLeft, onSwipeRight) {
    let startX = 0;
    let isDown = false;
    let isDragging = false;

    imgElement.addEventListener('mousedown', (e) => {
        isDown = true;
        isDragging = false;
        startX = e.pageX;
        e.preventDefault();
        imgElement.style.cursor = 'grabbing';
    });
    imgElement.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        let diff = e.pageX - startX;
        if (Math.abs(diff) > 6) {
            isDragging = true; // Mark as dragging if moved more than 6px
        }
    });
    imgElement.addEventListener('mouseup', (e) => {
        if (!isDown) return;
        isDown = false;
        imgElement.style.cursor = ''; // Revert to CSS cursor (zoom-in)
        let diff = e.pageX - startX;
        if (diff > 50) onSwipeRight();
        else if (diff < -50) onSwipeLeft();
    });
    imgElement.addEventListener('mouseleave', () => {
        isDown = false;
        imgElement.style.cursor = ''; // Revert to CSS cursor (zoom-in)
    });
    
    // Intercept click to prevent lightbox if we just swiped
    imgElement.addEventListener('click', (e) => {
        if (isDragging) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, true); // Capture phase!
    
    imgElement.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    imgElement.addEventListener('touchend', (e) => {
        let diff = e.changedTouches[0].clientX - startX;
        if (diff > 50) onSwipeRight();
        else if (diff < -50) onSwipeLeft();
    });
}

let lightboxZoomLevel = 1;
let lightboxPanX = 0;
let lightboxPanY = 0;

function resetLightboxZoom(clearStyle = false) {
    lightboxZoomLevel = 1;
    lightboxPanX = 0;
    lightboxPanY = 0;
    const img = document.getElementById('lightbox-img');
    const modal = document.getElementById('lightbox-modal');
    if (modal) modal.classList.remove('zoomed');
    
    if (img) {
        if (clearStyle) {
            img.style.transform = '';
        } else {
            img.style.transform = `scale(1) translate(0px, 0px)`;
        }
        img.style.cursor = 'zoom-in';
    }
}

function makeLightboxInteractable(imgElement, onSwipeLeft, onSwipeRight) {
    let startX = 0;
    let startY = 0;
    let isDown = false;
    let isDragging = false;
    let initialPanX = 0;
    let initialPanY = 0;

    const updateTransform = () => {
        imgElement.style.transform = `scale(${lightboxZoomLevel}) translate(${lightboxPanX}px, ${lightboxPanY}px)`;
    };

    const onDown = (clientX, clientY) => {
        isDown = true;
        isDragging = false;
        startX = clientX;
        startY = clientY;
        initialPanX = lightboxPanX;
        initialPanY = lightboxPanY;
        imgElement.style.transition = 'none'; 
        imgElement.style.cursor = 'grabbing';
    };

    const onMove = (clientX, clientY) => {
        if (!isDown) return;
        let diffX = clientX - startX;
        let diffY = clientY - startY;
        
        if (Math.abs(diffX) > 6 || Math.abs(diffY) > 6) {
            isDragging = true;
        }

        if (lightboxZoomLevel > 1 && isDragging) {
            // Pan
            lightboxPanX = initialPanX + (diffX / lightboxZoomLevel);
            lightboxPanY = initialPanY + (diffY / lightboxZoomLevel);
            updateTransform();
        }
    };

    const onUp = (clientX) => {
        if (!isDown) return;
        isDown = false;
        imgElement.style.transition = 'transform 0.3s ease'; 
        imgElement.style.cursor = lightboxZoomLevel > 1 ? 'zoom-out' : 'zoom-in';
        
        if (lightboxZoomLevel === 1) {
            let diff = clientX - startX;
            if (diff > 50) onSwipeRight();
            else if (diff < -50) onSwipeLeft();
        }
    };

    imgElement.addEventListener('mousedown', (e) => {
        e.preventDefault();
        onDown(e.pageX, e.pageY);
    });
    
    imgElement.addEventListener('mousemove', (e) => {
        onMove(e.pageX, e.pageY);
    });
    
    imgElement.addEventListener('mouseup', (e) => {
        onUp(e.pageX);
    });
    
    imgElement.addEventListener('mouseleave', () => {
        if (isDown) {
            isDown = false;
            imgElement.style.transition = 'transform 0.3s ease';
            imgElement.style.cursor = lightboxZoomLevel > 1 ? 'zoom-out' : 'zoom-in';
        }
    });

    imgElement.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            onDown(e.touches[0].clientX, e.touches[0].clientY);
        }
    });
    
    imgElement.addEventListener('touchmove', (e) => {
        if (e.touches.length === 1) {
            if (lightboxZoomLevel > 1) e.preventDefault(); // Prevent page scroll when zoomed in
            onMove(e.touches[0].clientX, e.touches[0].clientY);
        }
    }, { passive: false });
    
    imgElement.addEventListener('touchend', (e) => {
        if (e.changedTouches.length > 0) {
            onUp(e.changedTouches[0].clientX);
        }
    });

    imgElement.addEventListener('click', (e) => {
        e.stopPropagation();
        if (isDragging) {
            e.preventDefault();
            return;
        }
        
        const modal = document.getElementById('lightbox-modal');
        if (lightboxZoomLevel === 1) {
            lightboxZoomLevel = 2.5; 
            lightboxPanX = 0;
            lightboxPanY = 0;
            imgElement.style.cursor = 'zoom-out';
            if (modal) modal.classList.add('zoomed');
        } else {
            lightboxZoomLevel = 1;
            lightboxPanX = 0;
            lightboxPanY = 0;
            imgElement.style.cursor = 'zoom-in';
            if (modal) modal.classList.remove('zoomed');
        }
        imgElement.style.transition = 'transform 0.3s ease';
        updateTransform();
    });
}

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
    // Main image can also be swiped to change
    makeSwipeable(mainImg, nextImage, prevImage);

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

        // Make thumbnails draggable
        thumbnailsContainer.style.cursor = 'grab';
        makeDraggableScroll(thumbnailsContainer);
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
    
    const lightbox = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    if (lightbox && lightbox.classList.contains('active') && lightboxImg) {
        lightboxImg.style.opacity = 0;
    }
    
    setTimeout(() => {
        mainImg.src = currentProjectImages[currentImageIndex];
        mainImg.style.opacity = 1; // Fade in
        
        if (lightbox && lightbox.classList.contains('active') && lightboxImg) {
            lightboxImg.src = currentProjectImages[currentImageIndex];
            lightboxImg.style.opacity = 1;
            resetLightboxZoom();
        }
    }, 200);

    // Update active thumbnail
    const thumbs = document.querySelectorAll('.gallery-thumbnails .thumb');
    thumbs.forEach((t, i) => {
        if (i === index) t.classList.add('active');
        else t.classList.remove('active');
    });

    // Automatically scroll the thumbnail into view
    const thumbContainer = document.getElementById('gallery-thumbnails');
    const activeThumb = thumbs[index];
    if (activeThumb && thumbContainer) {
        // Calculate position to center the thumbnail
        const scrollLeft = activeThumb.offsetLeft - (thumbContainer.clientWidth / 2) + (activeThumb.clientWidth / 2);
        thumbContainer.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
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

function setupLightbox() {
    const lightbox = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const mainImg = document.getElementById('main-gallery-img');
    const lightboxNextBtn = document.getElementById('lightbox-next');
    const lightboxPrevBtn = document.getElementById('lightbox-prev');

    if (mainImg && lightbox) {
        mainImg.addEventListener('click', () => {
            lightboxImg.src = mainImg.src;
            lightboxImg.style.opacity = 1;
            lightbox.style.display = 'flex';
            
            // Show/hide arrows based on image count
            if (currentProjectImages.length > 1) {
                if (lightboxNextBtn) lightboxNextBtn.style.display = 'flex';
                if (lightboxPrevBtn) lightboxPrevBtn.style.display = 'flex';
            } else {
                if (lightboxNextBtn) lightboxNextBtn.style.display = 'none';
                if (lightboxPrevBtn) lightboxPrevBtn.style.display = 'none';
            }
            
            // slight delay to allow display flex to apply before opacity transition
            setTimeout(() => lightbox.classList.add('active'), 10);
        });

        const closeLightbox = () => {
            lightbox.classList.remove('active');
            resetLightboxZoom(true);
            setTimeout(() => lightbox.style.display = 'none', 300); // match CSS transition duration
        };

        if (closeBtn) {
            closeBtn.addEventListener('click', closeLightbox);
        }

        if (lightboxNextBtn) {
            lightboxNextBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // prevent closing lightbox
                nextImage();
            });
        }
        
        if (lightboxPrevBtn) {
            lightboxPrevBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // prevent closing lightbox
                prevImage();
            });
        }

        // Make lightbox image zoomable, pannable, and swipeable
        makeLightboxInteractable(lightboxImg, nextImage, prevImage);

        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg && e.target !== lightboxNextBtn && e.target !== lightboxPrevBtn) {
                closeLightbox();
            }
        });
    }
}

window.addEventListener('DOMContentLoaded', () => {
    loadProjectDetails();

    const nextBtn = document.getElementById('next-img');
    const prevBtn = document.getElementById('prev-img');

    if (nextBtn) nextBtn.addEventListener('click', nextImage);
    if (prevBtn) prevBtn.addEventListener('click', prevImage);
    
    setupLightbox();
});
