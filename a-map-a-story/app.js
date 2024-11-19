var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var Point = function(x,y){
 this.x = x;
 this.y = y;
}

drawLine(new Point(529,356),new Point(647,440),'red');
drawLine(new Point(60,10),new Point(150,150),'green');


function drawLine(stPoint, endPoint,color){
  ctx.beginPath();
  ctx.moveTo(stPoint.x,stPoint.y);
  ctx.lineTo(endPoint.x,endPoint.y);
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.closePath();
}