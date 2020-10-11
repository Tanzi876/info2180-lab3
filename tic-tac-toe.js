let xturn
let state_O=[]
let state_X=[]

window.onload=function (){
    let board=document.querySelectorAll('#board div')
    let button=document.getElementById('button')
     xturn= false
        
    for (var i=0;i<board.length;i++){
        board[i].classList.add('square')
        board[i].addEventListener('click',function(){
           console.log("box click")
            if (xturn==true){
                board[i].innerHTML="X"
                board[i].classList.add('square.X')
                console.log("Play X")
                state_X.push("X")
                swap()
            }else
            {
                board[i].innerHTML="O"
                board[i].classList.add('square.O')
                console.log("Play O")
                state_O.push("O")
                swap()
                
            }
            

        },{once:true})  
        board[i].addEventListener('hover',function (){
            console.log("Mouse Hover")
            board[i].classList.add('hover')
            
        }) 
        button.addEventListener('click',function(){
            console.log("New Game")
            board[i].removeEventListener('click',function() {
                console.log("box click")
                if (xturn==true){
                    board[i].innerHTML="X"
                    board[i].classList.add('square.X')
                    console.log("Play X")
                    state_X.push("X")
                    swap()
                }else
                {
                    board[i].innerHTML="O"
                    board[i].classList.add('square.O')
                    console.log("Play O")
                    state_O.push("O")
                    swap()
                    
                }
            })    
            state_O=[]
            state_X=[]
        }) 
        
         
    }
    Checkwin()

    
   
    
    
   
}

function swap(){
    
    xturn=!xturn
}

function Checkwin(){
    const WINNING_COMBINATIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]    
    var status=document.querySelector('#status div')
    WINNING_COMBINATIONS.some(combo => {
        return combo.every(index => {
            if (state_X.length>state_O.length && 
                state_X[index]=='X' ){
                console.log("X wins")
                status.classList.add('you-won')
                status.innerHTML="Congratulations! X is the Winner!"
            }else if (state_O.length>state_X.length && 
                state_O[index]=='O'){
                    console.log("O wins")
                status.classList.add('you-won')
                status.innerHTML="Congratulations! O is the Winner!"
            }else{
                status.innerHTML="Game Draw"
                console.log("Game Draw")
    
            }
        })
    })


}
/* Reference https://github.com/WebDevSimplified/JavaScript-Tic-Tac-Toe/blob/master/script.js*/