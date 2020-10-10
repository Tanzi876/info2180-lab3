let xturn
let state=[]
let win
window.onload=function (){
    let board=document.querySelectorAll('#board div')
    xturn= false
    win=true
    
    for (var i=0;i<board.length;i++){
        board[i].classList.add('square')
        board[i].addEventListener('click',function(){
           console.log("box click")
            if (xturn==true){
                board[i].innerHTML="X"
                board[i].classList.add('square X')
                console.log("Play X")
                state.push("X")
                swap()
            }else
            {
                board[i].innerHTML="O"
                board[i].classList.add('square o')
                console.log("Play O")
                state.push("O")
                swap()
                
            }
            

        })  
        board[i].addEventListener('hover',function (){
            console.log("Mouse Hover")
            board[i].classList.add('hover')
            
        })  
        Checkwin() 
    }
    
   
}

function swap(){
    
    xturn=!xturn
}

function Checkwin(){
    var status=document.querySelector('#status div')
    if (state)
    status.classList.add('you-won')
    
}


   




