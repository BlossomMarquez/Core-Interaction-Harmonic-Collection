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
                <div style="grid-area: image;"><img src="${band.cover}"></div>
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

            //Gets current index from local storage otherwise starts as 0
            let randomIndex = Math.floor(Math.random() * bands.length);
            console.log(bands.length);

            //Shows current band info, more broadly shows current div
            const randomDiv = document.getElementById(`myDiv${randomIndex + 1}`);
            if (randomDiv) {
                randomDiv.style.display = 'flex';
            } else {
                console.warn(`Current div myDiv${currentIndex + 1} not found`);
            }
            console.log(randomIndex);
            //Updates index for next page load
            randomIndex = (randomIndex + 1) % bands.length;

            //Saves updated index to local storage
            localStorage.setItem('randomIndex', randomIndex);
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});