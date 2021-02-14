var ironMan, drStrange;

function setup() {
  //create the background/base
  createCanvas(800,400);
  
  //the moving sprite
  ironMan = createSprite(400, 200, 50, 50);
  ironMan.shapeColor = "red";
  ironMan.debug = true;
  

  //the fixed sprite
  drStrange = createSprite(700, 200, 50, 50);
  drStrange.shapeColor = "darkblue";
  drStrange.debug = true;
}

function draw() {
  //to clear screen and give background color
  background("lightBlue"); 
  
  //to move the ironMan
  ironMan.y = mouseY;
  ironMan.x = mouseX;

  //to change their color to black when the two touch each other
  if (ironMan.x - drStrange.x < ironMan.width/2 + drStrange.width/2 
   && drStrange.x - ironMan.x < ironMan.width/2 + drStrange.width/2
   && drStrange.y - ironMan.y < ironMan.height/2 + drStrange.height/2
   && ironMan.y - drStrange.y < ironMan.height/2 + drStrange.height/2){
    
    ironMan.shapeColor = "black";
    drStrange.shapeColor = "black";
  
  }
  else{
    ironMan.shapeColor = "red";
    drStrange.shapeColor = "darkblue";
  }

  

  
  
  //display the sprites
  drawSprites();
}