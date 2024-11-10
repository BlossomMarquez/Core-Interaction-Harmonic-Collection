const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth * window.devicePixelRatio;
canvas.height = window.innerHeight * window.devicePixelRatio;

canvas.style.width = `${window.innerWidth}px`;
canvas.style.height = `${window.innerHeight}px`;

// This constructs how our particle acts and functions as a single unit
class Particle {
    constructor(x, y, effect, charIndex) {
        this.originX = x;
        this.originY = y;
        this.effect = effect;
        this.x = Math.floor(x);
        this.y = Math.floor(y);
        this.ctx = this.effect.ctx;
        this.ctx.fillStyle = 'blue';
        this.vx = 0;
        this.vy = 0;
        this.ease = 0.8; //Scale of return to base position, works in conjunction with friction
        this.friction = 0.95; // Scale of leaving base position
        this.dx = 0;
        this.dy = 0;
        this.distance = 0;
        this.force = 0;
        this.angle = 0;
        this.size = 100; // Fixed size for text drawing

        this.charIndex = charIndex; // Store which character this particle corresponds to
        this.text = `welcome to grottesca.index`; // The word to draw
        this.draw();
    }

    draw() {
        const char = this.text[this.charIndex]; // Get the character corresponding to this particle
        this.ctx.font = `${this.size}px serif`; // Set font size and family

        // Draw the character at the current particle's position
        this.ctx.fillText(char, this.x, this.y);
    }

    update() {
        this.dx = this.effect.mouse.x - this.x;
        this.dy = this.effect.mouse.y - this.y;
        this.distance = this.dx * this.dx + this.dy * this.dy;
        this.force = -this.effect.mouse.radius / this.distance * 1;

        if (this.distance < this.effect.mouse.radius) {
            this.angle = Math.atan2(this.dy, this.dx);
            this.vx += this.force * Math.cos(this.angle);
            this.vy += this.force * Math.sin(this.angle);
        }

        // Apply friction and return to origin point
        this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
        this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
        this.draw();
    }
}

// This constructs how our particles work as a whole unit, manipulated by the x and y axis of the mouse
class Effect {
    constructor(width, height, context) {
        this.width = width;
        this.height = height;
        this.ctx = context;
        this.particlesArray = [];
        this.gap = 50; // Increase gap to better display text
        this.mouse = {
            radius: 10000,
            x: 0,
            y: 0
        };

        window.addEventListener('mousemove', e => {
            this.mouse.x = e.clientX * window.devicePixelRatio;
            this.mouse.y = e.pageY * window.devicePixelRatio;
        });

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth * window.devicePixelRatio;
            canvas.height = window.innerHeight * window.devicePixelRatio;
            this.width = canvas.width;
            this.height = canvas.height;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            this.particlesArray = [];
            this.init();
        });

        this.init();
    }

    init() {
        const text = `welcome to grottesca.index`;
        const fontSize = 50; // Set the font size to control the spacing

        // Set the width of each character
        ctx.font = `${fontSize}px serif`;
        const charWidths = text.split('').map(char => ctx.measureText(char).width); // Measure width of each character

        // Calculate the total width of the text (including the space between characters)
        const totalWidth = charWidths.reduce((acc, width) => acc + width, 0) + (text.length - 1) * this.gap;

        // Start the x position at the center of the canvas, adjusted by half the total width
        let xPos = (this.width - totalWidth) / 2; // Center text horizontally
        const yPos = this.height / 2; // Vertically centered

        // Create particles for each character with proper spacing
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const charWidth = charWidths[i]; // Get width of the character
            const charHeight = fontSize; // Character height (same as font size)

            // Loop through each position to create particles around the character
            for (let x = xPos; x < xPos + charWidth; x += this.gap) {
                for (let y = yPos - charHeight / 2; y < yPos + charHeight / 2; y += this.gap) {
                    this.particlesArray.push(new Particle(x, y, this, i)); // Pass the index of the character
                }
            }

            // Update the x position for the next character, adding the width of the character and a little gap
            xPos += charWidth + this.gap;
        }
    }

    update() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        for (let i = 0; i < this.particlesArray.length; i++) {
            this.particlesArray[i].update();
        }
    }
}

let effect = new Effect(canvas.width, canvas.height, ctx);

function animate() {
    effect.update();
    requestAnimationFrame(animate);
}

animate();
