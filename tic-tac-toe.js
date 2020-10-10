let playerturn
let x
let o
window.onload=function (){
    let board=document.querySelectorAll('#board div')
     playerturn= false
    
    for (var i=0;board.length-1;i++){
        board[i].classList.add('square')
        
        board[i].removeEventListener('click',XO)
        board[i].addEventListener('click',XO,
       {once:true})    
        
    }
   
}
function XO(e){
    const box=e.target
    const currentbox=playerturn?x:o
     x.innerHTML="X"
     x.classList.add('square x')
     o.innerHTML="O"
     o.classList.add('square o')
    
    marker(box,currentbox)
    swap()
    hover()

}
function marker(box,currentbox){
    box.classList.add(currentbox)
}
function swap(){
    
    playerturn=!playerturn
}


   




