let A = 500
let x1 = 100;
let y1 = 100
let num = 1;
let t = 10;
let p = 10;
let zoff = 0;
let r;
let factor = 0;
let buffer, buffer2, buffer3, buffer4, buffer5, buffer6;
let mic;
let fft;
let S;


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  S=0;
  //drawParticlesfirst()
mic = new p5.AudioIn();
mic.start();
fft = new p5.FFT(0.9, 64);
fft.setInput(mic);


}
function draw() {

  background(30);
  noStroke();
  keyPressed();
  drawParticles();
  let spectrum = fft.analyze();


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

function keyPressed() {

  if (key === 'f' || key === 'F') {
    enterFullscreen();
  }

  if (key === '1' || key === '1') {

    drawBox1();

  } else if (key === '2' || key === '2') {

    drawBox2();

  } else if (key === '3' || key === '3') {

    drawSphere();

  } else if (key === '4' || key === '4') {

    drawCylinder();

  } else if (key === '5' || key === '5') {

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




function drawParticles(){
  for (let i = 0; i<20; i++){
    push();
    beginShape();
    noStroke();
    fill(0);
    translate(random(-width, width), random(-height, height), -400);
    translate(random(-width, width)*(frameCount*0.0001), random(-height, height)*(frameCount*0.0001), -400);
    sphere(1.5);
    endShape(CLOSE);
    pop();
  }
}

function drawParticlesfirst(){
  for (let i = 0; i<20; i++){
    push();
    beginShape();
    noStroke();
    fill(0);
    translate(random(-width, width), random(-height, height), -400);
    sphere(1.5);
    endShape(CLOSE);
    pop();
  }
}
