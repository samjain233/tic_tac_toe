let turn ="x";
let gameover = false;

//function to change the turn 
const changeTurn =()=>{
    if(turn === "x")
    return "o";
    else
    return "x";
}

//function to check to for a win
const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== ""))
        {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " won the game";
            gameover= true;
            for(var i=0;i<=2;i++)
            {
            document.querySelectorAll(".box")[e[i]].classList.add("win");
            }
        }
    })


}

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(gameover === false)
            {
                document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
            }
            
        }
    })
})

// add onclick event listener to reset button 
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    });
    turn ="x";
    gameover= false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn ;
    for(var i=0;i<=8;i++)
    {
    document.querySelectorAll(".box")[i].classList.remove("win");
    }


})