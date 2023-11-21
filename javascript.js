// for player 1 
var rNumber1 = Math.floor(Math.random()*6)+1; // Number from  1 to 6 for player 1 
var rDiceImage1 = "dice"+rNumber1+".png"; // for choosing any random image from dice1 to dice6 for player1 
// for player 2
var rNumber2 = Math.floor(Math.random()*6)+1;  // Number from  1 to 6 for player 2 
var rDiceImage2 = "dice"+rNumber2+".png";     // for choosing any random image from dice1 to dice6 for player2

document.querySelector("img.img1").setAttribute("src",rDiceImage1);
document.querySelector("img.img2").setAttribute("src",rDiceImage2);

if(rNumber1>rNumber2){
    document.querySelector("h1").innerHTML="PLayer 1 Wins!🏆";
} 
else if(rNumber2>rNumber1){
    document.querySelector("h1").innerHTML="PLayer 2 wins!🏆";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}


