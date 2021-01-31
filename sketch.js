const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,ball,ground;
var stand1,stand2,slingShot;
var block;

function setup(){
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground();
  stand1=new Stand(390,300,250,10);
  stand2=new Stand(700,200,200,10);
  block1=new Block(300,275,30,40);
  block2=new Block(330,275,30,40);
  block3=new Block(360,275,30,40);
  block4=new Block(390,275,30,40);
  block5=new Block(420,275,30,40);
  block6=new Block(450,275,30,40);
  block7=new Block(480,275,30,40);
  block8=new Block(330,235,30,40);
  block9=new Block(360,235,30,40);
  block10=new Block(390,235,30,40);
  block11=new Block(420,235,30,40);
  block12=new Block(450,235,30,40);
  block13=new Block(360,195,30,40);
  block14=new Block(390,195,30,40);
  block15=new Block(420,195,30,40);
  block16=new Block(390,155,30,40);
}
function draw(){
  background("orange");
  Engine.update(engine);
  ground.display();
  stand1.display();
  stand2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
}
