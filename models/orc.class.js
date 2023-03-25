class Orc extends MoveableObject {

    constructor() {
        super().loadImage('../img/orcs/_PNG/1_ORK/ORK_01_WALK_000.png');
        
        this.x = 200 + Math.random() * 500;  // Zahl zwischen 200 und 700
    }
    

}
