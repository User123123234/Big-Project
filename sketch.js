var ground,player,playerImg,groundImg,ground2,ground3,ground4,stop;
var platform1,platform2,platform3,platform4,platform5;
var trophy,coins=0;
var sound,winsound;
var countdown;
var speed=8, jump=0.6;
var wall1,wall2,wall3;

function preload(){
  playerImg=loadImage("images/scientist.png")
groundImg=loadImage("images/ground.png")
cloudImage=loadImage("images/cloud.png")
platformImg=loadImage("images/platform.png")
trophyImage=loadImage("images/trophy.png")
sound=createAudio("fade.mp4")
winsound=createAudio("win.mp3")
winImg=loadImage("win.png")
scoreImg=loadImage("images/250.png")
}


function setup() {
  createCanvas(displayWidth,displayHeight);
  player=createSprite(400, displayHeight/1.06, 50, 50);
 stop=0;
 sound.loop()

var speedButton = createButton("Speed: 100 Coins")
var jumpButton = createButton("Jump: 200 Coins")
speedButton.position(displayWidth-150,10)
jumpButton.position(displayWidth-150,40)

speedButton.mousePressed(()=>{
if (coins>=100){
speed=speed+1;
coins=coins-100;
}
})

jumpButton.mousePressed(()=>{
  if (coins>=200){
  jump=jump+0.1;
  coins=coins-200;
  }
  })


player.addImage(playerImg)
player.scale=0.5

ground=createSprite(displayWidth/5,displayHeight,0,20);
ground.addImage(groundImg)
ground.scale=1;

ground3=createSprite(displayWidth/1.7,displayHeight,0,20);
ground3.addImage(groundImg)
ground3.scale=1;

ground4=createSprite(displayWidth,displayHeight,0,20);
ground4.addImage(groundImg)
ground4.scale=1;

ground2=createSprite(displayWidth/2,displayHeight/1.03,displayWidth*4,20);
ground2.visible=false;

//Platform1
invisibleplatform=createSprite(random(180,displayWidth-180),900,330,10);
platform1=createSprite(invisibleplatform.x,invisibleplatform.y,invisibleplatform.width,invisibleplatform)
platform1.addImage(platformImg)
platform1.scale=0.25;
invisibleplatform.visible=false;
player.collide(invisibleplatform)
platform1.velocityX=2;
invisibleplatform.velocityX=2;

//Platform2
invisibleplatform2=createSprite(random(180,displayWidth-180),700,330,10);
platform2=createSprite(invisibleplatform2.x,invisibleplatform2.y,invisibleplatform2.width,invisibleplatform2.height2)
platform2.addImage(platformImg)
platform2.scale=0.25;
invisibleplatform2.visible=false;
player.collide(invisibleplatform2)
platform2.velocityX=-2;
invisibleplatform2.velocityX=-2;


//Platform3
invisibleplatform3=createSprite(random(180,displayWidth-180),500,330,10);
platform3=createSprite(invisibleplatform3.x,invisibleplatform3.y,invisibleplatform3.width,invisibleplatform3.height)
platform3.addImage(platformImg)
platform3.scale=0.25;
invisibleplatform3.visible=false;
player.collide(invisibleplatform3)
platform3.velocityX=4;
invisibleplatform3.velocityX=4;

//Platform4
invisibleplatform4=createSprite(random(180,displayWidth-180),300,330,10);
platform4=createSprite(invisibleplatform4.x,invisibleplatform4.y,invisibleplatform4.width,invisibleplatform4.height)
platform4.addImage(platformImg)
platform4.scale=0.25;
invisibleplatform4.visible=false;
player.collide(invisibleplatform4)
platform4.velocityX=-5;
invisibleplatform4.velocityX=-5;

//Platform5
invisibleplatform5=createSprite(random(180,displayWidth-180),100,330,10);
platform5=createSprite(invisibleplatform5.x,invisibleplatform5.y,invisibleplatform5.width,invisibleplatform5.height)
platform5.addImage(platformImg)
platform5.scale=0.25;
invisibleplatform5.visible=false;
player.collide(invisibleplatform5)

//trophy
trophy=createSprite(invisibleplatform5.x,invisibleplatform5.y-44,invisibleplatform5.width,invisibleplatform5.height);
trophy.addImage(trophyImage)
trophy.scale=0.23;
trophy.setCollider("rectangle",0,0,40,40);

//WallLeft
wall1=createSprite(0,displayHeight/2,1,displayHeight);
wall1.visible=false;
player.collide(wall1)

//WallRight
wall2=createSprite(displayWidth,displayHeight/2,1,displayHeight);
wall2.visible=false;
player.collide(wall2)

//WallTop
wall3=createSprite(displayWidth/2,-20,displayWidth,1);
wall3.visible=false;
player.collide(wall3)
}

