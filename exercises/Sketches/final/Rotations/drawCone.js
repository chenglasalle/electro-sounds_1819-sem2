function drawCone() {
  x2 = 10 * cos
  push();
  smooth();
  fill(10,200,250,50);
  strokeWeight(5);
  stroke((random(200, 255)) * sin(frameCount * 0.001));
  push();
  translate(0,0)
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  smooth();
  torus(8000,2500);
  pop();
}
