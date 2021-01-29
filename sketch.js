
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob1, bob2, bob3, bob4, bob5
var roof


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	roof = new Roof(400,100,200,10)


	bob1 = new Bob(340,500,15)
	bob2 = new Bob(370,500,15)
	bob3 = new Bob(400,500,15)
	bob4 = new Bob(430,500,15)
	bob5 = new Bob(460,500,15)

		rope = new Rope(bob1.body,{x:340 , y : 100})
		rope2 = new Rope(bob2.body,{x:370 , y : 100})
		rope3 = new Rope(bob3.body,{x:400 , y : 100})
		rope4 = new Rope(bob4.body,{x:430 , y : 100})
		rope5 = new Rope(bob5.body,{x:460 , y : 100})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  momentumGenerator()

roof.show();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
rope.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()

  
}
function momentumGenerator() {
	if (keyCode === 32) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-3});
	}
}



