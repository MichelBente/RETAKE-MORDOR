let level1;
function initLevel() {
level1 = new Level(
    [
        new Orc(),
        new Orc(),
        new Orc(),
        new Orc(),
        new Orc(),
        new Orc(),
    ],

    [
        new Orc2(),
        new Orc2(),
        new Orc2(),
        new Orc2(),
        new Orc2(),
        new Orc2(),
    ],
    [
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),

    ],
    [
        new BackgroundObject("./img/backgrounds/PNG/game_background_4/game_background_4.png", -720),
        new BackgroundObject("./img/backgrounds/PNG/game_background_2/layers/back_decor.png", -720),
        new BackgroundObject("./img/backgrounds/PNG/game_background_4/layers/ground_decor.png", -720),
        new BackgroundObject("./img/backgrounds/PNG/game_background_3/layers/ground_decor.png", -720),
        new BackgroundObject("./img/backgrounds/PNG/game_background_1/layers/ground_decor.png", -720),
        new BackgroundObject("./img/backgrounds/PNG/game_background_2/layers/front_decor.png", -740),
        new BackgroundObject("./img/backgrounds/PNG/game_background_2/layers/front_decor.png", -720),

        new BackgroundObject("./img/backgrounds/PNG/game_background_4/game_background_4.png", 0),
        new BackgroundObject("./img/backgrounds/PNG/game_background_2/layers/back_decor.png", 0),
        new BackgroundObject("./img/backgrounds/PNG/game_background_4/layers/ground_decor.png", -300),
        new BackgroundObject("./img/backgrounds/PNG/game_background_3/layers/ground_decor.png", 0),
        new BackgroundObject("./img/backgrounds/PNG/game_background_1/layers/ground_decor.png", 0),
        new BackgroundObject("./img/backgrounds/PNG/game_background_2/layers/front_decor.png", 20),
        new BackgroundObject("./img/backgrounds/PNG/game_background_2/layers/front_decor.png", 40),

        new BackgroundObject("./img/backgrounds/PNG/game_background_4/game_background_4.png", 720),
        new BackgroundObject("./img/backgrounds/PNG/game_background_2/layers/back_decor.png", 720),
        new BackgroundObject("./img/backgrounds/PNG/game_background_4/layers/ground_decor.png", 720),
        new BackgroundObject("./img/backgrounds/PNG/game_background_3/layers/ground_decor.png", 720),
        new BackgroundObject("./img/backgrounds/PNG/game_background_1/layers/ground_decor.png", 720),
        new BackgroundObject("./img/backgrounds/PNG/game_background_2/layers/front_decor.png", 720),
        new BackgroundObject("./img/backgrounds/PNG/game_background_2/layers/front_decor.png", 720),

        new BackgroundObject("./img/backgrounds/PNG/game_background_4/game_background_4.png", 720 * 2),
        new BackgroundObject("./img/backgrounds/PNG/game_background_2/layers/back_decor.png", 720 * 2),
        new BackgroundObject("./img/backgrounds/PNG/game_background_4/layers/ground_decor.png", 720 * 2),
        new BackgroundObject("./img/backgrounds/PNG/game_background_3/layers/ground_decor.png", 720 * 2),
        new BackgroundObject("./img/backgrounds/PNG/game_background_1/layers/ground_decor.png", 720 * 2),
        new BackgroundObject("./img/backgrounds/PNG/game_background_2/layers/front_decor.png", 720 * 2),
        new BackgroundObject("./img/backgrounds/PNG/game_background_2/layers/front_decor.png", 720 * 2),

        new BackgroundObject("./img/backgrounds/PNG/game_background_4/game_background_4.png", 720 * 3),
        new BackgroundObject("./img/backgrounds/PNG/game_background_2/layers/back_decor.png", 720 * 3),
        new BackgroundObject("./img/backgrounds/PNG/game_background_4/layers/ground_decor.png", 720 * 3),
        new BackgroundObject("./img/backgrounds/PNG/game_background_3/layers/ground_decor.png", 720 * 3),
        new BackgroundObject("./img/backgrounds/PNG/game_background_1/layers/ground_decor.png", 720 * 3),
        new BackgroundObject("./img/backgrounds/PNG/game_background_2/layers/front_decor.png", 720 * 3),
        new BackgroundObject("./img/backgrounds/PNG/game_background_2/layers/front_decor.png", 720 * 3),

        new BackgroundObject("./img/backgrounds/PNG/game_background_4/game_background_4.png", 720 * 4),
        new BackgroundObject("./img/backgrounds/PNG/game_background_2/layers/back_decor.png", 720 * 4),
        new BackgroundObject("./img/backgrounds/PNG/game_background_4/layers/ground_decor.png", 720 * 4),
        new BackgroundObject("./img/backgrounds/PNG/game_background_3/layers/ground_decor.png", 720 * 4),
        new BackgroundObject("./img/backgrounds/PNG/game_background_1/layers/ground_decor.png", 720 * 4),
        new BackgroundObject("./img/backgrounds/PNG/game_background_2/layers/front_decor.png", 720 * 4),
        new BackgroundObject("./img/backgrounds/PNG/game_background_2/layers/front_decor.png", 720 * 4),
    ],
    [
        new Endboss(),
    ],
    [
        new Portion(),
        new Portion(),
        new Portion(),
        new Portion(),
        new Portion(),
        new Portion(),
        new Portion(),
    ],
    [
        new Fireball(),
        new Fireball(),
        new Fireball(),
        new Fireball(),
        new Fireball(),
        new Fireball(),
        new Fireball(),
        new Fireball(),
        new Fireball(),
        new Fireball(),
        new Fireball(),

    ],
    [
        new Spellbook(),
        new Spellbook(),
        new Spellbook(),
        new Spellbook(),
        new Spellbook(),
        new Spellbook(),
    ],
    [
        new Flash(),
        new Flash(),
        new Flash(),
        new Flash(),
        new Flash(),
        new Flash(),
        new Flash(),
        new Flash(),
        new Flash(),
    ]
); 
}