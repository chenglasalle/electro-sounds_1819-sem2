function drawPerlin1() {

  translate(0, 0);
  stroke(100, 250, 200);
  strokeWeight(20)
  noFill();
  beginShape();
  let noiseMax = 1;
  for (let a = 0; a < TWO_PI; a += 0.1) {
    let xoff = map(cos(a), -1, 1, 1, noiseMax);
    let yoff = map(sin(a), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 300, 300);
    let x = r * sin(a);
    let y = r * cos(a);
    vertex(x, y);
    rotateX(frameCount * 0.0005);
    //rotateY(frameCount * 0.0005);
    //rotateZ(frameCount * 0.0009);

  }
  endShape(CLOSE);

  zoff += 1000;

    translate(0, 0);
  stroke(100, 250, 200);
  strokeWeight(10)
  noFill();
  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.1) {
    let xoff = map(cos(a), -1, 1, 1, noiseMax);
    let yoff = map(sin(a), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 100, 100);
    let x = r * sin(a);
    let y = r * cos(a);
    vertex(x, y);
    rotateX(frameCount * 0.00001);
    rotateY(frameCount * 0.5);
    //rotateZ(frameCount * 0.01);

  }
  endShape(CLOSE);

  zoff += 100;

}