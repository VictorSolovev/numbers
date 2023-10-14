function generateRandom() {
    var min = parseInt(document.getElementById('minValue').value);
    var max = parseInt(document.getElementById('maxValue').value);

    if (isNaN(min) || isNaN(max) || min >= max) {
        alert('Please enter valid min and max values where min is less than max.');
        return;
    }

    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('result').innerText = 'Random Number: ' + random;
}
