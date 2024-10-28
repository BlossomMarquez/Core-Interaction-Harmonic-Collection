document.addEventListener("DOMContentLoaded", function () {
  fetch('data.json')
      .then(response => response.json())
      .then(data => {
          const bands = data.bas; //Constructs JSON shorthands into "X" i.e. data.bas becomes bands


          //Populates divs with data
          bands.forEach((band, index) => {
              const infoDiv = document.getElementById(`myDiv${index + 1}`);
              if (infoDiv) {
                  infoDiv.innerHTML = `
              <div style="display: grid;
              column-gap: 2rem;
              grid-template-columns: 40% 60%;
              grid-template-rows: 15% 85%;
              grid-template-areas:
              'head .'
              'image info'">
              <div style="grid-area: image;">
              <img class="myImages" src="${band.cover}"></div>
              </div>
              <div style="grid-area: info;">
              <div>Band: ${band.artist}</div>
              <div>Title: ${band.title}</div>
              <div>Type: ${band.type}</div>
              <div>Length: ${band.albumlength}</div>
              <div>Genre: ${band.genre}</div>
              <div>Year: ${band.year}</div>
              <div>Songs: ${Array.isArray(band.songs) ? band.songs.join(' ') : band.songs}</div>
              <div>Link: <a href="${band.link}" target="_blank">${band.linktext}</a></div>
              </div>
              </div>
              `;
                  console.log(band.link);
                  infoDiv.style.display = 'none'; //Hides divs initially
              } else {
                  console.warn(`Element myDiv${index + 1} not found`);
              }
          });
});

// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = `${band.cover}`;
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
})
