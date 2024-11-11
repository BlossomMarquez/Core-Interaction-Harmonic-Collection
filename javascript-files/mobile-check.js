       // Check if the device is a mobile device or not
       function isMobile() {
        return /Mobi|Android/i.test(navigator.userAgent);
    }

    // Load app2.js only on desktop (non-mobile devices)
    if (!isMobile()) {
        var script = document.createElement('script');
        script.src = '../index/JS and JSON/app2.js';
        document.head.appendChild(script);
    }