class MoveableObject extends DrawableObject {
    
    speed = 0.25;
    otherDirection = false;
    speedY = 2;
    acceleration = 1;
    energy = 100;
    lastHit = 0;
    lastDamage = 0;

    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    };

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }), 1000 / 30;  // 25 mal pro Sekunde
    }

    isAboveGround() {
            return this.y < 95;
        }
    

    // isColliding(obj) {
    //     return this.x + this.width - this.offset.right > obj.x + obj.offset.left &&
    //     this.y + this.height - this.offset.bottom >obj.y + obj.offset.top &&
    //     this.x + this.offset.left < obj.x + obj.width - obj.offset.right &&
    //     this.y + this.offset.top < obj.y + obj.height - obj.offset.bottom
    // }


    isColliding(obj) {
        return this.x + this.width - this.offset.right > obj.x + obj.offset.left &&
            this.y + this.height - this.offset.bottom > obj.y + obj.offset.top &&
            this.x + this.offset.left < obj.x + obj.width - obj.offset.right &&
            this.y + this.offset.top < obj.y + obj.height - obj.offset.bottom
    };

    //   isColliding(obj) {
    //   return ((this.x + this.framex) + (this.width + this.framew) >= (obj.x && this.x + obj.framex ) && 
    //          ((this.y + this.framey) <= (this.height + this.frameh)) >= (obj.y + obj.framey) &&
    //           (this.x + this.framex) + (obj.x + obj.framex) &&
    //           (this.y + this.framey) <= (obj.y + obj.framey) + (obj.height + obj.frameh)) 
    //   }

    hit(objDamage) {
        this.energy -= objDamage.damage;
        this.lastDamage =objDamage.damage;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
        timepassed = timepassed / 1000; // Difference in seconds
        return timepassed < 0.2;
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
        this.otherDirection = false;
    }

    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
    }


    die() {
        this.damage = 0;
        this.currentImage = 0;
        let animationInterval = setInterval(() => {
          this.playAnimation(this.IMAGES_DIE);
        }, 100);
        setTimeout(() => {
          clearInterval(animationInterval);
        }, 950);
      }
    }
    

