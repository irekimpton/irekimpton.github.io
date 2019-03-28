// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
}

function draw() {
  background(75);

  push();

  translate(width/2, height/2);

  clockFace();
  hourTicks();
  minuteTicks();
  timeLines();

  pop();
}

function windowResized(){
  createCanvas(windowWidth, windowHeight)
}

function clockFace(){
  strokeWeight(7);
  fill(255);
  ellipse(0, 0, height - 10);
  fill(0);
  ellipse(0, 0, 10);
}

function hourTicks(){
  strokeWeight(10);
  strokeCap(ROUND)
  for (i = 0; i < 12; i ++){
    line(height/2 - 75, 0, height/2 - 25, 0);
    rotate(30);
  }
}

function minuteTicks(){
  strokeWeight(3);
  for (j = 0; j < 60; j ++){
    line(height/2 - 50, 0, height/2 - 25, 0);
    rotate(6);
  }
}

function timeLines(){
  console.log(second)
  //rotate()
}