function drawMath3() {
  let spectrum = fft.analyze();
  S = map(spectrum[10], 0, 255, 10, 400);

  translate(0, 0)
  beginShape();
  stroke(160, 250, 220);
  noFill();
  strokeWeight(1);
  for (let a = 0; a < TWO_PI * 4; a += 0.1) {
    let k = 25 / 20
    let r = S * cos(k * a);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
    //rotateX(sin(frameCount * 0.0001));
    //rotateY(frameCount * 0.00003);
    rotateZ(300*tan(frameCount * 0.00009));
  }

  endShape(CLOSE);
}
