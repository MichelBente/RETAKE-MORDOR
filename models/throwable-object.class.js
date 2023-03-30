class ThrowableObject extends MoveableObject {



IMAGES_FIREBALL = [
    "../img/stuff/FIREBALL/1.png",
    "../img/stuff/FIREBALL/2.png",
    "../img/stuff/FIREBALL/3.png",
    "../img/stuff/FIREBALL/4.png",
    "../img/stuff/FIREBALL/5.png",
    "../img/stuff/FIREBALL/6.png",
    "../img/stuff/FIREBALL/7.png",
    "../img/stuff/FIREBALL/8.png",
    "../img/stuff/FIREBALL/9.png",
    "../img/stuff/FIREBALL/10.png",
    "../img/stuff/FIREBALL/11.png",
    "../img/stuff/FIREBALL/12.png",
    "../img/stuff/FIREBALL/13.png",
    "../img/stuff/FIREBALL/14.png",
    "../img/stuff/FIREBALL/15.png",
    "../img/stuff/FIREBALL/16.png",
    "../img/stuff/FIREBALL/17.png",
    "../img/stuff/FIREBALL/18.png",
    "../img/stuff/FIREBALL/19.png",
    "../img/stuff/FIREBALL/20.png",
    "../img/stuff/FIREBALL/21.png",
    "../img/stuff/FIREBALL/22.png",
    "../img/stuff/FIREBALL/23.png",
    "../img/stuff/FIREBALL/24.png",
    "../img/stuff/FIREBALL/25.png",
    "../img/stuff/FIREBALL/26.png",
    "../img/stuff/FIREBALL/27.png",
    "../img/stuff/FIREBALL/28.png",
    "../img/stuff/FIREBALL/29.png",
    "../img/stuff/FIREBALL/30.png",
    "../img/stuff/FIREBALL/31.png",
    "../img/stuff/FIREBALL/32.png",
    "../img/stuff/FIREBALL/33.png",
    "../img/stuff/FIREBALL/34.png",
    "../img/stuff/FIREBALL/35.png",
    "../img/stuff/FIREBALL/36.png",
    "../img/stuff/FIREBALL/37.png",
    "../img/stuff/FIREBALL/38.png",
    "../img/stuff/FIREBALL/39.png",
   
];


constructor(x,y) {
    
    super().loadImages(this.IMAGES_FIREBALL);
    this.x = x;
    this.y = y;
    this.height = 190;
    this.width = 300;  
    this.throw();
      
}

throw() {
    this.x = x;
    this.y = y;
    this.speedY = 10;
    this.applyGravity();
    setInterval(() => {
        this.x += 0;
    }, 25);
}

}