document.addEventListener("DOMContentLoaded", function () {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const bands = data.bas; //Constructs JSON shorthands into "X" i.e. data.bas becomes bands


            bands.forEach((band, index) => {
                const infoDiv = document.getElementById(`myDiv${index + 1}`);
                if (infoDiv) {
                    //Creates an HTML List of Songs
                    const songList = document.createElement('ol');
                    if (Array.isArray(band.songs)) {
                        band.songs.forEach(song => {
                            const listItem = document.createElement('li');
                            listItem.textContent = song;
                            songList.appendChild(listItem);
                        });
                    } else {
                        const listItem = document.createElement('li');
                        listItem.textContent = band.songs; //For non-array list
                        songList.appendChild(listItem);
                    }

                    //Populates divs with data
                    infoDiv.innerHTML = `
                <div style="display: grid;
                width: 90vw;
                height: 95vh;
                column-gap: 2rem;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 15vw 10vw 28vw 5vw;
                grid-template-areas:
                'head head head'
                'home return load'
                'image info info'
                '. footer footer'">
                <div style="grid-area: head;">
                <div class="header"><p>
                Roll the Dice
                </p>
                </div>
                </div>
                <div id="main-page" style="grid-area: home;"><button class="button" id="homeButton"><a href="..">return to home page</a></button></div>
                <div id="main-page" style="grid-area: return;"><button class="button" id="returnButton"><a href=".">return to beginning</a></button></div>
                <div style="grid-area: image;">
                <a href="${band.link} src="${band.cover}" target="_blank">
                <img style="border-radius: .5rem;" title="Click image to open playlist./video" src="${band.cover}">
                </a>
                </div>
                <div title="Click to reload page." style="grid-area: load;"><a style="text-decoration: none; font-size: 2rem;" href="./index2.html">&#8635;</a></div>
                <div style="grid-area: info;">
                <div>Band: ${band.artist}</div>
                <div>Title: ${band.title}</div>
                <div>Type: ${band.type}</div>
                <div>Length: ${band.albumlength}</div>
                <div>Genre: ${band.genre}</div>
                <div>Year: ${band.year}</div>
                <div>Link: <a href="${band.link}" target="_blank">${band.linktext}</a></div>
                <br>
                <div class="tracklist" style="grid-area: list;">Track List:${songList.outerHTML}</div>
                </div>
                <div class="footer" style="grid-area: footer; margin-bottom: 1rem; text-align: right;">
                <p>
                designed by blossom marquez @
                <a href="https://www.studioapriori.xyz" target="_blank">studioapriori</a>
                </p>
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
        
        function loadScript(url) {
            const script = document.createElement('script');
            script.src = url;
            script.async = true; // Optional: Load the script asynchronously
            document.head.appendChild(script);
            console.log(script);
          }

          
          
          loadScript('../javascript-files/reload-button.js');
        
});