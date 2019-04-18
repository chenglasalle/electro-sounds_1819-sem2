function drawSphere() {
  x2 = 10 * cos
  push();
  noFill();
  strokeWeight(2);
  stroke((random(200, 255)) * sin(frameCount * 0.0009));
  push();
  translate(0, 1, x2, 0);
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  sphere(A * 3);
  pop();

}