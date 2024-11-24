const imageContainer = document.getElementById("container");
const imagePaths = [];
for (let i = 1; i <= 40; i++) {
  imagePaths.push(`./imgs/${i}.jpg`);
}


function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * imagePaths.length);
  return imagePaths[randomIndex];
}

function getRandomPosition() {
  const containerWidth = imageContainer.offsetWidth;
  const containerHeight = imageContainer.offsetHeight;
  const x = Math.floor(Math.random() * (containerWidth - 500));
  const y = Math.floor(Math.random() * (containerHeight - 500));
  return { x, y };
}

function updateImage() {
  const newImage = document.createElement("img");
  newImage.src = getRandomImage();
  const position = getRandomPosition();
  newImage.style.position = "absolute";
  newImage.style.left = position.x + "px";
  newImage.style.top = position.y + "px";
  imageContainer.innerHTML = "";
  imageContainer.appendChild(newImage);
}

setInterval(updateImage, 500);