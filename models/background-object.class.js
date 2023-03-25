class BackgroundObject extends MoveableObject {

    width = 720;
    height = 400;

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.y = x;
        this.x = 400 - this.height; // 480 -400
    }
}