function drawMath8() {
  let spectrum = fft.analyze();
  S = map(spectrum[10], 0, 255, 0, 400);
  translate(0, 0)
  beginShape();
  stroke(200, 200, 250);
  noFill();
  strokeWeight(1);
  for (let a = 0; a < TWO_PI * 2.5; a += 0.29) {
    let k = 50 / 4
    let r = S * cos(k * a);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
    //rotateX(sin(frameCount * 0.0001));
    //rotateY(frameCount * 0.0003);
    rotateZ(500*tan(frameCount * 0.00005));
  }

  endShape(CLOSE);
}
