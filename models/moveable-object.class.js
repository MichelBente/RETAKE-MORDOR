class MoveableObject {
    x = -50;
    y = 80;
    img;
    height = 196.875 * 1.5;
    width = 375 * 1.5;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;



    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                if (this.y < 180) {
                    this.y -= this.speedY;
                    this.speedY -= this.acceleration;
                }
            }
        }, 1000 / 25); // 25 mal pro Sekunde
    }

    isAboveGround() {
        return this.y < 180;
    }

    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image'); <img  id="image" src="#"> 
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Enemies)
        ctx.beginPath();
        ctx.lineWidth = "5";
        ctx.strokeStyle = "blue";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            img.style = 'transform: scaleX(-1)';
            this.imageCache[path] = img;
        });
    }


    playAnimation(images) {
        let i = this.currentImage % images.length; // let i = 0 % 10, das Modulu ersetzt die nicht vorhandene Stelle im Array und sorgt für eine fließende Reihenfolge für deine Wiederholung.
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;

    }

    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
    }


    jump() {
        this.speedY = 30;
    }


}