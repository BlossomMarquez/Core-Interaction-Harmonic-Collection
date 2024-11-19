const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Function to resize the canvas
function resizeCanvas() {
  // Get device pixel ratio (1 for standard displays, 2 for Retina, etc.)
  const ratio = window.devicePixelRatio || 1;

  // Set the canvas resolution (width and height attributes) to fill 150vh
  canvas.width = window.innerWidth * ratio; // The width is always the full window width
  canvas.height = (window.innerHeight * 1.5) * ratio; // The height is 150% of the window height

  // Set the CSS width and height (visual size) to the actual window size
  canvas.style.width = `${window.innerWidth}px`; // Visual size
  canvas.style.height = `${window.innerHeight * 1.5}px`; // Visual height is 150% of the viewport height

  // Optional: Redraw something after resizing
  draw();
}

// Example draw function to show something on the canvas
function draw() {
  var Point = function(x,y){
    this.x = x;
    this.y = y;
   }
   
   drawLine(new Point(525 * 2, 325 * 2), new Point(665 * 2, 222 * 4),'black'); //JD
   drawLine(new Point(740 * 2, 420 * 2), new Point(686 * 2, 133 * 4),'black'); //ML
   drawLine(new Point(700 * 2, 250 * 2), new Point(830 * 2, 150 * 4),'black'); //LL
   drawLine(new Point(920 * 2, 305 * 2), new Point(970 * 2, 85 * 4),'black'); //DB
   drawLine(new Point(970 * 2, 190 * 2), new Point(1195 * 2, 70 * 4),'black'); //MJ
   drawLine(new Point(1002 * 2, 170 * 2), new Point(1200 * 2, 130 * 4),'black'); //DSR
   drawLine(new Point(1200 * 2, 290 * 2), new Point(1100 * 2, 180 * 4),'black'); //1G
   drawLine(new Point(1150 * 2, 375 * 2), new Point(1050 * 2, 250 * 4),'black'); //ARC
   drawLine(new Point(985 * 2, 375 * 2.65), new Point(800 * 2, 424 * 2.65),'black'); //AE
   drawLine(new Point(732 * 2, 250 * 4.5), new Point(650 * 2, 308 * 4.25),'black'); //ME
   drawLine(new Point(732 * 2, 250 * 4.5), new Point(435 * 2, 323 * 3.25),'black'); //AE RTE
   drawLine(new Point(650 * 2, 308 * 4.25), new Point(435 * 2, 323 * 3.25),'black'); //ME RTE
   drawLine(new Point(435 * 2, 323 * 3.25), new Point(310 * 2, 528 * 2.25),'black'); //RTE AKP
   drawLine(new Point(310 * 2, 528 * 2.25), new Point(398 * 2, 576 * 2.5),'black'); //II
   drawLine(new Point(398 * 2, 576 * 2.5), new Point(650 * 2, 583 * 2.75),'black'); //GB
   drawLine(new Point(650 * 2, 583 * 2.75), new Point(875 * 2, 452 * 3),'black'); //SH
   drawLine(new Point(704 * 2, 410 * 4), new Point(1095 * 2, 390 * 4),'black'); //9Eleven
   drawLine(new Point(465 * 2, 370 * 4), new Point(1250 * 2, 527 * 3.3),'black'); //IIAG
   drawLine(new Point(660 * 2, 460 * 3.55), new Point(1250 * 2, 527 * 3.3),'black'); //GB AG
   drawLine(new Point(1250 * 2, 527 * 3.3), new Point(919 * 2, 509 * 3.8),'black'); //I AG
   drawLine(new Point(919 * 2, 509 * 3.8), new Point(634 * 2, 470 * 3.8),'black'); //V
   drawLine(new Point(634 * 2, 480 * 3.8), new Point(474 * 2, 621 * 3.2),'black'); //TH
   drawLine(new Point(474 * 2, 610 * 3.2), new Point(1240 * 2, 550 * 3.65),'black'); //K
   drawLine(new Point(1000 * 2, 250 * 4), new Point(1050 * 2, 580 * 3.65),'black'); //ARC LZ
   drawLine(new Point(1050 * 2, 590 * 3.65), new Point(820 * 2, 658 * 3.4),'black'); //LZ4
   drawLine(new Point(750 * 2, 645 * 3.4), new Point(520 * 2, 700 * 3.4),'black');

   
   
   
   

   
   
   function drawLine(stPoint, endPoint,color){
     ctx.beginPath();
     ctx.moveTo(stPoint.x,stPoint.y);
     ctx.lineTo(endPoint.x,endPoint.y);
     ctx.strokeStyle = color;
     ctx.stroke();
     ctx.closePath();
   }
}

// Resize canvas on initial load
resizeCanvas();

// Resize canvas whenever the window is resized
window.addEventListener('resize', resizeCanvas);
