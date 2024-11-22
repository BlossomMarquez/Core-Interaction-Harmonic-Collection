//variable for handpose ml model
let handpose;
//variable to store the video feed
let video;
//array for hand point predictions
let predictions = [];
// variable to show the number of petals in the flower
let numPetals = 12;
// variable that calculates the angle between each petal, so they are evenly spaced in a circle. We divide a full circle (360 degrees) by the number of petals
let angle = 360 / numPetals;
// variable that sets the size of each individual petal. The bigger the number, the bigger each petal will be.
let petalSize = 100;
// variable that tracks the current size of the flower's bloom. It starts at 0 but will change based on the hand's movement.
let bloomSize = 0;
// variable that sets a distance threshold. It is used to decide if the hand is open or closed. If the distance between thumb and pinky is greater than this, the hand is considered open.
let threshold = 100;
function setup() {
  // create the canvas
  createCanvas(1000, 800);
 
  // Capture video.
  video = createCapture(VIDEO);
  video.size(width, height);
   
  // Measure angles in units of degrees.
  angleMode(DEGREES);
  // print to let us know that the HandPose model is still loading
  print("loading");
  // call modelReady() when it is loaded
  handpose = ml5.handpose(video, modelReady);
  // Hide the video element, and just show the canvas
  video.hide();
}
// when the model is ready, a message appears in the console and it predicts where each landmark should be placed
function modelReady() {
  console.log("Model ready!");
  // when handpose is ready, do the detection
  handpose.on("predict", function(results) {
    predictions = results;
  });
  // call modelReady() when it is loaded
  handpose = ml5.handpose(video, modelReady);
}
function draw() {
  background(255);
  drawObject();
}
// In this function we draw a flower in full bloom when the detected hand is open, and draw the flower closed when the hand is a fist
function drawObject() {
  // Set the target size of the bloom.
  let targetSize = 0;
 
  if (predictions.length > 0) {
    let prediction = predictions[0];
   
    // Find the thumb and pinky tips.
    let thumbTip = prediction.annotations.thumb[3];
    let pinkyTip = prediction.annotations.pinky[3];
   
    // Calculate the distance between the thumb and pinky.
    let distance = dist(thumbTip[0], thumbTip[1], pinkyTip[0], pinkyTip[1]);
   
    // If the hand is open, set the bloom's target size
    // to 200 pixels.
    if (distance > threshold) {
      targetSize = 200;
    }
  }
 
  // Move the origin (0, 0) to the center of the canvas.
  translate(width / 2, height / 2);
 
  // Set the drawing style.
  noStroke();
  fill(220, 20, 60, 50);
  // Smoothly transition the bloom size.
  bloomSize = lerp(bloomSize, targetSize, 0.1);
  // Draw the flower.
  for (let i = 0; i < numPetals; i += 1) {
    // Draw the petal.
    ellipse(bloomSize, 0, petalSize, petalSize);
   
    // Rotate the coordinate system for the next petal.
    rotate(angle);
  }
}