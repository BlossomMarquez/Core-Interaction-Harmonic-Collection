document.addEventListener("DOMContentLoaded", function () {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const bands = data.bas; //Constructs JSON shorthands into "X" i.e. data.bas becomes bands

            //Populates divs with data
            bands.forEach((band, index) => {
                const infoDiv = document.getElementById(`myDiv${index + 1}`);
                infoDiv.innerHTML = `
                <div>Band: ${band.artist}</div>
                <div>Album: ${band.album}</div>
                <div>Album Length: ${band.albumlength}</div>
                <div>Songs: ${band.songs}</div>
                `;

                infoDiv.style.display = 'none'; //Hides divs initially
            });

            //Gets current index from local storage otherwise starts as 0
            let currentIndex = parseInt(localStorage.getItem('currentIndex')) || 0;

            //Shows current band info, more broadly shows current div
            document.getElementById(`myDiv${currentIndex + 1}`).style.display = 'block';

            //Updates index for next page load
            currentIndex = (currentIndex + 1) % bands.length;

            //Saves updated index to local storage
            localStorage.setItem('currentIndex', currentIndex);
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});

console.log(infoDiv);