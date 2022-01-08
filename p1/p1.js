class Calculator {
        constructor(prevNumTextElement, currentNumTextElement) {
                this.prevNumTextElement = prevNumTextElement;
                this.currentNumTextElement = currentNumTextElement;
                this.clear();
        }
        clear() {
                this.prevNumOperand = '';
                this.currentNumOperand = '';
                this.operation = undefined;
                if(this.prevNumOperand != null){
                        this.prevNumTextElement.innerText = '';
                }
        }
        delete() {
                this.currentNumOperand = this.currentNumOperand.toString().slice(0, -1);
        }
        appendNumber(number) {
                if (number === "." && this.currentNumOperand.includes(".")) return
                this.currentNumOperand = this.currentNumOperand.toString() + number.toString();
        }
        chooseOperation(operation) {
                if (this.currentNumOperand === '') return
                if (this.prevNumOperand !== '') {
                        this.compute()
                }
                this.operation = operation;
                this.prevNumOperand = this.currentNumOperand
                this.currentNumOperand = '';
        }
        compute() {
                let computation;
                const prev = parseFloat(this.prevNumOperand);
                const current = parseFloat(this.currentNumOperand);
                if (isNaN(prev) || isNaN(current)) return;
                switch (this.operation) {
                        case "+":
                                computation = prev + current;
                                break;
                        case "-":
                                computation = prev - current;
                                break;
                        case "∗":
                                computation = prev * current;
                                break;
                        case "÷":
                                computation = prev / current;
                                break;
                        default:
                                return;
                }
                this.currentNumOperand = computation;
                this.operation = undefined;
                this.prevNumOperand = '';
        }
        getDisPlayNumber(number) {
                const floatNum = parseFloat(number)
                if (isNaN(floatNum)) return '';
                return floatNum.toLocaleString('en');
        }
        updateDisplay() {
                this.currentNumTextElement.innerText = `${this.getDisPlayNumber(this.currentNumOperand)}`;
                if (this.operation != null) {
                        this.prevNumTextElement.innerText = `${this.getDisPlayNumber(this.prevNumOperand)} ${this.operation}`;
                }
        }
}

function clickAudio(click){
        var audio = new Audio('audfile.mp3');
        click.addEventListener("click", () => {
                audio.play();
        })
}

const darkBtn       = document.getElementById("dark");
const lightBtn      = document.getElementById("light");
const numberBtns    = document.querySelectorAll("[data-number]");
const operationBtns = document.querySelectorAll("[data-operation]");
const equalsBtn     = document.querySelector("[data-equals]");
const delBtn        = document.querySelector("[data-delete]");
const clearBtn      = document.querySelector("[data-ac]");
const prevNum       = document.querySelector("[data-prev]");
const currentNum    = document.querySelector("[data-current]");
const calculator    = new Calculator(prevNum, currentNum);
const buttons       = document.querySelectorAll(".btn");
const add           = document.getElementById("add");
const sub           = document.getElementById("sub");
const counter         = document.getElementById("counter-output");

let count = 0;
counter.innerText = count;
add.addEventListener('click',()=>{
        count += 1;
        counter.innerText = count;
})
clickAudio(add)
sub.addEventListener('click',()=>{
        if(count === 0) return;
        count -= 1;
        counter.innerText = count;
})
clickAudio(sub)

darkBtn.addEventListener('click', () => {
        lightBtn.classList.toggle('visible')
        darkBtn.classList.toggle('hidden')
        document.body.classList.add('moon')
        buttons.forEach(button => {
                button.style.background = 'var(--button-bg-dark-mode)';
                button.style.color = 'var(--button-color-dark-mode)';
                button.style.border = 'var(--button-border-dark-mode)';
        })
        add.style.background = 'var(--button-bg-dark-mode)';
        add.style.color = 'var(--button-color-dark-mode)';
        sub.style.background = 'var(--button-bg-dark-mode)';
        sub.style.color = 'var(--button-color-dark-mode)';
})
lightBtn.addEventListener('click', () => {
        lightBtn.classList.toggle('visible')
        darkBtn.classList.toggle('hidden')
        document.body.classList.remove('moon')
        buttons.forEach(button => {
                button.style.background = 'var(--button-bg-light-mode)';
                button.style.color = 'var(--button-color-light-mode)';
                button.style.border = 'var(--button-border-light-mode)';
        })
        add.style.background = 'var(--button-bg-light-mode)';
        add.style.color = 'var(--button-color-light-mode)';
        sub.style.background = 'var(--button-bg-light-mode)';
        sub.style.color = 'var(--button-color-light-mode)';
})
buttons.forEach(button => {
        clickAudio(button)
})
numberBtns.forEach(button => {
        button.addEventListener("click", () => {
                calculator.appendNumber(button.innerText);
                calculator.updateDisplay();
        })
});
operationBtns.forEach(button => {
        button.addEventListener("click", () => {
                calculator.chooseOperation(button.innerText);
                calculator.updateDisplay();
        })
});
equalsBtn.addEventListener('click', () => {
        calculator.compute();
        calculator.updateDisplay();
})
clearBtn.addEventListener('click', () => {
        calculator.clear();
        calculator.updateDisplay();
})
delBtn.addEventListener('click', () => {
        calculator.delete();
        calculator.updateDisplay();
})

// function x(){

//         for(var i=1;i<11;i++){

//                 function close(i){       
//                         setTimeout(function(){
//                                 console.log(i)
//                         },1000*i);
//                 }
//                 close(i)
//         }
//         console.log("HELLOWORLD")
// }
// x()