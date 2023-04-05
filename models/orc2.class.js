class Orc2 extends MoveableObject {
    energy = 10;
    damage = 1;
    // framex = 210;
    // framey = 120;
    // framew = -390;
    // frameh = -150;
    offset = {
        top: 115,
        right: 210,
        bottom: 30,
        left: 150
    };

    IMAGES_WALKING = [
        "../img/orcs/_PNG/3_ORK/ORK_03_WALK_000.png",
        "../img/orcs/_PNG/3_ORK/ORK_03_WALK_001.png",
        "../img/orcs/_PNG/3_ORK/ORK_03_WALK_002.png",
        "../img/orcs/_PNG/3_ORK/ORK_03_WALK_003.png",
        "../img/orcs/_PNG/3_ORK/ORK_03_WALK_004.png",
        "../img/orcs/_PNG/3_ORK/ORK_03_WALK_005.png",
        "../img/orcs/_PNG/3_ORK/ORK_03_WALK_006.png",
        "../img/orcs/_PNG/3_ORK/ORK_03_WALK_007.png",
        "../img/orcs/_PNG/3_ORK/ORK_03_WALK_008.png",
        "../img/orcs/_PNG/3_ORK/ORK_03_WALK_009.png",
    ];

    IMAGES_DIE = [
        "../img/orcs/_PNG/3_ORK/ORK_03_DIE_000.png",
        "../img/orcs/_PNG/3_ORK/ORK_03_DIE_001.png",
        "../img/orcs/_PNG/3_ORK/ORK_03_DIE_002.png",
        "../img/orcs/_PNG/3_ORK/ORK_03_DIE_003.png",
        "../img/orcs/_PNG/3_ORK/ORK_03_DIE_004.png",
        "../img/orcs/_PNG/3_ORK/ORK_03_DIE_005.png",
        "../img/orcs/_PNG/3_ORK/ORK_03_DIE_006.png",
        "../img/orcs/_PNG/3_ORK/ORK_03_DIE_007.png",
        "../img/orcs/_PNG/3_ORK/ORK_03_DIE_008.png",
        "../img/orcs/_PNG/3_ORK/ORK_03_DIE_009.png",
       
    ];
     grawl_sound = new Audio("audio/orc_crawl.mp3");
    // sword_sound = new Audio("audio/swordhit.mp3");

    constructor() {
        super().loadImage("../img/orcs/_PNG/3_ORK/ORK_03_IDLE_000.png");
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DIE);
        this.x = 300 + Math.random() * 400;
        this.speed = 0.15 + Math.random() * 0.25;

        this.animate();
    }

    animate() {
        let moveInterval = setInterval(() => {
            this.moveLeft();
            this.grawl_sound.play();
        }, 1000 / 60);


        let animationInterval = setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
            if (this.isDead()) {
               clearInterval(moveInterval);
            clearInterval(animationInterval);
            this.die();
            this.grawl_sound.pause();
             }
        }, 1000 / 15);
    }
}
