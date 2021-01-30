const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform,polyImg;
var bird, slingShot;
var mainground;
var ground1;
var block1;
var polygon
function preload() {
    this.polyIMG = loadImage("polygon.png");
    
}

function setup(){
    var canvas = createCanvas(1400,600);
    engine = Engine.create();
    world = engine.world;

    mainground = new Ground(700,590,1400,20);

    stand1 = new Ground(620,420,350,10); 
    stand2 = new Ground(1015,200,280,10);
    
     block1 = new Block(500,390,40,50);
     block2 = new Block(540,390,40,50);
     block3 = new Block(580,390,40,50); 
     block4 = new Block(620,390,40,50);
     block5 = new Block(660,390,40,50);
     block6 = new Block(700,390,40,50);
     block7 = new Block(740,390,40,50);
     block8 = new Block(540,340,40,50);
     block9 = new Block(580,340,40,50);
     block10 = new Block(620,340,40,50);
     block11 = new Block(660,340,40,50);
     block12 = new Block(700,340,40,50);
     block13 = new Block(580,290,40,50); 
     block14 = new Block(620,290,40,50); 
     block15 = new Block(660,290,40,50);
     block16 = new Block(620,240,40,50);

     block17 = new Block(935,170,40,50); 
     block18 = new Block(975,170,40,50);  
     block19 = new Block(1015,170,40,50); 
     block20 = new Block(1055,170,40,50);
     block21 = new Block(1095,170,40,50);
     block22 = new Block(975,120,40,50); 
     block23 = new Block(1015,120,40,50);
     block24 = new Block(1055,120,40,50);
     block25 = new Block(1015,70,40,50);


    
    
    polygon = Bodies.circle(50,200,30);
    World.add(world,polygon);

    
    slingShot= new SlingShot(polygon,{x:200,y:200});
}

    
    


    function draw(){
        background("black");
        Engine.update(engine);

        fill("brown")
        stand1.display();
        stand2.display();
        mainground.display();
        
        slingShot.display();

        fill("lightblue");
        block1.display();
        block2.display();
        block3.display();
        block4.display();
        block5.display();
        block6.display();
        block7.display();
        fill("pink")
        block8.display();
        block9.display();
        block10.display();
        block11.display();
        block12.display();
        fill("lightgreen")
        block13.display();
        block14.display();
        block15.display();
        fill("white")
        block16.display();
        fill("lightblue")
        block17.display();
        block18.display();
        block19.display();
        block20.display();
        block21.display();
        fill("lightgreen")
        block22.display();
        block23.display();
        block24.display();
        fill("pink")
        block25.display();
        
        

       

   imageMode(CENTER) ;
   image(this.polyIMG,polygon.position.x, polygon.position.y,60,60);
    }

   function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode=== 32){
        slingShot.attach(polygon)
    }
}
    
 