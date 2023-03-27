class Endboss extends MoveableObject {

    height = 800;
    width = 800;
    y = -300;
    speed = 2; 

    IMAGES_WALKING = [
        "../img/orcs/_PNG/2_ORK/ORK_02_WALK_000.png",
        "../img/orcs/_PNG/2_ORK/ORK_02_WALK_001.png",
        "../img/orcs/_PNG/2_ORK/ORK_02_WALK_002.png",
        "../img/orcs/_PNG/2_ORK/ORK_02_WALK_003.png",
        "../img/orcs/_PNG/2_ORK/ORK_02_WALK_004.png",
        "../img/orcs/_PNG/2_ORK/ORK_02_WALK_005.png",
        "../img/orcs/_PNG/2_ORK/ORK_02_WALK_006.png",
        "../img/orcs/_PNG/2_ORK/ORK_02_WALK_007.png",
        "../img/orcs/_PNG/2_ORK/ORK_02_WALK_008.png",
        "../img/orcs/_PNG/2_ORK/ORK_02_WALK_009.png",
    ];
   // horn_sound = new Audio("audio/bosssound.mp3");

    constructor() {
        super().loadImage("../img/orcs/_PNG/2_ORK/ORK_02_WALK_000.png");
        this.loadImages(this.IMAGES_WALKING);
        this.x = 2500;
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
        //        this.horn_sound.play();
            }, 60);

        }



}