let a = ''
let b = ''
let sign = ''
let result  = false;

const allNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const actions = ['-', '+', 'x', '/', '=', '+/-', '%'];

const out = document.querySelector('.calc-screen p');

function clearAll() {
    a = ''
    b = ''
    sign = ''
    result = false
    out.textContent = 0
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    if (allNumbers.includes(event.target.textContent) || actions.includes(event.target.textContent)) {
        const correctBtn = event.target.textContent

        if (correctBtn !== '+/-' && correctBtn !== '%') {
            out.textContent = ''
        }

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
            out.textContent = sign;
            
            return;
        }

        if (correctBtn === '=') {
            console.log(a, b, sign, 'часть с равно')
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