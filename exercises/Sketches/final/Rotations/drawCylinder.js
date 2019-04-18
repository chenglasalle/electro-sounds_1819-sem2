function drawCylinder() {
  //x2 = 10 * cos
  push();
  fill(00,10,60,100);
  strokeWeight(2);
  stroke((random(200, 255)) * (frameCount * 0.009));
  push();
  translate(0,0);
  rotateZ(frameCount * 0.005);
  rotateY(frameCount * 0.001);
  cylinder(A + 1000);
  pop();
}
