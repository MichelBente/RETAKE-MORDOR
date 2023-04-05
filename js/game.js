let canvas;
let world;
let keyboard = new Keyboard();

war_sound = new Audio("audio/audio/dark-mystery-trailer-taking-our-time-131566.mp3")

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard); 

}

window.addEventListener("keydown", (e) => {
   // console.log(e.keyCode);
    if (e.keyCode == 68) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 65) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 87) {
        keyboard.UP = true;
    }
    if (e.keyCode == 83 ) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (e.keyCode == 13) {
        keyboard.specialAttack = true;
    }
});


window.addEventListener("keyup", (e) => {
    if (e.keyCode == 68) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 65) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 87) {
        keyboard.UP = false;
    }
    if (e.keyCode == 83) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 13) {
        keyboard.specialAttack = false;
    }
});

function startGame() {
    document.getElementById('startscreen').classList.add('dnone');
    this.war_sound.play();
}

function endGame() {
    document.getElementById('endscreen').classList.remove('dnone');
}

function restartGame() {
    document.getElementById('endscreen').classList.add('dnone');
    document.getElementById('startscreen').classList.remove('dnone');
    this.war_sound.play();
}

function setHighscore() {
    let score = world.score;
    if (score >= 0) {
        highscore = '0' + '0' + '0' + '0' + '0' + '0' + score;
    }
    if (score >= 10) {
        highscore = '0' + '0' + '0' + '0' + '0' + score;
    }
    if (score >= 100) {
        highscore = '0' + '0' + '0' + '0' + score;
    }
    if (score >= 1000) {
        highscore = '0' + '0' + '0' + score;
    }
    if (score >= 10000) {
        highscore = '0' + '0' + score;
    }
    if (score >= 100000) {
        highscore = score;
    }
    if (score >= 1000000) {
        highscore = score;
    }
    document.getElementById('score').innerHTML = highscore;
}

