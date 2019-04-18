function drawCylinder() {
  x2 = 10 * cos
  push();
  noFill();
  strokeWeight(3);
  stroke((random(200, 255)) * (frameCount * 0.009));
  push();
  translate(0, 1, x2, 0);
  //rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.001);
  cylinder(A * 3);
  pop();
}