var fixedRect, movingRect;
var edges;
var object1,object2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(200, 100, 80, 50);
  movingRect.shapeColor = "green";
  movingRect.debug=true;
  object1=createSprite(300,200,50,50);
  object1.shapeColor = "blue";
  object2=createSprite(200,300,50,50);
  object2.shapeColor = "blue";
  object1.velocityX=2;
 edges=createEdgeSprites();
}

function draw() {
  background(0); 
  drawSprites();
  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;
  //console.log(movingRect.x-fixedRect.x);
  
  if(isTouching(object2, movingRect)){
    movingRect.shapeColor = "red";
    object2.shapeColor = "pink";
  }
  else
  {
    movingRect.shapeColor = "green";
    object2.shapeColor = "green";
  }

bounceOff(object1,movingRect);
}
