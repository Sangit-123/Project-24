
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var trash1,trash2,trash3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	trash1=new Trash(500,500,20,120)
	trash2=new Trash(430,550,120,20)
	trash3=new Trash(370,500,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  trash1.display()
  trash2.display()
  trash3.display()
  drawSprites();
 
}



