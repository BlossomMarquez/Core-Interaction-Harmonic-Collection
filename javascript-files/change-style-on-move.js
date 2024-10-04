let isStyle1 = true; // Flag to track current style

// Function to switch CSS files
function switchStyle() {
    const stylesheet = document.getElementById('theme-stylesheet');
    if (isStyle1) {
        stylesheet.setAttribute('href', './style2.css');
    } else {
        stylesheet.setAttribute('href', './style1.css');
    }
    isStyle1 = !isStyle1; // Toggle the style flag
}

// Add event listener for mouse click
document.addEventListener('mouseout', switchStyle);