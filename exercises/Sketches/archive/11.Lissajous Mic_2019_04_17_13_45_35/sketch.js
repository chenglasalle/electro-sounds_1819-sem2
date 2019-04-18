// lissajous curve
let mic;
let fft;
var t = 0;
let p = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
  textSize(15);
  
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(0.6, 64);
  fft.setInput(mic);

}

function draw() {
  background(0);
  

 fill(255);
  createShape();
  createShape2();
  
}

function createShape() {
   
  let spectrum = fft.analyze();
  
  var a = spectrum[20]/2
  var b = spectrum[0]
  
  for (i = 0; i < 50; i++) {

  	x = 2*spectrum[0]*sin(a*t+PI/2);
  	y = spectrum[10]*tan(b*t);
    
    //Colours of Things
    fill(spectrum[40],spectrum[20]/2,spectrum[30]);
    
		ellipse(width/2+x, height/2+y, 5, spectrum[0]);
  	t+=9;
  }
 
}

function createShape2() {
   
  let spectrum = fft.analyze();
  
  var a = 100
  var b = 100
  
  for (i = 0; i < 10; i++) {

  	x = 50*tan(a*t+PI/2);
  	y = 90*sin(b*t);
    
    //Colours of Things
    fill(spectrum[25]-100,spectrum[20]/2,0);
    
		ellipse(width/2+x, height/2+y, 10, 10);
  	p+=9;
  }
 
}

