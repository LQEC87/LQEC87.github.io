let x,y;
let px,py;
let stepSize = 2;
let step = 1;
let numStep = 1;
let state = 0;
let turnCounter = 0;
let totalSteps;

function isPrime(value) {
  if (value==1) {return false;}
  for (let i = 2; i <=  sqrt(value); i++) {
    if (value % i == 0) {
      return false;
    }
  }
  return true;
}

function setup() {
  createCanvas(1000, 1000);
  background(0);
  
  const cols = width / stepSize;
  const rows = height / stepSize;
  totalSteps = cols * rows;
  
  x = width / 2;
  y = height / 2;
  px = x;
  py = y;
}

function draw() {
  //textSize(stepSize);
  //textAlign(CENTER,CENTER);
  //fill(255);
  stroke(255);
  if(isPrime(step)){
    square(x, y, stepSize);
  }
  //line(x,y,px,py);
  //px = x;
  //py = y;
  switch (state){
    case 0:
      x += stepSize;
      break;
    case 1:
      y -= stepSize;
      break;
    case 2:
      x -= stepSize;
      break;
    case 3:
      y += stepSize;
      break;
  }
  if (step % numStep == 0){
    state = (state+1)%4;
    turnCounter++;
    if (turnCounter%2==0){
      numStep++;
    }
  }
  step+=1;
  
  if(step > totalSteps){
    noLoop();
  }
  
  //frameRate();
}

function stepGauge(){
  document.getElementById("steps").innerHTML = "STEPS: " + step;
}
setInterval("stepGauge()",20);
