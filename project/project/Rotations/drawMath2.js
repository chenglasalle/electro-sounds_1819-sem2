function drawMath2() {
  let spectrum = fft.analyze();
  S = map(spectrum[10], 0, 255, 10, 400);
  translate(0, 0)
  beginShape();
  stroke(200, 250, 230);
  noFill();
  strokeWeight(0.8);
  for (let a = 0; a < TWO_PI * 14; a += 0.29) {
    let k = 21 / 10
    let r = S * cos(k * a);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
    //rotateX(sin(frameCount * 0.0001));
    //rotateY(frameCount * 0.0003);
    rotateZ(tan(frameCount * 0.0005));
  }

  endShape(CLOSE);
}
