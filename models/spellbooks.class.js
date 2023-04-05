class Spellbook extends CollectibleObject {

    y = 50;
    width = 50;
    height = 50;
    mana = 40;

    magicalstrike_sound = new Audio("audio/magicalstrike.mp3")


    constructor() {
        super().loadImage("../img/stuff/craftpix-net-715454-free-50-rpg-book-icons/PNG/without background/43.png");
        this.x = 250 + Math.random() * 2500;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.x -= 0.15;  
        }, 60);

    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }


    collect() {
        this.mana = 0;
        this.magicalstrike_sound.play();
    }

}




