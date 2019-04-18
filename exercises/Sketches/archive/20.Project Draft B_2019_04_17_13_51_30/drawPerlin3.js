function drawPerlin3() {

  translate(0, 0);
  stroke(250, 190, 250);
  strokeWeight(10)
  noFill();
  beginShape();
  let noiseMax = 6000;
  for (let a = 0; a < TWO_PI; a += 0.5) {
    let xoff = map(cos(a), -1, 10, 1, noiseMax);
    let yoff = map(sin(a), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 300, 200);
    let x = r * sin(a);
    let y = r * cos(a);
    vertex(x, y);
    //rotateX(frameCount * 0.1);
    rotateY(frameCount * 0.005);
    rotateZ(frameCount * 0.0005);

  }
  endShape(CLOSE);

  zoff += 10;

}