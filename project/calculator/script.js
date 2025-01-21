const outputField = document.querySelector('.output');
const buttons = document.querySelectorAll('button');

let isOn = false;
let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('on-off')) {
            toggleCalculator();
        } else if (isOn) {
            handleInput(button.innerText);
        }
    });
});

function toggleCalculator() {
    isOn = !isOn;
    outputField.value = isOn ? '' : 'OFF';
    currentInput = '';
}

function handleInput(input) {
    if (input === 'C') {
        currentInput = '';
    } else if (input === '=') {
        try {
            currentInput = eval(currentInput) || '';
        } catch {
            currentInput = 'Error';
        }
    } else {
        currentInput += input;
    }
    outputField.value = currentInput;
}
