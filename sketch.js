var sea, seaimg;
var submarine, submarineimg;
var ground, ground2;
var coin;

var bob1, chainbob2, chainbob3;
var lazerbob1, lazerbob2, lazerbob3;
var rocket;
var gameover, gameoverimg;
var coinimg;

var death, coins, coinsound;

var obstaclesGroup;

var score, coinscore;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){

  //To pre load the images/animation.
  seaimg        = loadImage("image/sea.jpg");
  submarineimg  = loadAnimation("image/submarine1.png", "image/submarine2.png", "image/submarine3.png");
  bob1          = loadImage("image/bob.png");
  chainbob2     = loadImage("image/chain bob.png");
  chainbob3     = loadImage("image/chain bob2.png");
  lazerbob1     = loadImage("image/lazerbob.png");
  lazerbob2     = loadImage("image/lazerbob2.png");
  lazerbob3     = loadImage("image/lazerbob3.png");
  gameoverimg   = loadImage("image/gameover.png");
  rocket        = loadImage("image/rocket.png");
  coinimg       = loadImage("image/coin.png");
  death         = loadSound("Sound/death.mp3");
  coins         = loadSound("Sound/coin.mp3");
  coinsound     = loadSound("Sound/coinc.mp3")
  
}

function setup() {
  
  //To create the canvas 
  createCanvas(600, 300);
  
  //To create the sea do the following commands
  sea = createSprite(400, 60, 1000, 500);
  sea.addImage("image", seaimg);
  sea.velocityX = -7;
  
  //To create the submarine do the following commands
  submarine = createSprite(65, 150);
  submarine.addAnimation("submarine", submarineimg);
  submarine.scale = 0.85;
  
  coin = createSprite(20, 20);
  coin.addImage("coin", coinimg);
  coin.scale = 0.50;
  
  //To create the ground do the following commands
  ground  = createSprite(300, 300, 600, 1);
  ground2 = createSprite(300, 0, 600, 1);
  
  //To create the gameover do the following commands
  gameover = createSprite(300, 130);
  gameover.addImage("gameover", gameoverimg);
  gameover.scale = 1;
  gameover.visible = false;
  
  //To create the collider (hit box) of the submarine.
  submarine.setCollider("rectangle",0,0,80,50);
  submarine.debug = false;
  
  //To set the score 0
  score = 0;
  coinscore = 0; 
  
  //To create the group of obstacle
  obstaclesGroup = new Group();
  coingroup      = new Group();
  
}

function draw() {
 
  //To change the color of the background
  background(180);
  
  //If the gamestate is in play the following conditions will happen. 
  if (gameState === PLAY){  
  
  //To increment the score when the submarine reaches a certain frame count.
  score = score + Math.round(getFrameRate()/60);
    
  //To make a sound when the score reaches a certain frame count.
  if(score>0 && score%100 === 0){
    coins.play() 
  }
    
  //To create the infinite background.
  if (sea.x < 100 ){
     sea.x = 500;
  }
  
  //T0 move the submarine up when up arrow is pressed.
  if (keyDown(UP_ARROW)) {
    submarine.y = submarine.y-6;
  }
  
  //To move the submarine down when down arrow is pressed.
  if (keyDown(DOWN_ARROW)) {
    submarine.y =  submarine.y+6;
  }
  
  //When the submarine is touching the obstaclegroup the the gamestate will change to end and   the death sound will play.
  if (submarine.isTouching(obstaclesGroup)){
     gameState = END
     death.play();
  }
    
  if (submarine.isTouching(coingroup)){
     coingroup.destroyEach();
     coinsound.play();
     coinscore = coinscore+1;
  }
  
  //To make sure that the submarine is colliding with the up and down barrier.
  submarine.collide(ground);
  submarine.collide(ground2);
  
  //All function.
  spawnbob1();
  spawnbob2();
  spawnbob3();
  spawnchainbob1();
  spawnchainbob2();
  spawnchainbob3();
  spawnchainbob4();
  spawnlazerbob1();
  spawnlazerbob2();
  spawnlazerbob3();
  spawnrocket();
  spawncoin();
    
  }
  
  else 
  
  //If the gamestate is in play the following condition will happen.
  if (gameState === END){
    
    gameover.visible = true;
    sea.velocityX = 0;
    submarine.velocityX = 0;
    submarine.velocityY = 0;
    submarine.y = 500;
    
  }
  
  //To draw the sprites(objects)
  drawSprites(); 
  
  //To display the distance.
  fill("white")
  textSize(20)
  text(""+ score,35,60);
  
  fill("white")
  textSize(20)
  text(""+ coinscore,35,28);
  
}

//All function of the obstacle.
function spawnbob1(){
  if (frameCount % 200 === 0){
  
  var spawnbob1 = createSprite(695, 30);
  spawnbob1.y = Math.round(random(30,60));
  spawnbob1.velocityX = -(7 + score/500);
  spawnbob1.addImage(bob1);
  spawnbob1.scale = 1;
  spawnbob1.lifetime = 300;
  obstaclesGroup.add(spawnbob1);
    
  }
  }

