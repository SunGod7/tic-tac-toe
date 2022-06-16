// // //  const cells = Array.from(Document.getElementsByClassName(cell")); 
// // // console.log( cells");







// // const playText = document.getElementById("platText");



// // const boxes = [null, null, null, null, null, null, null, null, null]
// // //  const playerOne 
// // //  const playerTwo =


// // //  cells.forEach() => addEventListener("click",cellClicked); //calling function celled clicked

// // //  //define function
  
 
  

// // //$$$$$$$$$$$$$$
// // // mark cells with x or 0
// // //check pattern for win 
// // //check for tie

// // const cells = document.querySelectorAll(".cell");
// // let playerOne = true;
// // let currentPlayer = playerOne


// // function startGame() {
// //  cells.forEach(cell=>{
// //     cell.addEventListener("click", executeGame,{once:true});//one click per cell

// //     }) 
// // }
// // function executeGame() {
// //     this.innerText =  playerOne?"X" :"0"; // if not true =0
// //     playerOne=!playerOne; ///  false
// // }

// // startGame();



// // ////// winning combos

// // //const playerHasWon = ( ) => {
// //   //if(boxes[0] === currentPlayer){
// //     //   if(boxes[1] === currentPlayer && boxes[2] === player) {
// //          //  console.log(`${currentPlayer} wins up top.`);
// //            //return true;
// //       // }
// //       //if(boxes[3] === currentPlayer && boxes[6] === player) {
// //         //   console.log(`${currentPlayer} wins on the left.`);
// //           // return true;
// //        //}
// //       //if(boxes[4] === currentPlayer && boxes[8] === player) {
// //         //   console.log(`${currentPlayer} wins  diagonal.`);
// //           // return true;
// //        //}
// //      //}

// //     //}   
// //     //if(boxes[8] === currentPlayer){
// //       //if(boxes[5] === currentPlayer && boxes[2] === player) {
// //         //console.log(`${currentPlayer} wins on right.`);
// //         //return true;
// //     //}
// //       //  if(boxes[7] === currentPlayer && boxes[6] === player) {
// //         //console.log(`${currentPlayer} wins on bottom.`);
// //         //return true;
// //       //}   
// //    //}        if(boxes[4] === currentPlayer) {
// //      //  if(boxes[5] === currentPlayer && boxes[3] === player) {
// //        //    console.log(`${currentPlayer} wins on the left.`);
// //         //}
// //         //if(boxes[7] === currentPlayer && boxes[6] === player){
// //         // console.log(`${currentPlayer} wins on the left.`);
// //          //return true;         }
// //     //}
// //  //}




// const X_CLASS = 'x'
// const CIRCLE_CLASS = 'circle'
// const WINNING_COMBINATIONS = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ]
   const cellElements = document.getElementsByClassName('[cell]')
// const board = document.getElementById('board')
// const winningMessageElement = document.getElementById('winningMessage')
// const resetButton = document.getElementById('resetButton')
// const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
// let circleTurn

// startGame()

// restartButton.addEventListener('click', startGame)

// function startGame() {
//   circleTurn = false
//   cellElements.forEach(cell => {
//     cell.classList.remove(X_CLASS)
//     cell.classList.remove(CIRCLE_CLASS)
//     cell.removeEventListener('click', handleClick)
//     cell.addEventListener('click', handleClick, { once: true })
//   })
//   setBoardHoverClass()
//   winningMessageElement.classList.remove('show')
// }

// function handleClick(e) {
//   const cell = e.target
//   const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
//   placeMark(cell, currentClass)
//   if (checkWin(currentClass)) {
//     endGame(false)
//   } else if (isDraw()) {
//     endGame(true)
//   } else {
//     swapTurns()
//     setBoardHoverClass()
//   }
// }

// function endGame(draw) {
//   if (draw) {
//     winningMessageTextElement.innerText = 'Draw!'
//   } else {
//     winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
//   }
//   winningMessageElement.classList.add('show')
// }

// function isDraw() {
//   return [...cellElements].every(cell => {
//     return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
//   })
// }

// function placeMark(cell, currentClass) {
//   cell.classList.add(currentClass)
// }

// function swapTurns() {
//   circleTurn = !circleTurn
// }

// function setBoardHoverClass() {
//   board.classList.remove(X_CLASS)
//   board.classList.remove(CIRCLE_CLASS)
//   if (circleTurn) {
//     board.classList.add(CIRCLE_CLASS)
//   } else {
//     board.classList.add(X_CLASS)
//   }
// }

// function checkWin(currentClass) {
//   return WINNING_COMBINATIONS.some(combination => {
//     return combination.every(index => {
//       return cellElements[index].classList.contains(currentClass)
//     })
//   })
// }
