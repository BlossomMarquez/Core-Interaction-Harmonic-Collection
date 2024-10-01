document.getElementById("video").addEventListener("mouseover", function() {
	this.pause();
});

document.getElementById("video").addEventListener("mouseleave", function() {
	this.play();
});