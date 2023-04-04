class Character extends MoveableObject {
    y = 30;
    speed = 20;
    damage = 10;
    otherDirection = false;
    // framex = 220;
    // framey = 90;
    // framew = -440;
    // frameh = -140;
    energy = 100;
    mana = 20;
    speedx = 30;

    offset = {
        top: 93,
        right: 220,
        bottom: 50,
        left: 220
    };

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

    IMAGES_IDLE = [
        "../img/elfs/_PNG/3/Elf_03__IDLE_000.png",
        "../img/elfs/_PNG/3/Elf_03__IDLE_001.png",
        "../img/elfs/_PNG/3/Elf_03__IDLE_002.png",
        "../img/elfs/_PNG/3/Elf_03__IDLE_003.png",
        "../img/elfs/_PNG/3/Elf_03__IDLE_004.png",
        "../img/elfs/_PNG/3/Elf_03__IDLE_005.png",
        "../img/elfs/_PNG/3/Elf_03__IDLE_006.png",
        "../img/elfs/_PNG/3/Elf_03__IDLE_007.png",
        "../img/elfs/_PNG/3/Elf_03__IDLE_008.png",
        "../img/elfs/_PNG/3/Elf_03__IDLE_009.png",
    ];

    IMAGES_HURT = [
        "../img/elfs/_PNG/3/Elf_03__HURT_000.png",
        "../img/elfs/_PNG/3/Elf_03__HURT_001.png",
        "../img/elfs/_PNG/3/Elf_03__HURT_002.png",
        "../img/elfs/_PNG/3/Elf_03__HURT_003.png",
        "../img/elfs/_PNG/3/Elf_03__HURT_004.png",
        "../img/elfs/_PNG/3/Elf_03__HURT_005.png",
        "../img/elfs/_PNG/3/Elf_03__HURT_006.png",
        "../img/elfs/_PNG/3/Elf_03__HURT_007.png",
        "../img/elfs/_PNG/3/Elf_03__HURT_008.png",
        "../img/elfs/_PNG/3/Elf_03__HURT_009.png",
    ];

    IMAGES_DEAD = [
        "../img/elfs/_PNG/3/Elf_03__DIE_000.png",
        "../img/elfs/_PNG/3/Elf_03__DIE_001.png",
        "../img/elfs/_PNG/3/Elf_03__DIE_002.png",
        "../img/elfs/_PNG/3/Elf_03__DIE_003.png",
        "../img/elfs/_PNG/3/Elf_03__DIE_004.png",
        "../img/elfs/_PNG/3/Elf_03__DIE_005.png",
        "../img/elfs/_PNG/3/Elf_03__DIE_006.png",
        "../img/elfs/_PNG/3/Elf_03__DIE_007.png",
        "../img/elfs/_PNG/3/Elf_03__DIE_008.png",
        "../img/elfs/_PNG/3/Elf_03__DIE_009.png",
    ];

    IMAGES_ATTACK = [
        "../img/elfs/_PNG/3/Elf_03__ATTACK_000.png",
        "../img/elfs/_PNG/3/Elf_03__ATTACK_001.png",
        "../img/elfs/_PNG/3/Elf_03__ATTACK_002.png",
        "../img/elfs/_PNG/3/Elf_03__ATTACK_003.png",
        "../img/elfs/_PNG/3/Elf_03__ATTACK_004.png",
        "../img/elfs/_PNG/3/Elf_03__ATTACK_005.png",
        "../img/elfs/_PNG/3/Elf_03__ATTACK_006.png",
        "../img/elfs/_PNG/3/Elf_03__ATTACK_007.png",
        "../img/elfs/_PNG/3/Elf_03__ATTACK_008.png",
        "../img/elfs/_PNG/3/Elf_03__ATTACK_009.png",
    ];




    world;
    walking_sound = new Audio("audio/walking.mp3")
    jumping_sound = new Audio("audio/jump.mp3");
    hurt_sound = new Audio("audio/hurt1.mp3");
    die_sound = new Audio("audio/die.mp3");


    constructor() {
        super().loadImage("../img/elfs/_PNG/3/Elf_03__IDLE_000.png");
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_IDLE);
        this.applyGravity();
        this.animate();
    }

    animate() {

        setInterval(() => {
            this.playAnimation(this.IMAGES_IDLE);
            this.walking_sound.pause();
            
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
                this.walking_sound.play();
            }

            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
                this.walking_sound.play();
            }

            if (this.world.keyboard.UP && !this.isAboveGround()) {
                this.jump();
                this.jumping_sound.play();
            }

            this.world.camera_x = -this.x + 100;
        }, 1000 / 10);


        let animation = setInterval(() => {
            this.playAnimation(this.IMAGES_IDLE);
      
            if (this.isDead()) {
              clearInterval(animation);
              this.die();
            } else if (this.isHurt()) {
              this.playAnimation(this.IMAGES_HURT);
            }
      
            if (this.isAboveGround() || this.speedY > 0) {
              this.playAnimation(this.IMAGES_JUMPING);
            } else {
              if (this.world.keyboard.right || this.world.keyboard.left) {
                this.playAnimation(this.IMAGES_WALKING);
              }
            }
          }, 1000 / 15);
    }
      
        jump() {
          this.speedY = 30;
        }

        collect(mana) {
          this.mana += mana
          if (this.mana > 100) {
              this.mana = 100;
          }
      }


      }
      
