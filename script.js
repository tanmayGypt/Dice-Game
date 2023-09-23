let x=Math.floor(Math.random() *6 +1);
let y=Math.floor(Math.random() *6 +1);
document.querySelector(".img1").setAttribute("src","./images/dice" + x + ".png");
document.querySelector(".img2").setAttribute("src","./images/dice" + y + ".png");

if(x>y){
    document.querySelector(".container h1").textContent="Player 1 Is winner";

}
else if(x<y){
    document.querySelector(".container h1").textContent="Player 2 Is winner";
}
else{
    document.querySelector(".container h1").textContent="Draw";
}

