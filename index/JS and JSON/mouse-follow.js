document.addEventListener('mousemove', function(event) {
    var textbox = document.getElementById('floating-textbox');
    textbox.style.left = event.clientX + "px"; 
    textbox.style.top = event.clientY + "px"; 
});