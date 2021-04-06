var wall,car ;
var weight,speed;




function setup(){
  createCanvas(2000,2000);


  car = createSprite(50,200,50,50);
  car.shapeColor="Gray"
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor="Brown"

  speed = random(55,90);
  weight = random(400,1200);

}


 

function draw() {
  background("black");  

  car.velocityX = speed;

  var Deformation = 0.5*weight*speed*speed/22500;
  
  if(Deformation<100){
    car.shapeColor="green"
  }
  else if(Deformation>100||Deformation<180){
    car.shapeColor="yellow"
  }
  else if(Deformation>180){
    car.shapeColor="red"
  }

  if(car.isTouching(wall)){
    car.velocityX = 0;
  }
  drawSprites();
}
