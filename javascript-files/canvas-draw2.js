var c = document.getElementById("myCanvas2");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "#efefef");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(35, 45, 250, 50);