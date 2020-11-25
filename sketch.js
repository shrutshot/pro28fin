
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,treepic;
var grnd;
var stne;
var boy,boypic;
var m1,m2,m3,m4,m5;
var rope;

function preload()
{
	treepic=loadImage("sprite/tree.png");
	boypic=loadImage("sprite/boy.png")	;
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.\
	var tree_options={
		isStatic:true
	}

	tree= Bodies.rectangle(200,390,400,20,tree_options);
    World.add(world,tree);
	

	boy= Bodies.rectangle(200,560,100,250,tree_options);
    World.add(world,boy);


	grnd=Bodies.rectangle(200,690,400,20,tree_options);
	World.add(world,grnd)
	
	stne=new stone(100,450,50,50);
	Engine.run(engine);

	m1= new mango(500,300,30);
	m2= new mango(700,300,30);
	m3= new mango(680,220,30);
	m4= new mango(600,350,30);
	m5= new mango(500,400,30);
	rope= new constraintt(stne.body,{x:235,y:420});
	
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  image(treepic,400,100,400,600);
  image(boypic,60,330,250,450);
  stne.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  rect(grnd.position.x,grnd.position.y,1200,20);
  
  rope.display();

  detectCollision(stne,m1);
  detectCollision(stne,m2);
  detectCollision(stne,m3);
  detectCollision(stne,m4);
  detectCollision(stne,m5);
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(stne.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    constraintt.fly();
    
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
	if (keyCode===32){
		Matter.Body.setPosition(stne.body,{x:235,y:450})
		rope.attach(stne.body)
	}
}


