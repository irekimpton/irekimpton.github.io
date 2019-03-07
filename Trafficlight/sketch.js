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
  seconds = rounds(millis()/1000);
  console.log((seconds);
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
  if (seconds % 120 < 5.7){
    state = 1
  }
  else if (seconds % 120 >= 57 && seconds % 120 < 60){
    state = 2;
  }
  else if (seconds % 120 >= 60){
    state = 3
  }
}

function drawColouredLights() {
  if (state === 1){ // green
    noStroke()
    fill("green")
    ellipse(width/2, height/2 + 65, 50, 50);
  }
  else if (state === 2){ // yellow
    noStroke()
    fill("yellow")
    ellipse(width/2, height/2, 50, 50);
  }
  else if (state === 3){ // red
    noStroke()
    fill("red")
    ellipse(width/2, height/2 - 65, 50, 50);
  } 
}
