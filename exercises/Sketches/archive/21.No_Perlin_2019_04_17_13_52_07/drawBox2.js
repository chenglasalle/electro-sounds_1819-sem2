function drawBox2() {
  x2 = 10 * cos
  push();
  noFill();
  strokeWeight(9);
  stroke((random(200, 255)) * sin(frameCount * 0.001));
  push();
  translate(0, 1, x2, 0);
  rotateX(frameCount * 0.005);
  rotateY(10);
  box(A * 3);
  pop();

}