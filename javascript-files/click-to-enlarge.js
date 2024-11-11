// Get the modal
var modal = document.getElementById("myModal");

// Get the image elements with the "myImages" class
var img = document.getElementsByClassName("myImages");

// Get the modal image and caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Loop through all the images and assign the onclick event to each
for (var i = 0; i < img.length; i++) {
    img[i].onclick = function() {
        modal.style.display = "block";        // Show the modal
        modalImg.src = this.src;             // Set the src of the modal image
        captionText.innerHTML = this.alt;    // Set the caption to the alt text
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none"; // Hide the modal
}
