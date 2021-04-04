var boy;
var obstacle, boost;
var background,bg;

function preload(){
    boyImage = loadImage("boy.png");
    backgroundImage = loadImage("city.png");
    obstacleImage = loadImage("obstacle.png");
    boostImage = loadImage("arrow.png");
}


function setup(){
    canvas = createCanvas(1000,600);
   
  // Moving background
  bg=createSprite(200,180,300,200);
  bg.addImage(backgroundImage);

  bg.velocityX = -3;
  bg.scale=2.5;
    
    boy = createSprite(200,400,50,50);
    boy.addImage(boyImage);
    boy.scale = 0.2;
    obstacle = createSprite(300,400,70,40);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.3;
    boost = createSprite(350,440,77,50);
    boost.addImage(boostImage);
    boost.scale = 0.2;
    
}

function draw() {
    background("blue");
    boy.velocityX = 7;
    
    //code to reset the background
    if(bg.x < 200){
      bg.x = 0
    }
    

    drawSprites();
}
