function drawBox2() {
//  x2 = 10 * cos
  push();
  fill(0,100,0,20);
  strokeWeight(20);
  stroke((random(200, 255)) * sin(frameCount * 0.001));
  push();
  translate(0, 0);
  //rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.009);
  box(A * 4);
  pop();

}
