// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let time;
let rectWidth;
let numOfRects;
let rects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  time = 0;
  numOfRects = width;
  rectWidth = width/numOfRects;
  generateTerrain();
}


function draw() {
  background(75);
 
  rects.shift();

  let rectHeight = noise(time)*height;
    let recta = {
      height: rectHeight,
      width: width/numOfRects,
      x: width - rectWidth,
      y: height - rectHeight,
    };
    time += 0.01;
    rects.push(recta);
  

  fill(0);
  for(let i = 0; i < rects.length; i++){
    rects[i].x -= rectWidth;
    rect(rects[i].x, rects[i].y, rects[i].width, rects[i].height);
  }
}

function generateTerrain(){
  for (let i = 0; i < numOfRects; i++){
    let rectHeight = noise(time)*height;
    let recta = {
      height: rectHeight,
      width: width/numOfRects,
      x: i*rectWidth,
      y: height - rectHeight,
    };
    time += 0.01;
    rects.push(recta);
  }
}
