//defines random coordinates
let myX;
let myY;

//defines resizable canvas
var cnv;

//defines counter on circles
let myCounter = 1;

//defines background colors
let greenVal = 0;
let redVal = 0;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  let circPurpX = map(mouseX, 0, width, 0, 255);
  let circPurpY = map(mouseY, 0, height, 0, 255);
  cnv = createCanvas(1000, 1000);
  centerCanvas();
  background(circPurpX, circPurpY, 0);
}

function windowResized() {
  centerCanvas();
}

function draw() {
  let circPurpX = map(mouseX, 0, width, 0, 255);
  let circPurpY = map(mouseY, 0, height, 0, 255);

    //set variables to random location on canvas
    myX = random(0, height);
    myY = random(0, width);
    
    myCircle = circle;

    //new circles are drawn each time draw loops
    strokeWeight(1)//reset circle outline
    fill(circPurpX,circPurpY,95); //white shapes and text
    circle(myX, myY, 50); //draw circle with variable at x and y

    fill(circPurpX,circPurpY,95);
    stroke(circPurpX,circPurpY,95);
    circle(mouseX,mouseY,50);

    if (mouseX > mouseY) {
      myCircle = frameCount % width;
    }
    
    if (mouseY > mouseX) {
      myCircle = frameCount % height;
    }
  }

