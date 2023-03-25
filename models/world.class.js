class World {
    character = new character();
    enemies = [
        new Orc(),
    ];
    enemies2 = [
        new Orc2(),
        new Orc2(),
    ];

    clouds = [
        new Cloud()
    ];
    backgroundObjects = [

        new BackgroundObject("img/backgrounds/PNG/game_background_4/game_background_4.png", 0, 0),
        new BackgroundObject("img/backgrounds/PNG/game_background_2/layers/back_decor.png", 0, 0),
        new BackgroundObject("img/backgrounds/PNG/game_background_4/layers/ground_decor.png", -300, 0),
        new BackgroundObject("img/backgrounds/PNG/game_background_3/layers/ground_decor.png", 0, 0),
        new BackgroundObject("img/backgrounds/PNG/game_background_1/layers/ground_decor.png", 0, 0),
        new BackgroundObject("img/backgrounds/PNG/game_background_2/layers/front_decor.png", 20, 00),
        new BackgroundObject("img/backgrounds/PNG/game_background_2/layers/front_decor.png", 40, 0),

    ];
    canvas;
    ctx;
    keyboard;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
         this.character.world = this;

    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.enemies2);
        this.addObjectsToMap(this.clouds);


        // draw wird immerwieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    addToMap(mo) {
            if (mo.otherDirection) {
                this.ctx.save();
                this.ctx.translate(mo.img.width, 0);
                this.ctx.scale(-1, 1);
            }



        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
            if (mo.otherDirection) {
                this.ctx.restore();
            }
    }
}