let canvas;
let world;
let keyboard = new keyboard();



function init() {
canvas = document.getElementById('canvas');
world = new World(canvas);




console.log('My Character is', world.character);

}

window.addEventListener("keydown"), (e) => {
    if(e.keyCode == 39) {
        keyboard.RIGHT =  true;
    }
    if(e.keyCode == 37) {
        keyboard.LEFT =  true;
    }
    if(e.keyCode == 38) {
        keyboard.UP =  true;
    }
    if(e.keyCode == 40) {
        keyboard.DOWN =  true;
    }
    if(e.keyCode == 32) {
        keyboard.SPACE  =  true;
    }




console.log(e);
}