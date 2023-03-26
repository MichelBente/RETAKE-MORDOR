class Orc extends MoveableObject {

    IMAGES_WALKING = [
        "../img/orcs/_PNG/1_ORK/ORK_01_WALK_000.png",
        "../img/orcs/_PNG/1_ORK/ORK_01_WALK_001.png",
        "../img/orcs/_PNG/1_ORK/ORK_01_WALK_002.png",
        "../img/orcs/_PNG/1_ORK/ORK_01_WALK_003.png",
        "../img/orcs/_PNG/1_ORK/ORK_01_WALK_004.png",
        "../img/orcs/_PNG/1_ORK/ORK_01_WALK_005.png",
        "../img/orcs/_PNG/1_ORK/ORK_01_WALK_006.png",
        "../img/orcs/_PNG/1_ORK/ORK_01_WALK_007.png",
        "../img/orcs/_PNG/1_ORK/ORK_01_WALK_008.png",
        "../img/orcs/_PNG/1_ORK/ORK_01_WALK_009.png",
       ];
      //  axe_sound = new Audio("audio/axehit.mp3");



       constructor() {
        super().loadImage("../img/orcs/_PNG/1_ORK/ORK_01_WALK_000.png");
        this.loadImages(this.IMAGES_WALKING);
    
    this.x = Math.random() * 500;
    this.speed = 0.15 + Math.random() * 0.5;

    this.animate();
}

        animate() {
            this.moveLeft();
            setInterval(() => {
                let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 0 % 10, das Modulu ersetzt die nicht vorhandene Stelle im Array und sorgt für eine fließende Reihenfolge für deine Wiederholung.
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
                this.otherDirection = true;
                this.ctx.translate(mo.width, 0);
                this.ctx.scale(-1, 1);
          //      this.axe_sound.play();
            }, 120);

        }

}
