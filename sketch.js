const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var backgroundImage
var  phyEngine, phyWorld;
var score = 0;
function preload(){
  backgroundImage = loadImage("Cat Hollow Park.jpg");

}
function setup() {
  createCanvas(1920,937);
  phyEngine = Engine.create();
  phyWorld = phyEngine.world;
  ground = new Ground(canvas.width/2,900,canvas.width,150);
  monkey = new Monkey(canvas.width/2, canvas.height/2);
  ball = new Ball(100,120,50,50);
  slingshot = new Slingshot(ball.body, {x: 200, y: 600});
  basket = new Basket(1500, 750);
}

function draw() {
  background(backgroundImage); 
  Engine.update(phyEngine);
  ground.display();
  monkey.display();
  ball.display();
  slingshot.display();
  basket.display();
  basket.score();
  fill("black");
  textSize(25);
  text("Score  " + score, width-980, 250);
} 

function mouseDragged(){
Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed (){
  if (keyCode === 32 && ball.body.speed < 1){
    Matter.Body.setPosition(ball.body, {x:200,y:600});
    slingshot.attach(ball.body);
    
  }
}