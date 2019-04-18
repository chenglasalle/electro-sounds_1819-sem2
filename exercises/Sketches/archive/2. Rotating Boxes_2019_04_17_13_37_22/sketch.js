let angle = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(255,255,200);
  
  push()
  //rectMode(CENTER);
  //noStroke();
  fill(190, 190, 255);
  translate(-width/2 ,-height/2);
  translate(100,200);
  rotateX(angle * 0.003);
  rotateY(angle * 0.03);
  rotateZ(angle * 0.02);
  //rect (0, 0, 150, 150);
  box();
  
   rectMode();
  //noStroke();
  //fill(100, 180, 215);
  //translate(mouseX - width / 2, mouseY - height / 2);
    rotateX(angle * 0.003);
    rotateY(angle * 0.03);
    rotateZ(angle * 0.002);
  //rect (0, 0, 150, 150);
  box();
  pop()

   push()
  //rectMode(CENTER);
  //noStroke();
  //fill(180, 0, 25);
  translate(-width/2 ,-height/2);
  translate(300,200);
  rotateX(angle * 0.05);
  rotateY(angle * 0.3);
  rotateZ(angle * 0.2);
  //rect (0, 0, 150, 150);
  box();
  
   rectMode();
  //noStroke();
  //fill(100, 180, 215);
  //translate(mouseX - width / 2, mouseY - height / 2);
  rotateX(angle * 0.01);
  rotateY(angle * 0.01);
  rotateZ(angle * 0.02);
  //rect (0, 0, 150, 150);
  box();
  pop()


  angle += 0.7;
  
  
  
  
  
}