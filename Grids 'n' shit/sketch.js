// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridSize = 50;
let grid;
let cellSize;

function setup() {
  if (windowHeight > windowWidth){
    createCanvas(windowWidth, windowWidth);
  }
  else{
    createCanvas(windowHeight, windowHeight);
  }
  cellSize = height/gridSize;
  grid = createRandom2dArray(gridSize, gridSize);
}

function draw() {
  background(220);
  displayGrid();
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

function createRandom2dArray(rows, columns){
  let emptyArray = [];
  for (i = 0; i < rows; i ++){
    emptyArray.push([]);
    for (j = 0; j < columns; j ++){
      emptyArray[i].push(round(random(0, 1)));
    }
  }
  return emptyArray;
}

function displayGrid(){
  for (let y = 0; y < gridSize; y++){
    for (let x = 0; x < gridSize; x++){
      if (grid[y][x] === 0){
        fill(255)
      }
      else{
        fill(0)
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function mousePressed(){
  let xCoord = floor(mouseX/cellSize);
  let yCoord = floor(mouseY/cellSize);
  console.log(xCoord, yCoord);
  if (grid[yCoord][xCoord] === 1){
    grid[yCoord][xCoord] = 0
  }
  else{
    grid[yCoord][xCoord] = 1
  }
}

function keyPressed(){
  if (key === " "){
    updateGame()
  }
  if (key === "w"){
    grid = create2dArray(gridSize, gridSize);
  }
}

function updateGame(){
  let newGrid = create2dArray(gridSize, gridSize);
  for (y = 0; y < gridSize; y++){
    for (x = 0; x < gridSize; x++){
      let friends = 0;
      for (y2 = -1; y2 < 2; y2++){
        for (x2 = -1; x2 < 2; x2++){
          if (y+y2 >= 0 && x+x2 >= 0 && y+y2 < gridSize && x+x2 < gridSize){
            friends += grid[y+y2][x+x2];
          }
        }
      }
      friends -= grid[y][x];
      if (grid[y][x] === 1){
        if (friends === 2 || friends === 3){
          newGrid[y][x] = 1;
        }
        else{
          newGrid[y][x] = 0;
        }
      }
      else if (grid[y][x] === 0){
        if (friends === 3){
            newGrid[y][x] = 1;
        }
      }
    }
  }
  grid = newGrid;
}