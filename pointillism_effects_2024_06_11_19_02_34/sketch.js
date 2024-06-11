var img;

function preload() {
  img = loadImage("pink weather.jpg");
}

function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
}

function draw() {
  var x = random(width);
  var y = random(height);
  var c = img.get(floor(x), floor(y));

  fill(c[0], c[1], c[2], 50);
  ellipse(x, y, 30, 30);
}
