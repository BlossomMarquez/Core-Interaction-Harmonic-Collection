document.addEventListener("DOMContentLoaded", function () {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const dataDisplay = document.getElementById("myDiv4");
            dataDisplay.id = "list";

            // Create HTML elements to display the JSON data
            var bandElement1 = data.bas[0].artist;
            var bandElement2 = data.bas[1].artist;
            var bandElement3 = data.bas[2].artist;

            var albumElement1 = data.bas[0].album;
            var albumElement2 = data.bas[1].album;
            var albumElement3 = data.bas[2].album;

            var albumLengthElement1 = data.bas[0].albumlength;
            var albumLengthElement2 = data.bas[1].albumlength;
            var albumLengthElement3 = data.bas[2].albumlength;

            var songElement1 = data.bas[0].songs;
            var songElement2 = data.bas[1].songs;
            var songElement3 = data.bas[2].songs;

const info1 = document.getElementById("myDiv1");
info1.id = "Folly Group";
info1.textContent = `Band: ${bandElement1} Album: ${albumElement1} Album Length: ${albumLengthElement1} Songs: ${songElement1}`;

const info2 = document.getElementById("myDiv2");
info2.id = "Crack Cloud";
info2.textContent = `Band: ${bandElement2} Album: ${albumElement2} Album Length: ${albumLengthElement2} Songs: ${songElement2}`;

const info3 = document.getElementById("myDiv3");
info3.id = "Cola";
info3.textContent = `Band: ${bandElement3} Album: ${albumElement3} \n Album Length: ${albumLengthElement3} \n Songs: ${songElement3}`;

var info = info1, info2, info3;

let currentIndex = parseInt(localStorage.getItem('currentIndex')) || 0;

document.getElementById('list').textContent = info1[currentIndex];

currentIndex = (currentIndex + 1) % info.length;

localStorage.setItem('currentIndex', currentIndex);

console.log(info1);
console.log(songElement1);
console.log(data.bas[2].album);
console.log(data.bas[2].songs);

        })
        .catch(error => console.error("Error fetching JSON data:", error));
});


