class Cloud extends MoveableObject {
    y = -23; 

    constructor() {
        super().loadImage("./img/backgrounds/4_clouds/1.png");
        
        this.x = 200 + Math.random() * 500;
        
    }
    

}
