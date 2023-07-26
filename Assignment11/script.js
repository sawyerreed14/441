class Square {
    constructor(id, x, y) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.size = 50;
        this.speedX = 2;
        this.speedY = 2;
        this.element = document.getElementById(id);
    }

    updatePositionAndSize() {
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
        this.element.style.width = this.size + 'px';
        this.element.style.height = this.size + 'px';
    }

    checkCollision(otherSquare) {
        if (this.x < otherSquare.x + otherSquare.size &&
            this.x + this.size > otherSquare.x &&
            this.y < otherSquare.y + otherSquare.size &&
            this.y + this.size > otherSquare.y) {
            document.getElementById("canvas").style.backgroundColor = "red";
            this.size -= 5;
            otherSquare.size -= 5;
        } else {
            document.getElementById("canvas").style.backgroundColor = "white";
        }
    }

    moveAutonomous() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x <= 0 || this.x + this.size >= 600) {
            this.speedX = -this.speedX;
        }
        if (this.y <= 0 || this.y + this.size >= 400) {
            this.speedY = -this.speedY;
        }

        this.updatePositionAndSize();
    }

    moveUserSquare() {
        const stepSize = 10;

        const keys = {};

        window.addEventListener('keydown', (event) => {
            keys[event.key] = true;
        });

        window.addEventListener('keyup', (event) => {
            keys[event.key] = false;
        });

        setInterval(() => {
            if (keys['ArrowUp'] || keys['w']) {
                this.y -= stepSize;
            }
            if (keys['ArrowDown'] || keys['s']) {
                this.y += stepSize;
            }
            if (keys['ArrowLeft'] || keys['a']) {
                this.x -= stepSize;
            }
            if (keys['ArrowRight'] || keys['d']) {
                this.x += stepSize;
            }

            this.x = Math.max(0, Math.min(this.x, 600 - this.size));
            this.y = Math.max(0, Math.min(this.y, 400 - this.size));

            this.updatePositionAndSize();
        }, 1000 / 60);
    }
}

const userSquare = new Square('userSquare', 100, 100);
userSquare.moveUserSquare();
const autoSquare = new Square('autoSquare', 300, 200);

setInterval(() => {
    autoSquare.moveAutonomous();
    userSquare.checkCollision(autoSquare);
}, 1000 / 60);
