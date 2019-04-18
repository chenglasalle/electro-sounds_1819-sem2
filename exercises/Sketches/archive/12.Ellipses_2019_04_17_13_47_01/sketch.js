// lissajous curve

var t = 10;
let p = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
  textSize(15);
}
function draw() {
  background(0);
  fill(255);
  createShape();
  createShape2();
  createShape3();
}

function createShape() {
  var a = 100
  var b = 200 
  for (i = 0; i <100; i++) {
  	x = 300*sin(a*t+TWO_PI/2);
  	y = 100*sin(b*t);    
    //Colours of Things
    fill(180,250,230);   
	ellipse(width/2+x, height/2+y, 5, 5);
  	t+=9;
  } 
}
function createShape2() {   
  var a = 5
  var b = 300 
  for (i = 0; i < 100; i++) {
  	x = 600*cos(a*t+PI/2);
  	y = 200*tan(b*t);  
    //Colours of Things
    fill(180,250,230);
    ellipse(width/2+x, height/2+y, 5, 5);
  	t+=9;
  } 
}

function createShape3() {
  var a = 5
  var b = 5
  for (i = 0; i < 50; i++) {
  	x = 400*sin(a*t+PI/2);
  	y = 400*sin(b*t);
    //Colours of Things
    fill(150,100,200);
    ellipse(width/2+x, height/2+y, 6, 5);
  	t+=9;
  }
}


