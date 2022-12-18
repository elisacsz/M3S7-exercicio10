//setInterval
function printNumbers(from, to) {
    let current = from;

    let timerId = setInterval(function () {
        alert(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++
    }, 1000)
}

printNumbers(5, 10);

//setTimeout

function printNumbersTimeout(from, to) {
    let current = from;

    setTimeout(function go() {
        alert(current);
        if (current < to) {
            setTimeout(go, 1000);
        }
        current++
    }, 1000)
}

printNumbersTimeout(5, 10);