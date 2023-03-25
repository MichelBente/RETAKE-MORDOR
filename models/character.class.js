class character extends MoveableObject {


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

    currentImage = 0;

    constructor() {
        super().loadImage("../img/elfs/_PNG/3/Elf_03__WALK_000.png");
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }

        animate() {

            setInterval(() => {
                let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 0 % 10, das Modulu ersetzt die nicht vorhandene Stelle im Array und sorgt für eine fließende Reihenfolge für deine Wiederholung.
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }, 100);

        }

        jump() {


        }
    }