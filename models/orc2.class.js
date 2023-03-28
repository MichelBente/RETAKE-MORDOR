class Orc2 extends MoveableObject {

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
    // grawl_sound = new Audio("audio/orc_crawl.mp3");
    // sword_sound = new Audio("audio/swordhit.mp3");

    constructor() {
        super().loadImage("../img/orcs/_PNG/3_ORK/ORK_03_WALK_000.png");
        this.loadImages(this.IMAGES_WALKING);

        this.x = Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.5;

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);


        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
            //      this.axe_sound.play();
        }, 120);

    }

}

