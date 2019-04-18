function drawSphere() {
  //x2 = 10 * cos
  push();
  fill(60,30,0,100);
  strokeWeight(1);
  stroke((random(200, 255)) * sin(frameCount * 0.0009));
  push();
  translate(0, 0);
  rotateY(20.4)
  //rotateY(10000)
  //rotateY(frameCount * 0.001);
  rotateZ(frameCount * 0.005);

  sphere(A * 4);
  pop();
}
