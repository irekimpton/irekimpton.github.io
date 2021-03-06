// Interactive Scene - Potato Pong
// Ian Kimpton
// March 5th
//
// Extra for Experts:
// I added updating text scores, used the millis function to make a line of text dissapear after 5 seconds

let posX;
let posY;
let vX = 3;
let vY = 3.1;
let potato;
let scalar = 0;
let playerOneHeight = 0;
let playerTwoHeight = 0;
let speedScalar = 1;
let playerOnePoints = 0;
let playerTwoPoints = 0;
let seconds;

function setup(){
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
  potatoBouncing();
  keyboardEvents();
  mouseEvents();
  movePotato();
  background(75);
  displayImages();
  displayText();
}

function potatoBouncing(){ // controlls the potato hitting the paddles and wall
  if (posX <= 80 && (posY - playerOneHeight <= 150) && (posY - playerOneHeight > 0)){ // player one paddle
    vX *= -1.2;
    posX = 80;
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
}

function keyReleased(){
  key = "noPress"
}

function keyboardEvents(){ // player one movement with the mouse and a reset button
  if (key === "w"){ // player one moving up
    playerOneHeight -= 5;
    playerOneHeight = constrain(playerOneHeight, 0, height - 150);
  }

  if (key === "s"){ // player one moving down
    playerOneHeight += 5;
    playerOneHeight = constrain(playerOneHeight, 0, height - 150);
  }
  if (key === "r"){ // resets the game
    vX = 3;
    vY = 3.1;
    playerOneHeight = 0;
    playerTwoHeight = 0;
    speedScalar = 1;
    playerOnePoints = 0;
    playerTwoPoints = 0;
    posX = width/2;
    posY = height/2;
  }
}

function mouseEvents(){ // player two movement using the mouse
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
}

function movePotato(){ // changes the position of the potato in accordance to the velocity
  posX += vX;
  posY += vY;
}

function displayImages(){ // displays the potato and the paddles
  image(potato, posX, posY, scalar, scalar);
  rect(40, playerOneHeight, 40, 150);
  rect(width - 80, playerTwoHeight, 40, 150);
}

function displayText(){ // displays the score and the instructions at the start of the game
  textSize(12);
  text(playerOnePoints, 57, playerOneHeight + 75);
  text(playerTwoPoints, width - 63, playerTwoHeight + 75);

  seconds = millis()/1000;
  if (seconds <= 3){
    textSize(36);
    text("Use W and S to move Player One, and left and right mouse buttons to move Player Two", width/2 - 695, height/2)
    text("Press R to reset", width/2 - 125, height/2 + 50);
  }
}