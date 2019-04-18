function drawBox1() {
  x2 = 10 * cos
  push();
  translate(0, 0);
  noFill();
  strokeWeight(2);
  stroke((random(200, 255)) * sin(frameCount * 0.01));
  push();
  translate(0, 1, x2, 0);
  rotateX(10);
  rotateY(30)
  rotateZ(frameCount * 0.004);
  box(A * 3);
  pop();

}