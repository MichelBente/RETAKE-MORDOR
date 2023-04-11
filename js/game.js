let canvas;
let world;
let keyboard = new Keyboard();
let gameAudio = new Audio ('audio/dark-mystery-trailer-taking-our-time-131566.mp3');
let menuAudio = new Audio ('audio/dark-mystery-trailer-taking-our-time-131566.mp3');
let soundMuted = false;


function init() {
    canvas = document.getElementById('canvas');
}

function runGame() {
    let gameInterval = setInterval(() => {
        setHighscore();
        checkGameOver(gameInterval);
    }, 1000 / 20);
}


function soundMute() {
    let soundIconMenu = document.getElementById('soundIconMenu');
    let soundIconIngame = document.getElementById('soundIconIngame');
    if (soundMuted) {
        soundMuted = false;
        soundIconMenu.src = '/img/icons/volume-up-4-512.png';
        soundIconIngame.src = '/img/icons/volume-up-4-512.png';
        gameAudio.muted = false;
        menuAudio.muted = false;
    } else {
        soundMuted = true;
        soundIconMenu.src = '/img/icons/mute-2-512.png';
        soundIconIngame.src = '/img/icons/mute-2-512.png';
        gameAudio.muted = true;
        menuAudio.muted = true;
    }
    if (world) {
        setWorldAudio();
    }
}

function setWorldAudio() {
    if (soundMuted) {
        world.soundMuted = true;
    } else {
        world.soundMuted = false;
    }
}

function secondPage() {
    document.getElementById('startscreen').classList.add('dnone');
    document.getElementById('secondscreen').classList.remove('dnone');
    
}


function startGame() {
    hideScreens();
    initLevel();
    world = new World(canvas, keyboard);
    runGame();
    menuAudio.pause();
    gameAudio.play();
    gameAudio.loop = true;
    gameAudio.volume = 0.05;
}

function hideScreens() {
    document.getElementById('secondscreen').classList.add('dnone');
    document.getElementById('endscreen').classList.add('dnone');
}

function mobileBtnEvents(){
    document.getElementById('btnJump').addEventListener('touchstart', (e) => {
        if (e.cancelable) {
            e.preventDefault();
            keyboard.SPACE = true;            
        }
    });
    document.getElementById('btnJump').addEventListener('touchstart', (e) => {
        if (e.cancelable) {
            e.preventDefault();
            keyboard.SPACE = false;            
        }
    });
    document.getElementById("btnRight").addEventListener('touchstart', (e) => {
        if (e.cancelable) {
            e.preventDefault();
            keyboard.RIGHT = true;
        }

    });
    document.getElementById("btnRight").addEventListener('touchend', (e) => {
        if (e.cancelable) {
            e.preventDefault();
            keyboard.RIGHT = false;
        }

    });
    document.getElementById("btnLeft").addEventListener('touchstart', (e) => {
        if (e.cancelable) {
            e.preventDefault();
            keyboard.LEFT = true;
        }

    });
    document.getElementById("btnLeft").addEventListener('touchend', (e) => {
        if (e.cancelable) {
            e.preventDefault();
            keyboard.LEFT = false;
        }

    });
    document.getElementById("btnFlash").addEventListener('touchstart', (e) => {
        if (e.cancelable) {
            e.preventDefault();
            keyboard.SHIFT = true;
        }

    });
    document.getElementById("btnFlash").addEventListener('touchend', (e) => {
        if (e.cancelable) {
            e.preventDefault();
            keyboard.SHIFT = false;
        }

    });
    document.getElementById("btnFireball").addEventListener('touchstart', (e) => {
        if (e.cancelable) {
            e.preventDefault();
            keyboard.ENTER = true;
        }

    });
    document.getElementById("btnFireball").addEventListener('touchend', (e) => {
        if (e.cancelable) {
            e.preventDefault();
            keyboard.ENTER = false;
        }

    });
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
    if (e.keyCode == 83) {
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


function endGame() {
    document.getElementById('endscreen').classList.remove('dnone');
}

function restartGame() {
    document.getElementById('endscreen').classList.add('dnone');
    document.getElementById('startscreen').classList.remove('dnone');
    menuAudio.play();
    menuAudio.loop = true;
    menuAudio.volume = 0.025;
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

function openSettings() {
    document.getElementById('startscreen').classList.add('dnone');
    document.getElementById('secondscreen').classList.remove('dnone');
}

function firstScreen() {
    document.getElementById('firstscreen').classList.add('dnone');
    document.getElementById('title').classList.remove('dnone');
    document.getElementById('mute2').classList.add('dnone');
   
}

function openStory() {
    document.getElementById('lore').classList.remove('dnone');
    document.getElementById('buttonStory').classList.add('dnone');
    
}

function closeStory() {
    document.getElementById('lore').classList.add('dnone');
}

function checkGameOver(gameInterval) {
    if (world.character.energy == 0) {
        clearInterval(gameInterval);
        setTimeout(() => {
            document.getElementById('endscreen').classList.remove('dnone');
            document.getElementById('endscreenHeadline').innerHTML = 'YOU LOOSE';
        }, 1000);
    }

    if (world.level.endboss[0].energy == 0) {
        clearInterval(gameInterval);
        setTimeout(() => {
            document.getElementById('endscreen').classList.remove('dnone');
            document.getElementById('endscreenHeadline').innerHTML = 'YOU WIN';
        }, 1000);
    }
}