// Interactive Scene - Squash Squash
// Ian Kimpton
// March 5th
//
// Extra for Experts:
// I added updating text scores, used the millis function to make a line of text dissapear after 5 seconds

let posX;
let posY;
let vX = 3;
let vY = 5;
let squash;
let scalar = 0;
let playerOneHeight = 0;
let playerTwoHeight = 0;
let playerOnePoints = 0;
let playerTwoPoints = 0;
let seconds;
let squashState;
let mainState;

function setup(){
  document.addEventListener("contextmenu", event => event.preventDefault());
  createCanvas(windowWidth, windowHeight);
  posX = width/2;
  posY = height/2;
  scalar = 50;
  mainState = 1;
}

function preload(){
  squash = loadImage("assets/squashed.png");
  blueSquash = loadImage("assets/squashBlue.png");
  redSquash = loadImage("assets/squashRed.png");

}

function draw() {
  if (mainState === 1){
    menu()

  }
  else if (mainState === 2){
    squashBouncing();
    keyboardEvents();
    mouseEvents();
    moveSquash();
    background(75);
    displayImages();
    displayText();
  }
}

function squashBouncing(){ // controlls the squash hitting the paddles and wall
  if (posX <= 120 && (posY >= playerTwoHeight - scalar/2) && (posY <= playerTwoHeight + 150 + scalar/2)){ // player two paddle
    vX *= -1.2;
    posX = 121;
    squashState = "blue";
  }

  else if (posX <= 80 && (posY >= playerOneHeight - scalar/2) && (posY <= playerOneHeight + 150 + scalar/2)){ // player one paddle
    vX *= -1.2;
    posX = 80;
    squashState = "red";
  }
  else if (posX <= 0){ // scoring
    posX = width/2;
    vX = -5;
    if (squashState === "blue"){
      playerTwoPoints ++;
    }
    else if (squashState === "red"){
      playerOnePoints ++;
    }
    squashState = 0;
  }

  if ((posY <= 0) || (posY >= height - scalar)){ // ceiling and floor bouncing
    vY *= -1;
  }
  if (posX >= width - scalar){ // right wall bouncing
    posX = width - scalar - 1;
    vX *= -1;
  }
}

function keyReleased(){
  key = "noPress";
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
    playerOnePoints = 0;
    playerTwoPoints = 0;
    posX = width/2;
    posY = height/2;
    mainState = 1;
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

function moveSquash(){ // changes the position of the squash in accordance to the velocity
  posX += vX;
  posY += vY;
}

function displayImages(){ // displays the squash and the paddles
  imageMode(CORNER)
  if (squashState === "red"){
    image(redSquash, posX, posY, scalar, scalar);
  }
  else if (squashState === "blue"){
    image(blueSquash, posX, posY, scalar, scalar);
  }
  else {
    image(squash, posX, posY, scalar, scalar);
  }
  fill("RED");
  rect(40, playerOneHeight, 40, 150);
  fill("BLUE");
  rect(80, playerTwoHeight, 40, 150);
}

function displayText(){ // displays the score and the instructions at the start of the game
  textSize(16);
  textAlign(CENTER);
  fill("BLUE");
  text(playerOnePoints, 60, playerOneHeight + 75);
  fill("RED");
  text(playerTwoPoints, 100, playerTwoHeight + 75);

  seconds = millis()/1000;
  if (seconds <= 3){
    textSize(36);
    textAlign(CENTER);
    fill(0)
    text("Use W and S to move Player One", width/2, height/2 - 50);
    text("Use left and right mouse buttons to move Player Two", width/2, height/2);
    text("Press R to reset", width/2, height/2 + 50);
  }
}

function menu(){
  imageMode(CENTER);
  image(squash, width/2, height/2, width/4, height/3);
  if (mouseX >= width/2 - width/8 && mouseX <= width/2 + width/8 && mouseY >= height/2 - height/6 && mouseY <= height/2 + height/6){
    mainState = 2
  }
}