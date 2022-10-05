//aqui van las variables
 var edges;
  var pelota;
   var raqueta;
     var pelota_img;
      var score=0;
       var player_img;
        var enemy1;
         var enemy2;
          var enemy3;
           var alienGroup;
            var gameState="serve"
             var lives=3;
function preload(){//cargar archivos multimedia
pelota_img=loadImage("p.png");
player_img=loadAnimation("py1.gif");
enemy1=loadAnimation("enemigo 1.gif");
enemy2=loadAnimation("enemigo 2.gif");
enemy3=loadAnimation("enemigo 3.gif");
}

 function setup() {//setup=configuracion
  createCanvas(700, 700);//area de trabajo

 pelota=createSprite(350,450,50,50);//variablenombre=createSprite(x,y,ancho,alto)
 pelota.shapeColor="red";
 pelota.addImage("boll",pelota_img);
 pelota.scale=1;
 

 alienGroup=createGroup();
raqueta=createSprite(300,650,100,20);
//raqueta.changeAnimation(player_img);

edges=createEdgeSprites();
createBlock(80,enemy1);
createBlock(80+65,enemy2);
createBlock(230,enemy3);
createBlock(295,enemy1);
} 
function draw() {//draw=dibujar
  // Rellena el lienzo con un gris claro, cubriendo las imágenes previas
 background("black");//fondo 
 
  
  raqueta.x=mouseX;
textSize(35);
fill("red"); 
text("PUNTUACION:  "+score,350,35);
text("VIDAS:  "+lives,20,35);//nota
if(gameState=="serve"){
  textSize(30);
  fill("withe");
  text("PRESS SPACE TO PLAY",200,350);
  pelota.velocityX=0;
  pelota.velocityY=0;
  pelota.x=350;
  pelota.y=450;
  if(keyDown("space")){
    pelota.velocityX=-5;
    pelota.velocityY=-5;
    gameState="play";
alienGroup.setVelocityYEach(0.5);
  } //al precionar espacio la peota se movera


}
  else if(gameState=="end"){
text ("GAME OVER",200,400);
pelota.remove();
  }

 //bloquesin.y=bloquesin.y-5;

//crear Bordes
pelota.bounceOff(edges[0]);
pelota.bounceOff(edges[1]);
pelota.bounceOff(edges[2]);
//bloquesin.bounceOff(edges[3]);
pelota.bounceOff(alienGroup,alienHit);

pelota.bounceOff(raqueta);
if(pelota.isTouching(edges[3])){
  vidas();
}
if(!alienGroup[0]){
pelota.velocityX=0;
pelota.velocityY=0;
text ("HAS GANADO EL JUEGO!!",200,350);
}
  drawSprites();
}
function createBlock(Y, animation){
var X=125;
  for(var L=0;L<6;L++){
var bloque=createSprite(X,Y,50,25);
bloque.changeAnimation=animation;
X+=bloque.width+40;
console.log(L);

alienGroup.add(bloque);
  }

}
function alienHit(pelota,alienGroup){
alienGroup.remove();
//score=score+10;//0=0+10;10=10+10;20=20+10=30
score+=10;
}
function vidas (){
lives=lives-1;
if(lives>=1){
  gameState="serve";
}
else{
  gameState="end";
}
}