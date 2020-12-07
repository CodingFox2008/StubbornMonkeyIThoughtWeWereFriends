var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score = 0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  

}



function setup() {
  createCanvas(500,500);

  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
  monkey = createSprite(100,400);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
 
  ground = createSprite(400,434,900,10);
  ground.velocityX = -10;
  ground.x = ground.width/2;
  console.log(ground.x);

  

}


function draw() {
  background('beige');

  if(ground.x<100){
    ground.x = ground.width/2; 
  }

  
  if(keyDown('space')){
    monkey.velocityY = -12;
  }
  
  
   monkey.velocityY = monkey.velocityY + 0.8 ;

   monkey.collide(ground);
  
  stoneObstacles();
  bananaFunction();
  drawSprites();
  
  fill('black');
  score = Math.ceil(frameCount/frameRate())
  text("Survival Time:" + score, 410, 20);
}



function bananaFunction(){
    if(frameCount%100===0){
      banana = createSprite(500,250);
      banana.addImage(bananaImage);
      banana.scale = 0.2;
      banana.velocityX = -3;
      
      banana.lifetime = 200;
      
      monkey.depth = banana.depth+1;
      
      bananaGroup.add(banana);
    }

}

function stoneObstacles(){
  if(frameCount%100===0){
    obstacle = createSprite(400,400);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -5;
    
    obstacle.lifetime = 200;
    
    obstacleGroup.add(obstacle);
  }
}
