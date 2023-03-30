class Endboss extends MoveableObject {

    height = 600;
    width = 600;
    x = 200;
    y = -180;
    speed = 0.5; 
    // framex = 230;
    // framey = 250;
    // framew = -410;
    // frameh = -300;
    offset = {
        top: 200,
        right: 330,
        bottom: 50,
        left: 250
    };

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
   // horn_sound = new Audio("audio/horn.mp3");

    constructor() {
        super().loadImage("../img/orcs/_PNG/2_ORK/ORK_02_WALK_000.png");
        this.loadImages(this.IMAGES_WALKING);
        
        this.x = 2500;
        this.animate();
    }

 

    animate() {
        setInterval(() => {
            this.moveLeft();
         //   this.horn_sound.play();
        }, 1000 / 60);

       
        setInterval(() => {
          this.playAnimation(this.IMAGES_WALKING);
        //  this.horn_sound.play();
        }, 60);

    }



}