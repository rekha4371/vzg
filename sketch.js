var boy;
var obstacle, boost;
var background,bg;

function preload(){
    boyImage = loadImage("boy.png");
    backgroundImage = loadImage("city.png");
    backgroundImage1 = loadImage("city1.png");
    obstacleImage = loadImage("obstacle.png");
    boostImage = loadImage("arrow.png");
}


function setup(){
    canvas = createCanvas(900,700);
   
  
    
    boy = createSprite(30,650,50,50);
    boy.addImage(boyImage);
    boy.scale = 0.1;
    obstacle = createSprite(300,400,70,40);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.3;
    boost = createSprite(350,440,77,50);
    boost.addImage(boostImage);
    boost.scale = 0.3;
    
    // Moving background
  bg=createSprite(500,260,700,700);
  bg.addImage(backgroundImage);

  bg.velocityX = -3;
 
  bg.scale=3;
  
}

function draw() {
    background("blue");
  
    
    //code to reset the background
    if(bg.x < 400){
      bg.x = 760;
    }
    
    boy.depth = bg.depth;
    boy.depth = boy.depth+1;

    drawSprites();
}
