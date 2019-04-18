function drawPerlin2() {

  translate(0, 0);
  stroke(250, 100, 100);
  strokeWeight(1)
  noFill();
  beginShape();
  let noiseMax = 1000;
  for (let a = 0; a < TWO_PI; a += 0.1) {
    let xoff = map(cos(a), -1, 10, 1, noiseMax);
    let yoff = map(sin(a), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 350, 200);
    let x = r * sin(a);
    let y = r * cos(a);
    vertex(x, y);
    rotateX(frameCount * 0.0001);
    //rotateY(frameCount * 0.005);
    rotateZ(frameCount * 0.05);

  }
  endShape(CLOSE);

  zoff += 100;


  translate(0, 0);
  stroke(250, 100, 100);
  strokeWeight(2)
  noFill();
  beginShape();

  for (let a = 0; a < TWO_PI; a += 0.1) {
    let xoff = map(cos(a), -1, 10, 1, noiseMax);
    let yoff = map(sin(a), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 250, 100);
    let x = r * sin(a);
    let y = r * cos(a);
    vertex(x, y);
    rotateX(frameCount * 0.0001);
    //rotateY(frameCount * 0.005);
   // rotateZ(frameCount * 0.05);

  }
  endShape(CLOSE);

  zoff += 100;

}