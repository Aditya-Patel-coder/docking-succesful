var iss,spacecraft;
var hasDocked = false; 
 
 function preload(){
   bg = loadImage("spacebg.jpg");
   issImg = loadImage("iss.png");
   spaceImg1 = loadImage("spacecraft1.png");
   spaceImg2 = loadImage("spacecraft2.png");
   spaceImg3 = loadImage("spacecraft3.png");
   spaceImg4 = loadImage("spacecraft4.png");
 }

 
 function setup() {
  createCanvas(800,400);
 iss = createSprite(300, 120) ;
 iss.addImage(issImg);
 iss.scale=0.50

 spacecraft = createSprite(280,240);
 spacecraft.addImage(spaceImg1);
 spacecraft.scale = 0.15;
}

function draw() {
  background(bg); 
  
  if(!hasDocked){
    spacecraft.x = spacecraft.x+random(-1,1)

    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spaceImg3);
      spacecraft.x = spacecraft.x-2;
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(spaceImg4);
      spacecraft.x = spacecraft.x+2;
    }
    if(keyDown("UP_ARROW")){
      spacecraft.y= spacecraft.y-2;
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(spaceImg2);
    }
  }
  if(spacecraft.y<=iss.y+70){
 hasDocked = true;
 fill("orange")
 text("DOCKING SUCCESFUL",200,300);
  }
  drawSprites();

}