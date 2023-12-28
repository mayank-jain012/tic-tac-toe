let boxes = document.querySelectorAll(".box_contain");
let reset = document.querySelector(".reset-btn");
let newgame = document.querySelector(".newgame-btn");
let msgContainer = document.querySelector(".win-contain");
let msg = document.querySelector(".msg");
let turn0 = true;
let count = 0;
const matchingPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 6],
    [6, 7, 8]
]
const resetGame = () => {
    turn0 = true;
    count = 0;
    enabledBoxes();
    msg.classList.add("hide");
}
const drawMatch = () => {
    msg.innerText = "Game is Draw"
    diabledBoxes();
    msg.classList.remove("hide");
}
boxes.forEach((box_contain) => {
    box_contain.addEventListener("click", () => {

        if (turn0) {
            box_contain.innerText = "0"
            turn0 = false
        } else {
            box_contain.innerText = "X"
            turn0 = true
        }
        box_contain.disabled = true
        count++;
        let isWinner = checkWinner();
        if (count == 9 && !isWinner) {
            drawMatch();
        }
    })
})
const diabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`
    msg.classList.remove("hide");
    diabledBoxes();
}
const checkWinner = () => {
    for (let pattern of matchingPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos1Va2 = boxes[pattern[1]].innerText;
        let pos1Va3 = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos1Va2 != "" && pos1Va3 != "") {
            if (pos1Val === pos1Va2 && pos1Va2 === pos1Va3) {
                showWinner(pos1Val);
                return true;
            }
        }
    }
}
reset.addEventListener("click",resetGame);
newgame.addEventListener("click",resetGame);