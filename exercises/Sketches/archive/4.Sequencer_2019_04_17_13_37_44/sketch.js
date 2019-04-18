let steps = []
let index = 0
let t0;
let r0 = new Tone.JCReverb(5).connect(Tone.Master);
let d0 = new Tone.PingPongDelay("1n", 0.1).toMaster();


function setup() {
  createCanvas(600,600);
  noStroke();
  
  for (let i= 0; i < 8; i++) {
    steps[i] = i % 4;
  }
   console.log(steps);
  
    t0 = new Tone.MembraneSynth().chain(r0);
    t0.oscillator.type = 'sawtooth'
    t0.envelope.attack = 0.3;
    t0.envelope.decay = 0.2;
    t0.envelope.sustain = 0.1;
    t0.envelope.release = 5;
    t0.toMaster();
}

function draw() {
  background(220,255,158);
  
  
  push();
  translate(100,200)
  for(let i=0;i<8; i++) {
    if(i == index) {
      fill(0, 200, 190)
    }else 
      fill(255, 200, 215)
    rect(0,0,40,40)
    translate(50,0)
  }
  pop();
  
if (frameCount % 70 === 0) {
  index = index +1;
//  t0.triggerAttackRelease('E2', '8n')
  if(index === 8) {
    index=0;
  }
  triggerSound (steps[index])
}
}

function triggerSound(theIndex) {
  if(theIndex == 0) {
    t0.triggerAttackRelease('C4', '4n');
  } else if (theIndex == 1) {
    t0.triggerAttackRelease('E4', '16n');
      } else if (theIndex == 2) {
    t0.triggerAttackRelease('G4', '16n');
         } else if (theIndex == 3) {
    t0.triggerAttackRelease('B4', '16n');
        
    
  }
  
}  