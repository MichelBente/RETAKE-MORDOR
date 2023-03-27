class character extends MoveableObject {
    x = 0;
    y = 0;
    speed = 10;
    speedY = 2;
    acceleration = 1.5;

    IMAGES_WALKING = [
        "../img/elfs/_PNG/3/Elf_03__RUN_000.png",
        "../img/elfs/_PNG/3/Elf_03__RUN_001.png",
        "../img/elfs/_PNG/3/Elf_03__RUN_002.png",
        "../img/elfs/_PNG/3/Elf_03__RUN_003.png",
        "../img/elfs/_PNG/3/Elf_03__RUN_004.png",
        "../img/elfs/_PNG/3/Elf_03__RUN_005.png",
        "../img/elfs/_PNG/3/Elf_03__RUN_006.png",
        "../img/elfs/_PNG/3/Elf_03__RUN_007.png",
        "../img/elfs/_PNG/3/Elf_03__RUN_008.png",
        "../img/elfs/_PNG/3/Elf_03__RUN_009.png",
    ];

    IMAGES_JUMPING = [
        "../img/elfs/_PNG/3/Elf_03__JUMP_000.png",
        "../img/elfs/_PNG/3/Elf_03__JUMP_001.png",
        "../img/elfs/_PNG/3/Elf_03__JUMP_002.png",
        "../img/elfs/_PNG/3/Elf_03__JUMP_003.png",
        "../img/elfs/_PNG/3/Elf_03__JUMP_004.png",
        "../img/elfs/_PNG/3/Elf_03__JUMP_005.png",
        "../img/elfs/_PNG/3/Elf_03__JUMP_006.png",
        "../img/elfs/_PNG/3/Elf_03__JUMP_007.png",
        "../img/elfs/_PNG/3/Elf_03__JUMP_008.png",
        "../img/elfs/_PNG/3/Elf_03__JUMP_009.png",
    ];

    world;
    walking_sound = new Audio("audio/walking.mp3")
    jumoing_sound = new Audio("");


    constructor() {
        super().loadImage("../img/elfs/_PNG/3/Elf_03__IDLE_000.png");
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.applyGravity();
        this.animate();
    }

    animate() {

        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.walking_sound.play();
            }

            if (this.world.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.walking_sound.play();
            }
        
            if (this.world.keyboard.UP && this.x > 0) {
                this.y += this.speedY;
                this.walking_sound.play();
            }


            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);


           setInterval(() => {

               if (this.isAboveGround()) {
                   this.playAnimation(this.IMAGES_JUMPING);
               } else {

                   if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                       this.playAnimation(this.IMAGES_WALKING);
                  }
               }
           }, 60);

    }

    jump() {


    }
}