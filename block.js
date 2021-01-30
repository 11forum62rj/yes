class Block {
    constructor(x, y, width, height){
        var options = {
            restitution:0.6,
            friction:0.08,
            isStatic: false
  }
       this.Visiblity = 255; 
       this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
      this.height = height;
      World.add(world, this.body);

    }
    
    display(){
      console.log(this.body.speed);
      var pos =this.body.position;
      if(this.body.speed < 3){
        rectMode(CENTER);
        strokeWeight(0.7);
        stroke("yellow");
         rect(pos.x, pos.y, this.width, this.height);
          
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        pop();
      }
  
    }
};