class BackgroundObject extends MoveableObject {

    width = 720;
    height = 480;

   // thunder_sound = new Audio("audio/thunder.mp3");
  //  nopassing_sound = new Audio("audio/you_shall_not_pass.mp3");
  

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.y = x;
        this.x = 330 - this.height; // 480 -400
    //    this.thunder_sound.play();
     //   this.nopassing_sound.play();
       
    }


}


