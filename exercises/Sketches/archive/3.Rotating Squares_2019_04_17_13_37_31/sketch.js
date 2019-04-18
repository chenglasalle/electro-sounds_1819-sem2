function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
  fill(255, 0, 0)
  noFill()
}

function draw() {
  background(255, 5)

  noFill()
  stroke(0)
  let a = 0.01
  push()
  translate(width / 2, height / 2)
  scale(sin(frameCount * 0.01) * 2)
  rotate(frameCount * a)
  rect(0, 0, 100, 100)
  pop()

  push()
  translate(width / 4 + width / 2, height / 2)
  rotate(frameCount * a / 2)
  //rect(0,0,100,100)
  pop()
}1

function mousePressed() {

}

function mouseReleased() {
  background(random(0, 255))
}


function keyPressed() {
  if (key === '1') {
    background(255,0,0)
    enterFullscreen()
  } else if (key === '2') {
    background(255,255,0)
  }
}

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