document.addEventListener("DOMContentLoaded", function() {
    // Fetch the JSON file (assuming it's called 'data.json')
    fetch('./JS and JSON/data.json')
        .then(response => response.json())
        .then(data => {
            const fills = data.headers; // Array containing the data for each div

            // Loop over each item in the 'fills' array and create divs dynamically
            fills.forEach((fill, index) => {
                
                // Optionally set an ID for the div (e.g. 'myDiv1', 'myDiv2', etc.)
                const infoDiv = document.getElementById(`myDiv${index + 1}`);

                infoDiv.innerHTML = `
                <div class="chill-div" style="overflow: hidden; position: relative;">
                <h1 style="position: absolute; bottom: 2rem; left: 2rem">
                <a href="${fill.link}" target="_blank">${fill.header}</a>
                <h1>
                <a href="${fill.link}" target="_blank">
                <img style="position: relative; left: 2rem;" src="${fill.img}"></img>
                </a>
                </div>`

            });

            // Optionally, load an external script (e.g. 'reload-button.js') after the content is created
            loadScript('../javascript-files/reload-button.js');
        })
        .catch(error => {
            console.error('Error fetching JSON data:', error);
        });
});

// Function to load an external script dynamically
function loadScript(url) {
    const script = document.createElement('script');
    script.src = url;
    script.async = true; // Load the script asynchronously
    document.head.appendChild(script);
    console.log('Script loaded:', url);
}
