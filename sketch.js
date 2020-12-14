
var wall;
//var redCar;
//var greenCar;
//var yellowCar;
//var road1;
var speed;
var weight;
var thickness;
function preload(){
  wall1=loadImage("wall.png");
 // redCar=loadImage("red car.png");
 // greenCar=loadImage("green car.png");
 // yellowCar=loadImage("yellow car.png");
road1=loadImage("road.jpg");
}

function setup() {
  createCanvas(1600,400);

  road=createSprite(600,200,1600,400);
  road.addImage(road1);
  road.scale=1.7;
  wall=createSprite(1200, 200, thickness, height/2);
  wall.addImage(wall1);
  wall.scale=0.9;

 // wall.shapeColor=color(80,80,80);
  //redCar=createSprite(150,130,10,10);
  //redCar.shapeColor="red";
  //greenCar=createSprite(150,190,10,10);
  //greenCar.shapeColor="green";
  //yellowCar=createSprite(150,250,10,10);
  //yellowCar.shapeColor="yellow";
  bullet=createSprite(50,270,50,50);
 
 speed=random(223,321);
 weight=random(30,52);
 thickness=random(22,83)

}

function draw() {
 background(80,80,80); 
  
  bullet.velocityX=speed;
  if (wall.x-bullet.x<(bullet.width+wall.width)/2)
{
bullet.velocityX=0;
var Damage=0.5 * weight * speed * speed/(thickness *thickness *thickness );
if (Damage>10){
  bullet.shapeColor=color(225,0,0);
 // car.addIage(redCar);
}
//if (damage<180 && deformation>100){
 // bullet.shapeColor=color(230,230,0);
 // car.addImage(yellowCar);
}
if (Damage<10){
bullet.shapeColor=color(0,255,0);
//car.addImage(greenCar);
}

  
  drawSprites();}