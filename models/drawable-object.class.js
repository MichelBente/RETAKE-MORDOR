class DrawableObject {
    x = -150;
    y = 80;
    img;
    imageCache = {};
    currentImage = 0;
    height = 196.875 * 1.5;
    width = 375 * 1.5;

    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image'); <img  id="image" src="#"> 
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Orc || this instanceof Orc2 || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            let drawX;
            if (this.otherDirection) {
                drawX = this.x + this.offset.right;
            } else {
                drawX = this.x + this.offset.left;
            }
            ctx.rect(drawX, (this.y + this.offset.top), ((this.width - this.offset.right) - this.offset.left), ((this.height - this.offset.top) - this.offset.bottom));
            ctx.stroke();
        }
    }


    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            img.style = 'transform: scaleX(-1)';
            this.imageCache[path] = img;
        });
    }



}