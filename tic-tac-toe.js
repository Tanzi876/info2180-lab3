let xturn
let state_O=[]
let state_X=[]

window.onload=function (){
    let board=document.querySelectorAll('#board div')
    let button=document.getElementById('button')
    var XO
    xturn= false
        
    for (var i=0;i<board.length;i++){
        board[i].classList.add('square')
        board[i].addEventListener('click',XO=function(){
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
            board[i].removeEventListener('click',XO)
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
    
    var status=document.querySelector('#status div')
    WINNING_COMBINATIONS.some(combo => {
        combo.every(index => {
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
