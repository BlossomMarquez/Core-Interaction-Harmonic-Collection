function setup() {
    let canvasElement = select('#canvas');

    createCanvas(displayWidth, displayHeight);

    canvasElement = createCanvas(displayWidth, displayHeight);
    canvasElement.parent('#canvas');

    line(520, 340, 660, 463);
}