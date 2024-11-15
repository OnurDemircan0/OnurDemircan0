// update date and time dynamically
function updateDateTime() {
    const dateElement = document.getElementById("date");
    const today = new Date();

    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months starts from zero so we add 1
    const year = String(today.getFullYear()).slice(-2);
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    const seconds = String(today.getSeconds()).padStart(2, '0');

    // Set up different backgrounds and styles
    dateElement.innerHTML = `
        <div class="datetime-container">
        <div class="date-container">
            <span class="date-part day">${day}</span>
            <span class="separator">/</span>
            <span class="date-part month">${month}</span>
            <span class="separator">/</span>
            <span class="date-part year">${year}</span>
        </div>
        <div class="time-container">
            <span class="date-part hours">${hours}</span>
            <span class="separator">:</span>
            <span class="date-part minutes">${minutes}</span>
            <span class="separator">:</span>
            <span class="date-part seconds">${seconds}</span>
        </div>
        </div>
    `;

    setInterval(updateDateTime, 1000); // 60000 ms = 1 minute

    updateDateTime();
}

window.addEventListener('DOMContentLoaded', () => {
    updateDateTime();
});

function mailSent() {
    alert('Mesajınız gönderildi!');
    return true;
}



/*About********************************/
function showMore() {
    document.getElementById('fullText').style.display = 'block';
    document.getElementById('moreLink').style.display = 'none';
    document.getElementById('lessLink').style.display = 'block';
}

function showLess() {
    document.getElementById('fullText').style.display = 'none';
    document.getElementById('lessLink').style.display = 'none';
    document.getElementById('moreLink').style.display = 'block';
}





/*Projects**************************************/
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
