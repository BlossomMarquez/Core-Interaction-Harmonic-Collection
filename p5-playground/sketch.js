function setup() {
  //Creates a canvas that is 1920px wide
  //and 1080px tall
  createCanvas(1920, 1080);
}

function draw() {
  //Defines the background as blue
  background("rgb(135, 205, 142)");

  //Changes circle color on mouse press
  if (mouseIsPressed === true) {
    fill(0)
  } else {
    fill(255);
  }

  //Creates circle and has it follow cursor
  fill("rgb(232,104,94)")
  circle(mouseX, mouseY, 100);

}

function draw() {

  //Defines the background as blue
  background("rgb(135, 205, 142)");

  //Changes circle color on mouse press
  if (mouseIsPressed === true) {
    fill(0)
  } else {
    fill(255);
  }

  //Creates circle and has it follow cursor
  fill("rgb(232,104,94)")
  circle(mouseX, mouseY, 100);
}

