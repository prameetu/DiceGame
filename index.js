var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomNumber2 = Math.floor(Math.random()*6)+1;

document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");

document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

if(randomNumber1 > randomNumber2){
    document.querySelector(".heading").textContent = "! Player 1 WINNNSSS !";
    document.querySelector(".heading").classList.add("player1");
}
else if(randomNumber1 < randomNumber2){
    document.querySelector(".heading").textContent = "! Player 2 WINNNSSS !";
    document.querySelector(".heading").classList.add("player2");
}
else{
    document.querySelector(".heading").textContent = "Its A Tie ! Try Once More!";
}

