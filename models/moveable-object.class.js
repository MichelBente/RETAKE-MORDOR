class MoveableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
   

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25); // 25 mal pro Sekunde
    }

    isAboveGround() {
        return this.y < 95;
    }



    
     isColliding(obj) {
         return ((this.x + this.framex) + (this.width + this.framew) >= (obj.x && this.x + obj.framex ) && 
             ((this.y + this.framey) <= (this.height + this.frameh)) >= (obj.y + obj.framey) &&
             (this.x + this.framex) + (obj.x + obj.framex) &&
             (this.y + this.framey) <= (obj.y + obj.framey) + (obj.height + obj.frameh)) && obj.onCollisionCourse; 
     }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
        timepassed = timepassed / 1000; // Difference in seconds
        return timepassed < 1;
        console.log('collision', energy)
    }

    isDead() {
        return this.energy == 0;
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