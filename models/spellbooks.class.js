class Spellbook extends MoveableObject {

    y = 50;
    width = 50;
    height = 50;
    mana = 40;




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
}




