let paragraphs = [...document.querySelectorAll('p')];
let spans =[ ];
console.log(paragraphs); 

paragraphs.forEach(paragraph => {
    let htmlString = ' ';
    let pArray = paragraph.textContent.split('');
    for (let i = 0; i< pArray.length; i++) {
        htmlString +=   '<span>${pArray[i}}</span>';
        } 
        paragraph.innerHTML = htmlString;
        

}
)