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

const currentDate = new Date();
const year = currentDate.getFullYear();

 document.getElementById('currentYear').textContent = year;
// Get the down arrow element
const downArrow = document.getElementById('down-arrow');

// Show the down arrow
downArrow.style.display = 'block';

// Set a timer to hide the down arrow after 2 seconds
setTimeout(() => {
  downArrow.style.display = 'none';
}, 4000);


// Function to handle scroll events
function handleScroll(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      
      // Check if the element is completely visible
      if (entry.intersectionRatio >= 1) {
        // Element is completely visible, reset or re-observe as needed
        // Example: observer.observe(entry.target); // Re-observe the element
        console.log("Element is completely visible, reset or re-observe here.");
      } else {
        observer.unobserve(entry.target); // Stop observing once animated
      }
    }
  });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(handleScroll, {
  root: null, // Use the viewport as the root
  rootMargin: '0px', // No margin
  threshold: 0.2, // Trigger when 20% of the element is visible
});

// Select all list items and observe each of them
const listItems = document.querySelectorAll('li');
listItems.forEach((item) => {
  observer.observe(item);
});




const tbody = document.querySelector("tbody");
const tr = document.querySelectorAll("tr");
const td = document.querySelectorAll("td");
const votersImage = document.getElementsByClassName("votersimage");
const search = document.querySelector("input");

search.addEventListener("keyup", function () {
  const searchTerm = search.value.toLowerCase();
  console.log(searchTerm);

  tr.forEach((trElement) => {
    const tdText = trElement.textContent.toLowerCase();
    console.log(tdText);

    if (searchTerm === "") {
      // If the search term is empty, remove styles
      trElement.style.display = "";
      trElement.style.justifyContent = "";
      trElement.style.width = "";
    } else if (tdText.includes(searchTerm)) {
      trElement.style.display = "flex";
      trElement.style.justifyContent = "space-around";
      trElement.style.width = "100%";
    } else {
      trElement.style.display = "none";
    }
  });
});
