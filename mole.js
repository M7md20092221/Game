let currentMt;
let currentBt;
let score =0;

window.onload = function(){
    SetGame();
}

function SetGame(){
    for(let i=0; i<9; i++){
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", SelectTile);
        document.getElementById("mainG").appendChild(tile);
        
    }
    setInterval(setMole, 2000);
    setInterval(SetBomb, 1000);
}
function setMole(){
    if(currentMt){
        currentMt.innerHTML=" ";  }
    let mole = document.createElement("img");
    mole.src="./moley.png";
    let num = GetRt();
    currentMt=document.getElementById(num);
    currentMt.appendChild(mole);
    if(currentBt && currentBt.id == num){
        return;
    }
}
function GetRt(){
    let num = Math.floor(Math.random() * 9);
    return num.toString();
    


}
function getRandom(){
    let Num = Math.floor(Math.random()*9);
    return Num.toString();
}
function SetBomb(){
    if(currentBt){
        currentBt.innerHTML = "";
    }
    let bomb = document.createElement("img");
    bomb.src="./bomb.webp";
    let Num = getRandom();
    currentBt=document.getElementById(Num);
    currentBt.appendChild(bomb);
}
function SelectTile(){
    if(this==currentMt){
        score++
        document.getElementById("score").innerText=score.toString();
    }
}