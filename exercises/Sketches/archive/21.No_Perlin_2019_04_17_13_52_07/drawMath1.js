function drawMath1() {

  translate(0, 0)
  beginShape();
  stroke(190, 250, 250);
  noFill();
  strokeWeight(0.5);
  for (let a = 0; a < TWO_PI * 10; a += 0.2) {
    let k = 16 / 3
    let r = 500 * cos(k * a);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
    //rotateX(sin(frameCount * 0.0001));
    //rotateY(frameCount * 0.0003);
    rotateZ(800000000*tan(frameCount * 0.0000009));
  }

  endShape(CLOSE);
}