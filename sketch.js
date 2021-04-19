
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
    roof=new Roof(400,100,400,20);
    bob1=new Bob(320,400,20);
    bob2=new Bob(360,400,20);
    bob3=new Bob(400,400,20);
    bob4=new Bob(440,400,20);
    bob5=new Bob(480,400,20);
 //Create the Bodies - bob4 and bob5.


    rope1=new Rope(bob1.body,roof.body,-80,0);
    rope2=new Rope(bob2.body,roof.body,-40,0);
    rope3=new Rope(bob3.body,roof.body,0,0);
    rope4=new Rope(bob4.body,roof.body,40,0);
    rope5=new Rope(bob5.body,roof.body,80,0);
  
   // create rope4(offsetX & offsetY - 40 and 0 ) and 
  // rope5(offsetX & offsetY - 80 and 0 )

}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  Engine.update(engine);
  roof.display();
 
  // Display bob1, bob2, bob4 and bob5
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  
 // Display rope1, rope2, rope4 and rope5
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x: -50, y: -45})
  }
  
  // Use If condition KeyCode for UP_ARROW to applyForce for the bob body.
  
  
  //Check this link for applyForce -  https://brm.io/matter-js/docs/classes/Body.html
  
	
}



