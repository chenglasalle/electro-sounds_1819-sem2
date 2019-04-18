function setup() {
  createCanvas(800, 400, WEBGL);
  noStroke();
  smooth();
}

function draw() {
  background(90);
  translate(-width / 2, -height / 2);
  translate(width / 2, height / 2,-800);
  rotateZ(frameCount * 0.001);
	
  stroke(255);
  strokeWeight(15);
  
  //TRIANGLES
  push();
    renderTriangle(100, 100, 0, frameCount * 0.001);
    renderTriangle(100, 200, 0, frameCount * 0.001);
    renderTriangle(200, 100, 0, frameCount * 0.001);
    renderTriangle(0, 0, 0, frameCount * 0.001);
  pop();
}


function renderTriangle(theX, theY, theZ, theR = 0) {
  push();
  translate(theX, theY, theZ);
  rotateX(theR);
  let x0 = 0,
    y0 = 0,
    z0 = 0;
  let x1 = 400,
    y1 = 10,
    z1 = 0;
  let x2 = 400,
    y2 = 0,
    z2 = 400;
  
  //COLORS
  stroke(color(255, 150, 150, map(sin(frameCount * 0.01), -1, 1, 0, 255)));
  line(x0, y0, z0, x1, y1, z1);
  stroke(color(150, 150, 255, map(sin(frameCount * 0.001), -1, 1, 0, 255)));
  line(x1, y1, z1, x2, y2, z2);
  stroke(color(150, 255, 150, map(sin(frameCount * 0.03), -1, 1, 0, 255)));
  line(x2, y2, z2, x0, y0, z0);
  pop();
}