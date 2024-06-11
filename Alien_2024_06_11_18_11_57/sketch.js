let angle = 0;

function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  setGradient(0, 0, width, height, color(250, 150, 250), color(50, 150, 200));

  // Draw the alien
  drawAlien(255, 250);

  // Update and loop antenna animation
  angle += 0.05;
  if (angle > TWO_PI) {
    angle = 0;
  }
}

function drawAlien(x, y) {
  let antennaY = y - 85 + 5 * sin(angle);

  // Antenna
  stroke(255, 100, 255);
  strokeWeight(4);
  line(x, y - 55, x, antennaY);
  noStroke();
  fill(255, 100, 255);
  circle(x, antennaY, 12);

  // Head
  fill(0, 255, 150);
  ellipse(x, y, 120, 150);

  // Eyes
  fill(0);
  ellipse(x - 30, y - 10, 30, 50);
  ellipse(x + 30, y - 10, 30, 50);
  fill(255);
  ellipse(x - 30, y - 25, 12, 18);
  ellipse(x + 30, y - 25, 12, 18);

  // Body
  fill(0, 255, 150);
  rect(x - 45, y + 70, 90, 120, 20);

  // Arms
  fill(0, 255, 150);
  ellipse(x - 65, y + 110, 30, 80);
  ellipse(x + 65, y + 110, 30, 80);

  // Feet
  fill(0, 255, 150);
  ellipse(x - 35, y + 200, 50, 20);
  ellipse(x + 35, y + 200, 50, 20);

  // Triangle
  fill(255, 100, 255);
  triangle(x - 20, y + 50, x + 20, y + 50, x, y + 90);

  // Highlights and Shadows
  addHighlightsAndShadows(x, y);
}

function addHighlightsAndShadows(x, y) {
  // Highlights on head
  fill(255, 255, 255, 150);
  ellipse(x - 30, y - 30, 25, 15);
  ellipse(x + 20, y - 40, 20, 10);

  // Shadows on body
  fill(0, 0, 0, 50);
  ellipse(x, y + 130, 80, 20);
}

function setGradient(x, y, w, h, c1, c2) {
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x + w, i);
  }
}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}
