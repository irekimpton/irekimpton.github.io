// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(400, 400);
  background(240)
  }
  
  let circleCount = 0;
  
  function draw() {
    while (circleCount <= 400) {
    ellipse(width/2, height/2, (400 - circleCount));
    circleCount += 40;
    }
  }