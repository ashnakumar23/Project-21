
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var h1,v1,v2;

function preload()
{
	
}

function setup() {
	createCanvas(900, 800);

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(100,200,25,ball_options);
	World.add(world,ball);

    h1 = new Ground(width/2,780,width,20);
	v1 = new Ground(600,715,20,120);
	v2 = new Ground(790,715,20,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,25,25);
  h1.display()
  v1.display()
  v2.display()
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode == UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
}



