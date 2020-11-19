var bullet,wall;
var speed,weight;
var thickness;
var damage;

function setup() {
  createCanvas(1600,400);
  wall = createSprite(1200, 200, thickness, height/2);
  bullet = createSprite(0,200,50,40)  

  speed = random(55,90); 
  weight = random(400,1500);
  thickness = random(22,83);
  bullet.velocityX = speed;
  
}

function draw() {
  background(30,30,30); 
  
  if (isColiding(bullet,wall)) {
   damage =  (0.5 * weight * speed)/(thickness * thickness *thickness)
   bullet.velocityX = 0;
   if(damage < 10 ){
   wall.shapeColor="green";
   }
   if(damage > 10 ) {
    wall.shapeColor = "red";
   }
  }
   
  

  drawSprites();
}

function isColiding(lbullet,lwall) {
  
bulletrightedge = lbullet.x + lbullet.width ;
wallleftedge=lwall.x;
if (bulletrightedge>=wallleftedge){
return true ;
}
  return false ;

}