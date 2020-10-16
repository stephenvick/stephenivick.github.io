function setup() {
    createCanvas(400, 400);  // height, width
  }
  
    // the drew function is called repeatedly
  function draw() {
    background(220);  // 255 shades pf grey
    fill(150);
    rect(20, 20, 130)   // x, y, size
    //point(mouseX, mouseY);
    
    fill(2550);
    stroke(0);
    ellipse(mouseX, mouseY, 50);
    
    
  }