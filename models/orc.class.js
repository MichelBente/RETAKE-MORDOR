class Orc extends MoveableObject {

    // framex = 210;
    // framey = 120;
    // framew = -390;
    // frameh = -150;
    energy = 50;

    offset = {
        top: 115,
        right: 210,
        bottom: 30,
        left: 150
    };

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

    IMAGES_DIE = [
        "../img/orcs/_PNG/1_ORK/ORK_01_DIE_000.png",
        "../img/orcs/_PNG/1_ORK/ORK_01_DIE_001.png",
        "../img/orcs/_PNG/1_ORK/ORK_01_DIE_002.png",
        "../img/orcs/_PNG/1_ORK/ORK_01_DIE_003.png",
        "../img/orcs/_PNG/1_ORK/ORK_01_DIE_004.png",
        "../img/orcs/_PNG/1_ORK/ORK_01_DIE_005.png",
        "../img/orcs/_PNG/1_ORK/ORK_01_DIE_006.png",
        "../img/orcs/_PNG/1_ORK/ORK_01_DIE_007.png",
        "../img/orcs/_PNG/1_ORK/ORK_01_DIE_008.png",
        "../img/orcs/_PNG/1_ORK/ORK_01_DIE_009.png",

    ]
    //axe_sound = new Audio("audio/axehit.mp3");



    constructor() {
        super().loadImage("../img/orcs/_PNG/1_ORK/ORK_01_WALK_000.png");
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DIE);
        this.x = 300 + Math.random() * 2500;
        this.speed = 0.15 + Math.random() * 0.5;

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);


        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DIE);
            } else
                this.playAnimation(this.IMAGES_WALKING);
            //  this.axe_sound.play();
        }, 1000 / 30);

    }

}
