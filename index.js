var randomnumber1=Math.floor(Math.random()*6)+1;
var randomdiceimage="dice"+randomnumber1+".png";
var randomimagesource="diceimages/"+randomdiceimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);


var randomnumber2=Math.floor(Math.random()*6)+1;
var randomdiceimage="dice"+randomnumber2+".png";
var randomimagesource="diceimages/"+randomdiceimage;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesource);


if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins🚩"
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins🚩"
}
else{
    document.querySelector("h1").innerHTML="Its a draw😊"
}