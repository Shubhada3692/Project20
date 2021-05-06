var background,backgroungImg;
var cat,catImg1,catImg2;
var mouse,mouseImg1,mouseImg2;


function preload() {
    backgroundImg = loadImage("images/garden.png");

    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");

    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse = createSprite(100,650,20,20);
    mouse.addAnimation("mouse1",mouseImg1);
    mouse.scale = 0.15;
    cat = createSprite(800,680,20,20);
    cat.addAnimation("cat1",catImg1);
    cat.scale = 0.2;

}

function draw() {

    background(backgroundImg);
    fill("white");
    textSize(20);
    text(mouseX+","+ mouseY,100,100);
    //Write condition here to evalute if tom and jerry collide
     if(cat.x-mouse.x <= cat.width/2 - mouse.width/2){
      cat.addAnimation("cathappy",catImg3);
      cat.changeAnimation("cathappy");
      cat.velocityX = 0;
      mouse.addAnimation("mousehappy",mouseImg3);
      mouse.changeAnimation("mousehappy");
      

     }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if(keyCode === LEFT_ARROW){
       mouse.addAnimation("mouseteasing",mouseImg2);
       mouse.frameDelay = 25;
       mouse.changeAnimation("mouseteasing");
       cat.velocityX = -2;
       cat.addAnimation("catmoving",catImg2);
       cat.changeAnimation("catmoving");
      
   }  

}
