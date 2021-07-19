var bgImg;
var cat;
var mouse;

function preload() {
    bgImg = loadImage("sprites/garden.png");
    catImage1 = loadAnimation("sprites/cat1.png");
    mouseImage1 = loadAnimation("sprites/mouse1.png");
    catImage2 = loadAnimation("sprites/cat2.png/cat3.png");
    mouseImage2 = loadAnimation("sprites/mouse2.png/mouse3.png");
}


function setup(){
    createCanvas(1000,800);
    cat = createSprite(870, 600); 
    mouse = createSprite(200, 600);

}


function draw() {
   background("garden.png",bgImg);
    
   if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.addAnimation("catRunning", catImage2);
        cat.changeAnimation("catRunning");
    }


    drawSprites();
    backgroundImage.display();
    cat.display();
    mouse.display();
}


function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImage3);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
}

}
