var bunny;
var carrot;
var edge;


function setup() {
  createCanvas(600,600);
  edge=createEdgeSprites();
  bunny=createSprite(40,550,30,30);
  carrot=createSprite(560,40,30,30);
  obs1=createSprite(300,120,100,20);
  obs2=createSprite(300,320,100,20);
  obs3=createSprite(200,400,100,20);
  obs4=createSprite(250,380,100,20);
  obs5=createSprite(150,350,100,20);
  obs6=createSprite(250,450,100,20);
  obs1.velocityX=5;
  obs2.velocityX=-5;
  obs3.velocityX=5;
  obs4.velocityX=-5;
  obs5.velocityX=5;
  obs6.velocityX=-5;
  bunny.shapeColor="white"
  carrot.shapeColor="orange";
  obs1.shapeColor="red";
  obs2.shapeColor="red";
  obs3.shapeColor="red";
  obs4.shapeColor="red";
  obs5.shapeColor="red";
  obs6.shapeColor="red";
 
}

function draw() {
  background("magenta");

  bunny.bounceOff(edge[0]);
  bunny.bounceOff(edge[1]);
  bunny.bounceOff(edge[2]);
  bunny.bounceOff(edge[3]);
  obs1.bounceOff(edge[1]);
  obs1.bounceOff(edge[0]);
  obs2.bounceOff(edge[1]);
  obs2.bounceOff(edge[0]);
  obs3.bounceOff(edge[1]);
  obs3.bounceOff(edge[0]);
  obs4.bounceOff(edge[1]);
  obs4.bounceOff(edge[0]);
  obs5.bounceOff(edge[1]);
  obs5.bounceOff(edge[0]);
  obs6.bounceOff(edge[1]);
  obs6.bounceOff(edge[0]);


  if(keyDown("up")){
    bunny.y=bunny.y-3;
  }
  if(keyDown("down")){
    bunny.y=bunny.y+3;
  }
  if(keyDown("left")){
    bunny.x=bunny.x-3;
  }
  if(keyDown("right")){
    bunny.x=bunny.x+3;
  }
  if (bunny.isTouching(carrot)){
    text("YOU WIN",200,200);
  }
  if(bunny.isTouching(obs1)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(obs2)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(obs3)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(obs4)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(obs5)){
    bunny.x=40;
    bunny.y=550;
  }
  if(bunny.isTouching(obs6)){
    bunny.x=40;
    bunny.y=550;
  }
  drawSprites();
}
