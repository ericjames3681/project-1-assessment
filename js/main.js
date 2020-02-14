document.getElementById('plus').addEventListener('click', add);
document.getElementById('minus').addEventListener('click', subtract);

var oldNum = document.getElementById('current')
var userNum = document.getElementById('input');

function add () {
    if (isNaN(parseInt(userNum.value))) {
        userNum.value = 0;
    }
    var newNum;
    newNum = parseInt(oldNum.innerText) + parseInt(userNum.value);
    oldNum.innerText = newNum;
    if (newNum >= 0) {
        oldNum.style.color = 'black';
    }
}

function subtract () {
    if (isNaN(parseInt(userNum.value))) {
        userNum.value = 0;
    }
    var newNum;
    newNum = parseInt(oldNum.innerText) - parseInt(userNum.value);
    if (newNum < 0) {
        oldNum.style.color = 'red';
    }
    oldNum.innerText = newNum;
}