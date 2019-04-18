// Times Tables Cardioid Visualization
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/133-times-tables-cardioid.html
// https://youtu.be/bl3nc_a1nvs
// https://editor.p5js.org/codingtrain/sketches/gwcGb_NPm

let r;
let factor = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = height / 2 - 20;

}

function getVector(index, total) {
  const angle = map(index % total, 0, total, 0, TWO_PI);
  const v = p5.Vector.fromAngle(angle + PI);
  v.mult(r);
  return v;
  
}
function draw(){
drawmath();

}

function drawmath() {
  background(0);
  a1= 400
  const total = a1; //int(map(mouseX, 0, width, 0, 200));
  factor += 0.015;

  translate(width / 2, height / 2);
  stroke(255, 190, 200);
  strokeWeight(2);
  noFill();
  ellipse(0, 0, r * 2);

  strokeWeight(2);
  for (let i = 0; i < total; i++) {
    const a = getVector(i, total);
    const b = getVector(i * factor, total);
    line(a.x, a.y, b.x, b.y);
  }
}