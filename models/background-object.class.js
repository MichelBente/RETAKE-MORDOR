class BackgroundObject extends MoveableObject {

    width = 720;
    height = 480;

    thunder_sound = new Audio("audio/thunder.");
    nopassing_sound = new Audio("audio/you_shall_not_pass.");
  

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.y = x;
        this.x = 330 - this.height; // 480 -400
        this.thunder_sound.play();
        this.nopassing_sound.play();
       
    }


}

thunder_sound = document.createElement("audio/thunder.mp3");
console.log(thunder_sound.volume); // 1
thunder_sound.volume = 0.2;

