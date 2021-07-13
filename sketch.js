var sky, skyImg;
var ground, groundImg;
var land, landImg;
var grass, grassImg;
var tree,  treeImg;
var kid, kidImg;
var treeG;
var snake, snakeImg;
var apple, appleImg;
var banana, bananaImg;
var grapes, grapesImg;
var gameState = "START";
var score = 0;
var playB, playBImg;


function preload()
{
  
  skyImg = loadImage("cloud.png");
  groundImg = loadImage("ground.png");
  landImg = loadImage("land.png");
  grassImg = loadImage("grass.png");
  treeImg = loadImage("trees.png");
  kidImg = loadImage("kid.png");
  snakeImg = loadImage("snake.png");
  appleImg = loadImage("apple.png");
  bananaImg = loadImage("banana.png");
  grapesImg = loadImage("grapes.png");
  playBImg = loadImage("restart.png");
 
}
function setup() {
  createCanvas(600,400);
  
  sky = createSprite(200,180,400,400);
  sky.addImage(skyImg);
  sky.scale = 0.9;
  
  
  
  ground = createSprite(300,320,20,20);
  ground.addImage(groundImg);
  ground.scale = 0.3;
 
  
  
  land = createSprite(300,400,20,20);
  land.addImage(landImg);
  land.scale = 0.08;
  
  
playB = createSprite(300,230);
  playB.scale = 0.04;
     
  grass = createSprite(300,400,20,20);
  grass.addImage(grassImg);
  grass.scale = 0.2;
    
  kid = createSprite(60,330,20,20);
  kid.addImage(kidImg);
  kid.scale = 0.5;
  
  kid.depth = snake.depth;
  
}

function draw() {
  background(0);
  if(gameState==="START")
    {
      
      textSize(50);
      fill("black");
      text("WELCOME TO THE WORLD OF SNAKE",120,200);
      
      
      
      playB.addImage(playBImg);
       playB.visible=true;
  
       
      if(kid.y>340)
    {
      kid.y = 330;
  
     
    }
 
      if(mousePressedOver(playB))
        {
          
          gameState = "PLAY";
        
        }
    }
  if(gameState==="PLAY")
    {playB.visible=false;

      sky.velocityX=-2;
      ground.velocityX = -2;
      land.velocityX = -2;
      kid.velocityY = 0.4;
      
      if(kid.isTouching(snake))
      {
        gameState = "START";
      }
    

  if(kid.y>340)
    {
      kid.y = 330;
      
    }
  if(sky.x<260)
    {
      sky.x=width/2;
    }
  if(ground.x<270)
    {
      ground.x = width/2;
    }
  if(land.x<280)
    {
      land.x = width/2;
    }
  if(keyDown("UP_ARROW"))
    {
      kid.y = kid.y-2;
    }
     
      
  tree();
  snake();
  apple();
  banana();
  grapes();
    }
  
  drawSprites();
}
function tree()
{
  if(frameCount%70===0)
    {
  var tree = createSprite(650,180,20,20);
  tree.addImage(treeImg);
  tree.y = Math.round(random(175,190))    
  tree.velocityX=-4;
  tree.scale = 0.5;

    }
  
}
function snake()
{
  if(frameCount%100===0)
    {
  var snake = createSprite(650,380,20,20);
  snake.addImage(snakeImg);
  snake.y = Math.round(random(330,380));
  snake.velocityX = -4;
  snake.scale = 0.3;
      
      
      if(kid.isTouching(snake))
        {
          gameState = "START";
        }
    }
}
function apple()
{
  if(frameCount%70===0)
    {
  var apple = createSprite(630,180,20,20);
  apple.addImage(appleImg);
  apple.y = Math.round(random(175,190))    
  apple.velocityX=-4;
  apple.scale = 0.02;
  
    }
}
function banana()
{
  if(frameCount%70===0)
    {
  var banana = createSprite(700,300,20,20);
  banana.addImage(bananaImg);
  banana.y = Math.round(random(230,240))    
  banana.velocityX=-4;
  banana.scale = 0.04;
  
    }
}
function grapes()
{
  if(frameCount%70===0)
    {
  var grapes = createSprite(570,180,20,20)
  grapes.addImage(grapesImg);
  grapes.y = Math.round(random(175,190))    
  grapes.velocityX=-4;
  grapes.scale = 0.08;
  
    }
}