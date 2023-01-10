let a = ''
let b = ''
let sign = ''
let result  = false;
let lastBtn = ''

const allNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const actions = ['-', '+', 'x', '/', '=', '+/-', '%'];

const out = document.querySelector('.calc-screen p');

function clearAll() {
    a = ''
    b = ''
    sign = ''
    result = false
    out.textContent = 0
    if (lastBtn !== '' && lastBtn !== event.target) {
        lastBtn.style.color = '#fff'
        lastBtn.style.backgroundColor = '#ff9501'

        lastBtn = ''
    }
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    if (allNumbers.includes(event.target.textContent) || actions.includes(event.target.textContent)) {
        const correctBtn = event.target.textContent

        if (allNumbers.includes(correctBtn)) {
            if (a === '' || sign === '') {
                a += correctBtn

                out.textContent = a
            } else if (a !== '' && b !== '' && result) {
                b = correctBtn
                result = false
                out.textContent = b
            } else {
                b += correctBtn

                out.textContent = b
            }
        }

        if (actions.includes(correctBtn) && correctBtn !== '=' && correctBtn !== '+/-' && correctBtn !== '%') {
            event.target.style.backgroundColor = '#fff'
            event.target.style.color = '#ff9501'

            console.log(out.textContent, 'часть со содержимым')

            if (lastBtn !== '' && lastBtn !== event.target) {
                lastBtn.style.color = '#fff'
                lastBtn.style.backgroundColor = '#ff9501'

                lastBtn = event.target
            } else {
                lastBtn = event.target
            }

            if (a === '') {
                a = 0
            }

            if (b !== '') {
                let result
    
                if (sign === '+') {
                    result = +a + +b
                }
    
                if (sign === '-') {
                    result = +a - +b
                }
    
                if (sign === 'x') {
                    result = +a * +b
                }
    
                if (result === '/') {
                    result = +a / +b
                }

                a = +result
                b = ''
            }
            sign = correctBtn;
            console.log(a, b, 'часть со знаком')
            
            return;
        }

        if (correctBtn === '=') {
            if (a === '') {
                a = 0
            }

            console.log(a, b, sign, 'сто двадцать')

            if (b === '') {
                b = +a
            }

            if (sign === '+') {
                a = +a + +b
            }

            if (sign === '-') {
                a = +a - +b
            }

            if (sign === 'x') {
                a = +a * +b
            }

            if (sign === '/') {
                a = +a / +b
            }

            result = true
            out.textContent = a

            if (lastBtn !== '' && lastBtn !== event.target) {
                lastBtn.style.color = '#fff'
                lastBtn.style.backgroundColor = '#ff9501'

                lastBtn = ''
            }
        
            console.log(a, b, sign, 'часть с равно')
        }

        if (correctBtn === '+/-') {
            if (+a === +out.textContent) {
                a = -a
                out.textContent = a
            } else if (b !== '') {
                b = -b
                out.textContent = b
            }
        }

        if (correctBtn === '%') {
            if (+a === +out.textContent) {
                a = +a / 100
                out.textContent = a
            }
            if (+b === +out.textContent) {
                b = +a * +b / 100
                out.textContent = b
            }
        }
    }
}