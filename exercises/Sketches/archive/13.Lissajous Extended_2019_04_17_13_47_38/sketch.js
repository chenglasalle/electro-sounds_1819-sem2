// lissajous curve

let t = 10;
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
  //createShape2();
  //createShape3();
}

function createShape() {
  var a = 10
  var b = 20 
  for (i = 0; i <1000; i++) {
  	x = 400*tan(a*t+TWO_PI/2);
  	y = 10*tan(b*t);    
    //Colours of Things
    fill(180,250,230);   
	rect(width/2+x, height/2+y, 5, 100);
  	t+=2;
  } 
}
function createShape2() {   
  var a = 400
  var b = 10 
  for (i = 0; i < 100; i++) {
  	x = 400*sin(a*t+PI/2);
  	y = 100*cos(b*t);  
    //Colours of Things
    fill(180,250,230);
    rect(width/2+x, height/2+y, 8, 400);
  	t+=1;
  } 
}

function createShape3() {
  var a = 10
  var b = 20
  for (i = 0; i < 100; i++) {
  	x = 300*sin(a*t+PI/2);
  	y = 300*sin(b*t);
    //Colours of Things
    fill(180,250,230);
    rect(width/2+x, height/2+y, 40, 5);
  	t+=10;
  }
}

