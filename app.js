let gameSeq = [];
let userSeq = [];
let highscore = [];
let btns = ["yellow","red","green","blue"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
// let bdy = document.querySelector("body");
h2.addEventListener("click", function(){
    
    if(started==false)
    {
        console.log("game started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    },250);
}




function levelUp(){
    level++;
    userSeq = [];
    h2.innerText = `Level${level}`;
    let randindx = Math.floor(Math.random()*3);
    let randColor = btns[randindx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randindx);
    // console.log(randColor);
    // console.log(randBtn);
    
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}
function checkAns(idx)
{
    // console.log("curr level : ", level);

    
    if(userSeq[idx] === gameSeq[idx])
    {
       if(userSeq.length == gameSeq.length)
       {
        setTimeout(levelUp,500);
       }
    }
    else
    {
        h2.innerHTML = `OOPS Wrong choice! Your score was <b>${level}<b> <br> press Me  again for play again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
       setTimeout(reset(),1000);
      
    }

}


function btnPress()
{
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
    

}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click",btnPress);

}
function reset()
{
    let h3 = document.querySelector("h3");
    h3.innerText = `High score = ${level}`;
    level = 0;
    started = false;
    gameSeq= [];
    userSeq = [];
};
  
