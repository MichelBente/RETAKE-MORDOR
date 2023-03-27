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
            if (this.y < 180) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
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

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            img.style = 'transform: scaleX(-1)';
            this.imageCache[path] = img;
        });
    }


    moveRight() {
        setInterval(() => {
            this.x += this.speed;
        }, 1000 / 60);
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 0 % 10, das Modulu ersetzt die nicht vorhandene Stelle im Array und sorgt für eine fließende Reihenfolge für deine Wiederholung.
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


}