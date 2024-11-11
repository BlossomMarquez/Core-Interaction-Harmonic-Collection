    // Function to check if the device is a desktop based on screen width
    function isDesktop() {
        return window.innerWidth >= 1024;  // Common desktop threshold (adjust as needed)
    }

    // Check if the screen width is for a desktop device and load the script
    if (isDesktop()) {
        window.addEventListener('load', function() {
            var script = document.createElement('script');
            script.src = '../index/JS and JSON/app2.js';  // The path to your app2.js file
            script.type = 'text/javascript';
            document.head.appendChild(script);  // Dynamically add the script to the head
        });
    }