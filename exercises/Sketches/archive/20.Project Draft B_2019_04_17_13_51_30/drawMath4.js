function drawMath4() {

  translate(0, 0)
  beginShape();
  stroke(250, 250, 100,);
  noFill();
  strokeWeight(0.5);
  for (let a = 0; a < TWO_PI * 3; a += 0.29) {
    let k = 10 / 2
    let r = 300 * cos(k * a);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
    //rotateX(sin(frameCount * 0.0001));
    //rotateY(frameCount * 0.0003);
    rotateZ(10*tan(frameCount * 0.00001));
  }

  endShape(CLOSE);
}