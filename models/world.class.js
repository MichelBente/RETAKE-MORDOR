class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = -100;
    StatusBar = new StatusBar();
    StatusBar2 = new StatusBar2();
    fireball = [];
    portion = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        this.run();
        this.checkThrowObjects();
        
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
    }

    checkThrowObjects() {
        if (this.keyboard.specialAttack) {
            let fireball = new Fireball(this.character.x, this.character.y);
            this.fireball.push(fireball);
        }
    }


    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                console.log('collision with', enemy);
                this.character.hit(enemy);
                console.log('collision with', this.character.energy);
                this.StatusBar.setPercentage(this.character.energy);
                if (enemy.isColliding(this.character)); {
                    enemy.hit(this.character);
                    console.log('orc-hp', enemy.energy); }
                    if (this.character.isColliding(this.portion)); {
                        character.collect(this.portion);
                        portion.slice(1);
                        console.log('Mana-bar', mana.energy);
                }
                this.fireball.forEach((fireball) => {
                    if (enemy.isColliding(fireball)) {
                        enemy.hit(fireball);
                    }
                });
            }
        }, 200);
    }
    ;


    // checkCollisions() {
    //     setInterval(() => {
    //       this.level.enemies.forEach((enemy) => {
    //         if (this.character.isColliding(enemy)) {
    //           this.character.hit();
    //           this.StatusBar.setPercentage(this.character.energy);
    //         }
    //       });
    //     }, 200);
    //   }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.camera_x, 0); // Back
        this.addToMap(this.StatusBar);
        this.addToMap(this.StatusBar2);
        this.ctx.translate(this.camera_x, 0);  //Front

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.enemies2);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.level.portion);
        this.addObjectsToMap(this.level.fireball);



        this.ctx.translate(-this.camera_x, 0);

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
    };

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}

