let playerBall;
let smallBalls = [];
let score = 0;

function setup() {
  createCanvas(800, 600);
  playerBall = new PlayerBall();
  for (let i = 0; i < 10; i++) {
    smallBalls.push(new SmallBall());
  }
}

function draw() {
  background(220);

  
  playerBall.move();
  playerBall.display();

 
  for (let i = smallBalls.length - 1; i >= 0; i--) {
    smallBalls[i].display();
    if (playerBall.checkCollision(smallBalls[i])) {
      smallBalls.splice(i, 1); 
      score++;
    }
  }

  // Display score
  fill(0);
  textSize(24);
  text('Score: ' + score, 10, 30);

  
  if (smallBalls.length === 0) {
    textSize(36);
    textAlign(CENTER, CENTER);
    text('You Win!', width / 2, height / 2);
    noLoop(); 
  }
}

class PlayerBall {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.r = 30;
  }

  move() {
    this.x = mouseX;
    this.y = mouseY;
  }

  display() {
    fill(50, 100, 250);
    noStroke();
    ellipse(this.x, this.y, this.r * 2);
  }

  checkCollision(smallBall) {
    let d = dist(this.x, this.y, smallBall.x, smallBall.y);
    return d < this.r + smallBall.r;
  }
}

class SmallBall {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.r = 15;
  }

  display() {
    fill(250, 50, 100);
    noStroke();
    ellipse(this.x, this.y, this.r * 2);
  }
}
