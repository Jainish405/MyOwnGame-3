var sumoleft,sumoright,sumotop,sumobottom,sumoring,audience;
var sumoleftImg,sumorightImg,sumotopImg,sumobottomImg,sumoringImg,audienceImg;
var boundary1,boundary2,boundary3,boundary4;

//var gameState;
//var score=0;

function preload(){
    sumoleftImg = loadImage('images/Sumo Left.png');
    sumorightImg = loadImage('images/Sumo Right.png');
    sumotopImg = loadImage('images/Sumo Top.png');
    sumoringImg= loadImage('images/SumoRing.png');
    sumobottomImg = loadImage('images/Sumo Bottom.png');
    audienceImg = loadImage('images/audience.png')
}

function setup(){
 createCanvas(1200,600);

 boundary1=createSprite(360,320,10,590);
 boundary1.shapeColor ='black';

 boundary2=createSprite(940,320,10,590);
 boundary2.shapeColor ='black';

 boundary3=createSprite(640,600,590,10);
 boundary3.shapeColor ='black';

 boundary4=createSprite(640,20,600,10);
 boundary4.shapeColor ='black';

 sumobottom=createSprite(650,460);
 sumobottom.addImage(sumobottomImg);
 sumobottom.scale=0.3;

 sumoleft=createSprite(480,280);
 sumoleft.addImage(sumoleftImg);
 sumoleft.scale=0.3;

 sumoright=createSprite(830,280);
 sumoright.addImage(sumorightImg);
 sumoright.scale=0.3;

 sumotop=createSprite(650,110);
 sumotop.addImage(sumotopImg);
 sumotop.scale=0.3;

 sumoring=createSprite(650,340);
 sumoring.addImage(sumoringImg);
 sumoring.scale=3.5;

 audience=createSprite(620,450);
 audience.addImage(audienceImg);
 audience.scale=1;
 audience.shapeColor ='black';

}


function draw(){
    background(255);

 

    boundary1.visible=false;
    boundary2.visible=false;
    boundary3.visible=false;
    boundary4.visible=false;

    if(sumotop.isTouching(boundary1)||sumotop.isTouching(boundary2)||sumotop.isTouching(boundary3)||sumotop.isTouching(boundary4)){
    sumotop.x=650;
    sumotop.y=110;
    }

    if(sumoright.isTouching(boundary1)||sumoright.isTouching(boundary2)||sumoright.isTouching(boundary3)||sumoright.isTouching(boundary4)){
       sumoright.x=830;
       sumoright.y=280;
     }

    if(sumoleft.isTouching(boundary1)||sumotop.isTouching(boundary2)||sumotop.isTouching(boundary3)||sumoleft.isTouching(boundary4)){
       sumoleft.x=480;
        sumoleft.y=280;
       } 
            
    if(sumobottom.isTouching(boundary1)||sumobottom.isTouching(boundary2)||sumobottom.isTouching(boundary3)||sumobottom.isTouching(boundary4)){
         sumobottom.x=650;
         sumobottom.y=460;
       }

 sumotop.depth=sumoring.depth;
 sumotop.depth=sumotop.depth+1;

 sumoright.depth=sumoring.depth;
 sumoright.depth=sumoright.depth+1;

 sumoleft.depth=sumoring.depth;
 sumoleft.depth=sumoleft.depth+1;

 sumobottom.depth=sumoring.depth;
 sumobottom.depth=sumobottom.depth+1;



    drawSprites();
}





function keyPressed(){
	if(keyCode === UP_ARROW){
	 sumotop.x=sumotop.x+0;
     sumotop.y=sumotop.y-10;
	 } 

     if(keyCode === DOWN_ARROW){
         sumotop.x=sumotop.x+0;
         sumotop.y=sumotop.y+10;
     }

     if(keyCode === LEFT_ARROW){
         sumotop.x=sumotop.x-10;
         sumotop.y=sumotop.y+0;
     }

     if(keyCode === RIGHT_ARROW){
         sumotop.x=sumotop.x+10;
         sumotop.y=sumotop.y+0
     }

     if(keyCode === 119){
        sumoright.x=sumoright.x+0;
        sumoright.y=sumoright.y-10
        } 
   
        if(keyDown('s')){
            sumoright.x=sumoright.x+0;
            sumoright.y=sumoright.y+10;
        }
   
        if(keyDown('a')){
            sumoright.x=sumoright.x-10;
            sumoright.y=sumoright.y+0;
        }
   
        if(keyDown('d')){
            sumoright.x=sumoright.x+10;
            sumoright.y=sumoright.y+0;
        }

        if(keyDown('g')){
            sumoleft.x=sumoleft.x+0;
            sumoleft.y=sumoleft.y-10
            } 
       
            if(keyDown('b')){
                sumoleft.x=sumoleft.x+0;
                sumoleft.y=sumoleft.y+10;
            }
       
            if(keyDown('v')){
                sumoleft.x=sumoleft.x-10;
                sumoleft.y=sumoleft.y+0;
            }
       
            if(keyDown('n')){
                sumoleft.x=sumoleft.x+10;
                sumoleft.y=sumoleft.y+0;
            }

            if(keyDown('i')){
                sumobottom.x=sumobottom.x+0;
                sumobottom.y=sumobottom.y-10
                } 
           
                if(keyDown('k')){
                    sumobottom.x=sumobottom.x+0;
                    sumobottom.y=sumobottom.y+10;
                }
           
                if(keyDown('j')){
                    sumobottom.x=sumobottom.x-10;
                    sumobottom.y=sumobottom.y+0;
                }
           
                if(keyDown('l')){
                    sumobottom.x=sumobottom.x+10;
                    sumobottom.y=sumobottom.y+0;
                }
 }