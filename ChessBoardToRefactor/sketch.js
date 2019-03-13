// Refactor the following code
// - in other words, keep the same functionality, but improve the method used

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    for(x = 75; x <= width; x += 75){
        for(y = 75; y <= height; y += 75){
            fill(255);
            rect(x, y, 5, 5);
            stroke(255);
            strokeWeight(1)
            line(width/2, height/2, x + 2.5, y + 2.5);
        }
    }
}