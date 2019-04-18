function drawMath7() {

  translate(0, 0)
  beginShape();
  stroke(250, 190, 150);
  noFill();
  strokeWeight(0.5);
  for (let a = 0; a < TWO_PI * 3; a += 0.1) {
    let k = 21 / 3
    let r = 500 * cos(k * a);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
    //rotateX(sin(frameCount * 0.0001));
   // rotateY(frameCount * 0.0003);
    rotateZ(5000*tan(frameCount * 0.00001));
  }

  endShape(CLOSE);
}