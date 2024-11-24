const imageContainer = document.getElementById("container"); // Replace with your container ID
const images = ["./imgs/1.jpg", "./imgs/2.jpg", "./imgs/3.jpg", "./imgs/4.jpg", "./imgs/5.jpg", "./imgs/6.jpg", "./imgs/7.jpg", "./imgs/8.jpg", "./imgs/9.jpg", "./imgs/10.jpg", ]; // Add your image URLs here

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

function getRandomPosition() {
  const containerWidth = imageContainer.offsetWidth;
  const containerHeight = imageContainer.offsetHeight;
  const x = Math.floor(Math.random() * (containerWidth - 500)); // Adjust 200 to your image width
  const y = Math.floor(Math.random() * (containerHeight - 500)); // Adjust 200 to your image height
  return { x, y };
}

function updateImage() {
  const newImage = document.createElement("img");
  newImage.src = getRandomImage();
  const position = getRandomPosition();
  newImage.style.position = "absolute";
  newImage.style.left = position.x + "px";
  newImage.style.top = position.y + "px";
  imageContainer.innerHTML = ""; // Clear previous image
  imageContainer.appendChild(newImage);
}

setInterval(updateImage, 500); // Change interval time (in milliseconds) as needed