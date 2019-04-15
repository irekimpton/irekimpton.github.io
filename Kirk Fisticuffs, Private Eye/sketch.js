// KIRK FISTICUFF, PRIVATE EYE!
// Ian Kimpton
// 
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let gameMode;
let paused;
let menuSize;
let gameMenuGrid;
let menuGridSize;
let menuScalar;
let toolBar;

function setup() {
  createCanvas(windowWidth, windowHeight);
  menuScalar = height*3/20
  menuSize = height-menuScalar*4
  gameMode = "game";
  paused = false;

  rectMode(CENTER)

  menuGridSize = 5;
  gameMenuGrid = create2dArray(menuGridSize, menuGridSize);
  toolBar = ["empty", "empty", "empty", "empty", "empty",];
}

function draw() {
  if (gameMode === "menu"){
  }

  if (gameMode === "game"){
    if (paused === true){
      gameMenuDrawLoop();
    }
    if (paused === false){
      background(75);
      gameDrawLoop();
    }
    gameConstantDrawLoop();
  }
}



function keyPressed(){
  if (gameMode === "game"){
    if (key === "e"){
      paused = !paused;
    }
  }
}

function windowResized(){
  createCanvas(windowWidth, windowHeight);
}



function gameDrawLoop(){
  rect(mouseX, mouseY, height/12, height/12);
}

function gameMenuDrawLoop(){
  rect(width/2, (height/2-height/24), height*3/4, height*3/4);
  displayGameMenuGrid();
}

function gameConstantDrawLoop(){
  rectMode(CENTER);
  rect(width/2, height - height/24, height*5/12, height/12)
}



function create2dArray(rows, columns){
  let emptyArray = [];
  for (i = 0; i < rows; i ++){
    emptyArray.push([]);
    for (j = 0; j < columns; j ++){
      emptyArray[i].push(0);
    }
  }
  return emptyArray;
}

function displayGameMenuGrid(){
  push();
  translate(width/2 - height*3/8, (height/2-height/24) - height*3/8);
  for (let y = 0; y < menuGridSize; y++){
    for (let x = 0; x < menuGridSize; x++){
      if (gameMenuGrid[y][x] === 0){
        fill(255)
      }
      else{
        fill(0)
      }
      rectMode(CORNER);
      rect(x*menuScalar, y*menuScalar, menuScalar, menuScalar);
      rectMode(CENTER)
    }
  }
  pop();
}