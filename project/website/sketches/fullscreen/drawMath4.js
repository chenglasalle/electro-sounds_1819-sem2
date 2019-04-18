function drawMath4() {
  let spectrum = fft.analyze();
  S = map(spectrum[10], 0, 255, 10, 400);

  translate(0, 0)
  beginShape();
  stroke(230, 230, 200);
  noFill();
  strokeWeight(1);
  for (let a = 0; a < TWO_PI * 3; a += 0.29) {
    let k = 10 / 2
    let r = S * cos(k * a);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
    //rotateX(sin(frameCount * 0.0001));
    //rotateY(frameCount * 0.0003);
    rotateZ(1000*tan(frameCount * 0.00001));
  }

  endShape(CLOSE);
}
