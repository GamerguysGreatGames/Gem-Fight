var sword;
var player1hp=100;
var player2hp=100;
var edit=true
var electric;
var lava;
var player1;
var player2;
var water;
var grass;
var ground;
var swap1;
var swap2;
var titlescreen=true;
var boomerang;
var edit=false
function preload(){
boomerang=createSprite(900,900,50,50);
swap1=loadImage("boomerang.png")
boomerang.addImage(swap1)
sword=createSprite(900,900,50,50);
swap1=loadImage("sword.png")
sword.addImage(swap1)
}
function setup(){
createCanvas(800,800)
background("red")
electric=createGroup()
lava=createGroup()
player1=createSprite(0,0,0,0);
player2=createSprite(0,0,0,0);
water=createGroup()
grass=createGroup();
ground=createGroup();
electric.add(createSprite(0,0,50,50))
}
function draw(){
background("green")
drawSprites();
if (titlescreen==true){
if (player1hp==0){
textAlign(CENTER)
textSize(30)
fill("black")
text('Player 2 Wins',400,50);
}
if (player2hp==0){
textAlign(CENTER)
textSize(30)
fill("black")
text('Player 1 Wins',400,50);
}
if (player1hp>0){
if (player2hp>0){
fill("black")
textAlign(CENTER)
textSize(40)
text('Fighting Gems Mayhem',400,50)
textSize(30)
text('By GGD',400,100)
textAlign(LEFT)
text('To make custom levels press w',0,350);
text('To play the built in level press e',0,450);}}
if (keyDown("e")){
titlescreen=false;
player1.x=200
player1.y=500
swap1=loadImage("player1.png")
player1.addImage(swap1)
player2.x=600
player2.y=500
swap1=loadImage("player2.png")
player2.addImage(swap1)
swap2=createSprite(200,550,50,50)
swap1=loadImage("grass1.png");
swap2.addImage(swap1);
grass.add(swap2)
swap2=createSprite(600,550,50,50)
swap1=loadImage("grass1.png");
swap2.addImage(swap1);
grass.add(swap2) 
swap2=createSprite(400,470,50,50)
swap1=loadImage("grass1.png");
swap2.addImage(swap1);
grass.add(swap2) 
swap2=createSprite(200,400,50,50)
swap1=loadImage("grass1.png");
swap2.addImage(swap1);
grass.add(swap2) 
swap2=createSprite(600,400,50,50)
swap1=loadImage("grass1.png");
swap2.addImage(swap1);
grass.add(swap2) 
}
if (keyDown("w")){edit=true;titlescreen=false}
}else{
if (edit==true){
if(keyDown("1")){
swap2=createSprite(mouseX,mouseY)
swap1=loadImage("electric.png");
swap2.addImage(swap1);
electric.add(swap2) 
}
if(keyDown("2")){
player1.x=mouseX;
player1.y=mouseY
swap1=loadImage("player1.png")
player1.addImage(swap1)
}
if(keyDown("3")){
player2.x=mouseX;
player2.y=mouseY
swap1=loadImage("player2.png")
player2.addImage(swap1)
}
if(keyDown("4")){
swap2=createSprite(mouseX,mouseY)
swap1=loadImage("lava.png");
swap2.addImage(swap1);
lava.add(swap2) 
}
if(keyDown("5")){
swap2=createSprite(mouseX,mouseY)
swap1=loadImage("lavawall.png");
swap2.addImage(swap1);
lava.add(swap2) 
}
if(keyDown("6")){
swap2=createSprite(mouseX,mouseY)
swap1=loadImage("water.png");
swap2.addImage(swap1);
water.add(swap2) 
}
if(keyDown("7")){
swap2=createSprite(mouseX,mouseY)
swap1=loadImage("waterwall.png");
swap2.addImage(swap1);
water.add(swap2) 
}
  if(keyDown("8")){
swap2=createSprite(mouseX,mouseY)
swap1=loadImage("ground1.png");
swap2.addImage(swap1);
ground.add(swap2) 
}
if(keyDown("9")){
swap2=createSprite(mouseX,mouseY)
swap1=loadImage("ground2.png");
swap2.addImage(swap1);
ground.add(swap2) 
}
if(keyDown("0")){
swap2=createSprite(mouseX,mouseY)
swap1=loadImage("grass1.png");
swap2.addImage(swap1);
grass.add(swap2) 
}
if(keyDown("q")){
swap2=createSprite(mouseX,mouseY)
swap1=loadImage("grass2.png");
swap2.addImage(swap1);
grass.add(swap2) 
}
if (keyDown("up")){edit=false;}
}else{
if (player1.velocityY>2){player1.velocityY=2;}
if (player2.velocityY>2){player2.velocityY=2;}
if (player1hp<1){itlescreen=true;player1hp=0;}
if (player2hp<1){titlescreen=true;player2hp=0;}
if(keyDown("down")){player1.velocityY++;}
if(keyDown("s")){player2.velocityY=player2.velocityY+5;}
if(keyDown("up")){
if(player1.isTouching(ground)){player1.velocityY=player1.velocityY-15}
if(player1.isTouching(grass)){player1.velocityY=player1.velocityY-15}
if(player1.isTouching(boomerang)){player1.velocityY=player1.velocityY-15}
}
if(keyDown("w")){
if(player2.isTouching(ground)){player2.velocityY=player2.velocityY-15}
if(player2.isTouching(grass)){player2.velocityY=player2.velocityY-15}}
debug=true
if (keyDown("right")){player1.x=player1.x+10;player1.displace(player2)}
if (keyDown("left")){player1.x=player1.x-10;player1.displace(player2)}
if (keyDown("d")){player2.x=player2.x+10;player2.displace(player1)}
if (keyDown("a")){player2.x=player2.x-10;player2.displace(player1)}
grass.displace(player1)
grass.displace(player2)
if (player1.isTouching(grass)){}else{
if(player1.isTouching(ground)){}else{
player1.velocityY=player1.velocityY+1;}}
ground.displace(player1)
ground.displace(player2)
if (player2.isTouching(grass)){}else{
if(player2.isTouching(ground)){}else{
player2.velocityY=player2.velocityY+1;}}
textAlign(LEFT)
fill("black")
textSize(30)
text("P1 Health",50,50);
textAlign(RIGHT)
text("P2 Health",750,50);
rectMode(CENTER)
fill("red")
rect(700,100,player2hp,player2hp)
fill("blue")
rect(100,100,player1hp,player1hp)
boomerang.displace(player2)
if (player1.isTouching(electric)){
player1.bounceOff(electric);
player1hp--;
}
if (player2.isTouching(electric)){
player2.bounceOff(electric);
player2hp--;
}
if (player1.isTouching(lava)){
player1.bounceOff(lava);
player1hp--;
}
if (player2.isTouching(lava)){
player2.bounceOff(lava);
player2hp--;
}
if(player2.isTouching(boomerang)){
boomerang.velocityX=4.95;boomerang.x=player1.x;boomerang.y=player1.y-60;boomerang.rotation=0;player2hp=player2hp-10;
}
if(grass.isTouching(boomerang)){
boomerang.velocityX=4.95;boomerang.x=player1.x;boomerang.y=player1.y-60;boomerang.rotation=0;2
}
if(ground.isTouching(boomerang)){
boomerang.velocityX=4.95;boomerang.x=player1.x;boomerang.y=player1.y-60;boomerang.rotation=0;
}
if (player1.velocityY<-15){player1.velocityY=-15;}
if (player2.velocityY<-15){player2.velocityY=-15;}
boomerang.displace(player1)
if (boomerang.velocityX>5){boomerang.velocityX=4.95;boomerang.x=player1.x;boomerang.y=player1.y-80;boomerang.rotation=0;}else{
if (boomerang.velocityX>0){
boomerang.velocityX=boomerang.velocityX=boomerang.velocityX+0.05;boomerang.rotation=boomerang.rotation+boomerang.velocityX*2
}else{if (boomerang.velocityX<-5){boomerang.velocityX=-4.95;boomerang.x=900;boomerang.y=900;}else{boomerang.velocityX=boomerang.velocityX=boomerang.velocityX-.05;boomerang.rotation=boomerang.rotation+boomerang.velocityX*2}}}
if (keyDown(SHIFT)){if(keyDown("left")){boomerang.x=player1.x-75;boomerang.y=player1.y;boomerang.velocityX=-0.5;}}
if (keyDown(SHIFT)){if(keyDown("right")){boomerang.x=player1.x+75;boomerang.y=player1.y;boomerang.velocityX=0.5;}}
if (keyDown(SHIFT)){if(keyDown("up")){if (player1.isTouching(player2)){player1.bounce(player2);player2hp=player2hp-5;player1.velocityY=0;}}}
if (keyDown(SHIFT)){if(keyDown("down")){if (player1.isTouching(player2)){player1.y=player1.y+10;player1.bounce(player2);player2hp=player2hp-5;player1.velocityY=0;}}}
if(boomerang.velocityX==4){boomerang.rotation=-5;boomerang.velocityX=-4.95;boomerang.x=player1.x;boomerang.velocityY=0;
boomerang.y=player1.y-80}
if(boomerang.velocityX==-4){boomerang.rotation=5;boomerang.velocityX=4.95;boomerang.x=player1.x;boomerang.y=player1.y-80;boomerang.velocityY=0;}
if(keyDown("a")){if(keyDown("e")){sword.x=player2.x-60;sword.y=player2.y;sword.rotation=0;if (player1.isTouching(sword)){player1.x=player1.x-5;player1hp=player1hp-5;}}}
if(keyDown("d")){if(keyDown("e")){sword.x=player2.x+60;sword.y=player2.y;sword.rotation=180;if (player1.isTouching(sword)){player1.x=player1.x+5;player1hp=player1hp-5}}}
if(keyDown("w")){if(keyDown("e")){sword.x=player2.x;sword.y=player2.y-60;sword.rotation=90;if (player1.isTouching(sword)){player1.y=player1.y-5;player1hp=player1hp-5;}}}
if(keyDown("s")){if(keyDown("e")){sword.x=player2.x;sword.y=player2.y+60;sword.rotation=270;if (player1.isTouching(sword)){player1.y=player1.y+5;player1hp=player1hp-5;}}}
if(keyDown("e")){}else{if (keyDown("a")){}else{if (keyDown("d")){}else{if (keyDown("w")){}else{if (keyDown("s")){}else{sword.x=900;sword.y=900;}}}}}
if(player1.y>800){player1hp=0;titlescreen=true}
if(player2.y>800){player2hp=0;titlescreen=true}
if (player1hp<0){playr1hp=0;titlescreen=true}
}}}