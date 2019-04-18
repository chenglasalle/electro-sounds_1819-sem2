let A = 250
let x1 = 100;
let y1 = 100
let num = 1;
let t = 10;
let p = 10;
let zoff = 0;

function setup() {
  createCanvas(800, 450, WEBGL);
}

function keyPressed() {
  
  if (key === 'f' || key === 'F') {
    enterFullscreen();
  }
  
  if (keyCode === LEFT_ARROW) {
    drawBox1();
  } else if (keyCode === RIGHT_ARROW) {
    drawSphere();
  } else if (keyCode === DOWN_ARROW) {
    drawBox2();
  } else if (keyCode === UP_ARROW) {
    drawCylinder();
  } else if (keyCode === ALT) {
    drawCone();
  }
}


/* enter fullscreen-mode via
 * https://editor.p5js.org/kjhollentoo/sketches/H199a0c-x
 */
function enterFullscreen() {
  var fs = fullscreen();
  if (!fs) {
    fullscreen(true);
  }
}

/* full screening will change the size of the canvas */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/* prevents the mobile browser from processing some default
 * touch events, like swiping left for "back" or scrolling
 * the page.
 */
document.ontouchmove = function(event) {
  event.preventDefault();
}

let counter = 0;

function draw() {
  background(0);
  noStroke();
  keyPressed();
  
  counter++;
  counter %= 600;
  if(counter>100 && counter <200) {
    Particles1();
  }
  if(counter>200 && counter <300) {
    drawPerlin1();
  }
  if(counter>300 && counter <400) {
    drawPerlin2();
  }
  if(counter>400 && counter <500) {
    drawMath1();
  }
  //
  //drawPerlin2();
  //drawMath1();
  //drawMath2();


}


//OUTERLAYERS
function drawBox1() {
  x2 = 10 * cos
  push();
  translate(0, 0);
  noFill();
  strokeWeight(2);
  stroke((random(200, 255)) * sin(frameCount * 0.01));
  push();
  translate(0, 1, x2, 0);
  rotateX(10);
  rotateY(30)
  rotateZ(frameCount * 0.004);
  box(A * 1.5);
  pop();

}

function drawBox2() {
  x2 = 10 * cos
  push();
  noFill();
  strokeWeight(9);
  stroke((random(200, 255)) * sin(frameCount * 0.001));
  push();
  translate(0, 1, x2, 0);
  rotateX(frameCount * 0.005);
  rotateY(10);
  box(A * 2.5);
  pop();

}

function drawCylinder() {
  x2 = 10 * cos
  push();
  noFill();
  strokeWeight(3);
  stroke((random(200, 255)) * sin(frameCount * 0.01));
  push();
  translate(0, 1, x2, 0);
  //rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.001);
  cylinder(A * 2);
  pop();
}

function drawSphere() {
  x2 = 10 * cos
  push();
  noFill();
  strokeWeight(2);
  stroke((random(200, 255)) * sin(frameCount * 0.0009));
  push();
  translate(0, 1, x2, 0);
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  sphere(A * 1.5);
  pop();

}

function drawCone() {
  x2 = 10 * cos
  push();
  noFill();
  strokeWeight(4);
  stroke((random(200, 255)) * sin(frameCount * 0.001));
  push();
  translate(0, 10)
  // rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  cone(A * 5);
  pop();
}


//INNERLAYERS
function Particles1() {
  var a = 100
  var b = 200
  for (i = 0; i < 500; i++) {
    x = 300 * sin(a * t + PI / 2);
    y = 300 * sin(b * t);
    //Colours of Things
    fill(180, 250, 230);
    ellipse(width / x, height / y, 3, 3);
    t += 10;
  }
}

function drawPerlin1() {

  translate(0, 0);
  stroke(100, 250, 200);
  strokeWeight(3)
  noFill();
  beginShape();
  let noiseMax = 1;
  for (let a = 0; a < TWO_PI; a += 0.1) {
    let xoff = map(cos(a), -1, 1, 1, noiseMax);
    let yoff = map(sin(a), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 200, 100);
    let x = r * sin(a);
    let y = r * cos(a);
    vertex(x, y);
    rotateX(frameCount * 0.0001);
    rotateY(frameCount * 0.05);

  }
  endShape(CLOSE);

  zoff += 10;

}

function drawPerlin2() {

  translate(0, 0);
  stroke(100, 250, 200);
  strokeWeight(3)
  noFill();
  beginShape();
  let noiseMax = 5;
  for (let a = 0; a < TWO_PI; a += 0.1) {
    let xoff = map(cos(a), -1, 1, 10, noiseMax);
    let yoff = map(sin(a), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 3, 150, 4);
    let x = r * sin(a);
    let y = r * sin(a);
    vertex(x, y);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.05);

  }
  endShape(CLOSE);
  zoff += 1;

}


function drawMath1() {

  translate(0, 0)
  beginShape();
  stroke(100, 200, 250);
  noFill();
  strokeWeight(2);
  for (let a = 0; a < TWO_PI * 8; a += 3) {
    let k = 5 / 6
    let r = 180 * cos(k * a);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
    rotateX(10 * sin(frameCount * 0.00001));
    rotateY(frameCount * 0.0003);
    rotateZ(5 * tan(frameCount * 0.00005));
  }

  endShape(CLOSE);
}

function drawMath2() {

  translate(0, 0)
  beginShape();
  stroke(255, 200, 200);
  noFill();
  strokeWeight(2);
  for (let a = 0; a < TWO_PI * 8; a += 4) {
    let k = 1 / 6
    let r = 200 * cos(k * a);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
    //rotateX( 10* sin(frameCount * 0.0001) );
    rotateY(frameCount * 0.0003);
    rotateZ(1 * sin(frameCount * 0.0005));
  }

  endShape(CLOSE);
}