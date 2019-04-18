// Coding Challenge 127: Brownian Motion Snowflake
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/127-brownian-snowflake.html
// https://youtu.be/XUA8UREROYE
// https://editor.p5js.org/codingtrain/sketches/SJcAeCpgE

let current;
let snowflake = [];

function setup() {
  createCanvas(600, 600, WEBGL);
  current = new Particle(width/2, 0);

}

function draw() {
  translate(0,0);
  //rotate(PI/6);
  background(0);
  

  let count = 0;
  while (!current.finished() && !current.intersects(snowflake)) {
    current.update();
    count++;
  }

  // If a particle doesn't move at all we're done
  // This is an exit condition not implemented in the video
  if (count == 1) {
    //noLoop();
    console.log('snowflake completed');
  }

  snowflake.push(current);
  current = new Particle(width/2, 0);

  for (let i = 0; i < 6; i++) {
    //rotate(PI/3);
    rotateZ((frameCount*0.005));
    current.show();
    for (let p of snowflake) {
      p.show();
    }

    push();
    scale(1, -1);
    current.show();
    for (let p of snowflake) {
      p.show();
    }
    
    pop();
  }
  
  
}