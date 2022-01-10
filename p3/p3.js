const cell = document.querySelectorAll('[data-cell]')
const winningMsg = document.getElementById("winning-message")
const restartBtn = document.querySelector('#restart-btn')
const winningData = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
]
let circleTurn

function restartGame(){
        winningMsg.classList.toggle("hidden")
        cell.forEach( x=>{
                x.classList.remove('x')
                x.classList.remove('o')
        })
}
function handleClick(e){
                if(e.target.classList.contains('x') || e.target.classList.contains('o')){
                        return
                }
                else{
                        circleTurn = !circleTurn
                        circleTurn?e.target.classList.add("o"):e.target.classList.add("x")     
                        console.log(circleTurn)
                }
                
}

cell.forEach(x =>{
        x.addEventListener('click',handleClick)
})
restartBtn.addEventListener("click",restartGame)
