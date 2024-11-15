function sortProjectsChronological() {
    const order = document.getElementById('sort-order').value;
    const projects = Array.from(document.querySelectorAll('.project'));
    
    projects.sort((a, b) => {
        const dateA = new Date(a.getAttribute('data-date'));
        const dateB = new Date(b.getAttribute('data-date'));
        return order === 'latest' ? dateB - dateA : dateA - dateB;
    });
    
    const container = document.querySelector('.content-section');
    projects.forEach(project => container.appendChild(project));
}

window.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.querySelector('#sort-order'); // Selects the <select> element with id "sort-order"
    selectElement.value = 'latest';
    sortProjectsChronological();
});
