var d = 50;
var trails = [];

function setup() {
  createCanvas(600, 400);
  background(0);
  noStroke();
  mouseX = -d;
  mouseY = -d;
}

function draw() {
  background(0, 20); 

  var trail = {
    x: mouseX,
    y: mouseY,
    color: [random(255), random(255), random(255), 150]
  };
  trails.push(trail);

  for (var i = 0; i < trails.length; i++) {
    fill(trails[i].color);
    ellipse(trails[i].x, trails[i].y, d, d);
  }

  if (trails.length > 50) {
    trails.splice(0, 1);
  }
}