function draw() { 
//winScreen
if (countdown>1){
  countdown=countdown-1;
}

if (countdown>1){
  background(0,0,0);
winsound.play()
image(scoreImg,550,300)
image(winImg,550,300)
sound.pause()
platform1.visible=false;
platform2.visible=false;
platform3.visible=false;
platform4.visible=false;
platform5.visible=false;
trophy.visible=false;
player.visible=false;
}
else{
  background(0,255,255);
  sound.loop()
  platform1.visible=true;
platform2.visible=true;
platform3.visible=true;
platform4.visible=true;
platform5.visible=true;
trophy.visible=true;
player.visible=true;
}



if (player.isTouching(trophy)){
coins=coins+250;
countdown=150;

invisibleplatform.x=random(180,displayWidth-180);
platform1.x=invisibleplatform.x;

invisibleplatform2.x=random(180,displayWidth-180);
platform2.x=invisibleplatform2.x;

invisibleplatform3.x=random(180,displayWidth-180);
platform3.x=invisibleplatform3.x;

invisibleplatform4.x=random(180,displayWidth-180);
platform4.x=invisibleplatform4.x;

invisibleplatform5.x=random(180,displayWidth-180);
platform5.x=invisibleplatform5.x;

trophy.x=invisibleplatform5.x;

player.x=400;
player.y=displayHeight/1.06;

player.velocityX=0;
player.velocityY=0;

}
player.collide(wall1)
player.collide(wall2)
player.collide(wall3)

//Platform1
player.collide(invisibleplatform)
if (platform1.x>displayWidth-180){
  platform1.velocityX=-2;
  invisibleplatform.velocityX=-2;
}
if (platform1.x<180) {
  platform1.velocityX=2;
  invisibleplatform.velocityX=2;
}

//Platform2
player.collide(invisibleplatform2)
if (platform2.x>displayWidth-180){
  platform2.velocityX=-2;
  invisibleplatform2.velocityX=-2;
}
if (platform2.x<180) {
  platform2.velocityX=2;
  invisibleplatform2.velocityX=2;
}

//Platform3
player.collide(invisibleplatform3)
if (platform3.x>displayWidth-180){
  platform3.velocityX=-4;
  invisibleplatform3.velocityX=-4;
}
if (platform3.x<180) {
  platform3.velocityX=4;
  invisibleplatform3.velocityX=4;
}

//Platform4
player.collide(invisibleplatform4)
if (platform4.x>displayWidth-180){
  platform4.velocityX=-4;
  invisibleplatform4.velocityX=-4;
}
if (platform4.x<180) {
  platform4.velocityX=4;
  invisibleplatform4.velocityX=4;
}

//Platform5
player.collide(invisibleplatform5)


player.velocityY=player.velocityY+0.5;
player.collide(ground2)


if(keyDown(UP_ARROW)&&stop<10){
  player.velocityY=player.velocityY-jump;
}
 if(keyDown(RIGHT_ARROW)){
  player.x=player.x+speed;
}
 if(keyDown(LEFT_ARROW)){
  player.x=player.x-speed;
}



if(frameCount%150==0){ 
  cloudSpawn()
}


  drawSprites();

textSize(30);
textFont("Georgia")
text("Coins: " + coins, 20,40)
}
//end of draw


function cloudSpawn(){
  var clouds=createSprite(-20,random(displayHeight/2,0),20,20);
  clouds.addImage('cloudImage',cloudImage)
  clouds.scale=0.5;
  clouds.velocity.x=2;
  }
