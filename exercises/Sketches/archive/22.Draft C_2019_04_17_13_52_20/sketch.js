function setup() {
  createCanvas(900, 900, WEBGL);
}

function draw() {
  background(0);
  
  translate(0, 0)
  beginShape();
  stroke(250, 250, 190);
  noFill();
  strokeWeight(0.5);
  for (let a = 0; a < TWO_PI * 2.5; a += 0.3) {
    let k = 50 / 4
    let r = 300 * cos(k * a);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
    //rotateX(sin(frameCount * 0.0001));
    //rotateY(frameCount * 0.0003);
    rotateZ(10*tan(frameCount * 0.00005));
  }

  endShape(CLOSE);

}