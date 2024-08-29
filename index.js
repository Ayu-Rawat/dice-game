var randomvarible1=Math.random();
randomvarible1=randomvarible1*6;
randomvarible1=Math.floor(randomvarible1);
randomvarible1=randomvarible1+1
document.querySelector(".img1").setAttribute("src","./images/dice"+randomvarible1+".png");

var randomvarible2=Math.random();
randomvarible2=randomvarible2*6;
randomvarible2=Math.floor(randomvarible2);
randomvarible2=randomvarible2+1
document.querySelector(".img2").setAttribute("src","./images/dice"+randomvarible2+".png")

if (randomvarible1>randomvarible2){
    document.querySelector(".title").innerHTML="Player 1 wins";
}else if(randomvarible2>randomvarible1){
    document.querySelector(".title").innerHTML="Player 2 wins";
}else{
    document.querySelector(".title").innerHTML="Draw";
}