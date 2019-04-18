function drawMath3() {

  translate(0, 0)
  beginShape();
  stroke(100, 250, 200);
  noFill();
  strokeWeight(1);
  for (let a = 0; a < TWO_PI * 6; a += 0.5) {
    let k = 21 / 10
    let r = 300 * cos(k * a);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
    //rotateX(sin(frameCount * 0.0001));
    //rotateY(frameCount * 0.0003);
    rotateZ(10*tan(frameCount * 0.001));
  }

  endShape(CLOSE);
}