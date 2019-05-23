// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowHeight, windowHeight);
}

function draw() {
  background(75);
  circles(220);
}

function circles(num){
  if (num === 0){
    ellipse(width/2, height/2, height)
  }
  else{
    let scalar = 2^num
    for (let i = 0; i < scalar; i++){
      ellipse(i*(width/(scalar+1)), height/2, width/scalar);
    }
    circles(num-1);
  }
}