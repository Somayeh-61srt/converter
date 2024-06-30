let $ = document

let cSpan = $.querySelector('.c')
let fSpan = $.querySelector('.f')
let inputElem = $.querySelector('input')
let result = $.querySelector('.result')
let convertBtn = $.querySelector('.convert')
let resetBtn = $.querySelector('.reset')
let swapBtn = $.querySelector('.swap')


function convertfunc() {
    if (inputElem.value === '' || isNaN(inputElem.value)) {
        result.innerHTML = 'Enter a number'
        result.style.color = 'red'
    } else {
        if (cSpan.innerHTML === '°C') {
            let inputCal = (inputElem.value * 9) / 5 + 32
            result.innerHTML = 'The result is ' + inputCal
            result.style.color = 'lightgreen'
        } else {
            let inputCal = (inputElem.value - 32) * 5 / 9
            result.innerHTML = 'The result is ' + inputCal.toFixed(3)
            result.style.color = 'lightgreen'
        }

    }

}
function resetfunc() {
    inputElem.value = ''
    result.innerHTML = ''
}
function swapfunc() {
    if (cSpan.innerHTML === '°C') {
        cSpan.innerHTML = '°F'
        fSpan.innerHTML = '°C'
        inputElem.setAttribute('placeholder', '°F')
        document.title = 'Convert °F to °C'
    } else {
        cSpan.innerHTML = '°C'
        fSpan.innerHTML = '°F'
        inputElem.setAttribute('placeholder', '°C')
        document.title = 'Convert °C to °F'
    }
}



convertBtn.addEventListener('click', convertfunc)
resetBtn.addEventListener('click', resetfunc)
swapBtn.addEventListener('click', swapfunc)
