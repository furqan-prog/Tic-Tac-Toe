const boxes = document.querySelectorAll('.box')
const mainBox = document.getElementsByClassName('grid-container')
const newGameBtn = document.querySelector('.newGameButton')
let turnHeading = document.querySelector('.turn')
let msgContainer = document.querySelector('.msg-container')
let winnerMsg = document.querySelector('#msg')

let turn0 = true
console.log(boxes);
const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];



boxes.forEach((element) => {
    element.addEventListener('click', () => {
        if (turn0) {
            element.innerText = '0';
            turn0 = false;
            turnHeading.innerText = 'Turn Of X'
        }
        else {
            turnHeading.innerText = 'Turn Of 0'
            element.innerText = 'X';
            turn0 = true;
        }
        element.disabled = true;
        checkWinner()
        

    });
});

const gameOver = () => {
    for (let box of boxes) {
        box.disabled = true
    }
}

const showWinner = (winner) => {
    winnerMsg.innerText = `CONGRAT'S WINNER IS ${winner}`;
    msgContainer.classList.remove('hide')
     turnHeading.innerText = 'Game is Over'
}


const checkWinner = () => {
    for (let pattern of winningPatterns) {

        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText

        if (pos1Val != '' && pos2Val != '' && pos3Val != '') {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log('winner', pos1Val)
                showWinner(pos1Val)
                gameOver()
                newGameBtn.addEventListener('click', () =>{
                    for (let box of boxes) {
                        box.disabled = false
                        box.innerText = ''
                        msgContainer.classList.add('hide')
                        turnHeading.innerText = 'Turn Of 0';
                        turn0 = true
                    }
                });
            }
        }
    }
}

