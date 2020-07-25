var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var divisions=[];
var particles = [];
var plinkos = [];
var ground
var divisionHeight=300;

var score = 0
var particle
var count = 0
 var gameState="play"
 
function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
 
    
  ground = new Ground(400,790,800,20);

  for(k=0 ; k<=width; k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
 }
for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinkos(j,75));
    }
    for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinkos(j,175));
    }
     for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinkos(j,275));
    }
     for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinkos(j,375));
    }


}
 


function draw() {
  background("black");

 
  Engine.update(engine);
 
  text(mouseX+","+mouseY,10,15)
  textSize(35)
  fill("white")
  text("SCORE:"+score,340,45)
  fill("red")
  text(500,10,515)
  text(500,90,520)
  fill("orange")
  text(500,170,520)
  text(500,250,520)
  fill("pink")
  text(100,330,520)
  text(100,410,520)
  fill("blue")
  text(100,490,520)
  text(200,570,520)
  fill("purple")
  text(200,650,520)
  text(200,730,520)
    ground.display();
   
    for(var k=0;k<divisions.length;k++){
      divisions[k].display();
  }
  for (var i = 0; i < plinkos.length; i++) {
   plinkos[i].display();
  }


  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760)
    {
      if(particle.body.position.x<330){
        score=score+500
        particle=null
        if(count>=5) gameState="end";
      }
    }
  }
  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760)
    {
      if(particle.body.position.x<600){
       
        score=score+100
        particle=null
        if(count>=5) gameState="end";

      }
    }
  }
  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760)
    {
      if(particle.body.position.x<800){
       
        score=score+200
        particle=null
        if(count>=5) gameState="end";
      }
    }
  }
  if(count>=5){
    text("GAME OVER",250,250)
  }
} 
