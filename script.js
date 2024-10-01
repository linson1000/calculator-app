let themeBtn = document.getElementById('theme-btn');
let historyBtn = document.getElementById('history-btn');
let historyList = document.getElementById('history-list');
let resultDisplay = document.getElementById('result');
let history = [];

let currentExpression = '';

document.querySelectorAll('.num').forEach(button => {
    button.addEventListener('click', () => {
        resultDisplay.value += button.innerText;
        currentExpression += button.innerText;
    });
});

document.querySelectorAll('.sign').forEach(button => {
    button.addEventListener('click', () => {
        let sign = button.innerText;
        if (sign === 'C') {
            resultDisplay.value = '';
            currentExpression = '';
        } else if (sign === '←') {
            resultDisplay.value = resultDisplay.value.slice(0, -1);
            currentExpression = currentExpression.slice(0, -1);
        } else if (sign === '=') {
            try {
                let result = eval(currentExpression);
                resultDisplay.value = result;
                history.push(`${currentExpression} = ${result}`);
                currentExpression = result;
            } catch (error) {
                resultDisplay.value = 'Error';
            }
        } else {
            resultDisplay.value += sign;
            currentExpression += sign;
        }
    });
});

historyBtn.addEventListener('click', () => {
    historyList.innerHTML = '';
    history.forEach(item => {
        let listItem = document.createElement('li');
        listItem.innerText = item;
        historyList.appendChild(listItem);
    });
    historyList.style.display = historyList.style.display === 'none' ? 'block' : 'none';
});

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});
