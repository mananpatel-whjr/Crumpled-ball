
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperobj;
var dustbinImage
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    paperobj=new paper(200,200);
	Engine.run(engine);
  
}
function preload() {
   dustbinImage=loadImage("dustbingreen.png");
}
	


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperobj.display();
  imageMode(CENTER);
  image(dustbinImage,1200,520,300,300)
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		console.log("hi");
		Matter.Body.applyForce(paperobj.body,paperobj.body.position,{
			x:50,y:-60
		});
	}
}