let paragraphs = [...document.querySelectorAll('.paragraph')];
let spans = [];

paragraphs.forEach(paragraph =>{
    let htmlString = '';
    let pArray = paragraph.textContent.split('');
    for(let i = 0; i< pArray.length; i++) {
        htmlString +=`<span>${pArray[i]}</span>`;
    }
    paragraph.innerHTML = htmlString;
})

spans = [...document.querySelectorAll('span')];
