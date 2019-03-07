let posX;
let posY;
let vX = 3;
let vY = 3.1;
let potato;
let scalar = 0;
let state;

function setup(){
  document.addEventListener("contextmenu", event => event.preventDefault());
  createCanvas(windowWidth, windowHeight);
  posX = width/2;
  posY = height/2;
  scalar = 50;
  state = 1;
}

function preload(){
  potato = loadImage("assets/potato.png");
}

function draw(){
  potatoBouncing();
  mouseEvents();
  movePotato();
  background(75);
  displayImages();
}

function potatoBouncing(){ // controlls the potato hitting the paddles and wall
  if ((posX <= 0) || (posX >= width - scalar)){ // wall bouncing
    vX *= -1;
  }
  if ((posY <= 0) || (posY >= height - scalar)){ // ceiling and floor bouncing
    vY *= -1;
  }
}

function mouseEvents(){
  if (mouseIsPressed){
    if (mouseButton === LEFT){
      if (mouseX >= width/2 - 50 && mouseX <= width/2 + 50 && mouseY >= height/2 - 25 && mouseY <= height/2 + 25) {
        state = 2
      }
    }
  }
}

function movePotato(){ // changes the position of the potato in accordance to the velocity
  posX += vX;
  posY += vY;
}

function displayImages(){
  if (state === 1){
    fill(0)
    rect(width/2 - 50, height/2 - 25, 100, 50)
  }
  else{
    image(potato, posX, posY, scalar, scalar);
  }
}
