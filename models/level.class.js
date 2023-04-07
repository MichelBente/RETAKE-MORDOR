class Level {
    enemies;
    enemies2;
    clouds;
    backgroundObjects;
    endboss;
    level_end_x = 2500;
    level_start_x = -700;
    portion = [];
    fireball = [];
    spellbook = [];
    flash = [];
   
constructor(enemies, enemies2, clouds, backgroundObjects, endboss, portion, fireball, spellbook, flash,) {
this.enemies = enemies;
this.enemies2 = enemies2;
this.clouds = clouds;
this.backgroundObjects = backgroundObjects;
this.endboss = endboss;
this.portion = portion;
this.fireball = fireball;
this.spellbook = spellbook;
this.flash = flash;
    }
}