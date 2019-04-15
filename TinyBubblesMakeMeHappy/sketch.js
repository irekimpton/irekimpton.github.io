// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Bubble{
  constructor(x, y, dy){
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.radius = random(200, 400)
    this.timer = new timer(1000);
  }

  display(){
    noStroke();
    fill(random(255), random(255), random(255), random(255));
    if (!this.timer.isDone()){
      ellipse(this.x, this.y, this.radius*2);
    }
  }

  bubbleUp(){
    if (this.y >= this.radius){
      this.y += this.dy;
      if (random(100) < 50){
        this.x += random(-10, 10);
      }
    }
    else{
      this.timer.restart();
    }
  }
}

class timer{
  constructor(timeToWait){
    this.timeToWait = timeToWait;
    this.startTime = millis();
    this.endTime = this.startTime + this.timeToWait;
  }

  isDone(){
    return millis >= this.endTime;
  }

  restart(){
    this.startTime = millis();
  }
}

let myBubbble;
let theBubbles = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++){
    myBubbble = new Bubble(random(width), height-100, random(-10, -5));
    theBubbles.push(myBubbble);
  }
}

function draw() {
  background(75);

  for (let i = 0; i < theBubbles.length; i++){
    theBubbles[i].display();
    theBubbles[i].bubbleUp();
  }
}
