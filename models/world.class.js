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

        new BackgroundObject("img/backgrounds/PNG/game_background_4/game_background_4.png", 40, 0),
        new BackgroundObject("img/backgrounds/PNG/game_background_2/layers/back_decor.png",20, 0),
        new BackgroundObject("img/backgrounds/PNG/game_background_2/layers/back_decor.png",0, 0),
        new BackgroundObject("img/backgrounds/PNG/game_background_2/layers/back_decor.png",50, 0),
        new BackgroundObject("img/backgrounds/PNG/game_background_2/layers/front_decor.png",60, 80),
        new BackgroundObject("img/backgrounds/PNG/game_background_2/layers/front_decor.png",80, 0),
        
       
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
        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
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
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}