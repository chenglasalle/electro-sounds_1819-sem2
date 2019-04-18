/**
 *
 * Line Bounce
 * Processing Community Day 2019 Singapore, 26 January
 * sketch by Andreas Schlegel, 2019. www.sojamo.de
 */

var mic;


let wave = {
  value: 0,
  target: 1,
  stiffness: -200,
  damping: 9,
  mass: 0.51,
  vx: 0,
  t: 0.2
}

let r1, r2, r3, r4;


let spacing = wave.value * 0.05;
let num_lines =  29;
let num_seg = 10;
let scl = 19;



function setup() {
  createCanvas(800, 500, WEBGL);
  trigger();


}

function draw() {

  let spring = wave.stiffness * ((wave.value - wave.target));
  let damper = wave.damping * (wave.vx);
  let ax = (spring + damper) / wave.mass;
  wave.vx += ax * (wave.t / 1000);
  wave.value += wave.vx * (wave.t / 1000);

  background(0, 0, 0);

  push();
  translate(-width / 2, -height / 2);
  translate(width / 2, 0);
  //rotateY(frameCount*0.01)
  translate(-width / 2, 0);
  noStroke();
  beginShape();
  fill(0, 0, 0);
  vertex(0, 0);
  vertex(width, 0);
  fill(0, 0,0, 0);
  vertex(width, height);
  vertex(0, height);
  endShape();

  translate(0, height / 2);

  noFill()
  stroke(200,255,255)



  translate(0, -spacing * num_lines);
  for (let n = -num_lines; n < num_lines; n++) {
    translate(0, spacing);
    beginShape();
    for (let i = 0; i <= num_seg; i++) {

      let v1 = sin(((i + frameCount * 0.9) * r1));
      let v2 = cos((i * r2 + (frameCount + n * 5 * wave.value) * r3));
      let x = i * (width / num_seg);
      let y = (v1 * scl) + (v1 * v2 * scl);
      let z = n * 100 * wave.value
      vertex(x, y, z + 10);
    }
    endShape();
  }
  pop();

  if (frameCount % 100 == 0) {
    trigger()
  }
}

function trigger() {
  wave.value = 0
  r1 = random(11, 0.5)
  r2 = random(80, 90)
  r3 = random(1, 2)
}




function keyPressed() {
  if (key == 'f') {
    enterFullscreen()
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
