var rectSize = 80;

function setup() {
  createCanvas(400, 400);
  background(0);
  noLoop();
}

function draw() {
  translate(rectSize / 2, rectSize / 2);

  for (var x = 0; x < width; x += rectSize) {
    for (var y = 0; y < height; y += rectSize) {
      push();
      translate(x, y);
      rotate(radians(45));

      fill(255);
      rectMode(CENTER);
      rect(0, 0, rectSize * 1.2, rectSize * 1.2);

      fill(0);
      rect(0, 0, rectSize * 0.8, rectSize * 0.8);

      fill(255);
      rect(0, 0, rectSize * 0.3, rectSize * 0.3);

      pop();
    }
  }
}
