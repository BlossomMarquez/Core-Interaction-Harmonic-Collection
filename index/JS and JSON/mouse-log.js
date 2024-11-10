const mousePositionElement = document.getElementById("mouse-position");

document.addEventListener('mousemove', e => {
  const x = e.clientX;
  const y = e.clientY;

  mousePositionElement.textContent = `X: ${x}, Y: ${y}`;
});