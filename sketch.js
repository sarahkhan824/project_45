const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var backgroundImg;
var greenDsb


function preload() {
    backgroundImg= loadImage("images/backGround.jpg");
    greenDsbImg = loadImage("images/greenDustbin.jpg");
    blueDsbImg = loadImage("images/blueDustbin.png");
    yellowDsbImg = loadImage("images/yellowDustbin.png");

}

function setup(){
  greenDsb = createSprite(100,100,100,100); 
  greenDsb.addImage(greenDsbImg);

  blueDsb = createSprite(100,100,100,100); 
  blueDsb.addImage(blueDsbImg);

  yellowDsb = createSprite(100,100,100,100);
  yellowDsb.addImage(yellowDsbImg); 
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
}

