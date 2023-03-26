class character extends MoveableObject {
x = -50;
speed = 10;
    IMAGES_WALKING = [
        "../img/elfs/_PNG/3/Elf_03__WALK_000.png",
        "../img/elfs/_PNG/3/Elf_03__WALK_001.png",
        "../img/elfs/_PNG/3/Elf_03__WALK_002.png",
        "../img/elfs/_PNG/3/Elf_03__WALK_003.png",
        "../img/elfs/_PNG/3/Elf_03__WALK_004.png",
        "../img/elfs/_PNG/3/Elf_03__WALK_005.png",
        "../img/elfs/_PNG/3/Elf_03__WALK_006.png",
        "../img/elfs/_PNG/3/Elf_03__WALK_007.png",
        "../img/elfs/_PNG/3/Elf_03__WALK_008.png",
        "../img/elfs/_PNG/3/Elf_03__WALK_009.png",
    ];
    world;
    walking_sound = new Audio("audio/walking.mp3")

  

    constructor() {
        super().loadImage("../img/elfs/_PNG/3/Elf_03__WALK_000.png");
        this.loadImages(this.IMAGES_WALKING);

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
                this.world.camera_x = -this.x +100;
            }, 1000/ 60);

        
            setInterval(() => {

                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                  //walk anmiation
                this.playAnimation(this.IMAGES_WALKING);
                }
            }, 60);

        }

        jump() {


        }
    }