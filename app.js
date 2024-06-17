let balance = 38446.50;
let countdownTimer;
let currentPeriod = 20220506243;

function recharge() {
    // Recharge logic
    alert('Recharge functionality is not implemented yet.');
}

function readRule() {
    // Read rule logic
    alert('Rule reading functionality is not implemented yet.');
}

function startCountdown() {
    let countdownElement = document.getElementById('countdown');
    let time = 128; // in seconds
    countdownTimer = setInterval(() => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        countdownElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        time--;
        if (time < 0) {
            clearInterval(countdownTimer);
            // Logic to calculate and display result
            alert('Time is up! Calculating result...');
        }
    }, 1000);
}

function join(color) {
    // Join logic for green, violet, or red
    alert(`Joined ${color}`);
}

function updateHistory(period, price, number, result) {
    let historyTable = document.getElementById('history');
    let row = document.createElement('tr');
    row.innerHTML = `<td>${period}</td><td>${price}</td><td>${number}</td><td>${result}</td>`;
    historyTable.appendChild(row);
}

// Initialize the game
startCountdown();
