const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var myEngine, myWorld;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box1,box19,box20
var ball;

function setup(){
    createCanvas(1200,700);
    myEngine=Engine.create();
    myWorld=myEngine.world;

    ground=new Ground1(600,680,1200,20);

    box1 = new Box1(900, 70);
    box2 = new Box1(900, 140);
    box3 = new Box1(900, 210);
    box4 = new Box1(900, 280);
    box5 = new Box1(900, 350);
    box6 = new Box1(900, 420);
    box7 = new Box1(800, 70)
    box8 = new Box1(800, 140);
    box9 = new Box1(800, 210);
    box10 = new Box1(800,280);
    box11 = new Box1(800,350);
    box12 = new Box1(800,420);
    box13 = new Box1(700,70);
    box14 = new Box1(700,140);
    box15 = new Box1(700, 210);
    box16 = new Box1(700, 280);
    box17 = new Box1(700, 350);
    box18 = new Box1(700, 420);
    

    ball=new Ball1(500,400);

    rope= new Rope(ball.body,{x:500, y:50})
}

function draw(){
    background("lightpink");
    Engine.update(myEngine);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    box17.display()
    box18.display()
   

    ball.display();
    rope.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
}