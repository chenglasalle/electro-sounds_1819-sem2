function drawBox1() {
  //x2 = 10 * cos;
  push();
  translate(0, 0);
  fill(100,0,0,20);
  strokeWeight(20);
  stroke((random(200, 255)) * sin(frameCount * 0.001));
  push();
  translate(0, 0);
  //rotateX(0);
  //rotateY(30)
  rotateZ(frameCount * 0.009);
  box(A * 4);
  pop();

}
