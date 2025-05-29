let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let winner=document.getElementById("winner");
let turn0=false;
let f=0;
const winningPattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box)=> {
    box.addEventListener("click", ()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    })
});



const checkwinner=() =>{
    for(let pattern of winningPattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("Winner");
                winner.innerText= "Congratualations!"+ pos1val + " has won";
                f=1;
                boxes.forEach((box) =>{
                    box.disabled=true;
                });
            }
        }
    }
}
const resetGame=()=>{
    turn0=false;
    winner.innerText="";
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

reset.addEventListener("click",resetGame);