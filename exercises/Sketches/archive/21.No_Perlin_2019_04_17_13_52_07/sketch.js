let A = 500
let x1 = 100;
let y1 = 100
let num = 1;
let t = 10;
let p = 10;
let zoff = 0;
let r;
let factor = 0;


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
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


function enterFullscreen() {
  var fs = fullscreen();
  if (!fs) {
    fullscreen(true);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

document.ontouchmove = function(event) {
  event.preventDefault();
}

//Counter for inner Layers
let counter = 0;

function draw() {
  background(0);
  noStroke();
  keyPressed();
  
  counter++;
  counter %= 2400;
  if(counter>0 && counter <300) {
    drawMath1();
  }
  if(counter>300 && counter <600) {
    drawMath2();
  }
    if(counter>600 && counter <900) {
    drawMath3();
  }
  if(counter>900 && counter <1200) {
    drawMath4();
  }
  if(counter>1200 && counter <1500) {
    drawMath5();
  }
  if(counter>1500 && counter <1800) {
    drawMath6();
  }
  if(counter>1800 && counter <2100) {
    drawMath7();
  }
  if(counter>2100 && counter <2400) {
    drawMath8();
  }

}
