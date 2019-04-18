function drawMath6() {
  let spectrum = fft.analyze();
  S = map(spectrum[10], 0, 255, 10, 400);
  translate(0, 0)
  beginShape();
  stroke(250, 250, 100);
  noFill();
  strokeWeight(1);
  for (let a = 0; a < TWO_PI * 3; a += 0.2) {
    let k = 10 / 6
    let r = S * cos(k * a);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
    //rotateX(sin(frameCount * 0.0001));
    //rotateY(frameCount * 0.0003);
    rotateZ(400*tan(frameCount * 0.00005));
  }

  endShape(CLOSE);
}
