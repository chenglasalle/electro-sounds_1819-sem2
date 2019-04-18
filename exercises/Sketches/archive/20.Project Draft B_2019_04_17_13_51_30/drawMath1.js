function drawMath1() {

  translate(0, 0)
  beginShape();
  stroke(100, 200, 250);
  noFill();
  strokeWeight(2);
  for (let a = 0; a < TWO_PI * 6; a += 0.1) {
    let k = 5 / 6
    let r = 300 * cos(k * a);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
   // rotateX(tan(frameCount * 0.00005));
   // rotateY(frameCount * 0.003);
    rotateZ(10*tan(frameCount * 0.001));
  }

  endShape(CLOSE);
}