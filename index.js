//  const cells = Array.from(Document.getElementsByClassName(cell")); 
// console.log( cells");







const playText = document.getElementById("platText");



const boxes = [null, null, null, null, null, null, null, null, null]
//  const playerOne 
//  const playerTwo =


//  cells.forEach() => addEventListener("click",cellClicked); //calling function celled clicked

//  //define function
  
 
  

//$$$$$$$$$$$$$$
// mark cells with x or 0
//check pattern for win 
//check for tie

const cells = document.querySelectorAll(".cell");
let playerOne = true;
let currentPlayer = playerOne


function startGame() {
 cells.forEach(cell=>{
    cell.addEventListener("click", executeGame,{once:true});//one click per cell

    }) 
}
function executeGame() {
    this.innerText =  playerOne?"X" :"0"; // if not true =0
    playerOne=!playerOne; ///  false
}

startGame();



////// winning combos

//const playerHasWon = ( ) => {
  //if(boxes[0] === currentPlayer){
    //   if(boxes[1] === currentPlayer && boxes[2] === player) {
         //  console.log(`${currentPlayer} wins up top.`);
           //return true;
      // }
      //if(boxes[3] === currentPlayer && boxes[6] === player) {
        //   console.log(`${currentPlayer} wins on the left.`);
          // return true;
       //}
      //if(boxes[4] === currentPlayer && boxes[8] === player) {
        //   console.log(`${currentPlayer} wins  diagonal.`);
          // return true;
       //}
     //}

    //}   
    //if(boxes[8] === currentPlayer){
      //if(boxes[5] === currentPlayer && boxes[2] === player) {
        //console.log(`${currentPlayer} wins on right.`);
        //return true;
    //}
      //  if(boxes[7] === currentPlayer && boxes[6] === player) {
        //console.log(`${currentPlayer} wins on bottom.`);
        //return true;
      //}   
   //}        if(boxes[4] === currentPlayer) {
     //  if(boxes[5] === currentPlayer && boxes[3] === player) {
       //    console.log(`${currentPlayer} wins on the left.`);
        //}
        //if(boxes[7] === currentPlayer && boxes[6] === player){
        // console.log(`${currentPlayer} wins on the left.`);
         //return true;         }
    //}
 //}











     