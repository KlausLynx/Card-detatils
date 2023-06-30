const first = document.getElementById('main');
const second = document.getElementById('Thanks');
const nameNotice = document.getElementById('demo');
const numberNotice = document.getElementById('demo1');
const monthNotice = document.getElementById('demo2');
const yearNotice = document.getElementById('demo3');
const codeNotice = document.getElementById('demo4');
second.style.display = "none";

function validateName() {
    const cardName = document.getElementById('name').value;
    if(cardName.length === 0) {
        nameNotice.style.display = 'flex';
        nameNotice.style.color = 'red';
        return false;
    }
    if(!cardName.match(/^[A-Za-z]*\s?[A-Za-z]*$/)){
        nameNotice.style.display = 'flex';
        nameNotice.textContent = 'Invalid Name';
        nameNotice.style.color = 'red';
        return false;
    }
    nameNotice.style.display = 'none';
    return true
}

function validateNumber() {
    const cardNum = document.getElementById('number').value;
    if(cardNum.length === 0) {
        numberNotice.style.display = 'flex';
        numberNotice.style.color = 'red';
        return false
    } else if(!cardNum.match(/^[0-9]+/)) {
        numberNotice.style.display = 'flex';
        numberNotice.textContent = 'Numbers please';
        nameNotice.style.color = 'red';
        return false
    } else if(cardNum.match(/\d+([A-Za-z])+/)) {
        numberNotice.style.display = 'flex';
        numberNotice.textContent = 'Wrong format, numbers only';
        nameNotice.style.color = 'red';
        return false
    }
    numberNotice.style.display = 'none';
    return true
}

function validateMonth() {
    const cardMonth = document.getElementById('month').value
    if(cardMonth.length === 0) {
        monthNotice.style.display = 'flex';
        monthNotice.style.color = 'red';
        return false
    }
    if(!cardMonth.match(/^[\d]+$/)){
        console.log('get out')
        return false
    }
    if(cardMonth > 12){
        console.log('get lost')
        return false
    }
    monthNotice.style.display = 'none';
    return true
}

function validateYear() {
    const cardYear = document.getElementById('year').value;
    if(cardYear.length === 0) {
        yearNotice.style.display = 'flex';
        yearNotice.style.color = 'red';
        return false
    }
    if(cardYear.length > 4){
        yearNotice.style.display = 'flex';
        yearNotice.textContent = 'Invalid year';
        yearNotice.style.color = 'red';
        return false
    }
    if(cardYear < 2023){
        yearNotice.style.display = 'flex';
        yearNotice.textContent = 'Year shouldn\'t be in the past';
        yearNotice.style.color = 'red';
        yearNotice.style.fontSize = '14px';
        return false
    }
    yearNotice.style.display = 'none';
    return true
}

function validateCode() {
    const cardCode = document.getElementById('code').value;
    if(cardCode.length === 0) {
        codeNotice.style.display = 'flex';
        codeNotice.textContent = 'Code can\'t be empty';
        codeNotice.style.color = 'red';
        codeNotice.style.marginBottom = '1.2rem';
        return false
    }
    if(cardCode.length > 3 || cardCode.length < 3) {
        codeNotice.style.display = 'flex';
        codeNotice.textContent = 'Invalid Code';
        codeNotice.style.color = 'red';
        return false
    }
    if(!cardCode.match(/^\d{3}$/)){
        console.log('get out')
        return false
    }
    codeNotice.style.display = 'none';
    return true
}

function validateCard () {
    if(!validateName() && !validateNumber() && !validateMonth() && !validateYear() && !validateCode()) {
        setTimeout(function() {
            nameNotice.style.display = 'none'
            numberNotice.style.display = 'none'
            monthNotice.style.display = 'none'
            yearNotice.style.display = 'none'
            codeNotice.style.display = 'none'
        }, 2000);
        return false;
    }
    if(!validateName() || !validateNumber() || !validateMonth() || !validateYear() || !validateCode()) {
        setTimeout(function() {
            nameNotice.style.display = 'none'
            numberNotice.style.display = 'none'
            monthNotice.style.display = 'none'
            yearNotice.style.display = 'none'
            codeNotice.style.display = 'none'
        }, 2000);
        return false;
    }
    first.style.display = 'none'
    second.style.display = 'flex'
    return true
}