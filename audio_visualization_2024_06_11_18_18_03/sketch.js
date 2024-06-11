let mic, fft;
let numBars = 64;
let barWidth, barHeight;
let barSpacing = 2;
let particles = [];
let easing = 0.05;
let bgColor1, bgColor2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  barWidth = width / numBars - barSpacing;

  for (let i = 0; i < 100; i++) {
    particles.push(new Particle(random(width), random(height)));
  }

  bgColor1 = color(64, 224, 208);
  bgColor2 = color(25, 25, 112);
}

function draw() {
  setGradient(0, 0, width, height, bgColor1, bgColor2);

  for (let i = 0; i < particles.length; i++) {
    particles[i].display();
    particles[i].move();
  }

  let spectrum = fft.analyze();
  for (let i = 0; i < numBars; i++) {
    barHeight = map(spectrum[i], 0, 255, 0, height);
    let col = lerpColor(color('red'), color('violet'), i / numBars);
    drawGlowBar(i * (barWidth + barSpacing), height - barHeight, barWidth, barHeight, col);
  }
}

function drawGlowBar(x, y, w, h, col) {
  let glowSize = 10;
  for (let i = glowSize; i > 0; i--) {
    fill(col.levels[0], col.levels[1], col.levels[2], 25 * i);
    rect(x - i, y - i, w + 2 * i, h + 2 * i, 5);
  }
  fill(col);
  rect(x, y, w, h, 5);
}

function setGradient(x, y, w, h, c1, c2) {
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x + w, i);
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
    this.size = random(10, 30);
    this.targetSize = this.size;
    this.color = color(random(100, 255), random(100, 255), random(100, 255), random(50, 150));
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    this.size += (this.targetSize - this.size) * easing;

    if (this.x < 0 || this.x > width) {
      this.vx *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.vy *= -1;
    }

    if (random() < 0.01) {
      this.targetSize = random(10, 30);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  barWidth = width / numBars - barSpacing;
}
