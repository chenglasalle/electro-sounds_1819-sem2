function setup() {
  createCanvas(700, 700);
	noStroke()
	rectMode(CENTER)
}

function draw() {
  background(240, 200, 200);
	for(let i=0; i<10; i++) {
		
	let rectSizeX = 300*cos(frameCount*0.001)
	let rectSizeY = 5 *cos(frameCount*0.001)
	
	push()
	translate(width/2 ,height/2)
	rotate(frameCount*0.009)
	fill(250, 250, 150)
	rect(0,0,rectSizeX,rectSizeY)
	}
	pop()

}