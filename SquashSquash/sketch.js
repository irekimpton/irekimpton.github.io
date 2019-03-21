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
let squashMenuOne;
let squashMenuTwo;
let menuScalar;
let squish;

function setup(){
  document.addEventListener("contextmenu", event => event.preventDefault());
  createCanvas(windowWidth, windowHeight);
  posX = width/2;
  posY = height/2;
  scalar = 50;
  mainState = "MENU";
  squashState = "noState";
  if (height > width){
    menuScalar = width/2
  }
  else{
    menuScalar = height/2
  }
}

function preload(){
  squash = loadImage("assets/squashed.png");
  blueSquash = loadImage("assets/squashBlue.png");
  redSquash = loadImage("assets/squashRed.png");
  squashMenuOne = loadImage("assets/squashMenuOne.png");
  squashMenuTwo = loadImage("assets/squashMenuTwo.png");
  soundFormats('mp3');
  squish = loadSound('assets/squish.mp3');
}

function draw() {
  if (mainState === "MENU"){
    background(75);
    menu();
  }
  else if (mainState === "GAME"){
    squashBouncing();
    keyboardEvents();
    mouseEvents();
    moveSquash();
    background(75);
    displayImages();
    displayText();
  }

  else if (mainState === "RULES"){
    background(75);
    rulesMenu();
  }
}

function squashBouncing(){ // controlls the squash hitting the paddles and wall
  if (posX <= 120 && (posY >= playerTwoHeight - scalar/2) && (posY <= playerTwoHeight + 150 + scalar/2) && (squashState != "blue" && squashState != "rightRed")){ // player two paddle
    vX *= -1.2;
    posX = 121;
    squashState = "blue";
    squish.setVolume(0.2);
    squish.play();
  }

  else if (posX <= 80 && posY >= playerOneHeight - scalar/2 && posY <= playerOneHeight + 150 + scalar/2 && squashState != "red"){ // player one paddle
    vX *= -1.2;
    posX = 80;
    squashState = "rightRed";
    squish.setVolume(0.2);
    squish.play();
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
    if (posY < 0){
      posY = 1
    }
    else if (posY > windowHeight - scalar){
      posY = windowHeight - scalar - 1
    }
    squish.setVolume(0.2);
    squish.play();
  }
  if (posX >= width - scalar){ // right wall bouncing
    if (squashState === "rightRed"){
      squashState = "red";
    }
    posX = width - scalar - 1;
    vX *= -1;
    squish.setVolume(0.2);
    squish.play();
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
  if (squashState === "red" || squashState === "rightRed"){
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
}

function menu(){
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(menuScalar/4);
  if (mouseX >= width/2 - menuScalar/2 && mouseX <= width/2 + menuScalar/2 && mouseY >= height/2 - menuScalar/2 && mouseY <= height/2 + menuScalar/2 && mouseIsPressed){
    mainState = "GAME";
  }
  else if (mouseX >= width/2 - menuScalar/2 && mouseX <= width/2 + menuScalar/2 && mouseY >= height/2 - menuScalar/2 && mouseY <= height/2 + menuScalar/2){
    image(squashMenuTwo, width/2, height/2, menuScalar, menuScalar);
    text("PLAY", width/2, height/2 + menuScalar/6);
  }
  else{
    image(squashMenuOne, width/2, height/2, menuScalar, menuScalar);
    text("PLAY", width/2, height/2 + menuScalar/6);
  }

  textSize(menuScalar/8);
  if (mouseX >= width/4 - menuScalar/4 && mouseX <= width/4 + menuScalar/4 && mouseY >= height/2 - menuScalar/4 && mouseY <= height/2 + menuScalar/4 && mouseIsPressed){
    mainState = "RULES";
  }
  else if (mouseX >= width/4 - menuScalar/4 && mouseX <= width/4 + menuScalar/4 && mouseY >= height/2 - menuScalar/4 && mouseY <= height/2 + menuScalar/4){
    image(squashMenuTwo, width/4, height/2, menuScalar/2, menuScalar/2);
    text("RULES", width/4, height/2 + scalar/2);
  }
  else{
    image(squashMenuOne, width/4, height/2, menuScalar/2, menuScalar/2);
    text("RULES", width/4, height/2 + scalar/2);
  }
}

function rulesMenu(){ // displays the score and the instructions at the start of the game
  textSize(36);
  textAlign(CENTER);
  fill(0)
  text("Use W and S to move Player One", width/2, height/2 - 50);
  text("Use left and right mouse buttons to move Player Two", width/2, height/2);
  text("Press R to reset", width/2, height/2 + 50);

  textSize(menuScalar/16);
  imageMode(CORNER);
  textAlign(CENTER);
  if (mouseX >= 0 && mouseX <= menuScalar/4 && mouseY >= 0 && mouseY <= menuScalar/4 && mouseIsPressed){
    mainState = "MENU";
  }
  else if (mouseX >= 0 && mouseX <= menuScalar/4 && mouseY >= 0 && mouseY <= menuScalar/4){
    image(squashMenuTwo, 0, 0, menuScalar/4, menuScalar/4);
    text("BACK", menuScalar/8, menuScalar/8 + menuScalar/32);
  }
  else{
    image(squashMenuOne, 0, 0, menuScalar/4, menuScalar/4);
    text("BACK", menuScalar/8, menuScalar/8 + menuScalar/32);
  }
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
}