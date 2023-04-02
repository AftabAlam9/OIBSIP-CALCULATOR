let currentInput = document.querySelector('.currentInput');
let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');

let realTimeScreenValue = []

clearbtn.addEventListener("click", () => {

    realTimeScreenValue = [''];
    screen.innerHTML = 0;
    currentInput.className = 'currentInput'
    screen.className = 'screen';
    screen.style.color = " rgba(150, 150, 150, 0.87)";
})

buttons.forEach((btn) => {

    btn.addEventListener("click", () => {
        
        if (!btn.id.match('erase')) {
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join('');

            if (btn.classList.contains('num_btn')) {
                screen.innerHTML = eval(realTimeScreenValue.join(''));
            }

        }

        if (btn.id.match('erase')) {
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            screen.innerHTML = eval(realTimeScreenValue.join(''));
        }

        if (btn.id.match('evaluate')) {
            currentInput.className = 'screen';
            screen.className = 'currentInput';
            screen.style.color = "white";
        }

        if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
            screen.innerHTML = 0
        }

    })
})