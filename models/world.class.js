class World {
    character = new character();
    enemies = [
        new Orc(),
        new Orc(),
        new Orc(),
    ];
    clouds = [
        new Cloud()
    ];
    backgroundObjects = [
        new BackgroundObject("./img/backgrounds/_PNG/game_background_4/layers/battleground.png")
    ];
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }



    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addToMap(this.character);

        this.enemies.forEach(enemy => {
            this.addToMap(enemy);
        });
        this.clouds.forEach(cloud => {
            this.addToMap(cloud);
        });

        this.backgroundObjects.forEach(backgroundObject => {
            this.addToMap(backgroundObject);
        });

        // draw wird immerwieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }


    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}