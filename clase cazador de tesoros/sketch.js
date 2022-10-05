//variables
var pelota;
 var paredes;
  var grupoDeParedes=[];
   var grupoT=[];
    var tesoros=[{x:300,y:380,isCollected:false},
    {x:800,y:90,isCollected:false},
    {x:700,y:380,isCollected:false},
    {x:1380,y:130,isCollected:false},
    {x:1430,y:400,isCollected:false},
    {x:1400,y:80,isCollected:false}
];
   paredes=[{x:10,y:20,w:1700,h:40},
    {x:10,y:450,w:1700,h:40},
    {x:10,y:450,w:40,h:900},
    {x:600,y:50,w:250,h:40},
    {x:600,y:90,w:150,h:40},
    {x:600,y:130,w:80,h:40},
    {x:700,y:300,w:250,h:40},
    {x:800,y:370,w:50,h:120},
    {x:300,y:300,w:250,h:40},
    {x:200,y:370,w:50,h:120},

    {x:1000,y:450,w:2000,h:40},
    {x:1000,y:450,w:2000,h:40},
    {x:900,y:450,w:40,h:700},
    {x:1100,y:165,w:200,h:250},
    {x:1250,y:420,w:50,h:25},
    {x:1300,y:395,w:50,h:25},
    {x:1350,y:370,w:50,h:25},
    {x:1500,y:370,w:50,h:25},
    {x:1550,y:395,w:50,h:25},
    {x:1600,y:420,w:50,h:25},
    {x:1760,y:150,w:250,h:40},
    {x:1900,y:105,w:40,h:130},
    {x:1950,y:350,w:100,h:250},
    
];
function setup(){
createCanvas(800,800);
pelota=createSprite(100,310,25,25);
for(var a in paredes){
var pared=createSprite(paredes[a].x,paredes[a].y,paredes[a].w,paredes[a].h);
grupoDeParedes.push(pared);
}
for(var t in tesoros){
    var tesoro=createSprite(tesoros[t].x,tesoros[t].y);
    grupoT.push(tesoro);
}

}
function draw(){
background("black");
if (keyDown("right")){
pelota.x+=21
}
if (keyDown("left")){
    pelota.x+=-21
    }
    if (keyDown("up")){
        pelota.y+=-21
        }
        if (keyDown("down")){
            pelota.y+=21
            }
for(var q in grupoDeParedes){
pelota.collide(grupoDeParedes[q]);
}
for(var p in grupoT){
    if(pelota.collide(grupoT[p])){
        grupoT[p].visible=false;
        grupoT[p].destroy();
    }

}
drawSprites();
}

