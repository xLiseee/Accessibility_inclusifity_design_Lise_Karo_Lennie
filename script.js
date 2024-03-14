const correctPin = ['red', 'blue', 'green', 'yellow'];
let enteredPin = [];

function enterPin(color) {
    enteredPin.push(color);
    updatePinIndicator();
    if (enteredPin.length === correctPin.length) {
        if (JSON.stringify(enteredPin) === JSON.stringify(correctPin)) {
            window.location.href = 'succes.html';
        } else {
            document.getElementById('error-msg').innerText = '✖ Incorrect PIN, try again.';
            enteredPin = [];
            setTimeout(updatePinIndicator, 1000); // Reset pin indicators after 1 second
        }
    }
}

function updatePinIndicator() {
    const pinIndicators = document.querySelectorAll('.pin-indicator');
    pinIndicators.forEach((indicator, index) => {
        if (index < enteredPin.length) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

