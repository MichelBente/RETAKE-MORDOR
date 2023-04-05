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
    spellbook = [];
    mana = 40;
    flash = [];

    sword_sound = new Audio("audio/swordhit.mp3");
    axe_sound = new Audio ("audio/axehit.mp3");
    magicalstrike_sound = new Audio ("audio/magicalstrike.mp3");


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
        if (this.keyboard.specialAttack && this.character.mana > 15 && !this.coolDown()) {
            let attack = new Fireball(this.character.x, this.character.y);
            this.fireball.push(attack);
            this.character.mana -= 20;
            this.StatusBar2.setPercentage(this.character.mana);
            this.lastAttack = new Date().getTime();
            setTimeout(() => {
                this.fireball.splice(-1)
            }, 1800);

        }  if (this.keyboard.SPACE && this.character.mana >= 5 && !this.coolDown()) {
            let attack = new Flash(this.character.x, this.character.y);
            this.flash.push(attack);
            this.character.mana -= 5;
            this.StatusBar2.setPercentage(this.character.mana);
            this.lastAttack = new Date().getTime();
            setTimeout(() => {
                this.flash.splice(-1)
            }, 1000);
        }
    }

    checkCollisions() {
       this.collisionOrcs();
       this.collisionOrcs2();
       this.collisionEndboss();
       this.collisionPortion();
       this.collisionSpellbooks();
    }
    

    collisionEndboss() {
        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss)) {
                this.character.hit(endboss);
                this.sword_sound.play();
                this.StatusBar.setPercentage(this.character.energy);
            }
            this.fireball.forEach((attack) => {
                if (endboss.isColliding(attack)) {
                    endboss.hit(attack);
                    attack.hit(endboss);
                    this.increasePoints(2000);
                }
            });
            this.flash.forEach((attack) => {
                if (endboss.isColliding(attack)) {
                    endboss.hit(attack);
                    attack.hit(endboss);
                    this.increasePoints(1500);
                }
            });
        })
    }

    collisionOrcs() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit(enemy);
                this.axe_sound.play();
                this.StatusBar.setPercentage(this.character.energy);
            }
            this.fireball.forEach((attack) => {
                if (enemy.isColliding(attack)) {
                    enemy.hit(attack);
                    attack.hit(enemy);
                    this.increasePoints(1000);
                }
            });
            this.flash.forEach((attack) => {
                if (enemy.isColliding(attack)) {
                    enemy.hit(attack);
                    attack.hit(enemy);
                    this.increasePoints(500);
                }
            });
        })
    }

    collisionOrcs2() {
        this.level.enemies2.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit(enemy);
                this.axe_sound.play();
                this.StatusBar.setPercentage(this.character.energy);
            }
            this.fireball.forEach((attack) => {
                if (enemy.isColliding(attack)) {
                    enemy.hit(attack);
                    attack.hit(enemy);
                    this.increasePoints(1000);
                }
            });
            this.flash.forEach((attack) => {
                if (enemy.isColliding(attack)) {
                    enemy.hit(attack);
                    attack.hit(enemy);
                    this.increasePoints(500);
                }
            });
        })
    }

    

coolDown() {
    let timePassed = new Date().getTime() -this.lastAttack;
    timePassed = timePassed /1000;
    return timePassed < 0.5;
}

collisionPortion() {
    this.level.portion.forEach((portion) => {
        if (this.character.isColliding(portion)) {
            this.character.collect(portion)
            portion.collect();
            this.level.portion.splice(this.level.portion.indexOf(portion), 1);
            this.StatusBar2.setPercentage(this.character.mana)
            this.increasePoints(900);
        }
    });
}



collisionSpellbooks() {
    this.level.spellbook.forEach((spellbook) => {
        if (this.character.isColliding(spellbook)) {
            this.magicalstrike_sound.play();
            this.level.spellbook.splice(this.level.spellbook.indexOf(spellbook), 1);
            this.increasePoints(2500);
        }
    })
}

increasePoints(n) {
    this.points += +n;
}
    


updateScore() {
    this.score = this.points;
    this.score += this.character.points;
        this.level.enemies.forEach((enemy) => {
            this.score += enemy.points;

        })
        this.level.endboss.forEach((endboss) => {
            this.score += endboss.points;
        })
    }



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
    this.addObjectsToMap(this.fireball);
    this.addObjectsToMap(this.level.spellbook);
    this.addObjectsToMap(this.flash);



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

