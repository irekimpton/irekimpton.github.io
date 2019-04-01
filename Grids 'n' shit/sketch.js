// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridSize = 10;
let grid;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
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