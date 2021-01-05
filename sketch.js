var bg,Tom, TomImage1,TomImage2,TomImage3
var Jerry,JerryImage1,jerryImage2,JerryImage3







function preload() {
    bg = loadImage("Images/garden.png");
   TomImage1 = loadAnimation("images/tomOne.png");
    TomImage2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
    TomImage3 = loadAnimation("images/tomFour.png");
    JerryImage1 = loadAnimation("images/jerryOne.png");
    JerryImage2 = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    JerryImage3 = loadAnimation("images/jerryFour.png");
} 

function setup(){
    createCanvas(1000,800);
    Tom = createSprite(870,600);
    Tom.addAnimation("tomSleeping",TomImage1);
    Tom.scale = 0.2;

    Jerry = createSprite(200,600);
    Jerry.addAnimation("jerryStanding",JerryImage1);
    Jerry.scale = 0.15

}

function draw() {

    background(bg);
    if(Tom.x-Jerry.x<Tom.width/2-Jerry.width/2){
        Tom.velocityX = 0;
        Tom.addAnimation("lastImage",TomImage3);
        Tom.x = 300;
        Tom.scale = 0.2;
        Tom.changeAnimation("lastImage");

        Jerry.addAnimation("lastImage",JerryImage3);
        Jerry.scale = 0.15;
        Jerry.changeAnimation("lastImage");
     
    }
    keyPressed();
   
   
   
   
   
    drawSprites();
}


function keyPressed(){
if(keyDown("left")){
    Tom.velocityX = -5;
    Tom.addAnimation("tomRunning",TomImage2);
    Tom.changeAnimation("tomRunning");

    Jerry.addAnimation("jerryTeasing",JerryImage2);
    Jerry.frameDelay = 25;
    Jerry.changeAnimation("jerryTeasing");

}


}
