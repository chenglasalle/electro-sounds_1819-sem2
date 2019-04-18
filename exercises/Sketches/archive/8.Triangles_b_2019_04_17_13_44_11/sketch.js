function setup() {
  createCanvas(400, 400, WEBGL);
  noStroke();
  smooth();
}

function draw() {
  background(90);
  translate(-width / 2, -height / 2);
  translate(width / 2, height / 2,mouseX);
  rotateZ(frameCount * 0.01);
	
  stroke(255);
  strokeWeight(4);
  
  push();
  for (let i = 0; i < 20; i++) {
    renderTriangle(100, 100 + i * 4, 0, frameCount * 0.1);
    renderTriangle(100 + i * 4, 200, 0, frameCount * 0.04);
    renderTriangle(200, 100 + i * 4, 0, -frameCount * 0.1);
    renderTriangle(0, 0 + i * 4, 0, -frameCount * 0.1);
  }
  pop();
}


function renderTriangle(theX, theY, theZ, theR = 0) {
  push();
  translate(theX, theY, theZ);
  rotateX(theR);
  let x0 = 0,
    y0 = 0,
    z0 = 0;
  let x1 = 200,
    y1 = 10,
    z1 = 0;
  let x2 = 120,
    y2 = 0,
    z2 = 210;
  stroke(color(255, 0, 0, map(sin(frameCount * 0.1), -1, 1, 0, 255)));
  line(x0, y0, z0, x1, y1, z1);
  stroke(color(0, 0, 255, map(sin(frameCount * 0.2), -1, 1, 0, 255)));
  line(x1, y1, z1, x2, y2, z2);
  stroke(color(0, 255, 0, map(sin(frameCount * 0.07), -1, 1, 128, 255)));
  line(x2, y2, z2, x0, y0, z0);
  pop();
}