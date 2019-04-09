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
let gridSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  menuSize = width-200
  gameMode = "game";
  paused = false;

  rectMode(CENTER)

  gridSize = 5;
  gameMenuGrid = create2dArray(gridSize, gridSize);
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
  rect(mouseX, mouseY, 50, 50);
}

function gameMenuDrawLoop(){
  rect(width/2, (height-150)/2, height-300, height-300);
  displayGameMenuGrid();
}

function gameConstantDrawLoop(){
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
  for (let y = 0; y < gridSize; y++){
    for (let x = 0; x < gridSize; x++){
      if (gameMenuGrid[y][x] === 0){
        fill(255)
      }
      else{
        fill(0)
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}