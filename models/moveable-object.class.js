class MoveableObject {
    x = -50;
    y = 80;
    img;
    height= 196.875 *1.5;
    width= 375 * 1.5;

    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image'); <img  id="image" src="#"> 
        this.img.src = path;
    }


     moveRight() {
        console.log('Moving right');
    }

     moveLeft() {
        console.log('Moving left');
}

}