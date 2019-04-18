let steps = []

function setup() {
  createCanvas(600, 600);
  noStroke()
  // create 8 steps using a loop
  for (let i = 0; i < 8; i++) {
    steps[i] = new Step(i, 100 + i * 50, 100);
  }
}

function draw() {
  background(220);
  
  // iterate array steps using the forEach function
  // and draw each Step
  steps.forEach( (el) => {
    el.update();
    el.draw();
  });
  
}



class Step {

  constructor(theId, theX, theY) {
    this.id = theId;
    this.x = theX;
    this.y = theY;
    this.active = true;
    this.col = color(255);
    console.log("hello", this);
  }
  
	update() {
    this.active = this.inside(mouseX, mouseY);
  	if(this.active === true) {
      this.col = color(255);
    } else {
    	this.col = color(0);
    }
  }
  
  draw() {
    push();
    translate(this.x, this.y);
    fill(this.col);
    rect(0, 0, 40, 40);
    pop();
  }

  inside(theX, theY) {
    let result = theX>this.x && theX<this.x+40 && theY>this.y && theY<this.y+40;
    return result;
  }

}