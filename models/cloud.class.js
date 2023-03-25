class Cloud extends MoveableObject {
    y = -23; 

    constructor() {
        super().loadImage("./img/backgrounds/4_clouds/1.png");
        
        this.x = Math.random() * 500;
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
