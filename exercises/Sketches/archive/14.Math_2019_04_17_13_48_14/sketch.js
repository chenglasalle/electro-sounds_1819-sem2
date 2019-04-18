let k = 5/8


function setup() {
  createCanvas(400,400);
}

function draw() {
  background(51);
  translate(width/2, height/2);
  
  let k = 5/8

  beginShape();
  stroke(255);
  noFill();
  strokeWeight(1);
  for (let a = 0 ; a < TWO_PI * 8; a +=0.02) {
    let r = 200 * cos(k *a);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  
  endShape(CLOSE);
}