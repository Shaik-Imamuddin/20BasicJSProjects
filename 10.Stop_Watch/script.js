let minutes = 0, seconds = 0, milliseconds = 0;
let interval;
let isRunning = false;

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(updateTime, 10);
    }
}

function stopStopwatch() {
    isRunning = false;  
}

function resetStopwatch() {
    stopStopwatch();
    minutes = seconds = milliseconds = 0;
    updateDisplay();
}

function updateTime() {
    if (!isRunning) return;  

    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    updateDisplay();
}

function formatNumber(num) {
    return num < 10 ? "0" + num : num;  
}

function updateDisplay() {
    document.getElementById("minutes").textContent = formatNumber(minutes);
    document.getElementById("seconds").textContent = formatNumber(seconds);
    document.getElementById("milliseconds").textContent = formatNumber(milliseconds / 10);
}
