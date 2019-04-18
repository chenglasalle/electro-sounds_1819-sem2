function drawCone() {
  x2 = 10 * cos
  push();
  noFill();
  strokeWeight(4);
  stroke((random(200, 255)) * sin(frameCount * 0.001));
  push();
  translate(0, 10)
  // rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  cone(A * 5);
  pop();
}