class Endboss extends MoveableObject {
    height = 196.875 * 3.0;
    width = 375 * 3.0;
    energy = 50;
    x = 100;
    y = -80;
    speed = 0.5;
    damage = 20;
    // framex = 230;
    // framey = 250;
    // framew = -410;
    // frameh = -300;
    offset = {
        top: 250,
        right: 400,
        bottom: 50,
        left: 350,
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

    IMAGES_ATTACK = [
        "../img/orcs/_PNG/2_ORK/ORK_02_ATTAK_000.png",
        "../img/orcs/_PNG/2_ORK/ORK_02_ATTAK_001.png",
        "../img/orcs/_PNG/2_ORK/ORK_02_ATTAK_002.png",
        "../img/orcs/_PNG/2_ORK/ORK_02_ATTAK_003.png",
        "../img/orcs/_PNG/2_ORK/ORK_02_ATTAK_004.png",
        "../img/orcs/_PNG/2_ORK/ORK_02_ATTAK_005.png",
        "../img/orcs/_PNG/2_ORK/ORK_02_ATTAK_006.png",
        "../img/orcs/_PNG/2_ORK/ORK_02_ATTAK_007.png",
        "../img/orcs/_PNG/2_ORK/ORK_02_ATTAK_008.png",
        "../img/orcs/_PNG/2_ORK/ORK_02_ATTAK_009.png",
    ];

    IMAGES_DIE = [
        "../img/orcs/_PNG/2_ORK/ORK_02_DIE_000.png",
        "../img/orcs/_PNG/2_ORK/ORK_02_DIE_001.png",
        "../img/orcs/_PNG/2_ORK/ORK_02_DIE_002.png",
        "../img/orcs/_PNG/2_ORK/ORK_02_DIE_003.png",
        "../img/orcs/_PNG/2_ORK/ORK_02_DIE_004.png",
        "../img/orcs/_PNG/2_ORK/ORK_02_DIE_005.png",
        "../img/orcs/_PNG/2_ORK/ORK_02_DIE_006.png",
        "../img/orcs/_PNG/2_ORK/ORK_02_DIE_007.png",
        "../img/orcs/_PNG/2_ORK/ORK_02_DIE_008.png",
        "../img/orcs/_PNG/2_ORK/ORK_02_DIE_009.png",
    ];


    // horn_sound = new Audio("audio/horn.mp3");

    constructor() {
        super().loadImage("../img/orcs/_PNG/2_ORK/ORK_02_IDLE_000.png");
        this.x = 2500;
        this.y = -190,
        this.speed = 0.05 + Math.random() + 0.5;

        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_DIE);

        this.x = 2500;
        this.animate();
    }



    animate() {
        const animationInterval = setInterval(() => {
            if (this.isDead()) {
                clearInterval(animationInterval);
                this.die();

            } else {

                let moveInterval = setInterval(() => {
                    this.moveLeft();
                }, 1000 / 60);

                let animationWalkInterval = setInterval(() => {
                    if (this.isDead()) {
                        clearInterval(moveInterval);
                        clearInterval(animationWalkInterval);
                        clearInterval(animationInterval);
                        this.die();
                    } else {
                        this.playAnimation(this.IMAGES_WALKING);
                    }
                }, 1000 / 10)

                setTimeout(() => {
                    clearInterval(moveInterval);
                    clearInterval(animationWalkInterval);

                    let animationAttackInterval = setInterval(() => {
                        if (this.isDead()) {
                            clearInterval(animationAttackInterval);
                            clearInterval(animationInterval);
                            this.die();
                        } else {
                            this.playAnimation(this.IMAGES_ATTACK);
                        }
                    }, 1000 / 20);
                    setTimeout(() => {
                        clearInterval(animationAttackInterval);
                    }, 2000);

                }, 4000);
            }
        }, 6000);
    }
}


//         setInterval(() => {
//             this.playAnimation(this.IMAGES_WALKING);
//             this.playAnimation(this.IMAGES_ATTACK);
//             this.playAnimation(this.IMAGES_DIE);
//             //  this.horn_sound.play();
//         }, 60);


//     }


// }