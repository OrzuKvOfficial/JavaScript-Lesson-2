// main.js
function rejimOzgartir() {
    var tugma = document.getElementById("rejimTugma");
    var body = document.body;

    if (tugma.innerText === "Kunduzgi Rejim") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        tugma.innerText = "Tungi Rejim";
        tugma.style.backgroundColor = "#222"; 
        tugma.style.color = "white";
        tugma.style.border = "none";
        tugma.style.borderRadius = "10px";
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        tugma.innerText = "Kunduzgi Rejim";
        tugma.style.backgroundColor = "#4CAF50"; 
        tugma.style.color = "white";
        tugma.style.border = "none";
        tugma.style.borderRadius = "10px";
    }
}

function ochishNarsalar() {

    document.getElementById("asosiy-narsalar").style.display = "block";
}


var parol = prompt("Iltimos, parolni kiriting:");


if (parol === "Orzu") {
    ochishNarsalar();
} else {

    alert("Parol noto'g'ri. Kirishga ruxsat bermaymiz!");
}



let displayValue = '';


document.getElementById('clearBtn').addEventListener('click', clearDisplay);


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


document.getElementById('equalBtn').addEventListener('click', calculateResult);


document.getElementById('squareBtn').addEventListener('click', square);

document.getElementById('sqrtBtn').addEventListener('click', sqrt);


function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}


function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}


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


function square() {
    displayValue = Math.pow(parseFloat(displayValue), 2);
    document.getElementById('display').value = displayValue;
}

function sqrt() {
    displayValue = Math.sqrt(parseFloat(displayValue));
    document.getElementById('display').value = displayValue;
}