function spawnbob2(){
  if (frameCount % 250 === 0){
  
  var spawnbob2 = createSprite(695, 270);
  spawnbob2.y = Math.round(random(270,240));
  spawnbob2.velocityX = -(7 + score/500);
  spawnbob2.addImage(bob1);
  spawnbob2.scale = 1;
  spawnbob2.lifetime = 300;
  obstaclesGroup.add(spawnbob2);
    
  }
  }

function spawnbob3(){
  if (frameCount % 300 === 0){
  
  var spawnbob3 = createSprite(605, 30);
  spawnbob3.y = Math.round(random(30,270));
  spawnbob3.velocityX = -(7 + score/500);
  spawnbob3.addImage(bob1);
  spawnbob3.scale = 1;
  spawnbob3.lifetime = 300;
  obstaclesGroup.add(spawnbob3);
    
  }
  }


function spawnchainbob1(){
  if (frameCount % 130 === 0){
  
  var spawnchainbob1 = createSprite(605, 250);
  spawnchainbob1.y = Math.round(random(30,50));
  spawnchainbob1.velocityX = -(7 + score/500);
  spawnchainbob1.addImage(chainbob2);
  spawnchainbob1.scale = 1.9;
  spawnchainbob1.lifetime = 300;
  obstaclesGroup.add(spawnchainbob1);
    
  }
  }

function spawnchainbob2(){
  if (frameCount % 130 === 0){
  
  var spawnchainbob2 = createSprite(605, 227);
  spawnchainbob2.y = Math.round(random(250,270));
  spawnchainbob2.velocityX = -(7 + score/500);
  spawnchainbob2.addImage(chainbob3);
  spawnchainbob2.scale = 1.9;
  spawnchainbob2.lifetime = 300;
  obstaclesGroup.add(spawnchainbob2);
    
  }
  }


function spawnchainbob3(){
  if (frameCount % 170 === 0){
  
  var spawnchainbob3 = createSprite(605, 50);
  spawnchainbob3.y = Math.round(random(200,270));
  spawnchainbob3.velocityX = -(7 + score/500);
  spawnchainbob3.addImage(chainbob3);
  spawnchainbob3.scale = 1.9;
  spawnchainbob3.lifetime = 300;
  obstaclesGroup.add(spawnchainbob3);
    
  }
  }

function spawnchainbob4(){
  if (frameCount % 170 === 0){
  
  var spawnchainbob4 = createSprite(605, 50);
  spawnchainbob4.y = Math.round(random(30,100));
  spawnchainbob4.velocityX = -(7 + score/500);
  spawnchainbob4.addImage(chainbob3);
  spawnchainbob4.scale = 1.9;
  spawnchainbob4.lifetime = 300;
  obstaclesGroup.add(spawnchainbob4);
    
  }
  }

function spawnlazerbob1(){
  if (frameCount % 200 === 0){
  
  var spawnlazerbob1 = createSprite(605, 50);
  spawnlazerbob1.y = Math.round(random(30, 270));
  spawnlazerbob1.velocityX = -(7 + score/500);
  spawnlazerbob1.addImage(lazerbob1);
  spawnlazerbob1.scale = 1.9;
  spawnlazerbob1.lifetime = 300;
  obstaclesGroup.add(spawnlazerbob1);
    
  }
  }

function spawnlazerbob2(){
  if (frameCount % 500 === 0){
  
  var spawnlazerbob2 = createSprite(805, 50);
  spawnlazerbob2.y = Math.round(random(30,270));
  spawnlazerbob2.velocityX = -(7 + score/500);
  spawnlazerbob2.addImage(lazerbob2);
  spawnlazerbob2.scale = 1.9;
  spawnlazerbob2.lifetime = 300;
  obstaclesGroup.add(spawnlazerbob2);
    
  }
  }

function spawnlazerbob3(){
  if (frameCount % 800 === 0){
  
  var spawnlazerbob3 = createSprite(1005, 50);
  spawnlazerbob3.y = Math.round(random(30,270));
  spawnlazerbob3.velocityX = -(7 + score/500);
  spawnlazerbob3.addImage(lazerbob3);
  spawnlazerbob3.scale = 1.9;
  spawnlazerbob3.lifetime = 300;
  obstaclesGroup.add(spawnlazerbob3);
    
  }
  }

function spawnrocket(){
  if (frameCount % 1000 === 0){
  
  var spawnrocket = createSprite(605, 50);
  spawnrocket.y = Math.round(random(30,270));
  spawnrocket.velocityX = -(10 + score/500);
  spawnrocket.addImage(rocket);
  spawnrocket.scale = 2.8;
  spawnrocket.lifetime = 300;
  obstaclesGroup.add(spawnrocket);
    
  }
  }

function spawncoin(){
  if (frameCount % 100 === 0){
  
  var spawncoin = createSprite(605, 50);
  spawncoin.y = Math.round(random(30,270));
  spawncoin.velocityX = -(7 + score/500);
  spawncoin.addImage(coinimg);
  spawncoin.scale = 0.75;
  spawncoin.lifetime = 300;
  coingroup.add(spawncoin);
    
  }
  }