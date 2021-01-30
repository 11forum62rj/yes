class Polygon extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.poly = loadImage("polygon.png");
    }
  
    display() {      
      super.display();
      image(this.poly,50,200)

    }
  }
  