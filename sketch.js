function setup() {
    createCanvas(800,800);
    background("#C8D640");
  }
  
  function draw() {
    stroke("darkblue");
   strokeWeight(1);
   fill("red");
   if(mouseIsPressed){
     rect(mouseX, mouseY, 20, 30);
    }
  }