class StatusBar extends DrawableObject {



    IMAGES_HPBAR = [
        "./img/stuff/HP_BAR/HP_BAR/HP_bar_00.png",
        "./img/stuff/HP_BAR/HP_BAR/HP_bar_10.png",
        "./img/stuff/HP_BAR/HP_BAR/HP_bar_20.png",
        "./img/stuff/HP_BAR/HP_BAR/HP_bar_30.png",
        "./img/stuff/HP_BAR/HP_BAR/HP_bar_40.png",
        "./img/stuff/HP_BAR/HP_BAR/HP_bar_50.png",
        "./img/stuff/HP_BAR/HP_BAR/HP_bar_60.png",
        "./img/stuff/HP_BAR/HP_BAR/HP_bar_70.png",
        "./img/stuff/HP_BAR/HP_BAR/HP_bar_80.png",
        "./img/stuff/HP_BAR/HP_BAR/HP_bar_90.png",
        "./img/stuff/HP_BAR/HP_BAR/HP_bar_100.png",
    ];

    percentage = 100;



    constructor() {
        super();
        this.loadImages(this.IMAGES_HPBAR);
        this.setPercentage(this.percentage);
    }


    //setPecentage(50);
    setPercentage(percentage) {
        this.percentage = percentage; // => 0.....10
        let path = this.IMAGES_HPBAR[this.resolveImageIndex()];
        this.x = 5;
        this.y = 5;
        this.width = 300;
        this.height = 30;
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 10;
        } else if (this.percentage > 90) {
            return 9;
        } else if (this.percentage > 80) {
            return 8;
        } else if (this.percentage > 70) {
            return 7;
        } else if (this.percentage > 60) {
            return 6;
        } else if (this.percentage > 50) {
            return 5;
        } else if (this.percentage > 40) {
            return 4;
        } else if (this.percentage > 30) {
            return 3;
        } else if (this.percentage > 20) {
            return 2;
        } else if (this.percentage > 10) {
            return 1;
        } else {  
            return 0;
        }
    }

}
