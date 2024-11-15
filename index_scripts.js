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
