// main.js
function rejimOzgartir() {
    var tugma = document.getElementById("rejimTugma");
    var body = document.body;

    if (tugma.innerText === "Kunduzgi Rejim") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        tugma.innerText = "Tungi Rejim";
        tugma.style.backgroundColor = "#222"; /* Tungi rang */
        tugma.style.color = "white";
        tugma.style.border = "none";
        tugma.style.borderRadius = "10px";
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        tugma.innerText = "Kunduzgi Rejim";
        tugma.style.backgroundColor = "#4CAF50"; /* Qizil rang */
        tugma.style.color = "white";
        tugma.style.border = "none";
        tugma.style.borderRadius = "10px";
    }
}
// Asosiy ekran narsalarni ochish funktsiyasi
function ochishNarsalar() {
    // Bu funksiya sizning asosiy narsalarni ochish loyihangizni amalga oshiradi
    // Masalan:
    document.getElementById("asosiy-narsalar").style.display = "block";
}

// Foydalanuvchidan parolni so'rang
var parol = prompt("Iltimos, parolni kiriting:");

// Agar parol to'g'ri bo'lsa, asosiy narsalarni ochish funktsiyasini chaqiring
if (parol === "sizningparolingiz") {
    ochishNarsalar();
} else {
    // Aks holda, foydalanuvchiga kirishni rad etish xabari chiqariladi
    alert("Parol noto'g'ri. Kirishga ruxsat bermaymiz!");
}


// Displaying the current value
let displayValue = '';

// Clearing the display
document.getElementById('clearBtn').addEventListener('click', clearDisplay);

// Appending the numbers and symbols to the display
document.getElementById('sevenBtn').addEventListener('click', function() { appendToDisplay('7'); });
document.getElementById('eightBtn').addEventListener('click', function() { appendToDisplay('8'); });
document.getElementById('nineBtn').addEventListener('click', function() { appendToDisplay('9'); });
document.getElementById('fourBtn').addEventListener('click', function() { appendToDisplay('4'); });
document.getElementById('fiveBtn').addEventListener('click', function() { appendToDisplay('5'); });
document.getElementById('sixBtn').addEventListener('click', function() { appendToDisplay('6'); });
document.getElementById('minusBtn').addEventListener('click', function() { appendToDisplay('-'); });
document.getElementById('oneBtn').addEventListener('click', function() { appendToDisplay('1'); });
document.getElementById('twoBtn').addEventListener('click', function() { appendToDisplay('2'); });
document.getElementById('threeBtn').addEventListener('click', function() { appendToDisplay('3'); });
document.getElementById('plusBtn').addEventListener('click', function() { appendToDisplay('+'); });
document.getElementById('zeroBtn').addEventListener('click', function() { appendToDisplay('0'); });
document.getElementById('dotBtn').addEventListener('click', function() { appendToDisplay('.'); });
document.getElementById('multiplyBtn').addEventListener('click', function() { appendToDisplay('*'); });
document.getElementById('divideBtn').addEventListener('click', function() { appendToDisplay('/'); });

// Calculating the result
document.getElementById('equalBtn').addEventListener('click', calculateResult);

// Squaring the current value
document.getElementById('squareBtn').addEventListener('click', square);

// Calculating the square root of the current value
document.getElementById('sqrtBtn').addEventListener('click', sqrt);

// Function to append value to display
function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

// Function to clear the display
function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

// Function to calculate the result
function calculateResult() {
    let result;
    try {
        result = eval(displayValue);
        if (result === Infinity) {
            result = 'Error: Division by zero';
        }
    } catch (error) {
        result = 'Error';
    }
    document.getElementById('display').value = result;
    displayValue = '';
}

// Function to square the current value
function square() {
    displayValue = Math.pow(parseFloat(displayValue), 2);
    document.getElementById('display').value = displayValue;
}

// Function to calculate the square root of the current value
function sqrt() {
    displayValue = Math.sqrt(parseFloat(displayValue));
    document.getElementById('display').value = displayValue;
}
