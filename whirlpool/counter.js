let count = 0;

function countUp() {
    count++;
    document.getElementById("counter").textContent = count;
}

setInterval(countUp, 1000);