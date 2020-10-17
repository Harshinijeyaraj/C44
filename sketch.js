var backgroundImage,backdrop,girl, girl1,boy,boy1,family,family1;

function preload(){
  backgroundImage = loadImage("Sprites/Background.jpg");
 girl = loadImage("Sprites/Girl.png");
 family1 = loadImage("Sprites/family2.png");
}

function setup() {
  createCanvas(1200,800);
  backdrop = createSprite(600,400,1200,800);
  backdrop.addImage(backgroundImage);
  backdrop.scale = 3;

  family = createSprite(1100,600,20,20);
  family.addImage(family1);
  family.scale = 0.4;

  girl1 = createSprite(40,700,20,20);
  girl1.addImage(girl);
  girl1.scale = 0.5;
  
  

  
}

function draw() {
 // background("pink");  

 if(keyDown("RIGHT_ARROW")){
   girl1.x = girl1.x+10;
 }

 if(keyDown("LEFT_ARROW")){
   girl1.x = girl1.x-10;
 }
  
  drawSprites();
}

