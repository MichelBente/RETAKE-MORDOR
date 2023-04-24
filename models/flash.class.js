class Flash extends MoveableObject {
    energy = 1;
    damage = 10;
    magicalstrike3_sound = new Audio("audio/magicalstrike3.mp3")

    offset = {
        top: 100,
        right: 100,
        left: 100,
        bottom: 100,
    }


    IMAGES_FLASH = [
        "./img/stuff/flash/flash/flash01.png",
        "./img/stuff/flash/flash/flash02.png",
        "./img/stuff/flash/flash/flash03.png",
        "./img/stuff/flash/flash/flash04.png",
        "./img/stuff/flash/flash/flash05.png",
        "./img/stuff/flash/flash/flash06.png",
        "./img/stuff/flash/flash/flash07.png",
        "./img/stuff/flash/flash/flash08.png",
        "./img/stuff/flash/flash/flash09.png",
        "./img/stuff/flash/flash/flash10.png",
    ];


    constructor(x, y) {
        super().loadImage("./img/stuff/flash/flash/flash01.png");
        this.loadImages(this.IMAGES_FLASH);
        this.x = x + 200;
        this.y = y + 70;
        this.width = 250;
        this.height = 250;
        this.speed = 20;
        this.throw2();
        this.specialAttack2();

    }

    throw2() {
        this.magicalstrike3_sound.play();
        this.speedX = 30;
        let flashSpeed = setInterval(() => {
            this.x += 10;
        }, 50);
        setTimeout(() => {
            clearInterval(flashSpeed);
            this.y = 500;
        }, 1333);
    }

    specialAttack2() {
        this.currentImage = 0;
        let attack = setInterval(() => {
            this.playAnimation(this.IMAGES_FLASH);
            if (this.isDead()) {
                clearInterval(attack);
                this.damage = 0;
            }
        }, 1000 / 30);
        setTimeout(() => {
            clearInterval(attack);
        }, 1333);
    }
}

