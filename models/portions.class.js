class Portion extends MoveableObject {
y = -23;
width = 50;
height = 50;




    constructor() {
        super().loadImage("../img/stuff/craftpix-net-500794-50-free-rpg-paint-icons/PNG/without background/23.png");
        this.x = Math.random() * 2500;
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

 



