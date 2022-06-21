

const boxes = document.querySelectorAll(".box");
const winningMessage = document.getElementById("winningMessage");
const reset = document.getElementById("reset");

let gameOn = false;


const initGame = () => {
  boxes.forEach(box => box.addEventListener("click", boxClicked))
  reset.addEventListener("click", resetGame);
 winningMessage.textContent = `${currentPlayer} turn`
 gameOn = true

}

const winningCombos = [
       [0, 1, 2],
       [3, 4, 5],
       [6, 7, 8],
       [0, 3, 6],
       [1, 4, 7],
       [2, 5, 8],
       [0, 4, 8],
       [2, 4, 6]
 ];

let sqrArray = ["null", "null", "null", "null", "null", "null", "null", "null", "null"];
let currentPlayer = "X";



function boxClicked () {
  const boxIndex = this.getAttribute("boxIndex");

  if(sqrArray[boxIndex] != "" || !gameOn){
    return;
  }
  updatebox(this, boxIndex);
  checkWinner()

}

const updatebox = (box, index) => {
  sqrArray[index] = currentPlayer;
  box.textContent = currentPlayer;
}
const switchTurn = () => {
  currentPlayer = (currentPlayer === "X") ? "O" : "X";
  winningMessage.textContent = `${currentPlayer} turn`;

}

const checkWinner = () => {
   let matchWon = false;
  
   for (let i = 0; i < winningCombos.length; i++){
     const combos = winningCombos[i];
     const boxA = sqrArray[combos[0]];
     const boxB = sqrArray[combos[1]];
     const boxC = sqrArray[combos[2]];

     if (boxA === "" || boxB === "" || boxC === "") {
      continue;
     }
     if (boxA === boxB && boxB === boxC) {
      matchWon = true;
       
     }
  
   }
   
   if (matchWon) {
     winningMessage.textContent = `${currentPlayer} wins!`
     gameOn = false;
   } 
   else if (!sqrArray.includes("")) {
     winningMessage.textContent = `Tie!`;
     gameOn = false
 
   } 
   else {
       switchTurn();
   }
}

const resetGame = () => {
  currentPlayer = "X";
  sqrArray = ["", "", "", "", "", "", "", "", ""];
  winningMessage.textContent = `${currentPlayer} turn`;
  boxes.forEach(box => box.textContent = "");
  gameOn = true;
}
initGame();

