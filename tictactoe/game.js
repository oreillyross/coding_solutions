

const blocks = document.querySelectorAll('#board section');

const circle = '<span><i class="fa fa-circle-thin fa-3x" aria-hidden="true"></span>',
      cross  = '<span><i class="fa fa-times fa-3x" aria-hidden="true"></span>';


const winningCombo = [
    
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6]
  ]

var board = [9,9,9,9,9,9,9,9]; 
var switchit;

for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener('click', () => {
        
        switchit = (switchit === 1) ? 0 : 1;
        var nextgo = switchit;
        console.log(nextgo)
        blocks[i].innerHTML = (nextgo) ? cross : circle;
        board.splice(blocks[i].getAttribute('id'),1,nextgo)
        switch (checkWinner(board)) {
          case 'Game Ongoing': 
              break;
          case 'X won':
              alert('X Won!');
              clearBoard();
              break;
          case 'O won':
              alert('O Won!');
              clearBoard();
              break;      
          case 'Draw':
              alert('Game was a Draw');
              clearBoard();
              break;
        }
        
    });
}

function clearBoard() {
    for (let i = 0; i < blocks.length; i++) {
    
      blocks[i].innerHTML = '';
    }
    board = [9,9,9,9,9,9,9,9]; 
}


// [] -> [] -> String
const winner = function(winningCombo, board) {
    
  return function(board) {
        var results = winningCombo.map((c) => {
          var tot = 0;  
          c.map((e) => {
            tot += board[e]
          })
          return tot;
        })
       
       
     
     return ((results) => {
       console.log(board)
       let winner;
       if (results.indexOf(3) !== -1) winner = 'X won';
       else if (results.indexOf(0)!== -1) winner = 'O won';
       else if (board.indexOf(9) === -1) winner = 'Draw'; //else if (idxOfNaN(results) !== -1) winner = 'Draw';
       else winner = 'Game Ongoing';
       
       return winner;
     })(results); 
     
     
      
  }
}

const checkWinner = winner(winningCombo);  

