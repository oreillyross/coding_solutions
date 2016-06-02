

const blocks = document.querySelectorAll('#board section');

for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener('click', () => {
        
        console.log(blocks[i].getAttribute('id'))
        
    });
}


// [] -> [] -> integer
const winner = function(winningCombo, board) {
    return function(board) {
        winningCombo.forEach((combo) => {
          var won = combo.reduce((a,b) => {
              return board[a] + board[b]
          })    
          console.log(won)
        })
        
    }
}

const winningCombo = [
    
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6]
  ]

const checkWinner = winner(winningCombo);

const testBoard1 = []
const testBoard2 = [1,2,3,4,5,6,7,8]

