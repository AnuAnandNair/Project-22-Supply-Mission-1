var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	//groundSprite.shapeColor="white";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});//isStatic:true will make the packet stationary
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:false}); 
	//isStaatic:false will make the packet fall and bounce because of restitution
	World.add(world, packageBody);	//all the bodies should be added to our world

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y; 
  drawSprites(); 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    //Make the package body fall only on pressing down_arrow.
	Matter.Body.setStatic(packageBody,false);//static property of packagebody should be set as false so that it will not be static and it will fall down
	//initially it should not fall down so isStatic:true in line 34
  }
}



