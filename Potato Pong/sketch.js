// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let posX;
let posY;
let vX = 3;
let vY = 3.1;
let potato;
let scalar = 0;
let playerOneHeight = 0;
let playerTwoHeight = 0;
let speedScalar = 1
let playerOnePoints = 0;
let playerTwoPoints = 0;

function setup() {
  document.addEventListener("contextmenu", event => event.preventDefault());
  createCanvas(windowWidth, windowHeight);
  posX = width/2;
  posY = height/2;
  scalar = 50;
}

function preload(){
  potato = loadImage("assets/potato.png");
}

function draw() {
  background(75);
  if (posX <= 80 && (posY - playerOneHeight <= 150) && (posY - playerOneHeight > 0)){ // player one paddle
    vX *= -1.2;
    posX = 80
  }
  else if (posX <= 0){ // right scoring
    posX = width/2;
    vX = 5;
    playerTwoPoints ++;
  }

  if ((posX >= width - scalar - 80) && (posY - playerTwoHeight <= 150) && (posY - playerTwoHeight > 0)){ // player two paddle
    vX *= -1.2;
    posX = width - 80 - scalar;
  }
  else if (posX >= width - scalar){ // left scoring
    posX = width/2;
    vX = -5;
    playerOnePoints ++;
  }

  if ((posY <= 0) || (posY >= height - scalar)){ // ceiling and floor bouncing
    vY *= -1;
  }

  if (key === "w"){ // player one moving up
    playerOneHeight -= 5;
    playerOneHeight = constrain(playerOneHeight, 0, height - 150)
  }

  if (key === "s"){ // player one moving down
    playerOneHeight += 5;
    playerOneHeight = constrain(playerOneHeight, 0, height - 150)
  }

  if (mouseIsPressed){ // player two moving up
    if (mouseButton === LEFT){
      playerTwoHeight += 5;
      playerTwoHeight = constrain(playerTwoHeight, 0, height - 150);
    }

    if (mouseButton === RIGHT){ // player two moving down
      playerTwoHeight -= 5;
      playerTwoHeight = constrain(playerTwoHeight, 0, height - 150);
    }
  }
  
  posX += vX;
  posY += vY;
  
  image(potato, posX, posY, scalar, scalar);
  rect(40, playerOneHeight, 40, 150);
  rect(width - 80, playerTwoHeight, 40, 150);
}

function keyReleased(){
  key = "noPress"
}