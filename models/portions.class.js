class Portion extends MoveableObject {
y = 50;
width = 50;
height = 50;
mana = 40;




    constructor() {
        super().loadImage("../img/stuff/craftpix-net-500794-50-free-rpg-paint-icons/PNG/without background/23.png");
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
    }, 1000/ 60);
}



    }

 


