document.addEventListener("DOMContentLoaded", function () {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const bands = data.bas; //Constructs JSON shorthands into "X" i.e. data.bas becomes bands

            //Populates divs with data
            bands.forEach((band, index) => {
                const infoDiv = document.getElementById(`myDiv${index + 1}`);
                if (infoDiv) {
                    infoDiv.innerHTML =
                        `
                <div>Band: ${band.artist}</div>
                <div>Album: ${band.album}</div>
                <div>Album Length: ${band.albumlength}</div>
                <div>Songs: ${band.songs}</div>
                `;

                    infoDiv.style.display = 'none'; //Hides divs initially
                    console.log(infoDiv);
                } else {
                    console.warn(`Element myDiv${index + 1} not found`);
                }

            });

            //Gets current index from local storage otherwise starts as 0
            let currentIndex = parseInt(localStorage.getItem('currentIndex')) || 0;

            //Shows current band info, more broadly shows current div
            const.currentDiv = document.getElementById(`myDiv${currentIndex + 1}`);
            if (currentDiv) {
                currentDib.display.style = 'block';
            } else {
                console.warn(`Current div myDiv${currentIndex + 1} not found`);
            }

            //Updates index for next page load
            currentIndex = (currentIndex + 1) % bands.length;

            //Saves updated index to local storage
            localStorage.setItem('currentIndex', currentIndex);
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});