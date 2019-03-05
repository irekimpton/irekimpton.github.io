// Traffic Light Starter Code
// Dan Schellenberg
// Sept 25, 2018

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/

function setup() {
  createCanvas(600, 600);
}

let seconds;
let state;

function draw() {
  background(255);
  drawOutlineOfLights();
  determineState();
  drawColouredLights();
  seconds = millis()/1000;
  console.log(round(seconds));
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}

function determineState() {
  if (seconds % 120 < 50){
    state = 1
  }
  else if (seconds % 120 >= 50 && seconds % 120 < 60){
    state = 2;
  }
}

function drawColouredLights() {
  

}
