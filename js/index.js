/************************************************/
/*                                              */
/*          Tic-Tac-Toe by HeebieGeeBee         */  
/*                                              */
/*             for FreeCodeCamp.com             */
/*               27th April 2017                */
/*                                              */
/*______________________________________________*/

window.onload = function(){

/********************/
/*  Variable Setup  */
/*__________________*/

const sq1 = document.getElementById('sq-1');
const sq2 = document.getElementById('sq-2');
const sq3 = document.getElementById('sq-3');
const sq4 = document.getElementById('sq-4');
const sq5 = document.getElementById('sq-5');
const sq6 = document.getElementById('sq-6');
const sq7 = document.getElementById('sq-7');
const sq8 = document.getElementById('sq-8');
const sq9 = document.getElementById('sq-9');
const winModal = document.getElementById('winModal');
const gameSquares = document.getElementsByClassName('game-square');
const newGameModal = document.getElementById('newGameModal');
const resetBtn = document.getElementById('reset');
const color1 = document.getElementById('color-7FFF66');
const color2 = document.getElementById('color-E8AB1D');
const color3 = document.getElementById('color-FF2C44');
const color4 = document.getElementById('color-201DE8');
const color5 = document.getElementById('color-20979F');
const winLines = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
const game = {
  squaresAvailable:[1,2,3,4,5,6,7,8,9],
  playerSquares: [],
  playersTurn: true,
  computersSquares: [],
  computersTurn: false,
  playColor: "#20FF9F",
  compColor: "#20979F"
};
const clickSound = new Audio();
clickSound.src = "http://www.soundjay.com/button/sounds/button-21.mp3";
const compSound = new Audio();
compSound.src = "http://www.soundjay.com/switch/sounds/switch-20.mp3"

/********************/
/*  Window On Load  */
/*__________________*/





  /*********************/
  /*  Event Listeners  */
  /*___________________*/
  
  /*  New Game Color Select  */
  
  color1.addEventListener('mousedown' || 'touchstart', function() {
    game.playColor = "#7FFF66";
    game.compColor = "#20979F";
    clickSound.play();
    newGameModal.style.display = "none";
  })
  
  color2.addEventListener('mousedown' || 'touchstart', function() {
    game.playColor = "#E8AB1D";
    game.compColor = "#201DE8";
    clickSound.play();
    newGameModal.style.display = "none";
  })
  
  color3.addEventListener('mousedown' || 'touchstart', function() {
    game.playColor = "#FF2C44";
    game.compColor = "#7FFF66";
    clickSound.play();
    newGameModal.style.display = "none";
  })
  
  color4.addEventListener('mousedown' || 'touchstart', function() {
    game.playColor = "#201DE8";
    game.compColor = "#E8AB1D";
    clickSound.play();
    newGameModal.style.display = "none";
  })
  
  color5.addEventListener('mousedown' || 'touchstart', function() {
    game.playColor = "#20979F";
    game.compColor = "#FF2C44";
    clickSound.play();
    newGameModal.style.display = "none";
  })
  
  /*  Game Board  */
  
  sq1.addEventListener('mousedown', function(){
    if(game.squaresAvailable.indexOf(1) !== -1 && game.playersTurn){
      clickSound.play();
      sq1.style.backgroundColor = game.playColor;
      game.squaresAvailable.splice(game.squaresAvailable.indexOf(1), 1);
      game.playerSquares.push(1);
      winCheck();
      game.playersTurn = false;
      game.computersTurn = true;
    }
  });
  sq2.addEventListener('mousedown', function(){
    if(game.squaresAvailable.indexOf(2) !== -1 && game.playersTurn){
      clickSound.play();
      sq2.style.backgroundColor = game.playColor; 
      game.squaresAvailable.splice(game.squaresAvailable.indexOf(2), 1);
      game.playerSquares.push(2);
      winCheck();
      game.playersTurn = false;
      game.computersTurn = true;
    }
  });
  sq3.addEventListener('mousedown', function(){
    if(game.squaresAvailable.indexOf(3) !== -1 && game.playersTurn){
      clickSound.play();
      sq3.style.backgroundColor = game.playColor;
      game.squaresAvailable.splice(game.squaresAvailable.indexOf(3), 1);
      game.playerSquares.push(3);
      winCheck();
      game.playersTurn = false;
      game.computersTurn = true;
    }
  });
  sq4.addEventListener('mousedown', function(){
    if(game.squaresAvailable.indexOf(4) !== -1 && game.playersTurn){
      clickSound.play();
      sq4.style.backgroundColor = game.playColor;
      game.squaresAvailable.splice(game.squaresAvailable.indexOf(4), 1);
      game.playerSquares.push(4);
      winCheck();
      game.playersTurn = false;
      game.computersTurn = true;
    }
  });
  sq5.addEventListener('mousedown', function(){
    if(game.squaresAvailable.indexOf(5) !== -1 && game.playersTurn){
      clickSound.play();
      sq5.style.backgroundColor = game.playColor; 
      game.squaresAvailable.splice(game.squaresAvailable.indexOf(5), 1);
      game.playerSquares.push(5);
      winCheck();
      game.playersTurn = false;
      game.computersTurn = true;
    }
  });
  sq6.addEventListener('mousedown', function(){
    if(game.squaresAvailable.indexOf(6) !== -1 && game.playersTurn){
      clickSound.play();
      sq6.style.backgroundColor = game.playColor;
      game.squaresAvailable.splice(game.squaresAvailable.indexOf(6), 1);
      game.playerSquares.push(6);
      winCheck();
      game.playersTurn = false;
      game.computersTurn = true;
    }
  });
  sq7.addEventListener('mousedown', function(){
    if(game.squaresAvailable.indexOf(7) !== -1 && game.playersTurn){
      clickSound.play();
      sq7.style.backgroundColor = game.playColor;
      game.squaresAvailable.splice(game.squaresAvailable.indexOf(7), 1);
      game.playerSquares.push(7);
      winCheck();
      game.playersTurn = false;
      game.computersTurn = true;
    }
  });
  sq8.addEventListener('mousedown', function(){
    if(game.squaresAvailable.indexOf(8) !== -1 && game.playersTurn){
      clickSound.play();
      sq8.style.backgroundColor = game.playColor; 
      game.squaresAvailable.splice(game.squaresAvailable.indexOf(8), 1);
      game.playerSquares.push(8);
      winCheck();
      game.playersTurn = false;
      game.computersTurn = true;
    }
  });
  sq9.addEventListener('mousedown', function(){
    if(game.squaresAvailable.indexOf(9) !== -1 && game.playersTurn){
      clickSound.play();
      sq9.style.backgroundColor = game.playColor;
      game.squaresAvailable.splice(game.squaresAvailable.indexOf(9), 1);
      game.playerSquares.push(9);
      winCheck();
      game.playersTurn = false;
      game.computersTurn = true;
    }
  });
  
  /*  Reset Button  */
  
  resetBtn.addEventListener('mousedown', function(){
    reset();
  });





/********************/
/*  Game Functions  */
/*__________________*/

/*  Reset Function  */

function reset() {
  compSound.play();
  game.squaresAvailable = [1,2,3,4,5,6,7,8,9];
  game.playerSquares = [];
  game.computersSquares = [];
  winModal.style.display = 'none';
  sq1.style.backgroundColor = 'white';
  sq2.style.backgroundColor = 'white';
  sq3.style.backgroundColor = 'white';
  sq4.style.backgroundColor = 'white';
  sq5.style.backgroundColor = 'white';
  sq6.style.backgroundColor = 'white';
  sq7.style.backgroundColor = 'white';
  sq8.style.backgroundColor = 'white';
  sq9.style.backgroundColor = 'white';
  game.playersTurn = true;
  game.computersTurn = false;
  newGameModal.style.display = "block";
}


/*  Computer Turn  */

function computerTurn() {
  
  // Generate Random Move
  
  let randomMove = Math.floor(Math.random() * (game.squaresAvailable.length));
  let randomSquareChoice;
  
  // If its first move and center square is available take it
  
  if(game.computersSquares.length < 1 && game.squaresAvailable.indexOf(5) !== -1) {
    randomSquareChoice = 5;
  }
  
  // See if Player is about to win
  
  if(game.playerSquares.length >= 2) {
    if(possibleWin('playerSquares', 'computersSquares')) {
      randomSquareChoice = possibleWin('playerSquares', 'computersSquares');
    }
  }
   
 // See if theres a winning move
  
  if(game.computersSquares.length >= 2) {      
    if(possibleWin('computersSquares', 'playerSquares')) {
      randomSquareChoice = possibleWin('computersSquares', 'playerSquares');
    }  
  }
  
  // Pick a random square if nothing to block or win
  
  if(randomSquareChoice === undefined) {
    randomSquareChoice = game.squaresAvailable[randomMove];
  }

   
  // Make move and render to board
  
  switch(randomSquareChoice) {
      case 1: sq1.style.backgroundColor = game.compColor;
              compSound.play();
              game.squaresAvailable.splice(game.squaresAvailable.indexOf(1), 1);
              game.computersSquares.push(1);
              break;
      case 2: sq2.style.backgroundColor = game.compColor;
              compSound.play();
              game.squaresAvailable.splice(game.squaresAvailable.indexOf(2), 1);
              game.computersSquares.push(2);
              break;
      case 3: sq3.style.backgroundColor = game.compColor;
              compSound.play();
              game.squaresAvailable.splice(game.squaresAvailable.indexOf(3), 1);
              game.computersSquares.push(3);
              break;
      case 4: sq4.style.backgroundColor = game.compColor;
              compSound.play();
              game.squaresAvailable.splice(game.squaresAvailable.indexOf(4), 1);
              game.computersSquares.push(4);
              break;
      case 5: sq5.style.backgroundColor = game.compColor;
              compSound.play();
              game.squaresAvailable.splice(game.squaresAvailable.indexOf(5), 1);
              game.computersSquares.push(5);
              break;
      case 6: sq6.style.backgroundColor = game.compColor;
              compSound.play();
              game.squaresAvailable.splice(game.squaresAvailable.indexOf(6), 1);
              game.computersSquares.push(6);
              break;
      case 7: sq7.style.backgroundColor = game.compColor;
              compSound.play();
              game.squaresAvailable.splice(game.squaresAvailable.indexOf(7), 1);
              game.computersSquares.push(7);
              break;
      case 8: sq8.style.backgroundColor = game.compColor;
              compSound.play();
              game.squaresAvailable.splice(game.squaresAvailable.indexOf(8), 1);
              game.computersSquares.push(8);
              break;
      case 9: sq9.style.backgroundColor = game.compColor;
              compSound.play();
              game.squaresAvailable.splice(game.squaresAvailable.indexOf(9), 1);
              game.computersSquares.push(9);
              break;               
      }
      winCheck();
      game.computersTurn = false;  
      game.playersTurn = true;
}

/*  Check For Possible Win  */

function possibleWin(playersSquares, opponantsSquares) {
  let playerArray = game[playersSquares];
  let filteredWinners = winLines.filter(function(a) {
    let count = 0;                                    
    for(let i = 0; i < playerArray.length; i++) {
      if(a.indexOf(playerArray[i]) !== -1) {
        count++
      }   
    }
    return count > 1;
  })
  if(filteredWinners.length > 0) {
    filteredWinners = filteredWinners.filter(function(a) {
      for(let i = 0; i < a.length; i++) {
        if(game[opponantsSquares].indexOf(a[i]) !== -1) {
          return false;
        } 
      }
      return true;
    });
    if(filteredWinners.length > 0) {
      return squareToPlay = filteredWinners[0].filter(function(a) { 
        return game[playersSquares].indexOf(a) === -1;
      })[0];
    }
  }
  return;  
}


/* Win Check Function */

function winCheck(){
    
    let winCount = 0;
    
    // Check Players Turn Wins 
  
    if(game.playersTurn){
      for(let i = 0; i < winLines.length; i++ ) {
        for(let j = 0; j < winLines[i].length; j++) {
          if(game.playerSquares.indexOf(winLines[i][j]) !== -1) {
            winCount++;
            if(winCount === 3) {
              winModal.style.display = 'block';
              winModal.innerHTML = '<h1>You Win!</h1><br/><i class="fa fa-refresh" onclick="reset()"></i>';
              winModal.style.color = 'white';
              return;
            }
          }
        }
      winCount = 0;
      }
      setTimeout(computerTurn, 600);
    }
  
    // Check if Computers Turn Wins
  
    if(game.computersTurn){
      for(let i = 0; i < winLines.length; i++ ) {
        for(let j = 0; j < winLines[i].length; j++) {
          if(game.computersSquares.indexOf(winLines[i][j]) !== -1) {
            winCount++;
            if(winCount === 3) {
              winModal.style.display = 'block';
              winModal.innerHTML = '<h1>You Lose!</h1><br/><i class="fa fa-refresh" onclick="reset()"></i>';
              winModal.style.color = 'white';
              return;
            }
          }
        }
      winCount = 0;
      }  
    }
  
    // If Niether Wins Check For Draw
  
    if (game.squaresAvailable.length === 0) {
      winModal.style.display = 'block';
      winModal.innerHTML = '<h1>Its a Draw!</h1><br/><i class="fa fa-refresh" onclick="reset()"></i>';
      winModal.style.color = 'white';
      return;
    }
  
}

}