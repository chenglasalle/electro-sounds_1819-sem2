function drawMath3() {

  translate(0, 0)
  beginShape();
  stroke(160, 250, 220);
  noFill();
  strokeWeight(0.5);
  for (let a = 0; a < TWO_PI * 4; a += 0.1) {
    let k = 25 / 20
    let r = 500 * cos(k * a);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
    //rotateX(sin(frameCount * 0.0001));
    //rotateY(frameCount * 0.00003);
    rotateZ(300*tan(frameCount * 0.00009));
  }

  endShape(CLOSE);
}