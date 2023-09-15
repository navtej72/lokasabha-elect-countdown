function updateCountdown() {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        // You can add any action you want when the countdown reaches 0 here
        document.getElementById('countdown').textContent = 'Time is up!';
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }
}

const targetDate = new Date('2024-03-30T00:00:00');

let countdownInterval = setInterval(updateCountdown, 1000);

// Initial update
updateCountdown();


// Get the down arrow element
const downArrow = document.getElementById('down-arrow');

// Show the down arrow
downArrow.style.display = 'block';

// Set a timer to hide the down arrow after 2 seconds
setTimeout(() => {
  downArrow.style.display = 'none';
}, 4000);
