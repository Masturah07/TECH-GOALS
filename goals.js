function displayCurrentTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    document.querySelector('[data-testid="currentTimeUTC"]').innerText = utcTime;
}

// Function to display current day of the week
function displayCurrentDay() {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[now.getUTCDay()];
    document.querySelector('[data-testid="currentDay"]').innerText = currentDay;
}

// Call functions to display time and day
displayCurrentTime();
displayCurrentDay();

// Update time every second
setInterval(displayCurrentTime, 1000);